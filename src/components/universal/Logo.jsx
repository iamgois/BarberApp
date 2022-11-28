import React from 'react'
import * as logo from './public/logo.svg'

function Logo() {
  return (
    <div className='absolute -top-2'>
        <img src={logo}/>
    </div>
  )
}

export default Logo