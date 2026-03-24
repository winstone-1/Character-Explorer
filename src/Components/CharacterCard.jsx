import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCharacters } from '../Context/CharacterContext'

export default function CharacterCard({ character }) {
  const { deleteCharacter, updateCharacter, getCharacter } = useCharacters()
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({
    name: character.name,
    status: character.status,
    species: character.species,
  })

  const display = getCharacter(character)

  function handleDelete(e) {
    e.preventDefault()
    if (confirm(`Delete ${display.name}?`)) {
      deleteCharacter(character.id)
    }
  }

  function handleUpdate(e) {
    e.preventDefault()
    updateCharacter(character.id, form)
    setShowModal(false)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow hover:shadow-md transition relative group">
        <Link to={`/dashboard/characters/${character.id}`}>
          <img src={display.image} alt={display.name} className="w-full rounded-t-lg" />
          <p className="text-center font-semibold p-2">{display.name}</p>
        </Link>

        {/* Action buttons - visible on hover */}
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={(e) => { e.preventDefault(); setShowModal(true) }}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded shadow"
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded shadow"
          >
            🗑️
          </button>
        </div>
      </div>

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
    </>
  )
}