import { ArrowUpRight } from 'lucide-react';

import { SectionHeading } from './sectionHeading';

import type { PublicWork as PublicWorkType } from '@/types/cv';

type PublicWorkProps = {
  readonly work: ReadonlyArray<PublicWorkType>;
  readonly delay?: number;
};

export const PublicWork = ({ work }: PublicWorkProps) => (
  <section className="mb-20">
    <SectionHeading title="Selected Public Work" />

    <div className="divide-y divide-border/70 border-y border-border/70">
      {work.map((item, index) => (
        <a
          key={item.title}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-in group grid gap-1 py-4 transition-colors duration-200 hover:text-accent md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_auto] md:items-center md:gap-5"
          style={{ animationDelay: `${index * 55}ms` }}
        >
          <span className="text-base font-medium text-text-primary transition-colors duration-200 group-hover:text-accent">
            {item.title}
          </span>
          <span className="min-w-0 truncate font-mono text-xs text-text-tertiary transition-colors duration-200 group-hover:text-accent/80">
            {item.url}
          </span>
          <ArrowUpRight size={15} className="hidden text-text-tertiary transition-colors duration-200 group-hover:text-accent md:block" />
        </a>
      ))}
    </div>
  </section>
);
