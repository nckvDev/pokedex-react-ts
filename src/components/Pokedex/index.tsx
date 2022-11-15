import React from 'react'
import * as C from './styles'
import { Pokemon } from '../../types/Pokemon'
import { PokemonCard } from '../PokemonCard'

type PokedexProps = {
  setModal: (value: boolean) => void
  setPokemonData: (data: Pokemon) => void
  pokemonList: Pokemon[]
  setPokemonList: (data: Pokemon[]) => void
  pokemonAmount: number
  setPokemonAmount: (value: number) => void
  error: boolean
  loading: boolean
  setLoading: (value: boolean) => void
  page: number
  setPage: (value: number) => void
  showPagination: boolean
  setShowPagination: (value: boolean) => void
  disabledButton: boolean
  searchBarRef: React.RefObject<HTMLDivElement>
}

export const Pokedex = (props: PokedexProps) => {
  return (
    <C.Wrapper>
      Pokedex
      <div className='main-container'>
        <C.PokemonList>
          {props.pokemonList.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              setModal={props.setModal}
              setPokemonData={props.setPokemonData}
            />
          ))}
        </C.PokemonList>
      </div>
    </C.Wrapper>
  )
}
