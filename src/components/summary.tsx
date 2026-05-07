type SummaryProps = {
  readonly text: string;
  readonly delay?: number;
};

export const Summary = ({ text }: SummaryProps) => (
  <section className="mb-20 animate-in">
    <p className="min-w-0 max-w-3xl text-lg leading-[1.65] text-text-primary sm:text-xl md:text-2xl md:leading-[1.55]">
      {text}
    </p>
  </section>
);
