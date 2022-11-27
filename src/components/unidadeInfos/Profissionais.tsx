import React from 'react'

export interface Props{
  name: string,
  img: string
}

function Profissionais(props: Props) {
  return (
    <>
    <img src={props.img} className='object-cover rounded-xl'/>
    <p className='absolute text-white font-bold mt-28'>
      {props.name}
    </p>
    </>
  )
}

export default Profissionais