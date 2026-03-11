import type { CVData } from '@/types/cv';

export const CV_DATA: CVData = {
  name: 'Asam Shan',
  title: 'Senior Frontend Engineer (Web3 Product)',
  contacts: [
    { label: 'asamshan456@gmail.com', url: 'mailto:asamshan456@gmail.com', icon: 'email' },
    { label: 'shan8851', url: 'https://github.com/shan8851', icon: 'github' },
    { label: '@shan8851', url: 'https://x.com/shan8851', icon: 'twitter' },
    { label: 'shan8851.com', url: 'https://www.shan8851.com/', icon: 'web' },
  ],
  summary:
    'Frontend-focused engineer shipping production web3 products across bridging, governance, and analytics. I build clear UX for complex onchain workflows and improve release quality through CI/CD checks, e2e coverage, runbooks, and observability.',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'GraphQL',
    'REST APIs',
    'Redux/TanStack Query',
    'EVM integrations (Viem/Wagmi)',
    'Frontend architecture',
    'CI/CD collaboration',
    'e2e/integration testing',
    'Datadog',
    'Docs/runbooks',
  ],
  communityAndMentorship: [
    'Mentor engineers through Coding Coach and The Mentoring Club, focused on technical growth and career progression.',
    'Started Tech-Leap, a newsletter for developers navigating their early years in tech.',
    'Write at shan8851.com on frontend architecture, engineering culture, and practical team workflows.',
  ],
  experience: [
    {
      company: 'Polygon',
      role: 'Senior Full Stack Engineer (Applications)',
      period: 'Oct 2025 – Present',
      bullets: [
        'Took Agglayer UI from 0→1 as a near-sole engineer shortly after joining, shipping a production bridge experience across Polygon ecosystem apps/dapps.',
        'Built and evolved Agglayer Dev UI (open source), a configurable bridge starter used internally and by new Agglayer chains to launch native bridging faster.',
        'Integrated routing capabilities, including LI.FI and multihop support, to improve route flexibility and execution outcomes.',
        'Strengthened release confidence by implementing e2e/integration test flows with funded testnet wallets, validating real onchain actions plus backend integrations.',
        'Partnered on CI/CD and deployment workflow improvements (including Argo/Kargo release paths), moving critical checks earlier in the pipeline.',
        'Added Datadog monitoring plus deployment/debug runbooks to reduce tribal knowledge and improve cross-team delivery consistency.',
      ],
    },
    {
      company: 'Aragon',
      role: 'Senior Software Engineer',
      period: 'Jul 2024 – Oct 2025',
      bullets: [
        'Shipped modular governance UX flows, including token wrapping and delegation, for production DAO applications.',
        'Built composable frontend patterns that reduced integration overhead and improved delivery speed.',
        'Partnered with protocol/backend teams to turn complex governance logic into intuitive user-facing flows.',
        'Contributed to open-source governance tooling, including Governance UI Kit and app template initiatives.',
      ],
    },
    {
      company: 'Cielo Finance',
      role: 'Senior Software Engineer',
      period: 'Oct 2022 – Jul 2024',
      bullets: [
        'Helped evolve Cielo from bot-first tooling into a broader wallet discovery and analytics platform.',
        'Supported scaling across 16+ EVM chains with faster chain-integration workflows.',
        'Delivered user-facing analytics and integrations used by active web3 communities.',
        'During tenure, contributed to growth to 10k+ MAU and significant engagement uplift.',
      ],
    },
  ],
  earlierRoles: [
    { title: 'Co-Founder & CTO, Let\'s Eat', period: '2021–2022' },
    { title: 'Software Engineer, Library of Things', period: '2021' },
    { title: 'Software Engineer, North Link Digital', period: '2019–2021' },
  ],
  publicWork: [
    { title: 'Agglayer UI', url: 'https://ui.agglayer.dev/' },
    { title: 'Agglayer Dev UI', url: 'https://github.com/agglayer/agglayer-dev-ui' },
    { title: 'Agglayer SDK', url: 'https://github.com/agglayer/sdk' },
    { title: 'Cielo App', url: 'https://app.cielo.finance' },
    { title: 'Aragon Governance UI Kit / App Template', url: 'https://blog.aragon.org/introducing-the-governance-ui-kit-and-app-template/' },
  ],
} as const;
