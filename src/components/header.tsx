import { Mail, Github, Twitter, Globe, Download } from 'lucide-react';
import { GlitchText } from './glitchText';
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
  <header className="relative mb-16">
    <div
      className="animate-fade border border-border rounded-lg p-8 md:p-12 relative overflow-hidden"
      style={{ animationDelay: '400ms', animationDuration: '0.8s' }}
    >
      <div
        className="absolute top-0 left-0 px-4 py-1 text-xs text-text-comment font-mono border-b border-r border-border rounded-br-lg"
      >
        shan@portfolio
      </div>

      <div className="mt-4">
        <h1
          className="animate-in text-5xl md:text-7xl font-extrabold text-accent tracking-tight leading-none mb-3"
          style={{ animationDelay: '600ms', fontFamily: 'var(--font-display)' }}
        >
          <GlitchText text={name}>{name}</GlitchText>
        </h1>

        <p
          className="animate-in text-text-secondary text-base md:text-lg font-mono mb-8"
          style={{ animationDelay: '800ms' }}
        >
          {title}
        </p>

        <div className="flex flex-wrap gap-3">
          {contacts.map((contact, index) => {
            const Icon = ICON_MAP[contact.icon];
            return (
              <a
                key={contact.label}
                href={contact.url}
                target={contact.icon === 'email' ? undefined : '_blank'}
                rel={contact.icon === 'email' ? undefined : 'noopener noreferrer'}
                className="animate-in group flex items-center gap-2 px-4 py-2 text-sm font-mono text-text-secondary border border-border rounded-md transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_var(--accent-glow)]"
                style={{ animationDelay: `${1000 + index * 80}ms` }}
              >
                <Icon size={14} className="transition-colors duration-200 group-hover:text-accent" />
                <span className="hidden sm:inline">{contact.label}</span>
              </a>
            );
          })}
        </div>

        {downloads.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-5">
            {downloads.map((dl, index) => (
              <a
                key={dl.label}
                href={dl.href}
                download
                className="animate-in group flex items-center gap-2 px-4 py-2 text-sm font-mono text-accent border border-accent/30 rounded-md transition-all duration-200 hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_var(--accent-glow)]"
                style={{ animationDelay: `${1320 + index * 80}ms` }}
              >
                <Download size={14} />
                <span>{dl.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </header>
);
