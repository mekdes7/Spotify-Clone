import React from 'react'
import { assets } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate();
    return (
        <>
            <div className='w-full flex items-center justify-between font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={()=>navigate(-1)} src={assets.arrow_left} alt='arrow' className='w-8 bg-black p-2 rounded-2x1 cursor-pointer' />
                    <img onClick={()=>navigate(1)} src={assets.arrow_right} alt='arrow' className='w-8 bg-black p-2 rounded-2x1 cursor-pointer' />
                </div>
                <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-full cursor-pointer hidden md:block'>Explore Premium</p>
                <p className='bg-black text-[15px] cursor-pointer py-1 px-3 rounded-full'>Install App</p>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>M</p>
                </div>
                
            </div>
            <div className='flex items-center gap-2 mt-2'>
                    <p className='bg-white text-black px-4 py-1 rounded-full cursor-pointer'>All</p>
                    <p className='bg-black text-white px-4 py-1 rounded-full cursor-pointer'>Music</p>
                    <p className='bg-black text-white px-4 py-1 rounded-full cursor-pointer'>Podcast</p>
                </div>
        </>
    )
}

export default NavBar
