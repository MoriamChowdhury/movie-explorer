export default function Footer() {
  return (
    <footer className="border-t border-panel2 bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-marquee text-ink font-display text-base font-semibold">
              M
            </span>
            <span className="font-display text-base font-semibold text-paper">
              MovieExplorer
            </span>
          </div>

          <p className="text-sm text-mist">© 2026 MovieExplorer. All rights reserved.</p>

          <div className="flex gap-5 text-sm text-mist">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-marquee"
            >
              GitHub
            </a>
            <a
              href="https://www.tvmaze.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-marquee"
            >
              Data by TVMaze
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
