import React from 'react'
import * as C from './styles'
import { Pokemon } from '../../types/Pokemon'
import { PokemonCard } from '../PokemonCard'
import { ErrorMessage } from '../helper/ErrorMessage'
import { Loading } from '../helper/Loading'
import UsePagination from '../Pagination'

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
  return props.error ? (
    <ErrorMessage />
  ) : (
    <C.Wrapper>
      <div className='main-container'>
        {props.loading ? (
          <Loading />
        ) : (
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
        )}
        {props.pokemonList.length > 1 && props.loading === false && props.showPagination === true && (
          <UsePagination
            setPokemonList={props.setPokemonList}
            setLoading={props.setLoading}
            searchBarRef={props.searchBarRef}
            page={props.page}
            setPage={props.setPage}
          />
        )}
        {props.pokemonList.length > 1 && props.loading === false && props.showPagination === true && (
          <C.ButtonContainer></C.ButtonContainer>
        )}
      </div>
    </C.Wrapper>
  )
}
