import { SectionHeading } from './sectionHeading';
import { ExperienceCard } from './experienceCard';
import type { Experience as ExperienceType, EarlierRole } from '@/types/cv';

type ExperienceProps = {
  readonly experience: ReadonlyArray<ExperienceType>;
  readonly earlierRoles: ReadonlyArray<EarlierRole>;
  readonly delay?: number;
};

export const Experience = ({ experience, earlierRoles }: ExperienceProps) => (
  <section className="mb-16">
    <SectionHeading title="Experience" />

    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div key={exp.company} className="relative">
          <div className="hidden md:block absolute left-[-24px] top-3 w-1.5 h-1.5 rounded-full bg-accent/60" />
          <ExperienceCard experience={exp} index={index} />
        </div>
      ))}

      <div className="relative pt-2">
        <div className="hidden md:block absolute left-[-24px] top-[14px] w-1.5 h-1.5 rounded-full bg-text-tertiary" />
        <div className="border-t border-border pt-4">
          <p className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-3">
            Earlier
          </p>
          <div className="space-y-2">
            {earlierRoles.map((role) => (
              <div key={role.title} className="flex flex-col sm:flex-row sm:justify-between gap-0.5 font-mono text-sm">
                <span className="text-text-secondary">{role.title}</span>
                <span className="text-text-tertiary text-xs">{role.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
