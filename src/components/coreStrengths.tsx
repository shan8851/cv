import { SectionHeading } from './sectionHeading';

type CoreStrengthsProps = {
  readonly skills: ReadonlyArray<string>;
  readonly delay?: number;
};

export const CoreStrengths = ({ skills }: CoreStrengthsProps) => (
  <section className="mb-16">
    <SectionHeading title="Core Strengths" />
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={skill}
          className="animate-in px-3 py-1.5 text-xs font-mono text-text-secondary bg-bg-surface border border-border rounded-full transition-all duration-200 hover:border-border-hover hover:text-text-primary"
          style={{ animationDelay: `${index * 30}ms` }}
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);
