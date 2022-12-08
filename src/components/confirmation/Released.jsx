import React from 'react'
import Footer from '../universal/Footer'
import Header from '../universal/Header'
import Logo from '../universal/Logo'
import Navbar from '../universal/Navbar'
import ConfirmationIcon from '/src/assets/confirmation.svg'

function Released() {

  return (
    <>
      <Navbar />
      <Logo />
      <Header title='Horário Agendado!'/>
      <img className='w-64' src={ConfirmationIcon} />
      <button onClick={() => window.location.href = '/'} className='border-2 border-[#E95401] w-48 h-12 rounded-2xl hover:bg-[#E95401] transition ease-in-out duration-200 text-white'>Voltar ao início!</button>
      <Footer/>
    </>
  )
}

export default Released