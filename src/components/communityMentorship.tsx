import { SectionHeading } from './sectionHeading';

type CommunityMentorshipProps = {
  readonly items: ReadonlyArray<string>;
  readonly delay?: number;
};

export const CommunityMentorship = ({ items }: CommunityMentorshipProps) => (
  <section className="mb-16">
    <SectionHeading title="Community & Mentorship" />

    <div className="space-y-3">
      {items.map((item, index) => (
        <p
          key={item}
          className="animate-in text-sm font-mono text-text-primary leading-relaxed"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {item}
        </p>
      ))}
    </div>
  </section>
);
