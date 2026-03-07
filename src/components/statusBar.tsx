export const StatusBar = () => (
  <footer
    className="animate-in fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-1.5 bg-bg-card border-t border-border font-mono text-xs text-text-comment"
    style={{ animationDelay: '2800ms' }}
  >
    <div className="flex items-center gap-4">
      <span>UTF-8</span>
      <span>TypeScript</span>
      <span>Spaces: 2</span>
    </div>
    <div className="flex items-center gap-4">
      <span>Last updated: Mar 2026</span>
      <span className="text-accent text-[10px]">●</span>
    </div>
  </footer>
);
