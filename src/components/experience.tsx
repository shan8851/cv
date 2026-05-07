import { ExperienceCard } from './experienceCard';
import { SectionHeading } from './sectionHeading';

import type { EarlierRole, Experience as ExperienceType } from '@/types/cv';

type ExperienceProps = {
  readonly experience: ReadonlyArray<ExperienceType>;
  readonly earlierRoles: ReadonlyArray<EarlierRole>;
  readonly delay?: number;
};

export const Experience = ({ experience, earlierRoles }: ExperienceProps) => (
  <section className="mb-20">
    <SectionHeading title="Experience" />

    <div className="space-y-10">
      {experience.map((exp, index) => (
        <ExperienceCard key={exp.company} experience={exp} index={index} />
      ))}

      <div className="animate-in border-t border-border pt-6">
        <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-text-tertiary">
          Earlier roles
        </p>
        <div className="space-y-2.5">
          {earlierRoles.map((role) => (
            <div key={role.title} className="grid gap-0.5 text-sm sm:grid-cols-[1fr_auto] sm:items-baseline">
              <span className="text-text-secondary">{role.title}</span>
              <span className="font-mono text-xs text-text-tertiary">{role.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
