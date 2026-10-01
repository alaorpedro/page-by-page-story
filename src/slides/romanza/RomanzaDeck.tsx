import type { ReactNode } from "react";
import { Slide02 } from "@/slides/Slide02";
import capa1 from "@/assets/romanza/capa-1.jpg";
import capa2 from "@/assets/romanza/capa-2.jpg";
import capa3 from "@/assets/romanza/capa-3.jpg";
import capa4 from "@/assets/romanza/capa-4.jpg";
import premMarli from "@/assets/romanza/prem-marli.jpg";
import premPatricia from "@/assets/romanza/prem-patricia.jpg";
import premVita from "@/assets/romanza/prem-vita.jpg";
import premCintia from "@/assets/romanza/prem-cintia.jpg";
import premAparecida from "@/assets/romanza/prem-aparecida.jpg";
import premMarta from "@/assets/romanza/prem-marta.jpg";
import {
  RzAgenda,
  RzArticle,
  RzCards,
  RzColumns,
  RzCover,
  RzDialog,
  RzDynamic,
  RzFlow,
  RzGallery,
  RzLadder,
  RzList,
  RzModule,
  RzPoster,
  RzQuestions,
  RzQuote,
  RzRules,
  RzStatement,
  RzThanks,
  RzTriggers,
} from "./RzKit";

/**
 * Treinamento da equipe Romanza — os quatro módulos num dia só, em até 2h.
 * Tempo-alvo: abertura 8' · M1 28' · M2 23' · M3 28' · M4 25' · encerramento 5'.
 * `module` marca o início de cada módulo (atalhos 1–4 na apresentação).
 */
export type DeckEntry = { id: string; title: string; node: ReactNode; module?: 1 | 2 | 3 | 4 };

export const ROMANZA_SLIDES: DeckEntry[] = [
  /* ---------------------------- Abertura ---------------------------- */
  { id: "capa", title: "Capa", node: <RzCover /> },
  { id: "apresentador", title: "Apresentador", node: <Slide02 /> },
  {
    id: "agenda",
    title: "Agenda do dia",
    node: (
      <RzAgenda
        title="Quatro módulos, **de dentro para fora**"
        footer="Primeiro quem atende, depois o atendimento, depois o dinheiro — e por último a carteira."
      />
    ),
  },
  {
    id: "regimento",
    title: "Por que um regimento",
    node: (
      <RzRules
        label="O Regimento Interno"
        title="Não é para decorar artigo. É para entender **o porquê** de cada regra."
        head={["O que tem no regimento", "Onde a gente trabalha hoje"]}
        rows={[
          ["Estrutura, jornada, conduta, apresentação e sigilo", "Módulo 1 · Estado"],
          ["Atendimento e pós-venda", "Módulo 2 · Condução"],
          ["Política comercial da consignação", "Módulo 3 · Regra e fechamento"],
          ["Benefícios, medidas disciplinares e vigência", "Módulo 4 · Carteira"],
        ]}
        note="Entra em vigor em [01/11/2026]. Cada colaboradora assina o termo de ciência."
      />
    ),
  },

  /* ---------------------------- Módulo 1 ---------------------------- */
  { id: "m1", title: "Módulo 1 · Estado", module: 1, node: <RzModule n={1} photo={capa1} /> },
  {
    id: "m1-transformar",
    title: "Vender é transformar",
    node: (
      <RzStatement
        label="Ideia central"
        bgLetter="E"
        text="A cliente decide quando o **estado emocional** dela muda."
        body="Da dúvida, da insegurança e da apatia para confiança, entusiasmo, pertencimento e clareza. A venda acontece quando ela se sente vista, segura e conduzida — não quando é convencida."
      />
    ),
  },
  {
    id: "m1-neutra",
    title: "Ninguém entra neutra",
    node: (
      <RzCards
        label="O que acontece no cérebro"
        title="Ninguém entra na loja **neutra**"
        cards={[
          ["Chega com", "Cansaço, pressa, comparação, medo de errar, vontade de resolver."],
          ["Cortisol e noradrenalina", "Alerta e tensão: o corpo procura alívio e resolução."],
          ["Chamado à ação", "Você cria uma tensão positiva — um caminho claro."],
          ["Decisão", "Dopamina, ocitocina e endorfina recompensam a escolha."],
        ]}
      />
    ),
  },
  {
    id: "m1-virada",
    title: "O clima também é química",
    node: (
      <RzCards
        label="A virada · para dentro da loja"
        tone="light"
        title="Fofoca e reclamação produzem o **mesmo cortisol** — na equipe"
        cards={[
          ["Manhã de queixa", "Quem passa a manhã reclamando não muda o estado de ninguém às duas da tarde."],
          ["Falar mal", "Do colega ou da chefia deixa todo mundo em alerta. Em alerta, ninguém acolhe."],
          ["Tom da loja", "Reclamação constante vira o clima — e a cliente sente antes de olhar a peça."],
          ["Na frente da cliente", "Problema interno discutido no balcão vira insegurança na cabeça dela."],
        ]}
      />
    ),
  },
  {
    id: "m1-clima",
    title: "Clima é atendimento",
    node: (
      <RzStatement
        label="Clima é atendimento"
        tone="light"
        bgLetter="C"
        text="O clima da loja faz parte do atendimento. A cliente percebe o estado de quem atende **antes de olhar a peça**."
        body="Por isso a convivência é responsabilidade de todas. E meta é compromisso que você assume — não cobrança que vem de fora."
      />
    ),
  },
  {
    id: "m1-autora",
    title: "Modo vítima × modo autora",
    node: (
      <RzColumns
        label="Diagnóstico"
        title="Modo vítima × **modo autora**"
        left={{
          head: "Modo vítima",
          items: ["“Essa cliente não compra.”", "“Esse mês é fraco.”", "“Ninguém me avisou.”", "“Isso não é comigo.”"],
        }}
        right={{
          head: "Modo autora",
          items: [
            "“O que eu consigo fazer com ela hoje?”",
            "“Quem da carteira eu ainda não chamei?”",
            "“Vou atrás de entender o processo.”",
            "“Deixa que eu resolvo.”",
          ],
        }}
      />
    ),
  },
  {
    id: "m1-conduta",
    title: "Art. 11 a 14 · Conduta",
    node: (
      <RzColumns
        label="Regimento · Art. 11 a 14"
        tone="light"
        title="O que se espera — e o que **não cabe** na Romanza"
        left={{
          head: "Não cabe",
          items: [
            "Ofensa, discriminação, assédio ou expor colegas e clientes.",
            "Assunto interno discutido na frente do público.",
            "Celular pessoal no atendimento: fica na bolsa, só no intervalo.",
            "Peça saindo sem registro; dado ou foto reservada divulgada.",
          ],
        }}
        right={{
          head: "Se espera",
          items: [
            "Respeito com colegas, clientes, revendedoras e fornecedores.",
            "Setor organizado; mercadoria e equipamento bem cuidados.",
            "Divergência levada à liderança, no lugar certo.",
            "Conhecer os produtos da sua função.",
          ],
        }}
      />
    ),
  },
  {
    id: "m1-imagem",
    title: "Sua imagem também atende",
    node: (
      <RzStatement
        label="Imagem pessoal"
        bgLetter="R"
        text="Antes da primeira palavra, a cliente **já leu você**."
        body="Não é sobre padrão de beleza, corpo ou estilo. É sobre cuidado — com você e com quem você recebe. Numa loja de moda, quem atende é a primeira vitrine da Romanza."
      />
    ),
  },
  {
    id: "m1-boas-praticas",
    title: "Boas práticas de apresentação",
    node: (
      <RzCards
        label="Imagem pessoal · boas práticas"
        title="Cuidado que **a cliente percebe**"
        cards={[
          ["Roupa", "Limpa, passada e confortável para o dia inteiro. Vestir a coleção mostra a peça em movimento."],
          ["Cabelo e mãos", "Arrumados do seu jeito. As mãos aparecem o tempo todo mostrando peça: unhas limpas e cuidadas."],
          ["Maquiagem, se você usa", "Leve e de dia: realça você sem disputar atenção com a peça. Pele cuidada já é o principal."],
          ["Perfume e higiene", "Perfume suave — a cliente prova roupa perto de você. Hálito e desodorante em dia."],
        ]}
      />
    ),
  },
  {
    id: "m1-art15",
    title: "Art. 15 · Uniforme",
    node: (
      <RzArticle
        art="Art. 15"
        title="Uniforme"
        quote="A empresa fornece **de duas a três blusas de uniforme por ano** para uso no trabalho. Não há exigência de crachá."
        after="Não existe um jeito certo de ser bonita. Existe o jeito profissional de se apresentar — e ele cabe em qualquer estilo, corpo e bolso."
      />
    ),
  },
  {
    id: "m1-setores",
    title: "Art. 4 a 10 · Setores e jornada",
    node: (
      <RzRules
        label="Regimento · Art. 4 a 10"
        title="Cada setor tem seu papel. **Cada dúvida tem endereço.**"
        head={["Setor", "Cuida de"]}
        rows={[
          ["Atendimento", "Recepção, peças, distribuição de coleções, orçamentos, WhatsApp e pós-venda"],
          ["Caixa", "Acertos, conferência de devoluções, tabela vigente e fechamento diário"],
          ["Comercial", "Carteira, captação de leads, análise de crédito, cobrança de praça e relatórios"],
          ["Financeiro", "Contas a pagar e receber, análise cadastral e inadimplência"],
        ]}
        note="Jornada: seg. a sex. 9h–18h e sáb. 9h–13h · ponto no relógio, nunca por outra pessoa · atraso acima de 10 min avisado antes · hora extra só autorizada."
      />
    ),
  },
  {
    id: "m1-dinamica",
    title: "Dinâmica · Carregada × leve",
    node: (
      <RzDynamic
        title="Carregada × leve"
        format="Em duplas"
        time="5 minutos"
        steps={[
          "Lembre um atendimento em que você chegou **carregada** — cansada, irritada, preocupada.",
          "Agora um em que chegou **leve**.",
          "O que mudou na cliente? E no resultado?",
          "Sem nome de cliente, sem nome de colega.",
        ]}
      />
    ),
  },

  /* ---------------------------- Módulo 2 ---------------------------- */
  { id: "m2", title: "Módulo 2 · Condução", module: 2, node: <RzModule n={2} photo={capa2} /> },
  {
    id: "m2-postura",
    title: "A postura da casa",
    node: (
      <RzStatement
        label="A postura da casa"
        tone="light"
        bgLetter="A"
        text="Quem conduz o atendimento é a equipe. **Não atenda para vender — entenda para atender.**"
      />
    ),
  },
  {
    id: "m2-agora",
    title: "O momento certo é agora",
    node: (
      <RzStatement
        label="Timing · Art. 16"
        bgLetter="9h"
        text="A cliente que mandou mensagem às 9h e recebeu resposta às 16h **já decidiu outra coisa**."
        body="Quem divide o atendimento presencial e o digital é a liderança do Atendimento. Prazo para responder mensagens: [30 minutos durante o expediente]."
      />
    ),
  },
  {
    id: "m2-fluxo",
    title: "O fluxo do atendimento",
    node: (
      <RzFlow
        label="O fluxo · Art. 17"
        title="Todo atendimento passa por **quatro etapas**"
        steps={[
          "Qualificar: origem, histórico, região, interesse real",
          "Apresentar as peças",
          "Argumentar e responder objeções",
          "Fechar com um próximo passo concreto",
        ]}
        note="Onde a gente mais pula etapa: da apresentação direto para o fechamento — e a argumentação fica pelo caminho. E sempre sem informação falsa e sem pressão indevida."
      />
    ),
  },
  {
    id: "m2-direcao",
    title: "Resposta com direção",
    node: (
      <RzColumns
        label="Simulação · “tem novidade?”"
        title="Toda resposta termina com **um convite**"
        left={{
          head: "Sem direção",
          items: ["“Tem sim!”", "“Chegou bastante coisa.”", "“Passa aqui quando puder.”"],
        }}
        right={{
          head: "Com direção",
          items: [
            "“Tem sim! A coleção nova chegou ontem.”",
            "“Te mando as fotos agora.”",
            "“Separo seu cesto para quinta de manhã. Fica bom?”",
          ],
        }}
      />
    ),
  },
  {
    id: "m2-firmeza",
    title: "Firmeza com educação",
    node: (
      <RzColumns
        label="Postura"
        tone="light"
        title="Firmeza **com** educação — as duas juntas"
        left={{
          head: "Educação",
          items: ["Ouvir até o fim.", "Validar a dúvida dela.", "Buscar a solução em que nenhum lado sai prejudicado."],
        }}
        right={{
          head: "Firmeza",
          items: ["Falar a regra com clareza.", "Não pedir desculpa pela regra.", "Conduzir o próximo passo."],
        }}
      />
    ),
  },
  {
    id: "m2-art18",
    title: "Art. 18 · Condição se diz antes",
    node: (
      <RzArticle
        art="Art. 18"
        title="Condição se diz antes"
        quote="As condições de consignação e acerto são informadas à revendedora **antes da retirada da mercadoria**."
        after="Quem ouve a regra no primeiro dia aceita. Quem ouve na hora do acerto sente que é contra ela."
      />
    ),
  },
  {
    id: "m2-posvenda",
    title: "Pré e pós-venda",
    node: (
      <RzCards
        label="Pré e pós-venda · Art. 18 e 19"
        title="O atendimento **não termina na sacola**"
        cards={[
          ["Pré-venda", "Preparar a escolha: fotos, cesto separado, horário marcado."],
          ["Durante o ciclo", "Novidades toda semana, acompanhar o ciclo, perguntar como está vendendo."],
          ["Pouca mercadoria", "Chamar para buscar mais antes de ela parar."],
          ["Sumiu", "Contato ativo e fotos. É o pós-venda que sustenta a consignação."],
        ]}
      />
    ),
  },
  {
    id: "m2-dinamica",
    title: "Dinâmica · Trio de atendimento",
    node: (
      <RzDynamic
        title="Cliente, atendente, observadora"
        format="Em trios"
        time="6 minutos"
        steps={[
          "Uma faz a cliente, uma atende, uma observa.",
          "Cenário: a revendedora pergunta pelo WhatsApp se “tem novidade”.",
          "A observadora confere: **qualificou? argumentou? terminou com convite?**",
          "Duas rodadas, trocando os papéis.",
        ]}
      />
    ),
  },

  /* ---------------------------- Módulo 3 ---------------------------- */
  { id: "m3", title: "Módulo 3 · Regra e fechamento", module: 3, node: <RzModule n={3} photo={capa3} /> },
  {
    id: "m3-coleta",
    title: "Coleta · As frases que vocês ouvem",
    node: (
      <RzDynamic
        label="Ao vivo"
        title="As frases que vocês mais ouvem"
        format="Todas"
        time="3 minutos"
        steps={[
          "Cada uma fala **uma** frase que ouve no acerto, no parcelamento ou na devolução.",
          "A gente anota todas no quadro.",
          "O resto do módulo responde a elas.",
        ]}
      />
    ),
  },
  {
    id: "m3-julius",
    title: "Objeção clássica",
    node: <RzQuote label="A desculpa clássica" quote="Se eu não comprar nada, o desconto é maior." author="Julius" />,
  },
  {
    id: "m3-caro",
    title: "Caro em relação a quê?",
    node: (
      <RzQuestions
        label="Quebra de objeção"
        questions={[
          "Caro em relação a quê?",
          "Quem não pega mercadoria não economiza — **deixa de faturar**.",
        ]}
      />
    ),
  },
  {
    id: "m3-crencas",
    title: "Crenças que travam",
    node: (
      <RzColumns
        label="Crenças que travam a venda"
        title="O que trava — dos **dois lados** do balcão"
        left={{
          head: "Da cliente",
          items: ["“Está caro.”", "“Não é o momento.”", "“Preciso pensar.”", "“Já tentei e não deu certo.”"],
        }}
        right={{
          head: "De quem vende",
          items: ["Autoimagem", "Dinheiro", "**Rejeição**", "Produto e cliente"],
        }}
      />
    ),
  },
  {
    id: "m3-rejeicao",
    title: "Ninguém quer dizer não",
    node: (
      <RzStatement
        label="O centro do módulo"
        bgLetter="R"
        text="Ninguém quer ser a pessoa que **disse não**."
        body="Quando a regra não é cumprida, quase nunca é dúvida sobre ela. É rejeição: o medo de desagradar. Por isso a vontade de dizer “vou ver se dá” — para o não vir de outra pessoa."
      />
    ),
  },
  {
    id: "m3-art21",
    title: "Art. 21 · Exceção não se promete",
    node: (
      <RzArticle
        art="Art. 21"
        title="Exceção não se promete"
        quote="Pedidos de exceção vão para a direção pelo canal interno. **Ninguém promete condição diferente antes da autorização.**"
        after="Você aplica a regra. Se a revendedora pedir exceção, você encaminha e responde só com a decisão da direção — nunca com “vou ver se dá”."
      />
    ),
  },
  {
    id: "m3-regras",
    title: "Art. 20 · A regra e o porquê",
    node: (
      <RzRules
        label="Política comercial · Art. 20"
        title="A regra e **o porquê dela**"
        head={["Regra", "Por que existe"]}
        rows={[
          ["Acerto pelo valor integral devido · sem fiado", "Metade vira dívida sem prazo; a loja vira banco sem garantia"],
          ["Parcelamento só pela tabela vigente, que fica em cada caixa", "A tabela é igual para todas; condição diferente, só pela direção"],
          ["Devolução com conferência presencial ou procedimento aprovado [transporte a definir]", "Sem conferência, abre brecha para o acerto não ser pago"],
          ["Mínimo de [R$ 300] por orçamento", "Abaixo disso o ciclo não se paga"],
          ["Mínimo de [R$ 2.000] para abertura e nova retirada", "Mercadoria parada é faturamento parado"],
          ["Cobrança de praça só pelos critérios escritos", "O deslocamento tem custo"],
        ]}
        note="Art. 23 · A direção revisa tabela e mínimos [periodicamente] e avisa a equipe com antecedência — nunca numa conversa no balcão."
      />
    ),
  },
  {
    id: "m3-dialogo",
    title: "Ela diz · você responde",
    node: (
      <RzDialog
        label="Simulação"
        title="Ela diz · você responde"
        pairs={[
          [
            "“Posso pagar metade agora e o resto semana que vem?”",
            "“O acerto é sempre pelo valor integral, é assim com todas. Vamos ver juntas como fechar hoje dentro da tabela?”",
          ],
          [
            "“Parcela em mais vezes pra mim?”",
            "“A tabela é esta e vale pra todo mundo. Em quantas vezes dentro dela fica melhor pra você?”",
          ],
          [
            "“Mando a sacola pelo motoboy?”",
            "“Devolução precisa de conferência: a gente faz aqui, na sua frente, e isso protege o seu acerto. Que dia você passa?”",
          ],
          [
            "“Pergunta lá no financeiro se pode?”",
            "“Isso eu não posso te prometer. Levo seu pedido pra direção e te passo a resposta oficial. Dentro da regra, hoje eu consigo…”",
          ],
        ]}
      />
    ),
  },
  {
    id: "m3-receber",
    title: "Fechar é receber",
    node: (
      <RzStatement
        label="Fechamento"
        tone="light"
        bgLetter="$"
        text="Fechar a venda é **receber o acerto**."
        body="Não é só entregar a mercadoria: fechamento que não recebe prejudica a própria vendedora. Consignação sem acompanhamento é mercadoria emprestada."
      />
    ),
  },
  {
    id: "m3-dinamica",
    title: "Dinâmica · Roda de objeções",
    node: (
      <RzDynamic
        title="Roda de objeções"
        format="Todas"
        time="6 minutos"
        steps={[
          "Cada uma pega uma frase do quadro.",
          "Um minuto para responder em voz alta.",
          "O grupo avalia: **manteve a regra? manteve a cliente?**",
          "Só vale se as duas respostas forem sim.",
        ]}
      />
    ),
  },

  /* ---------------------------- Módulo 4 ---------------------------- */
  { id: "m4", title: "Módulo 4 · Carteira", module: 4, node: <RzModule n={4} photo={capa4} /> },
  {
    id: "m4-giro",
    title: "A lógica do giro",
    node: (
      <RzList
        label="A lógica do giro"
        bgLetter="G"
        title="Quanto mais rápido vende, **mais rápido volta o faturamento**"
        items={[
          "Todo mês: tirar o alocado do mês seguinte e conferir quanto cada cliente tem em mãos.",
          "Pouca mercadoria? Chamar para buscar mais. **Volume na mão dela é capacidade de venda instalada.**",
          "Distribuir para quem vai fechar dentro do mês.",
        ]}
      />
    ),
  },
  {
    id: "m4-distribuicao",
    title: "Distribuição organizada",
    node: (
      <RzFlow
        label="Distribuição · Art. 19"
        title="Coleção nova **tem ritual**"
        steps={[
          "Novidades informadas às revendedoras toda semana",
          "O Comercial avisa a coleção com antecedência",
          "Horários definidos para a escolha",
          "Peças separadas e identificadas para cada uma",
        ]}
      />
    ),
  },
  {
    id: "m4-carteira",
    title: "Quem é quem na carteira",
    node: (
      <RzCards
        label="Qualificar a carteira"
        tone="light"
        title="Quem é quem **na sua carteira**"
        cards={[
          ["Girando bem", "Atenção especial. Cliente nova com perfil de venda entra nas tops."],
          ["Pouca mercadoria", "Chamar para buscar mais antes que ela pare."],
          ["Sumiu", "Contato ativo e fotos das novidades."],
          ["Todo começo de mês", "Relatório das melhores vendedoras com a Luana."],
        ]}
      />
    ),
  },
  {
    id: "m4-gatilhos",
    title: "Seis gatilhos",
    node: (
      <RzTriggers
        items={[
          ["Pertencimento", "O grupo das tops é recompensa visível.", "Com esse resultado você já está no nível das tops."],
          ["Reciprocidade", "Mercadoria boa primeiro para quem vende.", "Separei essas peças pensando nas suas clientes."],
          ["Compromisso", "Retomar o volume que ela mesma declarou.", "Você queria chegar a tanto. Falta pouco — vamos completar?"],
          ["Afeição", "O pós-venda sustentado no ciclo.", "E aquela cliente sua que amou o vestido, voltou?"],
          ["Aprovação social", "Resultado real de outra revendedora.", "Olha quem foi premiada no ciclo — dá pra você chegar lá."],
          ["Escassez", "Só quando é real (Art. 23).", "Essa estampa veio pouca. Quer que eu separe a sua?"],
        ]}
      />
    ),
  },
  {
    id: "m4-premiacao",
    title: "Aprovação social · premiação",
    node: (
      <RzGallery
        label="Aprovação social"
        title="Resultado real **move mais que meta**"
        lead="O relatório das melhores vendedoras é prova social — não ranking de cobrança."
        photos={[
          [premMarli, "Marli"],
          [premPatricia, "Patrícia"],
          [premVita, "Vita"],
          [premCintia, "Cíntia"],
          [premAparecida, "Maria Aparecida"],
          [premMarta, "Marta"],
        ]}
      />
    ),
  },
  {
    id: "m4-beneficios",
    title: "Art. 24 e 25 · Benefícios",
    node: (
      <RzRules
        label="Regimento · Art. 24 e 25"
        tone="light"
        title="O outro lado do regimento: **o que a Romanza oferece**"
        head={["Benefício", "Condição"]}
        rows={[
          ["Vale-transporte", "Quando devido, conforme a lei"],
          ["[Vale-alimentação], [comissões] e [premiações]", "Se houver, conforme política escrita"],
          ["Desconto de 30% em peças", "Após 90 dias de casa · até R$ 300/mês · registrado por outra colega"],
          ["Coleção nova com desconto", "Só 15 dias após o lançamento · em folha em até 3 parcelas, com autorização"],
        ]}
      />
    ),
  },
  {
    id: "m4-medidas",
    title: "Art. 26 e 27 · Medidas disciplinares",
    node: (
      <RzLadder
        label="Regimento · Art. 26 e 27"
        title="Individual, proporcional e **sempre reservada**"
        steps={[
          ["Orientação", "Conversa para corrigir o rumo."],
          ["Advertência", "Registro formal do fato."],
          ["Suspensão", "Dentro do limite legal."],
          ["Justa causa", "Só nas hipóteses legais comprovadas."],
        ]}
        note="Cada caso é apurado individualmente, sem punição automática. A medida é comunicada em conversa reservada, com registro dos fatos — e você apresenta a sua versão."
      />
    ),
  },

  /* -------------------------- Encerramento -------------------------- */
  {
    id: "depois",
    title: "Depois de hoje",
    node: (
      <RzList
        label="Depois de hoje"
        bgLetter="→"
        title="O que cada uma **leva daqui**"
        items={[
          "**Plano da carteira:** marcar cada cliente como girando, pouca mercadoria, sumiu ou perfil de top — e a próxima ação para cada grupo.",
          "**Aplicar as regras** com as cinco clientes mais difíceis e anotar onde ainda houve recuo.",
          "**Revisão** na primeira reunião de equipe depois do treinamento.",
        ]}
        note="Regimento em vigor a partir de [01/11/2026] · termo de ciência assinado por todas."
      />
    ),
  },
  {
    id: "recap",
    title: "Recapitulação",
    node: <RzAgenda label="O que levamos" title="Estado, condução, regra e **carteira**" />,
  },
  {
    id: "poster",
    title: "Não atenda para vender",
    node: <RzPoster label="Para lembrar" before="Não atenda para vender." highlight="Entenda" after="para atender." />,
  },
  { id: "obrigado", title: "Obrigado", node: <RzThanks /> },
];
