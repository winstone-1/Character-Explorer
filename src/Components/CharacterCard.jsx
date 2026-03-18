import { Link } from 'react-router-dom'

export default function CharacterCard({ character }) {
  return (
    <Link to={`/dashboard/characters/${character.id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer">
        <img src={character.image} alt={character.name} className="w-full rounded-t-lg" />
        <p className="text-center font-semibold p-2">{character.name}</p>
      </div>
    </Link>
  )
}