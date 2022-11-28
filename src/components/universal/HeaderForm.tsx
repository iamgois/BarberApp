import React from 'react'

export interface Props{
  title: string,
  subtitle: string
}

function HeaderForm(props: Props) {
  return (
    <div className='mt-24 text-center'>
        <h1 className='text-white font-black text-2xl'>{props.title}</h1>
        <a href='/register' className='text-white font-black text-sm cursor-pointer'>{props.subtitle}</a>
    </div>
  )
}

export default HeaderForm