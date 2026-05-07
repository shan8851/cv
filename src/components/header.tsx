import { Download, Github, Globe, Mail, Twitter } from 'lucide-react';

import type { ContactLink } from '@/types/cv';

const ICON_MAP = {
  email: Mail,
  github: Github,
  twitter: Twitter,
  web: Globe,
} as const;

type DownloadLink = {
  readonly label: string;
  readonly href: string;
};

type HeaderProps = {
  readonly name: string;
  readonly title: string;
  readonly contacts: ReadonlyArray<ContactLink>;
  readonly downloads?: ReadonlyArray<DownloadLink>;
};

export const Header = ({ name, title, contacts, downloads = [] }: HeaderProps) => (
  <header className="mb-24 animate-in">
    <div className="mb-10 flex items-center gap-4 text-[0.68rem] font-mono uppercase tracking-[0.28em] text-text-tertiary">
      <span className="h-px w-10 bg-accent/60" />
      <span>Independent engineering profile</span>
    </div>

    <div className="relative">
      <div className="absolute -left-7 top-3 hidden h-28 w-px bg-gradient-to-b from-accent/70 to-transparent md:block" />
      <h1
        className="max-w-full text-[3.35rem] leading-[0.88] tracking-[-0.045em] text-text-primary sm:text-[4.8rem] md:text-[7.4rem]"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {name}
      </h1>
    </div>

    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
      {title}
    </p>

    <div className="mt-10 flex max-w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
      {contacts.map((contact) => {
        const Icon = ICON_MAP[contact.icon];
        return (
          <a
            key={contact.label}
            href={contact.url}
            target={contact.icon === 'email' ? undefined : '_blank'}
            rel={contact.icon === 'email' ? undefined : 'noopener noreferrer'}
            className="group inline-flex max-w-full items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            <Icon size={14} className="text-text-tertiary transition-colors duration-200 group-hover:text-accent" />
            <span>{contact.label}</span>
          </a>
        );
      })}

      {downloads.map((dl) => (
        <a
          key={dl.label}
          href={dl.href}
          download
          className="inline-flex items-center gap-2 rounded-full border border-accent/35 px-4 py-2 text-sm font-medium text-accent transition-all duration-200 hover:border-accent/65 hover:bg-accent/10 hover:shadow-[0_0_28px_var(--accent-glow)]"
        >
          <Download size={14} />
          <span>{dl.label}</span>
        </a>
      ))}
    </div>
  </header>
);
