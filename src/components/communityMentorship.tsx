import { SectionHeading } from './sectionHeading';

type CommunityMentorshipProps = {
  readonly items: ReadonlyArray<string>;
  readonly delay?: number;
};

export const CommunityMentorship = ({ items, delay = 1500 }: CommunityMentorshipProps) => (
  <section className="mb-16">
    <SectionHeading title="Community & Mentorship" delay={delay} />

    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item}
          className="animate-in flex gap-3 font-mono text-sm md:text-base"
          style={{ animationDelay: `${delay + 100 + index * 80}ms` }}
        >
          <span className="text-accent shrink-0">→</span>
          <span className="text-text-primary leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  </section>
);
