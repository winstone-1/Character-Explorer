import { Link } from 'react-router-dom'

export default function CharacterCard({ character }) {
  return (
    <Link to={`/dashboard/characters/${character.id}`}>
      <img src={character.image} alt={character.name} width={100} />
      <p>{character.name}</p>
    </Link>
  )
}