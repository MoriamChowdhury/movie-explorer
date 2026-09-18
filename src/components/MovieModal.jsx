import { useEffect } from 'react'
import { formatRating, releaseYear, stripHtml } from '../api/tvmaze'

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!show) return null

  const backdrop = show.image?.original || show.image?.medium
  const director =
    show._embedded?.cast?.find((c) => c.person)?.person?.name ||
    show.network?.name ||
    'Unknown'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-panel2 bg-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {backdrop ? (
            <img src={backdrop} alt={show.name} className="h-64 w-full object-cover sm:h-80" />
          ) : (
            <div className="h-48 w-full bg-gradient-to-br from-panel2 to-ink" />
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-sm bg-ink/80 text-paper transition-colors hover:bg-marquee hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="tear-line h-px w-full" />

        <div className="p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
            {show.name}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist">
            <span className="flex items-center gap-1 font-semibold text-marquee">
              ★ {formatRating(show)}
            </span>
            <span>📅 {releaseYear(show)}</span>
            {show.genres?.length > 0 && <span>{show.genres.join(', ')}</span>}
            {show.runtime && <span>{show.runtime} min</span>}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-rust">
              Overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/90 sm:text-base">
              {stripHtml(show.summary) || 'No summary available for this title.'}
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-mist">Status</dt>
              <dd className="mt-0.5 font-medium text-paper">{show.status || 'N/A'}</dd>
            </div>
            <div>
              <dt className="text-mist">Language</dt>
              <dd className="mt-0.5 font-medium text-paper">{show.language || 'N/A'}</dd>
            </div>
            <div>
              <dt className="text-mist">Network</dt>
              <dd className="mt-0.5 font-medium text-paper">
                {director}
              </dd>
            </div>
          </dl>

          <button
            onClick={onClose}
            className="mt-8 w-full rounded-sm border border-mist/40 py-3 text-sm font-semibold text-paper transition-colors hover:border-marquee hover:text-marquee sm:w-auto sm:px-8"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}
