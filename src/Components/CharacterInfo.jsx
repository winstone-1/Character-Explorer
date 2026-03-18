import { useOutletContext } from 'react-router-dom'

export default function CharacterInfo() {
  const character = useOutletContext()
  return (
    <div>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  )
}