import type { Experience } from '@/types/cv';

type ExperienceCardProps = {
  readonly experience: Experience;
  readonly delay?: number;
};

export const ExperienceCard = ({ experience, delay = 0 }: ExperienceCardProps) => (
  <div
    className="animate-in relative bg-bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:border-border-accent hover:translate-y-[-2px] hover:shadow-[0_4px_24px_var(--accent-glow)]"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
      <div>
        <h3 className="text-accent font-bold text-lg font-mono">{experience.company}</h3>
        <p className="text-text-primary text-sm font-mono">{experience.role}</p>
      </div>
      <span className="text-text-comment text-xs font-mono shrink-0">{experience.period}</span>
    </div>

    <ul className="space-y-2.5">
      {experience.bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3 text-sm font-mono leading-relaxed">
          <span className="text-accent shrink-0 mt-0.5">▹</span>
          <span className="text-text-primary">{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);
