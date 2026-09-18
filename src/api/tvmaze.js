const BASE_URL = 'https://api.tvmaze.com'


export async function searchShows(query) {
  if (!query || !query.trim()) return []
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error(`Search failed: ${res.status}`)
  const data = await res.json()
  return data.map((entry) => entry.show)
}


export async function getAllShows(page = 0) {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`)
  if (!res.ok) throw new Error(`Failed to load shows: ${res.status}`)
  return res.json()
}


export async function getShowDetails(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}?embed=cast`)
  if (!res.ok) throw new Error(`Failed to load show ${id}: ${res.status}`)
  return res.json()
}

export function formatRating(show) {
  const val = show?.rating?.average
  return typeof val === 'number' ? val.toFixed(1) : 'N/A'
}

export function releaseYear(show) {
  return show?.premiered ? show.premiered.slice(0, 4) : 'TBA'
}


export function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '')
}
