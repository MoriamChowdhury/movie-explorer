import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'
import { getAllShows } from '../api/tvmaze'

export default function Home() {
  const [posters, setPosters] = useState([])

  useEffect(() => {
    let cancelled = false
    getAllShows(0)
      .then((shows) => {
        if (cancelled) return
        const withImages = shows
          .filter((s) => s.image?.medium)
          .sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
          .slice(0, 4)
          .map((s) => s.image.medium)
        setPosters(withImages)
      })
      .catch(() => setPosters([]))
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Navbar />
      <main className="flex-1">
        <HeroBanner posters={posters} />
      </main>
      <Footer />
    </div>
  )
}
