import React from 'react'
import * as C from './styles'
import { Pokemon } from '../../types/Pokemon'

type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void
  pokemonAmount: number
  setPokemonAmount: (value: number) => void
  setError: (value: boolean) => void
  setLoading: (value: boolean) => void
  setPage: (value: number) => void
  setShowPagination: (value: boolean) => void
  disableButton: boolean
  setDisabledButton: (value: boolean) => void
  searchBarRef: React.MutableRefObject<HTMLDivElement>
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <div className='main-container' ref={props.searchBarRef}>
      <C.Container>Search</C.Container>
    </div>
  )
}
