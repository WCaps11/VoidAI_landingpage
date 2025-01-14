import React, { Component } from 'react'

import Banner_Dollar from './Banner_Dollar'
import Banner_SlantRelief from './Banner_SlantRelief'
import Banner_Logo from './Banner_Logo'

import sound from  "../assets/space_8bit.mp3"
import blackhole from '../assets/My Video.gif'
import { useEffect , useState } from 'react';

export default function Page_Starting({setShowStartingHandler}) {

  const thesound = new Audio(sound)
  thesound.loop = true; 

    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);
  const Playsound = ()=>{
    thesound.play();
    setFading(true); 

  };

  useEffect(() => {
  if (fading) {
    const timer = setTimeout(() => {
      setVisible(false); // Remove the component after the fade-out
    }, 2000); // Match the fade-out duration (1 second)
    return () => clearTimeout(timer); // Cleanup timeout if component unmounts before
  }
}, [fading]);


useEffect(() => {
  if (visible == false) {
    const timer = setTimeout(() => {
      goConsole();
    }, 2000); // Match the fade-out duration (1 second)
    return () => clearTimeout(timer); // Cleanup timeout if component unmounts before
  }
}, [visible]);


  const goConsole = () => {
    setShowStartingHandler(false);
  }


  return (
    <div className='loading' >

      {visible && (
           <div className={`blackhole ${fading ? 'opacity0' : ''}`} onClick={Playsound}>

           <img src={blackhole} />
         </div>
      )}


        <div className='loadingbanner'>
        <div >
          <Banner_Logo/>
      </div>
    
        <div>

         <h1> initializing...</h1>
        </div>


        </div>
  
        
      
    </div>
  )
}





