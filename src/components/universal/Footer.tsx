import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col items-center mt-8'>
        <p className='text-xs text-white opacity-50 p-1'>Todos os direitos reservados ® Thbarberclub</p>
        <button className='border-[1px] border-[#E95401] rounded-md w-20 h-5 text-[10px] text-white transition ease-in-out duration-300 hover:bg-[#E95401]'>Contato</button>
    </div>
  )
}

export default Footer