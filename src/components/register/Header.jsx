import React from 'react'

function Header() {
  return (
    <div className='mt-16 text-center z-10'>
        <h1 className='text-white font-black text-2xl'>Registre agora</h1>
        <p className='text-white text-xs'>Ou faça o <a href='/login' className='text-[#E95401] underline'>login</a></p>
    </div>
  )
}

export default Header