"use client";

import { about } from "@/utils/bin";
import { PropsWithChildren, createContext, useState } from "react";

export type Log = {
  command: string;
  output: string;
};

interface HistoryProviderProps extends PropsWithChildren {}

export type History = {
  history: Log[];
  addToHistory: (log: Log) => void;
  clearHistory: () => void;
};

export const HistoryContext = createContext<History | null>(null);

export function HistoryProvider(props: HistoryProviderProps) {
  const [history, setHistory] = useState<Log[]>([
    { command: "about", output: about() },
  ] as Log[]);

  function clearHistory(): void {
    setHistory([]);
  }

  function addToHistory(log: Log): void {
    setHistory([...history, log]);
  }

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {props.children}
    </HistoryContext.Provider>
  );
}
