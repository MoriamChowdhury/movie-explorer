import { Link } from 'react-router-dom'

export default function HeroBanner({ posters = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-panel2 bg-panel">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
      
        <div>
          <p className="mb-4 text-sm font-medium text-rust">Now streaming your next find</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Discover a film
            <br />
            worth your evening
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist sm:text-lg">
            Browse thousands of titles, search by name, and pull up the details
            that matter — cast, rating, release year — before you press play.
          </p>
          <Link
            to="/movies"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-marquee px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Explore Now
          </Link>
        </div>

        
        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="perf-edge relative rotate-2 overflow-hidden rounded-sm border-2 border-panel2 bg-ink p-2 shadow-2xl">
            <div className="grid grid-cols-2 gap-2">
              {posters.slice(0, 4).map((p, i) => (
                <div
                  key={i}
                  className="aspect-[2/3] overflow-hidden rounded-[2px] bg-panel2"
                >
                  {p ? (
                    <img
                      src={p}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-panel2 to-ink" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-sm border-2 border-marquee/30" />
        </div>
      </div>
    </section>
  )
}
