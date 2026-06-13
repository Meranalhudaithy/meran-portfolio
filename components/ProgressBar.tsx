type ProgressBarProps = {
  label: string;
  value: number;
};

export function ProgressBar({ label, value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(10, value));
  const filled = "█".repeat(safeValue);
  const empty = "░".repeat(10 - safeValue);

  return (
    <div className="progress-row">
      <span className="progress-label">{label.padEnd(20, ".")}</span>
      <span className="progress-track" aria-label={`${label} capability signal ${safeValue} out of 10`}>
        [{filled}
        <span className="progress-empty">{empty}</span>]
      </span>
    </div>
  );
}
