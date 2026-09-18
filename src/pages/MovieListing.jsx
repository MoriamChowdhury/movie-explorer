import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import MovieModal from '../components/MovieModal'
import { searchShows, getAllShows } from '../api/tvmaze'

export default function MovieListing() {
  const [query, setQuery] = useState('')
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(null)

  
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getAllShows(0)
      .then((data) => {
        if (cancelled) return
        setShows(data)
        setError('')
      })
      .catch((err) => !cancelled && setError(err.message))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [])

  
  useEffect(() => {
    if (!query.trim()) return
    let cancelled = false
    setSearching(true)
    const timer = setTimeout(() => {
      searchShows(query)
        .then((data) => {
          if (cancelled) return
          setShows(data)
          setError('')
        })
        .catch((err) => !cancelled && setError(err.message))
        .finally(() => !cancelled && setSearching(false))
    }, 350)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [query])

 
  useEffect(() => {
    if (query.trim()) return
    let cancelled = false
    setLoading(true)
    getAllShows(0)
      .then((data) => !cancelled && setShows(data))
      .catch((err) => !cancelled && setError(err.message))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
   
  }, [query === ''])

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Navbar />

      <SearchBar
        value={query}
        onChange={setQuery}
        resultCount={shows.length}
        isSearching={searching}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
        <MovieGrid
          shows={shows}
          onSelect={setSelected}
          loading={loading && !query.trim()}
          error={error}
        />
      </main>

      <Footer />

      {selected && <MovieModal show={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
