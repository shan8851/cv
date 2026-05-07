import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './sectionHeading';
import type { PublicWork as PublicWorkType } from '@/types/cv';

type PublicWorkProps = {
  readonly work: ReadonlyArray<PublicWorkType>;
  readonly delay?: number;
};

export const PublicWork = ({ work }: PublicWorkProps) => (
  <section className="mb-16">
    <SectionHeading title="Selected Public Work" />

    <div className="space-y-0">
      {work.map((item, index) => (
        <a
          key={item.title}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-in group flex items-center gap-3 py-2.5 font-mono text-sm transition-colors duration-200 hover:text-accent border-b border-border/50 last:border-b-0"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <span className="text-text-primary group-hover:text-accent transition-colors duration-200">
            {item.title}
          </span>
          <span className="text-text-tertiary text-xs truncate flex-1 hidden md:inline">
            {item.url}
          </span>
          <ArrowUpRight size={12} className="text-text-tertiary group-hover:text-accent transition-colors duration-200 shrink-0" />
        </a>
      ))}
    </div>
  </section>
);
