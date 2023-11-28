import { useHistoryContext } from "@/hooks/HistoryContext";

const commands = new Map<string, Function>([
  ["about", command_about],
  ["clear", command_clear],
  ["ls", command_ls],
]);

function command_about(): string {
  const output = `My name is João Heleno, I'm a DevOps Engineer that lives inside the Linux Terminal, duh..
Oh.. I also enjoy coding and exploring new technologies on the spare times. 
Press 'help' to list all the available commands to navigate through this Shell.`;

  return output;
}

function command_clear(): string {
  return "clear";
}

function command_ls(): string {
  return "about cv me etc";
}

export function hasCommand(command: string): boolean {
  return commands.has(command);
}

export function executeCommand(command: string): string {
  if (hasCommand(command)) {
    const cmd = commands.get(command)!;
    return cmd();
  } else {
    return `zsh: command not found: ${command}. Type 'help' for available commands`;
  }
}
