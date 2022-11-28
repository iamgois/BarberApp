import React from 'react'
import Form from './Form'
import Footer from '../universal/Footer'
import HeaderForm from '../universal/HeaderForm'
import Logo from './Logo'
import Navbar from '../universal/Navbar'

function Login() {
  return (
    <div className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden'>
        <Navbar />
        <Logo />
        <HeaderForm title='Entre agora' subtitle='Ou faça o cadastro agora'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Login 