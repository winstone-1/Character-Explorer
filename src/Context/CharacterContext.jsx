import { createContext, useContext, useState } from 'react'

const CharacterContext = createContext()

export function CharacterProvider({ children }) {
  const [deletedIds, setDeletedIds] = useState(() => {
    const stored = localStorage.getItem('deletedCharacters')
    return stored ? JSON.parse(stored) : []
  })

  const [overrides, setOverrides] = useState(() => {
    const stored = localStorage.getItem('characterOverrides')
    return stored ? JSON.parse(stored) : {}
  })

  function deleteCharacter(id) {
    const updated = [...deletedIds, id]
    setDeletedIds(updated)
    localStorage.setItem('deletedCharacters', JSON.stringify(updated))
  }

  function updateCharacter(id, changes) {
    const updated = { ...overrides, [id]: { ...(overrides[id] || {}), ...changes } }
    setOverrides(updated)
    localStorage.setItem('characterOverrides', JSON.stringify(updated))
  }

  function isDeleted(id) {
    return deletedIds.includes(id)
  }

  function getCharacter(character) {
    if (!character) return character
    return { ...character, ...(overrides[character.id] || {}) }
  }

  return (
    <CharacterContext.Provider value={{ deleteCharacter, updateCharacter, isDeleted, getCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacters() {
  return useContext(CharacterContext)
}