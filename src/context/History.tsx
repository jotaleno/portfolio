"use client";

import { welcome } from "@/data/commands";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type Log = {
  command: string;
  output: string;
};

interface HistoryProviderProps extends PropsWithChildren {}

export type History = {
  logs: Log[];
  setLogs: Dispatch<SetStateAction<Log[]>>;
};

export const HistoryContext = createContext<History | null>(null);

export function HistoryProvider(props: HistoryProviderProps) {
  const [logs, setLogs] = useState<Log[]>([
    { output: welcome.output, command: welcome.command },
  ] as Log[]);

  return (
    <HistoryContext.Provider value={{ logs, setLogs }}>
      {props.children}
    </HistoryContext.Provider>
  );
}
