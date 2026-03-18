import { useOutletContext } from 'react-router-dom'

export default function CharacterEpisodes() {
  const character = useOutletContext()
  return (
    <ul className="grid grid-cols-4 gap-2">
      {character.episode.map((ep, i) => (
        <li key={i} className="bg-gray-100 rounded px-3 py-1 text-sm text-center">
          Episode {ep.split('/').pop()}
        </li>
      ))}
    </ul>
  )
}