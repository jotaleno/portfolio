import { HistoryContext } from "@/context/History";
import type { History } from "@/context/History";
import { useContext } from "react";

export function useHistoryContext(): History {
  const context = useContext(HistoryContext);

  if (!context) {
    throw new Error("History context is null");
  }

  return context;
}
