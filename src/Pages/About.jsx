export default function About() {
  const features = [
    { icon: '🔍', title: 'Search', desc: 'Find any character by name across all 826+ entries.' },
    { icon: '📄', title: 'Pagination', desc: 'Browse characters page by page with smooth navigation.' },
    { icon: '✏️', title: 'Edit', desc: 'Update a character\'s name, status, or species locally.' },
    { icon: '🗑️', title: 'Delete', desc: 'Remove characters from your view, persisted in localStorage.' },
    { icon: '📺', title: 'Episodes', desc: 'See every episode a character has appeared in.' },
    { icon: '🔗', title: 'React Router', desc: 'Full client-side routing with nested routes and tabs.' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">About</h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Character Explorer is a React assignment built to demonstrate React Router DOM,
          component architecture, and API integration using the Rick and Morty API.
        </p>
      </div>

      {/* Features grid */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Features</h2>
      <div className="grid grid-cols-2 gap-4 mb-10">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="bg-white rounded-xl shadow p-4 flex gap-3 items-start">
            <span className="text-2xl">{icon}</span>
            <div>
              <p className="font-semibold text-gray-700">{title}</p>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {['React', 'React Router DOM', 'Tailwind CSS', 'Vite', 'Rick & Morty API', 'localStorage'].map(tech => (
          <span
            key={tech}
            className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}