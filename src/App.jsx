import { Route, Routes } from 'react-router-dom'


import Home from './views/Home'
import Pokemon from './views/Pokemon'
import './App.css'
import Navbar from './components/Navbar'
import PokemonCard from './components/PokemonCard'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokemon' element={<Pokemon />}/>
        <Route path='/pokemon/:pokemonName' element={<Pokemon />}/>
      </Routes>
    </>
  )
}

export default App
