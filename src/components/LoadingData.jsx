import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const LoadingData = () => {
    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center' id='pageLoading'>
            <AiOutlineLoading3Quarters id='spinner' className={`text-5xl animate-spin`} />
        </div>
    )
}

export default LoadingData
