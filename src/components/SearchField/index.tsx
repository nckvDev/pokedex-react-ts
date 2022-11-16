import React, { SyntheticEvent, useState } from 'react'
import * as C from './styles'
import { Pokemon } from '../../types/Pokemon'
import { fetchPokemon } from '../../api/fetchPokemon'
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg'

type SearchFieldProps = {
  setPokemonList: (data: Pokemon[]) => void
  setError: (value: boolean) => void
  setLoading: (value: boolean) => void
}

export const SearchField = (props: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    props.setLoading(true)
    const requestPokemon = await fetchPokemon(inputValue.toLowerCase())

    requestPokemon.response?.ok ? props.setPokemonList([requestPokemon.data]) : props.setError(requestPokemon?.error)

    props.setLoading(false)
    setInputValue('')
  }

  return (
    <C.Container onSubmit={handleSubmit}>
      <C.InputText
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder='ค้นหาโปเกมอน'
        required
      />
      <C.SearchButton>
        <SearchIcon />
      </C.SearchButton>
    </C.Container>
  )
}
