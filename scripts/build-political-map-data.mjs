import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const spreadsheetPath =
  process.argv[2] ?? "/Users/alaorpedro/Downloads/votacao_completa_cobra_reporter_2022.xlsx";
const geoJsonPath = process.argv[3] ?? "/tmp/parana-municipios.geojson";
const municipalitiesPath = process.argv[4] ?? "/tmp/parana-municipios.json";
const populationPath = process.argv[5] ?? "/tmp/pr-populacao-2022.json";
const outputPath = resolve("src/data/parana-votes-2022.json");

function decodeXml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
}

const sheetXml = execFileSync("unzip", ["-p", spreadsheetPath, "xl/worksheets/sheet1.xml"], {
  encoding: "utf8",
});

const voteRows = [];
for (const rowMatch of sheetXml.matchAll(/<row r="(\d+)"[^>]*>(.*?)<\/row>/gs)) {
  const rowNumber = Number(rowMatch[1]);
  if (rowNumber < 5 || rowNumber >= 295) continue;

  const row = rowMatch[2];
  const nameMatch = row.match(/<c r="A\d+"[^>]*>.*?<t>(.*?)<\/t>.*?<\/c>/s);
  const votesMatch = row.match(/<c r="B\d+"[^>]*>.*?<v>(.*?)<\/v>.*?<\/c>/s);
  if (!nameMatch || !votesMatch) continue;

  voteRows.push({
    name: decodeXml(nameMatch[1]),
    votes: Number(votesMatch[1]),
  });
}

const municipalityList = JSON.parse(readFileSync(municipalitiesPath, "utf8"));
const populationData = JSON.parse(readFileSync(populationPath, "utf8"));
const populationByCode = new Map(
  populationData[0].resultados[0].series.map((item) => [
    item.localidade.id,
    Number(item.serie["2022"]),
  ]),
);
const namesByCode = new Map(
  municipalityList.map((municipality) => [
    String(municipality.id),
    {
      name: municipality.nome,
      normalizedName: normalize(municipality.nome),
      region: municipality["regiao-imediata"]?.nome ?? "",
      intermediateRegion: municipality["regiao-imediata"]?.["regiao-intermediaria"]?.nome ?? "",
    },
  ]),
);
const votesByName = new Map(voteRows.map((row) => [normalize(row.name), row]));

const geoJson = JSON.parse(readFileSync(geoJsonPath, "utf8"));
const features = geoJson.features.map((feature) => {
  const municipality = namesByCode.get(String(feature.properties.codarea));
  const vote = municipality ? votesByName.get(municipality.normalizedName) : undefined;

  return {
    type: "Feature",
    geometry: feature.geometry,
    properties: {
      code: feature.properties.codarea,
      name: municipality?.name ?? feature.properties.codarea,
      region: municipality?.region ?? "",
      intermediateRegion: municipality?.intermediateRegion ?? "",
      population: populationByCode.get(String(feature.properties.codarea)) ?? 0,
      votes: vote?.votes ?? 0,
      hasData: Boolean(vote),
    },
  };
});

const officialNames = new Set(
  [...namesByCode.values()].map((municipality) => municipality.normalizedName),
);
const unmatched = voteRows.filter((row) => !officialNames.has(normalize(row.name)));
const matchedVotes = features.reduce((sum, feature) => sum + feature.properties.votes, 0);
const spreadsheetVotes = voteRows.reduce((sum, row) => sum + row.votes, 0);

writeFileSync(
  outputPath,
  `${JSON.stringify({
    type: "FeatureCollection",
    source: "IBGE + planilha votacao_completa_cobra_reporter_2022.xlsx",
    summary: {
      spreadsheetRows: voteRows.length,
      matchedMunicipalities: features.filter((feature) => feature.properties.hasData).length,
      unmatchedRows: unmatched.length,
      matchedVotes,
      spreadsheetVotes,
    },
    features,
  })}\n`,
);

console.log(
  JSON.stringify(
    {
      outputPath,
      spreadsheetRows: voteRows.length,
      matchedMunicipalities: features.filter((feature) => feature.properties.hasData).length,
      unmatchedRows: unmatched,
      matchedVotes,
      spreadsheetVotes,
    },
    null,
    2,
  ),
);
