"use client";

import { Input } from "./Input";
import { useHistoryContext } from "@/hooks/HistoryContext";
import { Log } from "./Log";

export function Terminal() {
  const { logs } = useHistoryContext();

  return (
    <div className="p-6 bg-slate-800 h-full border-2 rounded">
      {logs.map((log, index) => {
        return (
          <Log
            key={index}
            username="jotaleno"
            hostname="devops"
            command={log.command}
            output={log.output}
          />
        );
      })}
      <Input username="jotaleno" hostname="devops" />
    </div>
  );
}
