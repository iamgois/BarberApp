import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col items-center'>
        <p className='text-xs text-white p-1'>Um novo conceito em barbearia</p>
        <a href='/login' ><button className='transition ease-in-out duration-300 border-[#E95401] bg-[#E95401] w-64 h-12 rounded-3xl font-semibold text-white hover:bg-transparent hover:border-2 hover:border-[#E95401]'>Agende seu horário</button></a>
        <p className='text-xs text-white opacity-50 p-1'>Todos os direitos reservados ® Thbarberclub</p>
        <button className='border-[1px] border-[#E95401] rounded-md w-20 h-5 text-[10px] text-white transition ease-in-out duration-300 hover:bg-[#E95401]'>Contato</button>
    </div>
  )
}

export default Footer