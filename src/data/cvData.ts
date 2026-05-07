import type { CVData } from '@/types/cv';

export const CV_DATA: CVData = {
  name: 'Asam Shan',
  title: 'Senior Software Engineer',
  contacts: [
    { label: 'asamshan456@gmail.com', url: 'mailto:asamshan456@gmail.com', icon: 'email' },
    { label: 'shan8851', url: 'https://github.com/shan8851', icon: 'github' },
    { label: '@shan8851', url: 'https://x.com/shan8851', icon: 'twitter' },
    { label: 'shan8851.com', url: 'https://www.shan8851.com/', icon: 'web' },
  ],
  summary:
    'Senior software engineer shipping production web3 systems and building AI-assisted developer tooling. I work across TypeScript, React, Next.js, Node.js, EVM integrations, testing, runbooks, and agent workflows. Strong at turning messy systems into useful interfaces, judging whether technical output is genuinely good or just plausible, and giving clear feedback that raises engineering quality.',
  strengths: [
    {
      label: 'Languages & frameworks',
      detail: 'TypeScript, JavaScript, React, Next.js, Node.js',
    },
    {
      label: 'Web3 systems',
      detail: 'EVM integrations, Viem, Wagmi, bridging, governance, onchain UX',
    },
    {
      label: 'AI workflows',
      detail: 'OpenAI Codex, Claude Code, terminal-first coding agents, prompt/evaluation loops',
    },
    {
      label: 'Engineering quality',
      detail: 'code review, engineering judgement, e2e/integration testing, observability, runbooks',
    },
    {
      label: 'Developer tooling',
      detail: 'CLIs, workflow automation, agent skills, technical documentation, direct feedback',
    },
  ],
  experience: [
    {
      company: 'Polygon',
      role: 'Senior Full Stack Engineer (Applications)',
      period: 'Oct 2025 – Present',
      bullets: [
        'Took Agglayer UI from 0→1 as a near-sole engineer shortly after joining, shipping a production bridge experience across Polygon ecosystem apps and dapps.',
        'Built the UI for the sPOL liquid staking launch on staking.polygon.technology, including the dPOL→sPOL migration flow.',
        'Built and evolved Agglayer Dev UI, an open-source configurable bridge starter used internally and by new Agglayer chains to launch native bridging faster.',
        'Integrated routing capabilities, including LI.FI and multihop support, improving route flexibility and execution outcomes for complex bridge flows.',
        'Strengthened release confidence with e2e/integration flows using funded testnet wallets, validating real onchain actions plus backend integrations.',
        'Turned repeated wallet/TRM pain into reusable standards: TRM docs, wallet connection guidance, and shipped internal WalletKit package that is used in all Polygon UIs.',
        'Created early mocked previews for staking rewards/PIP85 work so leadership and stakeholders could review direction before backend and smart-contract work was fully ready.',
        'Published internal AI workflow skills for Polygon engineering teammates, turning repeated agent/coding workflows into reusable team patterns instead of one-off prompting.',
        'Wrote deployment/debug runbooks, backend/API overviews, and QA-facing references to reduce tribal knowledge and make cross-team delivery less fragile.',
        'Scoped API gateway modernisation work across TypeScript migration, local Docker setup, logging/error handling, synthetic tests, and TRM caching/cost-control follow-up.',
      ],
    },
    {
      company: 'Aragon',
      role: 'Senior Software Engineer',
      period: 'Jul 2024 – Oct 2025',
      bullets: [
        'Shipped modular governance UX flows, including token wrapping and delegation, for production DAO applications.',
        'Partnered with protocol and backend teams to turn complex governance logic into clear, composable user-facing flows.',
        'Contributed to open-source governance tooling, including the Governance UI Kit and app template initiatives.',
      ],
    },
    {
      company: 'Cielo Finance',
      role: 'Senior Software Engineer',
      period: 'Oct 2022 – Jul 2024',
      bullets: [
        'Helped evolve Cielo from bot-first tooling into a broader wallet discovery and analytics platform used by active web3 communities.',
        'Supported expansion across 16+ EVM chains with faster integration workflows and delivered user-facing analytics for real-time NFT/token activity.',
        'During tenure, contributed to growth to 10k+ MAU and substantial engagement uplift.',
      ],
    },
  ],
  earlierRoles: [
    { title: 'Co-Founder & CTO, Let\'s Eat', period: '2021–2022' },
    { title: 'Software Engineer, Library of Things', period: '2021' },
    { title: 'Software Engineer, North Link Digital', period: '2019–2021' },
  ],
  toolingWork: [
    {
      title: 'Giles / private agent workflow system',
      description:
        'Personal OpenClaw-based agent stack used daily for task orchestration, memory, skills, playbooks, scheduled checks, Discord/WhatsApp workflows, and delegated sub-agent work. Private, but strong proof of practical agent workflow design beyond demo apps.',
    },
    {
      title: 'OpenClaw Blackbox',
      url: 'https://github.com/shan8851/openclaw-blackbox',
      description:
        'OpenClaw-native inspection reports for failed, stalled, expensive, or weird agent runs. Built around the exact problem that matters in AI engineering work: understanding what happened, where judgement failed, and what evidence supports the conclusion.',
    },
    {
      title: 'Hermes Console',
      url: 'https://github.com/shan8851/hermes-console',
      description:
        'Local-first dashboard for inspecting agent runtime state, sessions, crons, skills, memory, config, usage, and logs directly from disk. Focused on calm operational visibility rather than generic chatbot theatre.',
    },
    {
      title: 'Runready',
      url: 'https://github.com/shan8851/runready',
      description:
        'Local dev preflight CLI that checks whether a repo is ready to run before wasting time in setup loops. Encodes the sort of practical engineering checks that make agent-assisted work safer and less brittle.',
    },
    {
      title: 'Companies House CLI',
      url: 'https://github.com/shan8851/companies-house-cli',
      description:
        'Agent-first CLI for UK Companies House public data, with stable JSON output for company records, officers, filings, PSCs, charges, insolvency, and repeatable automation workflows. One of a suite of similar CLI tools with SKILL.md files to get up and running. All published on both npm and ClawHub.',
    },
    {
      title: 'RoastMaster',
      url: 'https://github.com/shan8851/roastmaster',
      description:
        'AI-powered visual comedy app using Next.js, Clerk, Stripe, Neon Postgres, Prisma, Upstash Redis, OpenRouter, and Vitest. Product-focused AI build with auth, payments, rate limits, prompt controls, and shareable output.',
    },
  ],
  publicWork: [
    { title: 'Agglayer UI', url: 'https://ui.agglayer.dev/' },
    { title: 'Agglayer Dev UI', url: 'https://github.com/agglayer/agglayer-dev-ui' },
    { title: 'Agglayer SDK', url: 'https://github.com/agglayer/sdk' },
    { title: 'Polygon Liquid Staking', url: 'https://staking.polygon.technology/lst' },
    {
      title: 'Aragon Governance UI Kit / App Template',
      url: 'https://blog.aragon.org/introducing-the-governance-ui-kit-and-app-template/',
    },
    { title: 'Cielo Finance webapp', url: 'https://app.cielo.finance' },
  ],
} as const;
