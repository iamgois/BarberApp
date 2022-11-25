import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import Navbar from './Navbar'
import Vetor from './Vetor'

function Home() {
  return (
    <div className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden'>
        <Navbar />
        <Logo />
        <Vetor />
        <Footer />
    </div>
  )
}

export default Home