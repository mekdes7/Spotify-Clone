import React, { useContext } from 'react'
import SideBar from './component/SideBar'
import Player from './component/Player'
import Display from './component/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {
  const {audioRef,track}=useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar/>
        <Display/>
      </div>
    
        <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
