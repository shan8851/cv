type SummaryProps = {
  readonly text: string;
  readonly delay?: number;
};

export const Summary = ({ text }: SummaryProps) => (
  <section className="mb-16">
    <p className="text-base md:text-lg leading-relaxed text-text-primary animate-in">
      {text}
    </p>
  </section>
);
