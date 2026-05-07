import type { Experience } from '@/types/cv';

type ExperienceCardProps = {
  readonly experience: Experience;
  readonly index: number;
};

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => (
  <article
    className="animate-in border-t border-border pt-8 first:border-t-0 first:pt-0"
    style={{ animationDelay: `${index * 90}ms` }}
  >
    <div className="mb-5 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
      <div>
        <h3
          className="text-2xl leading-tight tracking-[-0.015em] text-text-primary"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
        >
          {experience.company}
        </h3>
        <p className="mt-1 text-sm font-medium text-text-secondary">{experience.role}</p>
      </div>
      <span className="font-mono text-xs text-text-tertiary">{experience.period}</span>
    </div>

    <ul className="space-y-3">
      {experience.bullets.map((bullet) => (
        <li key={bullet} className="grid min-w-0 grid-cols-[0.8rem_1fr] gap-3 text-sm leading-relaxed text-text-secondary md:text-[0.95rem]">
          <span className="mt-[0.42rem] h-1 w-1 rounded-full bg-accent/70" />
          <span className="min-w-0">{bullet}</span>
        </li>
      ))}
    </ul>
  </article>
);
