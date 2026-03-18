import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="w-48 h-screen bg-gray-800 flex flex-col p-4 gap-2">
      <NavLink to="/dashboard" className="text-white hover:text-green-400">Home</NavLink>
      <NavLink to="/dashboard/characters" className="text-white hover:text-green-400">Characters</NavLink>
      <NavLink to="/dashboard/about" className="text-white hover:text-green-400">About</NavLink>
    </nav>
  )
}