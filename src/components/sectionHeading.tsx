type SectionHeadingProps = {
  readonly title: string;
  readonly delay?: number;
};

export const SectionHeading = ({ title, delay }: SectionHeadingProps) => (
  <div
    className="mb-7 flex min-w-0 items-baseline gap-4"
    style={delay ? { animationDelay: `${delay}ms` } : undefined}
  >
    <h2
      className="animate-in text-3xl leading-none tracking-[-0.02em] text-text-primary md:text-4xl"
      style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
    >
      {title}
    </h2>
    <div className="hidden h-px min-w-0 flex-1 bg-gradient-to-r from-border-hover via-border to-transparent sm:block" />
  </div>
);
