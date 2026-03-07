import { SectionHeading } from './sectionHeading';

type CoreStrengthsProps = {
  readonly skills: ReadonlyArray<string>;
  readonly delay?: number;
};

export const CoreStrengths = ({ skills, delay = 1400 }: CoreStrengthsProps) => (
  <section className="mb-16">
    <SectionHeading title="Core Strengths" delay={delay} />
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {skills.map((skill, index) => (
        <div
          key={skill}
          className="animate-in px-4 py-2.5 text-sm font-mono text-text-secondary bg-bg-card border border-border rounded-md transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_12px_var(--accent-glow)] cursor-default"
          style={{ animationDelay: `${delay + 100 + index * 50}ms` }}
        >
          {skill}
        </div>
      ))}
    </div>
  </section>
);
