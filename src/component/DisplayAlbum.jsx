import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets/assets';
import { assets } from '../assets/assets/assets';
import { PlayerContext } from '../Context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const {playwithId}=useContext(PlayerContext)
    return (
        <div>
            <NavBar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt='album' />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h1 className='text-3xl font-bold mb-4 md:text-7xl'>{albumData.name}</h1>
                    <h2>{albumData.desc}</h2>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} />
                        <b>Spotify</b>
                        • 1,324,545 likes
                        • <b>50 songs,</b>
                        about 3 hr 25 min
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date added</p>
                <img className='m-auto w-4' src={assets.clock_icon} />

            </div>
            <hr />

            {songsData.map((item, index) => (
                <div onClick={()=>playwithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer items-center'>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img className='inline w-10 mr-5' src={item.image}/>
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))}

        </div>
    )
}

export default DisplayAlbum
