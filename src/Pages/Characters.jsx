import { useEffect, useState } from 'react'
import CharacterCard from '../Components/CharacterCard'  // check your exact path/casing

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="p-4">Loading...</p>

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  )
}