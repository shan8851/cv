type SectionHeadingProps = {
  readonly title: string;
  readonly delay?: number;
};

export const SectionHeading = ({ title, delay = 0 }: SectionHeadingProps) => (
  <div
    className="animate-in flex items-center gap-3 mb-8 font-mono"
    style={{ animationDelay: `${delay}ms` }}
  >
    <span className="text-text-comment text-sm">{'//'}</span>
    <span className="text-text-comment text-sm">──</span>
    <h2 className="text-text-primary text-lg font-semibold tracking-wide uppercase">
      {title}
    </h2>
    <span className="text-text-comment text-sm flex-1 overflow-hidden">
      {'─'.repeat(40)}
    </span>
  </div>
);
