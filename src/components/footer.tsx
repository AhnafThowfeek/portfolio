export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Ahnaf Thowfeek. Built with Next.js.</p>
        <p className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          exit_code: 0
        </p>
      </div>
    </footer>
  );
}
