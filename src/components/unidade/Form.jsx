import React from 'react'

function Form() {

    function manejo(){
        localStorage.setItem('unidade', 'Manejo')
    }

    function patiomix(){
        localStorage.setItem('unidade', 'Shop. Patiomix')
    }

    function resende(){
        localStorage.setItem('unidade', 'Resende Shop.')
    }

    return (
        <div>
            <form className='flex flex-col items-center'>

                <a href="/manejo" onClick={manejo} className='transition duration-300 ease-in-out bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-3xl text-center text-white font-bold flex items-center justify-center m-1 hover:bg-[#E95401]'>Manejo</a>
                
                <a href="/service" onClick={patiomix} className='transition duration-300 ease-in-out bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-3xl text-center text-white font-bold flex items-center justify-center m-1 hover:bg-[#E95401]'>Shop. Patiomix</a>
                
                <a href="/service" onClick={resende} className='transition duration-300 ease-in-out bg-transparent border-[3px] border-[#E95401] w-80 h-12 rounded-3xl text-center text-white font-bold flex items-center justify-center m-1 hover:bg-[#E95401]'>Resende Shop.</a>

            </form>
        </div>
    )
}

export default Form