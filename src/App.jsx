import React from 'react'
import About from './Pages/About'
import CharacterDetail from './Pages/CharacterDetail'
import Characters from './Pages/Characters'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import CharacterInfo from './Components/CharacterInfo'
import CharacterEpisodes from './Components/CharacterEpisodes'
import { CharacterProvider } from './Context/CharacterContext'

function App() {
  return (
    <CharacterProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterDetail />}>
            <Route index element={<Navigate to="info" />} />
            <Route path="info" element={<CharacterInfo />} />
            <Route path="episodes" element={<CharacterEpisodes />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </CharacterProvider>
  )
}

export default App