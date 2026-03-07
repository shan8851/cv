import { ExternalLink } from 'lucide-react';
import { SectionHeading } from './sectionHeading';
import type { PublicWork as PublicWorkType } from '@/types/cv';

type PublicWorkProps = {
  readonly work: ReadonlyArray<PublicWorkType>;
  readonly delay?: number;
};

export const PublicWork = ({ work, delay = 2600 }: PublicWorkProps) => (
  <section className="mb-16">
    <SectionHeading title="Selected Public Work" delay={delay} />

    <div
      className="animate-in font-mono text-sm text-text-comment mb-4"
      style={{ animationDelay: `${delay + 50}ms` }}
    >
      $ ls -la ~/public-work/
    </div>

    <div className="space-y-1">
      {work.map((item, index) => (
        <a
          key={item.title}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-in group flex items-center gap-3 px-4 py-3 rounded-md font-mono text-sm transition-all duration-200 hover:bg-bg-card"
          style={{ animationDelay: `${delay + 100 + index * 80}ms` }}
        >
          <span className="text-accent">→</span>
          <span className="text-text-primary group-hover:text-accent transition-colors duration-200">
            {item.title}
          </span>
          <span className="hidden md:inline text-text-comment text-xs truncate flex-1">
            {item.url}
          </span>
          <ExternalLink size={12} className="text-text-comment group-hover:text-accent transition-colors duration-200 shrink-0" />
        </a>
      ))}
    </div>
  </section>
);
