import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-panel2 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-marquee text-ink font-display text-lg font-semibold">
            M
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            MovieExplorer
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`hidden text-sm font-medium transition-colors sm:block ${
              pathname === '/' ? 'text-marquee' : 'text-mist hover:text-paper'
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`rounded-sm px-4 py-2 text-sm font-semibold transition-colors ${
              pathname === '/movies'
                ? 'bg-marquee text-ink'
                : 'border border-mist/40 text-paper hover:border-marquee hover:text-marquee'
            }`}
          >
            Movies
          </Link>
        </div>
      </nav>
    </header>
  )
}
