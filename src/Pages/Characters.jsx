import { useEffect, useState } from 'react'
import CharacterCard from '../Components/CharacterCard'
import { useCharacters } from '../Context/CharacterContext'

function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow animate-pulse">
      <div className="w-full aspect-square bg-gray-200 rounded-t-lg" />
      <div className="p-2 flex justify-center">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  )
}

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { isDeleted } = useCharacters()

  useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${search}`)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          setCharacters(data.results)
          setTotalPages(data.info.pages)
        } else {
          setCharacters([])
          setTotalPages(1)
        }
        setLoading(false)
      })
  }, [page, search])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const visible = characters.filter(c => !isDeleted(c.id))

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search characters..."
        value={search}
        onChange={handleSearch}
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {loading ? (
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : visible.length === 0 ? (
        <p className="p-4 text-gray-500">No characters found.</p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            {visible.map(char => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="px-3 py-1 rounded border text-sm disabled:opacity-40 hover:bg-gray-100"
            >«</button>
            <button
              onClick={() => setPage(p => p - 1)}
              disabled={page === 1}
              className="px-3 py-1 rounded border text-sm disabled:opacity-40 hover:bg-gray-100"
            >‹</button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
              .reduce((acc, p, i, arr) => {
                if (i > 0 && p - arr[i - 1] > 1) acc.push('...')
                acc.push(p)
                return acc
              }, [])
              .map((p, i) =>
                p === '...' ? (
                  <span key={`ellipsis-${i}`} className="px-2 text-gray-400">...</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded border text-sm ${
                      p === page ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-100'
                    }`}
                  >{p}</button>
                )
              )}

            <button
              onClick={() => setPage(p => p + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 rounded border text-sm disabled:opacity-40 hover:bg-gray-100"
            >›</button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
              className="px-3 py-1 rounded border text-sm disabled:opacity-40 hover:bg-gray-100"
            >»</button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-2">
            Page {page} of {totalPages}
          </p>
        </>
      )}
    </div>
  )
}