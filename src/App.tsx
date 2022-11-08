import { useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { Pokemon } from './types/Pokemon'

function App() {
  const [modal, setModal] = useState(false)
  const [pokemonData, setPokemonData] = useState<Pokemon>()

  return (
    <>
      <HeroSection setModal={setModal} setPokemonData={setPokemonData} />
    </>
  )
}

export default App
