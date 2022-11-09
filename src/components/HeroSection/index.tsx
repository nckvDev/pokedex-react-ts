import * as C from './styles'

import { ReactComponent as BoltIcon } from '../../assets/icon-bolt.svg'
import { ReactComponent as DividerIcon } from '../../assets/divider-fire.svg'
import imgSrc from '../../assets/img-charizard-min.png'

import { Pokemon } from '../../types/Pokemon'
import { Header } from '../Layout/Header'
import { PokemonType } from '../PokemonType'

type HeroSectionProps = {
  setModal: (value: boolean) => void
  setPokemonData: (data: Pokemon) => void
}

export const HeroSection = ({ setModal, setPokemonData }: HeroSectionProps) => {
  const handleClick = async () => {
    //
  }

  return (
    <C.Container>
      <Header />
      <div className='main-container'>
        <C.Content>
          <C.CharizardData>
            <C.CharizardNumber>#766</C.CharizardNumber>
            <C.CharizardTypes>
              <PokemonType type={'fire'} tabIndex={false} />
              <PokemonType type={'flying'} tabIndex={false} />
            </C.CharizardTypes>
            <C.CharizardName>Charizard</C.CharizardName>
            <C.CharizardDescription>
              Charizard คล้ายกับมังกรยุโรปแบบดั้งเดิมขนาดใหญ่ แม้จะมีความคล้ายคลึงกัน Charizard ก็เป็นโปเกมอนจาก
              ประเภทไฟและบิน ไม่ใช่ประเภทมังกร ยกเว้นใน "เมกะ Charizard X"
              อย่างไรก็ตามเขาสามารถเรียนรู้การโจมตีของประเภท มังกร.
            </C.CharizardDescription>
            <C.MoreDetailsButton onClick={handleClick}>
              <BoltIcon />
              รายละเอียดเพิ่มเติม
            </C.MoreDetailsButton>
          </C.CharizardData>

          <C.Divider>
            <DividerIcon />
          </C.Divider>

          <C.CharizardImg>
            <img src={imgSrc} width='488' height='528' alt='Charizard image' />
          </C.CharizardImg>
        </C.Content>
      </div>
    </C.Container>
  )
}
