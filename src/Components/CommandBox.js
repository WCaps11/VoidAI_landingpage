import React, { act, Component } from 'react'
import ConsoleLine from './ConsoleLine'
import ConsoleLine_Intro from './ConsoleLine_Intro'
import ConsoleLine_Multiline from './ConsoleLine_Multiline'
import ConsoleLine_Help from './ConsoleLine_Help'
import ConsoleLine_Unknown from './ConsoleLine_Unknown'
import Banner_SlantRelief from './Banner_SlantRelief'
import ConsoleLine_Prompt from './ConsoleLine_Prompt'
import { useState , useEffect } from 'react'
import ConsoleLine_Links from './ConsoleLine_Links'
import ConsoleLine_Why from './ConsoleLine_Why'
import ConsoleLine_What from './ConsoleLine_What'
import ConsoleLine_Tokenomics from './ConsoleLine_Tokenomics'
import ConsoleLine_Howtobuy  from './ConsoleLine_Howtobuy'


import closebutton from '../assets/close.png'
//import spacebackground from '../assets/spacebackground.png'
import blackhole from '../assets/consolebg3.gif'
export default function CommandBox({ handletoggleSound1}) {








  const [actions, setActions] = useState([""]);
  const [actionhistory, setActionHistory] = useState([]);
  const [historyindex, setHistoryIndex] = useState(0);
  const [inputvalue, setInputValue] =  useState("");
  
  const handleInputChange = (event) => {

      setInputValue(event.target.value);
  };


  const goTwitter= ()=>{
    const timer = setTimeout(() => {
      window.open("https://x.com/VoidTerminalAI.io", "_blank"); // Opens the URL in a new tab
    }, 3000);
  }


  const goTelegram= ()=>{
    const timer = setTimeout(() => {
      window.open("https://t.me/VoidTerminalAI.io", "_blank"); // Opens the URL in a new tab
    }, 3000);
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleKeyPress = (event) => {


      if (event.key === "Enter" && inputvalue !== "") {

        if(inputvalue.trim() == "clear"){
          setActions([""]);
        }else if(inputvalue.trim() == "sound on"){
            handletoggleSound1(true);
            setActions([""]);

        }
        else if(inputvalue.trim() == "sound off"){
          handletoggleSound1(false);
          setActions([""]);

      }        
        else{
          setActions([inputvalue.trim()]);
     //     setActions((prevItems) => [...prevItems, inputvalue.trim()]);

          if(inputvalue.toLowerCase().trim() === "twitter"){
              goTwitter();
          }else if(inputvalue.toLowerCase().trim() === "telegram"){
              goTelegram();
          }
        }
        setActionHistory((prevItems2) => [...prevItems2, inputvalue.trim()]);
        setHistoryIndex(actionhistory.length +1)




        setInputValue("");
     
      }
      else if(event.key === "ArrowUp"){

        let temp = historyindex -1;
        if(temp <0){
          temp =0;
        }
   
        setHistoryIndex(temp);
        setInputValue(actionhistory[temp]);

      }   else if(event.key === "ArrowDown"){

        let temp = historyindex +1;
        if(temp >= actionhistory.length){
          temp -= 1;
        }else{
          setHistoryIndex(temp);
          setInputValue(actionhistory[temp]);
        }
    
      }
  };


  useEffect(()=>{

    window.scrollTo(0, document.body.scrollHeight);
  },[actions])



  return (
    <div className='container-main'>


          <img src={blackhole} /> 

 
     <div className='consolewindow'>
      <div className='consoleheader'>
        <div>
          <h3>Void Terminal AI</h3>
        </div>
        
        
        <div> <img src={closebutton} onClick={handleRefresh}/> </div>
         </div>



     <Banner_SlantRelief/>

<div className='consolebox'>
  
  <div className='consoleoutput'> 

  <ConsoleLine_Intro />
  <ConsoleLine_Help />

  {actions.map((item ,key) => (

        item.toLowerCase() === "what" ? (
          <ConsoleLine_What key={key}  command={item}/>
        ) : item.toLowerCase() === "why" ? (
          <ConsoleLine_Why key={key} command={item}/>
        ) :item.toLowerCase() === "roadmap" ? (
          <ConsoleLine_Multiline key={key} content={"roadmap"} command={item}/>
        ) : item.toLowerCase() === "socials" ? (
          <ConsoleLine_Links key={key} command={item}/>
        ) : item.toLowerCase() === "twitter" ? (
          <ConsoleLine_Multiline key={key} content={"Opening...... X"} command={item}/>
        ) : item.toLowerCase() === "twitter" ? (
          <ConsoleLine_Multiline key={key} content={"Opening...... X"} command={item}/>
        ) :item.toLowerCase() === "tokenomics" ? (
          <ConsoleLine_Tokenomics key={key}  command={item}/>
        ) :item.toLowerCase() === "howtobuy" ? (
          <ConsoleLine_Howtobuy key={key}  command={item}/>
        ) :item.toLowerCase() !== "" ? (
          <ConsoleLine_Unknown command={item}/>
        ) :    
        (
          <div key={key}></div>
        )

  ))}

  </div>

  <div className='consoleprompt'>
    <span>guest@VoidTerminalAI.io.io:-{'> '}</span> <input type='text' value={inputvalue} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
  </div>

  
</div>
     </div>

    </div>

  )
 
}
