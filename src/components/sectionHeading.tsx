type SectionHeadingProps = {
  readonly title: string;
  readonly delay?: number;
};

export const SectionHeading = ({ title, delay }: SectionHeadingProps) => (
  <div
    className="mb-6"
    style={delay ? { animationDelay: `${delay}ms` } : undefined}
  >
    <h2
      className="text-2xl md:text-3xl animate-in"
      style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
    >
      {title}
    </h2>
  </div>
);
