import { useEffect, useState } from 'react'
import CharacterCard from '../Components/CharacterCard'

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
  }, [])

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p className="p-4">Loading...</p>

  return (
    <div className="p-4">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid grid-cols-3 gap-4">
        {filtered.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  )
}