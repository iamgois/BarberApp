import React from 'react'
import barberOne from '../../../../../public/barber-manejo-1.jpg'
import barberTwo from '../../../../../public/barber-manejo-2.jpg'
import Profissionais from '../../../unidadeInfos/Profissionais'

function Form() {


    return (
        <div className='grid grid-flow-row grid-cols-2 gap-2'>
            
            <a className='transition duration-300 ease-in-out cursor-pointer flex w-36 h-36 justify-center border-2 border-[#E95401] rounded-xl opacity-60 hover:opacity-100' onClick={() => localStorage.setItem('Barbeiro', 'Gustavo')}>
                <Profissionais name='Gustavo' img={barberOne}/>
            </a>

            <a className='transition duration-300 ease-in-out cursor-pointer flex w-36 h-36 justify-center border-2 border-[#E95401] rounded-xl opacity-60 hover:opacity-100' onClick={() => localStorage.setItem('Barbeiro', 'Otávio')}>
                <Profissionais name='Otávio' img={barberTwo}/>
            </a>

        </div>
    )
}

export default Form