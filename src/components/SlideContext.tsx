import { createContext, useContext } from "react";

export type SlideMeta = { index: number; total: number };

export const SlideContext = createContext<SlideMeta>({ index: 1, total: 1 });
export const useSlideMeta = () => useContext(SlideContext);
