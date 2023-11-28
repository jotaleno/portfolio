import { Prompt } from "./Prompt";
import { useHistoryContext } from "@/hooks/HistoryContext";

interface HistoryProps {
  username: string;
  hostname: string;
}

export function History(props: HistoryProps) {
  const { history } = useHistoryContext();

  return (
    <div>
      {history.map((log, index) => {
        return (
          <div key={index}>
            <div className="flex">
              <Prompt username={props.username} hostname={props.hostname} />
              <span className="w-full text-white ">{log.command}</span>
            </div>

            <span className="text-white whitespace-pre-wrap">{log.output}</span>
          </div>
        );
      })}
    </div>
  );
}
