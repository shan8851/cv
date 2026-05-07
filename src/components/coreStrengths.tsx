import { SectionHeading } from './sectionHeading';

import type { CoreStrength } from '@/types/cv';

type CoreStrengthsProps = {
  readonly strengths: ReadonlyArray<CoreStrength>;
  readonly delay?: number;
};

export const CoreStrengths = ({ strengths }: CoreStrengthsProps) => (
  <section className="mb-20">
    <SectionHeading title="Core Strengths" />
    <div className="animate-in space-y-4 text-sm leading-relaxed text-text-secondary">
      {strengths.map((strength) => (
        <div key={strength.label} className="grid min-w-0 gap-1 border-b border-border/55 pb-4 md:grid-cols-[13rem_1fr] md:gap-6">
          <span className="min-w-0 font-medium text-text-primary">{strength.label}</span>
          <span className="min-w-0">{strength.detail}</span>
        </div>
      ))}
    </div>
  </section>
);
