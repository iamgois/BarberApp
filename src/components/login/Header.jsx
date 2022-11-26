import React from 'react'

function Header() {
  return (
    <div className='mt-24 text-center'>
        <h1 className='text-white font-black text-2xl'>Entre agora</h1>
        <p className='text-white text-xs'>Ou faça seu <a href='/register' className='text-[#E95401] underline'>cadastro</a></p>
    </div>
  )
}

export default Header