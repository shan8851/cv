import type { CVData } from '@/types/cv';

export const CV_DATA: CVData = {
  name: 'Asam Shan',
  title: 'Senior Full Stack Engineer (Web3 Product)',
  contacts: [
    { label: 'shan8851@proton.me', url: 'mailto:shan8851@proton.me', icon: 'email' },
    { label: 'shan8851', url: 'https://github.com/shan8851', icon: 'github' },
    { label: '@shan8851', url: 'https://x.com/shan8851', icon: 'twitter' },
    { label: 'shan8851.com', url: 'https://www.shan8851.com/', icon: 'web' },
  ],
  summary:
    'Senior Full Stack Engineer shipping production web3 applications across payments, bridging, and staking. Strong at 0→1 delivery, reliable onchain UX, and raising execution quality through e2e validation, runbooks, and cross-team technical documentation.',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'GraphQL',
    'REST APIs',
    'EVM Integrations',
    'Viem/Wagmi',
    'E2E Testing',
    'Runbooks & Docs',
    'Cross-functional Delivery',
  ],
  experience: [
    {
      company: 'Polygon',
      role: 'Senior Full Stack Engineer (Applications)',
      period: 'Oct 2025 – Present',
      bullets: [
        'Took Agglayer UI from 0→1 as a near-sole engineer shortly after joining, shipping a production bridge experience across Polygon ecosystem apps/dapps.',
        'Built and evolved Agglayer Dev UI (open source), a minimal configurable bridge starter used internally and by new Agglayer chains to launch native bridging quickly.',
        'Integrated route capabilities (including LI.FI and multihop support) to improve bridge flexibility and user outcomes.',
        'Introduced frontend best-practice docs and deployment runbooks, reducing tribal knowledge and cross-team blockers after major org integration changes.',
        'Authored API/backend service overviews and QA-facing references that enabled better automation and less dependency friction.',
        'Improved release confidence by implementing practical e2e/integration testing with funded testnet wallets, validating real onchain actions and backend integrations.',
      ],
    },
    {
      company: 'Aragon',
      role: 'Senior Software Engineer',
      period: 'Jul 2024 – Oct 2025',
      bullets: [
        'Shipped modular governance UX flows (including token wrapping and delegation) for production DAO applications.',
        'Contributed to governance architecture and implementation used by major ecosystem protocols.',
        'Partnered with protocol/backend teams to translate complex governance logic into clear, reliable product UX.',
        'Contributed to open-source governance tooling, including the Governance UI Kit and app template initiative.',
      ],
    },
    {
      company: 'Cielo Finance',
      role: 'Senior Software Engineer',
      period: 'Oct 2022 – Jul 2024',
      bullets: [
        'Helped evolve Cielo from bot-first tooling into a broader wallet discovery and analytics platform.',
        'Supported expansion across 16+ EVM chains with faster integration workflows.',
        'Built user-facing analytics and integrations used by active web3 communities.',
        'During tenure, contributed to growth to 10k+ MAU and substantial engagement uplift.',
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
    { title: 'Aragon Governance UI Kit', url: 'https://blog.aragon.org/introducing-the-governance-ui-kit-and-app-template/' },
  ],
} as const;
