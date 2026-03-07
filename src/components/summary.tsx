type SummaryProps = {
  readonly text: string;
  readonly delay?: number;
};

export const Summary = ({ text, delay = 1200 }: SummaryProps) => (
  <section className="mb-16">
    <div
      className="animate-in font-mono text-sm text-text-comment mb-3"
      style={{ animationDelay: `${delay}ms` }}
    >
      {'/* ── About ─────────────────────────── */'}
    </div>
    <div
      className="animate-in flex gap-3"
      style={{ animationDelay: `${delay + 100}ms` }}
    >
      <span className="text-text-comment font-mono text-lg shrink-0">{'>'}</span>
      <p className="text-text-primary text-base md:text-lg leading-relaxed font-mono">
        {text}
        <span
          className="inline-block w-2 h-5 bg-accent ml-1 align-middle"
          style={{ animation: 'blink 1s step-end infinite' }}
        />
      </p>
    </div>
  </section>
);
