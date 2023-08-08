import React from 'react'
import Headertop from './Headertop'
import Headermid from './Headermid'
import Headerbottom from './Headerbottom'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <Headertop />
        <Headermid />
        <Headerbottom />
    </div>
  )
}

export default Header