import React from 'react'
import CommandBox from './CommandBox'
import { Howl } from 'howler'

import { useEffect , useState } from 'react';

import sound from  "../assets/space_8bit.mp3"
import blackhole from '../assets/My Video.gif'


export default function Page_Console() {


  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

    const thesound = new Audio(sound)
    thesound.loop = true; 

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
  


  return (
    <div onClick={Playsound}>

{visible && (
           <div className={`blackhole ${fading ? 'opacity0' : ''}`}>

           <img src={blackhole} />
         </div>
      )}
      

 
        





        <CommandBox/>
    </div>
  )
}
