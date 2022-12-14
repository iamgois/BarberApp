import React from 'react'

export default function Navbar() {

  function back(){
    window.history.back()
  }

  return (
    <div className='w-full max-w-sm flex items-center justify-between p-4'>
        <button onClick={back} className='border-2 border-[#E95401] text-white font-bold rounded-[10px] w-20 h-8 transition ease-in-out duration-300 hover:bg-[#E95401]'><i class="fa-solid fa-arrow-left"></i></button>
      <a href='https://www.instagram.com/thbarberclub' target='_blank' className='text-[#E95401] text-3xl'><i class="fa-brands fa-instagram"></i></a>
    </div>
  )
}
