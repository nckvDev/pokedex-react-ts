import { useEffect, useRef, useState } from 'react'
import { fetchPokemonList } from './api/fetchPokemonList'
import { HeroSection } from './components/HeroSection'
import { Pokedex } from './components/Pokedex'
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

  useEffect(() => {
    ;async () => {
      setLoading(true)
      setPokemonList(await fetchPokemonList(1))
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement

    modal ? (html.style.overflow = 'hidden') : (html.style.overflow = 'initial')
  }, [modal])

  useEffect(() => {
    setError(false)
  }, [pokemonList])

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
      <Pokedex
        setModal={setModal}
        setPokemonData={setPokemonData}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        error={error}
        loading={loading}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
        showPagination={showPagination}
        setShowPagination={setShowPagination}
        searchBarRef={searchBarRef}
        disabledButton={disabledButton}
      />
      {pokemonData && modal && <PokemonModal setModal={setModal} pokemonData={pokemonData} />}
    </>
  )
}

export default App
