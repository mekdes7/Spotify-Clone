import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets/assets'
import Albumitem from './Albumitem'
import SongItem from './SongItem'

const DisplayHome = () => {
    return (
        <>
            <NavBar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Features charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) => (<Albumitem key={index}
                        name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>

            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's hit</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (<SongItem key={index}
                        name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>

            </div>
    
        </>
    )
}

export default DisplayHome
