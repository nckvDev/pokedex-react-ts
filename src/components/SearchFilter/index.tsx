import React, { SyntheticEvent, useEffect, useState } from 'react'
import * as C from './styles'
import { fetchPokemonByType } from '../../api/fetchPokemonByType'
import { Pokemon } from '../../types/Pokemon'
import { pokemonTypes } from '../../pokemonTypes'
import { PokemonType } from '../PokemonType'

type SearchFilterProps = {
  pokemonAmount: number
  setPokemonAmount: (value: number) => void
  setPokemonList: (data: Pokemon[]) => void
  setLoading: (value: boolean) => void
  setShowPagination: (value: boolean) => void
  setDisabledButton: (value: boolean) => void
}

export const SearchFilter = (props: SearchFilterProps) => {
  const [selectedType, setSeletedType] = useState('')

  const handleClick = async (e: SyntheticEvent) => {
    const typeName = (e.currentTarget as HTMLButtonElement).value
    setSeletedType(typeName)
    props.setPokemonAmount(9)
    props.setLoading(true)
    props.setPokemonList(await fetchPokemonByType(typeName))
    props.setLoading(false)
    props.setShowPagination(false)
  }

  useEffect(() => {
    selectedType &&
      (async () => {
        props.setDisabledButton(true)
        props.setPokemonList(await fetchPokemonByType(selectedType, props.pokemonAmount))
        props.setDisabledButton(false)
      })()
  }, [props.pokemonAmount])

  return (
    <C.Container>
      <C.Title>ค้นหาตามประเภท</C.Title>
      {pokemonTypes.map(({ name }) => (
        <PokemonType key={name} type={name} tabIndex={true} handleClick={handleClick} />
      ))}
    </C.Container>
  )
}
