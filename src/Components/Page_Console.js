import React from 'react'
import CommandBox from './CommandBox'
import { Howl } from 'howler'

import { useEffect } from 'react';

import sound from  "../assets/space_8bit.mp3"

export default function Page_Console() {

    const thesound = new Audio(sound)
    thesound.loop = true; 

    const Playsound = ()=>{
      thesound.play()

    };

    useEffect(() => {

      

    }, []); // Empty dependency array ensures it runs once when the component loads
  





  return (
    <div onClick={Playsound}>
        <CommandBox/>
    </div>
  )
}
