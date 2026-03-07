import type { ReactNode } from 'react';

type GlitchTextProps = {
  readonly children: ReactNode;
  readonly text: string;
  readonly className?: string;
};

export const GlitchText = ({ children, text, className = '' }: GlitchTextProps) => (
  <span className={`glitch-text ${className}`} data-text={text}>
    {children}
  </span>
);
