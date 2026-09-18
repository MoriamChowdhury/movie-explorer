import { formatRating, releaseYear } from '../api/tvmaze'

export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium || show.image?.original

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-panel2 bg-panel transition-colors hover:border-marquee/60">
      <div className="relative aspect-[2/3] overflow-hidden bg-panel2">
        {poster ? (
          <img
            src={poster}
            alt={show.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-panel2 to-ink font-display text-sm text-mist">
            No poster
          </div>
        )}
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-sm bg-ink/85 px-2 py-1 text-xs font-semibold text-marquee backdrop-blur">
          ★ {formatRating(show)}
        </div>
      </div>

     
      <div className="tear-line h-px w-full" />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="line-clamp-1 font-display text-lg font-semibold text-paper">
            {show.name}
          </h3>
          <p className="mt-1 text-sm text-mist">
            {releaseYear(show)}
            {show.genres?.length ? ` · ${show.genres[0]}` : ''}
          </p>
        </div>
        <button
          onClick={() => onSelect(show)}
          className="mt-auto rounded-sm border border-mist/40 py-2 text-sm font-semibold text-paper transition-colors hover:border-marquee hover:text-marquee"
        >
          See Details
        </button>
      </div>
    </article>
  )
}
