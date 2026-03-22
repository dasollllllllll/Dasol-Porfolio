export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <p className="text-xs text-text-muted tracking-wider">
          © 2026 Dasol Park
        </p>
        <a
          href="https://www.instagram.com/sol_.tudio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-text-muted tracking-wider transition-colors hover:text-white/70"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
