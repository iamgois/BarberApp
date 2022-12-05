import React from 'react'
import Footer from '../universal/Footer'
import Header from '../universal/Header'
import Logo from '../universal/Logo'
import Navbar from '../universal/Navbar'

function DataManejo() {

  var date = localStorage.getItem('Data')
  var unidade = localStorage.getItem('unidade')
  var service = localStorage.getItem('service')
  var barber = localStorage.getItem('Barbeiro')
  var horario = localStorage.getItem('Horário')


  return (
    <div className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden justify-between'>
        <Navbar />
        <Logo />
        <div className='text-white text-center'>
          <Header title='O seu agendamento:'/>
          <p className='text-white opacity-50 font-thin text-sm'>Confira todos os dados</p>
        </div>

        <div className='text-white'>
          <p className='border-[1px] border-[#E95401] w-56 h-10 text-center m-1 flex items-center justify-center rounded-xl font-medium'>Data: {date}</p>
          <p className='border-[1px] border-[#E95401] w-56 h-10 text-center m-1 flex items-center justify-center rounded-xl font-medium'>Unidade: {unidade}</p>
          <p className='border-[1px] border-[#E95401] w-56 h-10 text-center m-1 flex items-center justify-center rounded-xl font-medium'>Serviço: {service}</p>
          <p className='border-[1px] border-[#E95401] w-56 h-10 text-center m-1 flex items-center justify-center rounded-xl font-medium'>Barbeiro: {barber}</p>
          <p className='border-[1px] border-[#E95401] w-56 h-10 text-center m-1 flex items-center justify-center rounded-xl font-medium'>Horário: {horario}</p>
        </div>

        <button className='text-white border-2 border-[#E95401] w-52 h-10 rounded-xl hover:bg-[#E95401] transition ease-in-out '>Confirmar</button>


        <Footer />
    </div>
  )
}

export default DataManejo