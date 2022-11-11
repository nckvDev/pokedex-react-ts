import React from 'react'
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
  searchBarRef: React.MutableRefObject<HTMLDivElement>
}

export const SearchBar = (props: SearchBarProps) => {
  return <div>SearchBar</div>
}
