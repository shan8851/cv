import type { Experience } from '@/types/cv';

type ExperienceCardProps = {
  readonly experience: Experience;
  readonly index: number;
};

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => (
  <article
    className="animate-in group"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
      <div>
        <h3
          className="text-xl text-text-primary"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
        >
          {experience.company}
        </h3>
        <p className="text-sm font-mono text-text-secondary">{experience.role}</p>
      </div>
      <span className="text-xs font-mono text-text-tertiary shrink-0">{experience.period}</span>
    </div>

    <ul className="space-y-2">
      {experience.bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3 text-sm font-mono leading-relaxed">
          <span className="text-accent/60 shrink-0 mt-1">·</span>
          <span className="text-text-secondary">{bullet}</span>
        </li>
      ))}
    </ul>
  </article>
);
