import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieListing from './pages/MovieListing'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MovieListing />} />
    </Routes>
  )
}
