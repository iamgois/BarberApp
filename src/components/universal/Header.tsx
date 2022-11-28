import React from 'react'

export interface Props{
  title: string
}

function Header(props: Props) {
  return (
    <div className='mt-24 text-center'>
        <h1 className='text-white font-black text-2xl'>{props.title}</h1>
    </div>
  )
}

export default Header