import { Header } from '@/components/header';
import { Summary } from '@/components/summary';
import { CoreStrengths } from '@/components/coreStrengths';
import { CommunityMentorship } from '@/components/communityMentorship';
import { Experience } from '@/components/experience';
import { PublicWork } from '@/components/publicWork';
import { CV_DATA } from '@/data/cvData';

const Home = () => (
  <main className="relative z-10 max-w-[720px] mx-auto px-6 md:px-0 py-20 md:py-32">
    <Header
      name={CV_DATA.name}
      title={CV_DATA.title}
      contacts={CV_DATA.contacts}
      downloads={[
        { label: 'Download PDF', href: '/shan-cv.pdf' },
      ]}
    />
    <Summary text={CV_DATA.summary} />
    <CoreStrengths skills={CV_DATA.skills} />
    <CommunityMentorship items={CV_DATA.communityAndMentorship} />
    <Experience
      experience={CV_DATA.experience}
      earlierRoles={CV_DATA.earlierRoles}
    />
    <PublicWork work={CV_DATA.publicWork} />

    <footer className="mt-20 pt-8 border-t border-border">
      <p className="text-xs text-text-tertiary font-mono">
        Last updated March 2026
      </p>
    </footer>
  </main>
);

export { Home as default };
