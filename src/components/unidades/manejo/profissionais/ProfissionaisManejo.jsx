import React from 'react'
import Form from './Form'
import Footer from './Footer'
import Header from './Header'
import Logo from './Logo'
import Navbar from './Navbar'

function ProfissionaisManejo() {
  return (
    <div className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden justify-between'>
        <Navbar />
        <Logo />
        <Header />
        <Form />
        <Footer />
    </div>
  )
}

export default ProfissionaisManejo