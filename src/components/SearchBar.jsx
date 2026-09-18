export default function SearchBar({ value, onChange, resultCount, isSearching }) {
  return (
    <div className="border-b border-panel2 bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mist"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search for a movie or show..."
            className="w-full rounded-sm border border-panel2 bg-ink py-3.5 pl-12 pr-4 font-body text-paper placeholder:text-mist focus:border-marquee"
          />
        </div>
        {value.trim() && (
          <p className="mt-3 text-sm text-mist">
            {isSearching
              ? 'Searching...'
              : `${resultCount} result${resultCount === 1 ? '' : 's'} for "${value}"`}
          </p>
        )}
      </div>
    </div>
  )
}
