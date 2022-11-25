import React from 'react'

function Form() {
    return (
        <div>
            <form className='flex flex-col mt-20 items-center'>
                <input type="email" name="email" id="email" placeholder='Digite seu email' className='bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-2xl text-center text-white font-bold'/>
                <input type="password" name="password" id="password" placeholder='Digite sua senha' className='bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-2xl text-center mt-2 text-white font-bold'/>

                <button type="submit" className='text-white font-bold bg-[#E95401] w-48 h-10 rounded-[10px] mt-28 border-2 border-[#E95401] hover:bg-transparent hover:border-[#E95401] hover:border-2 transition duration-300 ease-in-out'>Entrar</button>
                <a href='#' className='text-white font-bold text-xs mt-2 hover:text-slate-400 transition ease-in-out duration-300'>Esqueci minha senha</a>
            </form>
        </div>
    )
}

export default Form