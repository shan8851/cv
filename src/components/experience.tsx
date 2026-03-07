import { SectionHeading } from './sectionHeading';
import { ExperienceCard } from './experienceCard';
import type { Experience as ExperienceType, EarlierRole } from '@/types/cv';

type ExperienceProps = {
  readonly experience: ReadonlyArray<ExperienceType>;
  readonly earlierRoles: ReadonlyArray<EarlierRole>;
  readonly delay?: number;
};

export const Experience = ({ experience, earlierRoles, delay = 1900 }: ExperienceProps) => (
  <section className="mb-16">
    <SectionHeading title="Experience" delay={delay} />

    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border-accent" />

      <div className="space-y-6 md:pl-8">
        {experience.map((exp, index) => (
          <div key={exp.company} className="relative">
            {/* Timeline dot */}
            <div className="hidden md:block absolute -left-8 top-8 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)] -translate-x-[3px]" />
            <ExperienceCard
              experience={exp}
              delay={delay + 100 + index * 150}
            />
          </div>
        ))}

        {/* Earlier Roles */}
        <div
          className="animate-in relative bg-bg-card border border-border rounded-lg p-6"
          style={{ animationDelay: `${delay + 100 + experience.length * 150}ms` }}
        >
          <div className="hidden md:block absolute -left-8 top-6 w-2 h-2 rounded-full bg-text-comment -translate-x-[3px]" />
          <h3 className="text-text-secondary font-mono text-sm mb-3 uppercase tracking-wider">Earlier Roles</h3>
          <div className="space-y-2">
            {earlierRoles.map((role) => (
              <div key={role.title} className="flex flex-col sm:flex-row sm:justify-between gap-1 font-mono text-sm">
                <span className="text-text-primary">{role.title}</span>
                <span className="text-text-comment">{role.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
