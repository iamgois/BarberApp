import React from 'react'
import Form from './Form'
import Footer from '../universal/Footer'
import Header from '../universal/Header'
import Logo from './Logo'
import Navbar from '../universal/Navbar'

function Unidade() {
  return (
    <div className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden justify-between'>
        <Navbar />
        <Logo />
        <Header title='Escolha uma unidade' />
        <Form />
        <Footer />
    </div>
  )
}

export default Unidade