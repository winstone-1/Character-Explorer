import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3">
          Rick & Morty <span className="text-green-500">Explorer</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto">
          Browse, search, and manage characters from across the multiverse.
        </p>
      </div>

      {/* CTA */}
      <Link
        to="/dashboard/characters"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition shadow-md hover:shadow-lg"
      >
        Browse Characters →
      </Link>

      {/* Stats cards */}
      <div className="mt-16 grid grid-cols-3 gap-6 w-full max-w-lg">
        {[
          { label: 'Characters', value: '826+' },
          { label: 'Episodes', value: '51' },
          { label: 'Locations', value: '126+' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <span className="text-3xl font-bold text-green-500">{value}</span>
            <span className="text-sm text-gray-500 mt-1">{label}</span>
          </div>
        ))}
      </div>

      
      <p className="mt-12 text-xs text-gray-400">
        Powered by the{' '}
        <a
          href="https://rickandmortyapi.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-green-500"
        >
          Rick and Morty API
        </a>
      </p>
    </div>
  )
}