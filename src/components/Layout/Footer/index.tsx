import React from 'react'
import { SocialMedia } from '../../SocialMedia'
import * as C from './styles'

export const Footer = () => {
  return (
    <div className='main-container'>
      <C.Container>
        <C.Copy>
          <span>ลิขสิทธิ์ภาพสำหรับ Nintendo & The Pokémon Company</span>
          <span>ดึงข้อมูลจาก API - pokeapi.co</span>
        </C.Copy>
        <SocialMedia />
      </C.Container>
    </div>
  )
}
