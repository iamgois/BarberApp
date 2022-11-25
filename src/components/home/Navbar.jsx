import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full max-w-sm flex items-center justify-between p-4'>
        <button className='border-2 border-[#E95401] text-white font-bold rounded-[10px] w-20 h-8 transition ease-in-out duration-300 hover:bg-[#E95401]'><a href="/login">Entrar</a></button>
        <a href='https://www.instagram.com/thbarberclub' target='_blank' className='text-[#E95401] text-3xl'><i class="fa-brands fa-instagram"></i></a>
    </div>
  )
}
