import { Log } from "@/context/History";
import * as bin from "./bin";

export function shell(
  command: string,
  addToHistory: (log: Log) => void,
  clearHistory: () => void,
) {
  if (command === "clear") {
    clearHistory();
  } else if (command === "") {
    addToHistory({
      command,
      output: "",
    });
  } else if (Object.keys(bin).indexOf(command) == -1) {
    addToHistory({
      command,
      output: `zsh: command not found: ${command}. Type 'help' for available commands`,
    });
  } else {
    const output = (bin as any)[command]();

    addToHistory({ command, output });
  }
}

export function hasCommand(command: string): boolean {
  if (Object.keys(bin).indexOf(command) == -1) {
    return false;
  } else {
    return true;
  }
}
