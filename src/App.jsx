import React from 'react'
import About from './Pages/About'
import CharacterDetail from './Pages/CharacterDetail'
import Characters from './Pages/Characters'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
