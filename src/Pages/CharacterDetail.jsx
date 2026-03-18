import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function CharacterDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="p-4">Loading...</p>

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600 hover:underline">
        ← Back
      </button>

      <div className="flex gap-6 mb-6">
        <img src={character.image} alt={character.name} className="w-48 rounded-lg" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-4">
        <NavLink
          to="info"
          className={({ isActive }) =>
            isActive ? 'pb-2 border-b-2 border-blue-600 font-semibold' : 'pb-2 text-gray-500'
          }
        >
          Info
        </NavLink>
        <NavLink
          to="episodes"
          className={({ isActive }) =>
            isActive ? 'pb-2 border-b-2 border-blue-600 font-semibold' : 'pb-2 text-gray-500'
          }
        >
          Episodes
        </NavLink>
      </div>

      
      <Outlet context={character} />
    </div>
  )
}