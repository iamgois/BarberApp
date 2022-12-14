import React from 'react'
import barberOne from '/src/assets/barber-manejo-1.jpg'
import barberTwo from '/src/assets/barber-manejo-2.jpg'
import Profissionais from '../../../unidadeInfos/Profissionais'

function Form() {

    function gustavo(){
        localStorage.setItem('Barbeiro', 'Gustavo')
        return window.location.href = '/manejo/datasmanejo'
    }

    function otavio(){
        localStorage.setItem('Barbeiro', 'Otávio')
        return window.location.href = '/manejo/datasmanejo'
    }

    return (
        <div className='grid grid-flow-row grid-cols-2 gap-2'>
            
            <a className='transition duration-300 ease-in-out cursor-pointer flex w-36 h-36 justify-center border-2 border-[#E95401] rounded-xl opacity-60 hover:opacity-100' onClick={gustavo}>
                <Profissionais name='Gustavo' img={barberOne}/>
            </a>

            <a className='transition duration-300 ease-in-out cursor-pointer flex w-36 h-36 justify-center border-2 border-[#E95401] rounded-xl opacity-60 hover:opacity-100' onClick={otavio}>
                <Profissionais name='Otávio' img={barberTwo}/>
            </a>

        </div>
    )
}

export default Form