import MovieCard from './MovieCard'

export default function MovieGrid({ shows, onSelect, loading, error }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[2/3.6] animate-pulse rounded-sm bg-panel" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-sm border border-rust/40 bg-rust/10 px-6 py-10 text-center">
        <p className="font-display text-lg text-paper">Couldn't load movies</p>
        <p className="mt-2 text-sm text-mist">{error}</p>
      </div>
    )
  }

  if (!shows.length) {
    return (
      <div className="rounded-sm border border-panel2 bg-panel px-6 py-16 text-center">
        <p className="font-display text-lg text-paper">No titles found</p>
        <p className="mt-2 text-sm text-mist">Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
      ))}
    </div>
  )
}
