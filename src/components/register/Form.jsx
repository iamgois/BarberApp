import React from 'react'

function Form() {
    return (
        <div>
            <form className='flex flex-col mt-1 items-center'>
                <input required type="text" name="name" id="name" placeholder='Nome completo' className='bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-2xl text-center text-white font-bold m-1'/>

                <input required type="email" name="email" id="email" placeholder='Digite seu email' className='bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-2xl text-center text-white font-bold m-1'/>

                <input required type="text" name="password" id="password" placeholder='Crie uma senha' className='bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-2xl text-center text-white font-bold m-1'/>

                <input  required type="text" name="password" id="password" placeholder='Repita sua senha' className='bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-2xl text-center text-white font-bold m-1'/>

                <div className='flex items-center'>
                    <input  required className='transition duration-200 ease-in-out cursor-pointer appearance-none w-5 h-5 border-2 border-[#E95401] checked:bg-[#E95401] rounded-full checked:text-white' type="checkbox" name="termos" id="termos" />
                    <p className='text-white pl-2 text-xs'>Aceito os termos de uso e diretrizes do app</p>
                </div>

                <button type="submit" className='text-white font-bold bg-[#E95401] w-48 h-10 rounded-[10px] border-2 border-[#E95401] hover:bg-transparent hover:border-[#E95401] hover:border-2 transition duration-300 ease-in-out mt-2'>Entrar</button>

                <a href='#' className='text-white font-bold text-xs mt-2 hover:text-slate-400 transition ease-in-out duration-300'>Esqueci minha senha</a>
            </form>
        </div>
    )
}

export default Form