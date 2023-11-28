"use client";

import { Input } from "./Input";
import { useHistoryContext } from "@/hooks/HistoryContext";
import { Log } from "./Log";

interface TerminalProps {
  username: string;
  hostname: string;
}

export function Terminal(props: TerminalProps) {
  const { logs } = useHistoryContext();

  return (
    <div className="p-6 bg-slate-800 h-full border-2 rounded overflow-y-scroll">
      {logs.map((log, index) => {
        return (
          <Log
            key={index}
            username={props.username}
            hostname={props.hostname}
            command={log.command}
            output={log.output}
          />
        );
      })}
      <Input username={props.username} hostname={props.hostname} />
    </div>
  );
}
