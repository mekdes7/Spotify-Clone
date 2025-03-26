import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets/assets'

const Display = () => {
  const displayRef=useRef();
  const location=useLocation();
  const isAlbum=location.pathname.includes('album');
  const albumid=isAlbum?location.pathname.slice(-1):"";
  const bgcolor=albumsData[Number(albumid)]?.bgColor;
useEffect(()=>{
  if(isAlbum) displayRef.current.style.background=`linear-gradient(${bgcolor},#121212)`;
  else displayRef.current.style.background=`#121212`;

},[bgcolor]);


  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] h-[85%] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display
