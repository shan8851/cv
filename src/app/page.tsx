import { MatrixRain } from '@/components/matrixRain';
import { ScanLine } from '@/components/scanLine';
import { Header } from '@/components/header';
import { Summary } from '@/components/summary';
import { CoreStrengths } from '@/components/coreStrengths';
import { Experience } from '@/components/experience';
import { PublicWork } from '@/components/publicWork';
import { StatusBar } from '@/components/statusBar';
import { CV_DATA } from '@/data/cvData';

const Home = () => (
  <>
    <MatrixRain />
    <ScanLine />

    <main className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24 pb-20">
      <Header
        name={CV_DATA.name}
        title={CV_DATA.title}
        contacts={CV_DATA.contacts}
        downloads={[
          { label: 'Download PDF', href: '/shan-cv.pdf' },
          { label: 'Download DOCX', href: '/shan-cv.docx' },
        ]}
      />
      <Summary text={CV_DATA.summary} />
      <CoreStrengths skills={CV_DATA.skills} />
      <Experience
        experience={CV_DATA.experience}
        earlierRoles={CV_DATA.earlierRoles}
      />
      <PublicWork work={CV_DATA.publicWork} />
    </main>

    <StatusBar />
  </>
);

export { Home as default };
