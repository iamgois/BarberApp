import React from 'react'

function Form() {

    const nineHour = () => {
        localStorage.setItem('Horário', '09:00')
        return window.location.href = '/confirmation'
    }

    const tenHour = () => {
        localStorage.setItem('Horário', '10:00')
        return window.location.href = '/confirmation'
    }

    const elevenHour = () => {
        localStorage.setItem('Horário', '11:00')
        return window.location.href = '/confirmation'
    }

    const thirteenHour = () => {
        localStorage.setItem('Horário', '13:00')
        return window.location.href = '/confirmation'
    }

    const fourteenHour = () => {
        localStorage.setItem('Horário', '14:00')
        return window.location.href = '/confirmation'
    }

    const fiveteenHour = () => {
        localStorage.setItem('Horário', '15:00')
        return window.location.href = '/confirmation'
    }

    const sixteenHour = () => {
        localStorage.setItem('Horário', '16:00')
        return window.location.href = '/confirmation'
    }

    const seventeenHour = () => {
        localStorage.setItem('Horário', '17:00')
        return window.location.href = '/confirmation'
    }

    const eighteenHour = () => {
        localStorage.setItem('Horário', '18:00')
        return window.location.href = '/confirmation'
    }

    const nineteenHour = () => {
        localStorage.setItem('Horário', '19:00')
        return window.location.href = '/confirmation'
    }

    const twentyHour = () => {
        localStorage.setItem('Horário', '20:00')
        return window.location.href = '/confirmation'
    }

    const twentyOneHour = () => {
        localStorage.setItem('Horário', '21:00')
        return window.location.href = '/confirmation'
    }


    return (
        <div className='grid grid-flow-col grid-cols-2 text-white'>
            <div>
                <p onClick={nineHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>09:00</p>
                <p onClick={tenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>10:00</p>
                <p onClick={elevenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>11:00</p>
                <p onClick={thirteenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>13:00</p>
                <p onClick={fourteenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>14:00</p>
                <p onClick={fiveteenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>15:00</p>
            </div>

            <div>
                <p onClick={sixteenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>16:00</p>
                <p onClick={seventeenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>17:00</p>
                <p onClick={eighteenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>18:00</p>
                <p onClick={nineteenHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>19:00</p>
                <p onClick={twentyHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>20:00</p>
                <p onClick={twentyOneHour} className='border-2 border-[#E95401] w-24 h-8 rounded-xl m-1 text-center'>21:00</p>
            </div>
        </div>
    )
}

export default Form