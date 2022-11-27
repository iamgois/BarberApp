import React from 'react'

function Form() {

    return (
        <div>
            <form id='services' className='flex flex-col items-center'>

                <div className='flex items-center justify-center'>
                    <input type="checkbox" name="corte" id="corte" className='cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Corte <span className='opacity-20 text-xs'>R$40,00</span></p>
                </div>

                <div className='flex items-center justify-center mt-1'>
                    <input type="checkbox" name="barba" id="barba" className='cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Barba <span className='opacity-20 text-xs'>R$35,00</span></p>
                </div>

                <div className='flex items-center justify-center mt-1'>
                    <input type="checkbox" name="combo" id="combo" className='cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Combo <span className='opacity-20 text-xs'>R$70,00</span></p>
                </div>

                <div className='flex items-center justify-center mt-1'>
                    <input type="checkbox" name="" id="" className='cursor-pointer appearance-none w-64 h-10 bg-transparent border-2 border-[#E95401] checked:bg-[#E95401] rounded-full transition ease-in-out duration-300'/>
                    <p className='absolute text-white font-bold'>Sobrancelha <span className='opacity-20 text-xs'>R$20,00</span></p>
                </div>

                <button className='mt-4 border-2 border-[#E95401] rounded-full text-white font-bold bg-[#E95401] w-48 h-10 hover:bg-transparent transition duration-300 ease-in-out'>Escolher data</button>

            </form>
        </div>
    )
}

export default Form