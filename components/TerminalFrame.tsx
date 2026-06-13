import type { ReactNode } from "react";

type TerminalFrameProps = {
  title: string;
  status?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function TerminalFrame({
  title,
  status = "OK",
  children,
  className = "",
  id,
}: TerminalFrameProps) {
  return (
    <section id={id} className={`terminal-frame ${className}`}>
      <div className="terminal-titlebar">
        <span className="truncate">+-- {title} --+</span>
        <span className="terminal-status">[{status}]</span>
      </div>
      <div className="terminal-content">{children}</div>
    </section>
  );
}
