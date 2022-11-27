import React from 'react'

function Form() {

    function date(e){

        e.preventDefault()
        
        let date = document.getElementById('date').value
        
        return localStorage.setItem('Data', date)

    }

    return (
        <form className='flex flex-col items-center'>
            <input type="date" name="date" id="date" className='bg-[#E95401] text-white w-48 h-12 font-bold text-center rounded-2xl p-5'/>

            <button onClick={date} className='transition duration-300 ease-in-out border-[#E95401] border-2 text-white bg-[#E95401] mt-5 w-36 h-8 rounded-full hover:border-2 hover:border-[#E95401] hover:bg-transparent'>Confirmar</button>
        </form>
    )
}

export default Form