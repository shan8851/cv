import { ArrowUpRight } from 'lucide-react';

import { SectionHeading } from './sectionHeading';

import type { ToolingWork as ToolingWorkType } from '@/types/cv';

type ToolingWorkProps = {
  readonly work: ReadonlyArray<ToolingWorkType>;
};

export const ToolingWork = ({ work }: ToolingWorkProps) => (
  <section className="mb-20">
    <SectionHeading title="AI Workflows & Selected Tooling" />

    <div className="space-y-7">
      {work.map((item, index) => {
        const content = (
          <>
            <div className="mb-2 flex items-baseline gap-2">
              <h3
                className="text-2xl leading-tight tracking-[-0.015em] text-text-primary transition-colors duration-200 group-hover:text-accent"
                style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
              >
                {item.title}
              </h3>
              {item.url ? <ArrowUpRight size={14} className="mt-1 shrink-0 text-text-tertiary transition-colors duration-200 group-hover:text-accent" /> : null}
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">
              {item.description}
            </p>
          </>
        );

        const className = 'animate-in group block border-t border-border pt-6 first:border-t-0 first:pt-0';
        const style = { animationDelay: `${index * 65}ms` };

        if (!item.url) {
          return (
            <article key={item.title} className={className} style={style}>
              {content}
            </article>
          );
        }

        return (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            style={style}
          >
            {content}
          </a>
        );
      })}
    </div>
  </section>
);
