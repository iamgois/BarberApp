import React from 'react'

function Form() {

    function addCorte(){
        localStorage.setItem('service', 'Corte')
        return window.location.href = '/manejo/profissionaismanejo'
    }

    function addBarba(){
        localStorage.setItem('service', 'Barba')
        return window.location.href = '/manejo/profissionaismanejo'
    }

    function addCombo(){
        localStorage.setItem('service', 'Combo')
        return window.location.href = '/manejo/profissionaismanejo'
    }

    function addSobrancelha(){
        localStorage.setItem('service', 'Sobrancelha')
        return window.location.href = '/manejo/profissionaismanejo'
    }

    return (
        <div>
            <form action='/manejo/profissionaismanejo' id='services' className='flex flex-col items-center'>

                <div className='flex items-center justify-center'>
                    <input onClick={addCorte} type="checkbox" name="corte" id="corte" className='z-20 cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Corte <span className='opacity-20 text-xs'>R$40,00</span></p>
                </div>

                <div className='flex items-center justify-center mt-1'>
                    <input onClick={addBarba} type="checkbox" name="barba" id="barba" className='cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Barba <span className='opacity-20 text-xs'>R$35,00</span></p>
                </div>

                <div className='flex items-center justify-center mt-1'>
                    <input onClick={addCombo} type="checkbox" name="combo" id="combo" className='cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Combo <span className='opacity-20 text-xs'>R$70,00</span></p>
                </div>

                <div className='flex items-center justify-center mt-1'>
                    <input onClick={addSobrancelha} type="checkbox" name="" id="" className='cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Sobrancelha <span className='opacity-20 text-xs'>R$20,00</span></p>
                </div>

            </form>
        </div>
    )
}

export default Form