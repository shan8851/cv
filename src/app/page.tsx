import { CoreStrengths } from '@/components/coreStrengths';
import { Experience } from '@/components/experience';
import { Header } from '@/components/header';
import { PublicWork } from '@/components/publicWork';
import { Summary } from '@/components/summary';
import { ToolingWork } from '@/components/toolingWork';
import { CV_DATA } from '@/data/cvData';

const Home = () => (
  <main className="relative z-10 mx-auto w-full max-w-[780px] px-5 py-16 sm:px-6 md:px-8 md:py-28">
    <Header
      name={CV_DATA.name}
      title={CV_DATA.title}
      contacts={CV_DATA.contacts}
      downloads={[
        { label: 'Download PDF', href: '/shan-cv.pdf' },
      ]}
    />
    <Summary text={CV_DATA.summary} />
    <CoreStrengths strengths={CV_DATA.strengths} />
    <Experience
      experience={CV_DATA.experience}
      earlierRoles={CV_DATA.earlierRoles}
    />
    <ToolingWork work={CV_DATA.toolingWork} />
    <PublicWork work={CV_DATA.publicWork} />

    <footer className="mt-24 border-t border-border pt-8">
      <p className="font-mono text-xs text-text-tertiary">
        Last updated 7 May 2026
      </p>
    </footer>
  </main>
);

export { Home as default };
