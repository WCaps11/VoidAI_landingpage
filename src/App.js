import logo from './logo.svg';
import { useState, useEffect, useRef } from 'react';

import Page_Console from './Components/Page_Console';
import Page_Starting from './Components/Page_Starting';
import sound from  "./assets/space_8bit.mp3"

function App() {
  const [showStarting, setShowStarting] = useState(true);
  const [sounds, toggleSound] = useState(false)

 
  const thesoundRef = useRef(null);
  useEffect(() => {
    thesoundRef.current = new Audio(sound);
    thesoundRef.current.loop = true;

    return () => {
      // Cleanup the audio when the component unmounts
      if (thesoundRef.current) {
        thesoundRef.current.pause();
        thesoundRef.current.currentTime = 0; // Reset to the beginning
        thesoundRef.current = null;
      }
    };
  }, [sound]);

  // Control playback when `sounds` changes
  useEffect(() => {
    if (thesoundRef.current) {
      if (sounds) {
        thesoundRef.current.play().catch((error) => {
          console.error("Audio play failed:", error);
        });
      } else {
        thesoundRef.current.pause();
      }
      console.log("Sound toggled:", sounds);
      console.log("Is audio paused:", thesoundRef.current.paused);
    }
  }, [sounds]);
  
  return (
    <div className="App">
      {showStarting ? <Page_Starting setShowStartingHandler = {setShowStarting} handletoggleSound={toggleSound} /> : <Page_Console handletoggleSound={toggleSound}/>}
    </div>
  );
}

export default App;
