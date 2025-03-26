import React from 'react'
import { assets } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'
const SideBar = () => {
    const navigate=useNavigate();
    return (
        <div className='w-[30%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>

            <div className='bg-[#121212] p-2 rounded-lg h-[15%] flex flex-col justify-around'>
                <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src={assets.stack_icon} />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src={assets.plus_icon} />
                        <img className='w-6' src={assets.arrow_icon} />

                    </div>
                </div>
                <div className='bg-[#242424] m-2 pl-4 rounded flex flex-col items-start p-4 gap-1 justify-start'>
                    <h1 className='font-semibold'>Create your Playlist</h1>
                    <p className='font-light'>it's easy we will help you</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
                </div>
                <div className='bg-[#242424] m-2 pl-4 rounded flex flex-col items-start p-4 gap-1 justify-start mt-4'>
                    <h1 className='font-semibold'>Let's find some podcasts to follow</h1>
                    <p className='font-light'>we'll keep you update on new episodes</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcasts</button>
                </div>
            </div>
        </div>

    )
}

export default SideBar
