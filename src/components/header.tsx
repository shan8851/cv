import { Mail, Github, Twitter, Globe, Download } from 'lucide-react';
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
  <header className="mb-20 animate-in">
    <h1
      className="text-5xl md:text-7xl leading-[0.9] mb-4"
      style={{ fontFamily: 'var(--font-serif)', fontStyle: 'normal' }}
    >
      {name}
    </h1>

    <p className="text-text-secondary text-sm md:text-base font-mono mb-8">
      {title}
    </p>

    <div className="flex flex-wrap items-center gap-4">
      {contacts.map((contact) => {
        const Icon = ICON_MAP[contact.icon];
        return (
          <a
            key={contact.label}
            href={contact.url}
            target={contact.icon === 'email' ? undefined : '_blank'}
            rel={contact.icon === 'email' ? undefined : 'noopener noreferrer'}
            className="group flex items-center gap-2 text-sm font-mono text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            <Icon size={14} />
            <span>{contact.label}</span>
          </a>
        );
      })}

      {downloads.map((dl) => (
        <a
          key={dl.label}
          href={dl.href}
          download
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono text-accent border border-accent/20 rounded transition-all duration-200 hover:bg-accent/10 hover:border-accent/40"
        >
          <Download size={14} />
          <span>{dl.label}</span>
        </a>
      ))}
    </div>

    <div className="mt-10 h-px bg-gradient-to-r from-border via-border-hover to-transparent" />
  </header>
);
