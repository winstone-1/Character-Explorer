import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCharacters } from '../Context/CharacterContext'

export default function CharacterDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: '', status: '', species: '' })
  const { deleteCharacter, updateCharacter, isDeleted, getCharacter } = useCharacters()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data)
        // Populate form once data loads
        setForm({ name: data.name, status: data.status, species: data.species })
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    if (!loading && isDeleted(Number(id))) {
      navigate('/dashboard/characters', { replace: true })
    }
  }, [loading, id, isDeleted])

  if (loading) return <p className="p-4">Loading...</p>

  const display = getCharacter(character)

  function handleDelete() {
    if (confirm(`Delete ${display.name}?`)) {
      deleteCharacter(character.id)
      navigate('/dashboard/characters', { replace: true })
    }
  }

  function handleUpdate(e) {
    e.preventDefault()
    updateCharacter(character.id, form)
    setShowModal(false)
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-sm text-blue-600 hover:underline">
          ← Back
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg"
          >
            ✏️ Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg"
          >
            🗑️ Delete
          </button>
        </div>
      </div>

      <div className="flex gap-6 mb-6">
        <img src={display.image} alt={display.name} className="w-48 rounded-lg" />
        <div>
          <h2 className="text-2xl font-bold mb-1">{display.name}</h2>
          <p className="text-sm text-gray-500">{display.status} · {display.species}</p>
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

      <Outlet context={display} />

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="text-lg font-bold mb-4">Edit Character</h3>
            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
              <div>
                <label className="text-sm text-gray-600 block mb-1">Name</label>
                <input
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Status</label>
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                >
                  <option>Alive</option>
                  <option>Dead</option>
                  <option>unknown</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Species</label>
                <input
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={form.species}
                  onChange={e => setForm({ ...form, species: e.target.value })}
                />
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border py-2 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}