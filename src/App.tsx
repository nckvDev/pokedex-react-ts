import { useRef, useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { PokemonModal } from './components/PokemonModal'
import { SearchBar } from './components/SearchBar'
import { Pokemon } from './types/Pokemon'

function App() {
  const [modal, setModal] = useState(false)
  const [pokemonData, setPokemonData] = useState<Pokemon>()
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [pokemonAmount, setPokemonAmount] = useState(9)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [showPagination, setShowPagination] = useState(true)
  const [disabledButton, setDisabledButton] = useState(false)
  const searchBarRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <HeroSection setModal={setModal} setPokemonData={setPokemonData} />
      <SearchBar
        setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        setError={setError}
        setLoading={setLoading}
        setPage={setPage}
        setShowPagination={setShowPagination}
        disableButton={disabledButton}
        setDisabledButton={setDisabledButton}
        searchBarRef={searchBarRef}
      />
      {pokemonData && modal && <PokemonModal setModal={setModal} pokemonData={pokemonData} />}
    </>
  )
}

export default App
