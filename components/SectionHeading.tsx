type SectionHeadingProps = {
  command: string;
  title: string;
  description?: string;
};

export function SectionHeading({ command, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="prompt-line" aria-hidden="true">
        <span className="prompt-user">meran@portfolio</span>
        <span className="prompt-path">:~$</span> {command}
      </p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
      <div className="ascii-divider" aria-hidden="true">
        ================================================================================
      </div>
    </div>
  );
}
