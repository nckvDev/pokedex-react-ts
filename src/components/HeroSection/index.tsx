import * as C from './styles'

import { Pokemon } from '../../types/Pokemon'
import { Header } from '../Layout/Header'

type HeroSectionProps = {
  setModal: (value: boolean) => void
  setPokemonData: (data: Pokemon) => void
}

export const HeroSection = ({ setModal, setPokemonData }: HeroSectionProps) => {
  return (
    <C.Container>
      <Header />
    </C.Container>
  )
}
