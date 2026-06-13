"use client";

import { FormEvent, useRef, useState } from "react";

const commands: Record<string, { message: string; target?: string }> = {
  help: {
    message: "AVAILABLE: about | experience | projects | skills | education | certificates | contact | resume | clear",
  },
  about: { message: "OPENING /ABOUT...", target: "about" },
  experience: { message: "OPENING /EXPERIENCE...", target: "experience" },
  projects: { message: "OPENING /PROJECTS...", target: "projects" },
  skills: { message: "OPENING /SKILLS...", target: "skills" },
  education: { message: "OPENING /EDUCATION...", target: "education" },
  certificates: { message: "OPENING /CERTIFICATES...", target: "certificates" },
  contact: { message: "OPENING /CONTACT...", target: "contact" },
  resume: { message: "DOWNLOADING RESUME..." },
};

export function CommandConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "TYPE 'help' TO LIST AVAILABLE COMMANDS.",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  function runCommand(rawCommand: string) {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      return;
    }

    const result = commands[command];

    if (!result) {
      setHistory((current) => [
        ...current,
        `meran@portfolio:~$ ${command}`,
        `[ERR] COMMAND NOT FOUND: ${command}. TYPE 'help'.`,
      ]);
      return;
    }

    setHistory((current) => [
      ...current,
      `meran@portfolio:~$ ${command}`,
      `[OK] ${result.message}`,
    ]);

    if (command === "resume") {
      const link = document.createElement("a");
      link.href = "/Meran-Alhudaithy-Resume.pdf";
      link.download = "Meran-Alhudaithy-Resume.pdf";
      link.click();
      return;
    }

    if (result.target) {
      document.getElementById(result.target)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(input);
    setInput("");
  }

  return (
    <div className="command-console" onClick={() => inputRef.current?.focus()}>
      <div className="command-output" aria-live="polite">
        {history.map((line, index) => (
          <p key={`${line}-${index}`} className={line.startsWith("[ERR]") ? "error-text" : ""}>
            {line}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="command-form">
        <label htmlFor="terminal-command" className="sr-only">
          Portfolio terminal command
        </label>
        <span aria-hidden="true">
          <span className="prompt-user">meran@portfolio</span>
          <span className="prompt-path">:~$</span>
        </span>
        <input
          ref={inputRef}
          id="terminal-command"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          aria-describedby="command-help"
        />
        <span className="block-cursor" aria-hidden="true" />
      </form>
      <p id="command-help" className="sr-only">
        Enter help to list available commands.
      </p>
    </div>
  );
}
