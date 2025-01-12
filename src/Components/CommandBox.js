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

export default function CommandBox() {

  const voidinfo = "Void Terminal AI is an innovative AI-powered terminal designed for seamless interactions with ChatBox and chatAI within the Sui Network ecosystem. "+
                   "It offers advanced conversational capabilities, intuitive integration, and enhanced user engagement for decentralized applications (dApps). "+
                   "Leveraging the power of Sui's scalability, Void Terminal AI ensures fast, secure, and reliable communication, making it ideal for Web3 projects."


  const why = "Void Terminal AI provides immense utility by enhancing user interaction and automation within the Sui Network ecosystem. It simplifies complex processes through conversational AI, making dApps more accessible and user-friendly. "+
              "By integrating with smart contracts, it enables seamless task execution, reduces barriers to entry, and fosters innovation, scalability, and engagement for Web3 projects."
  





  const [actions, setActions] = useState(["intro"]);
  const [actionhistory, setActionHistory] = useState([]);
  const [historyindex, setHistoryIndex] = useState(0);
  const [inputvalue, setInputValue] =  useState("");
  
  const handleInputChange = (event) => {

      setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {


      if (event.key === "Enter" && inputvalue !== "") {

        if(inputvalue.trim() == "clear"){
          setActions([""]);
        }else{
          setActions((prevItems) => [...prevItems, inputvalue.trim()]);
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

 
      <Banner_SlantRelief/>

      <div className='consolebox'>
        
        <div className='consoleoutput'> 

        {actions.map((item ,key) => (
      
              item === "intro" ? (
                <ConsoleLine_Intro key={key}/>
              ) : item === "help" ? (
                <ConsoleLine_Help key={key} />
              ) : item === "voidinfo" ? (
                <ConsoleLine_Multiline key={key} content={voidinfo}/>
              ) : item === "why" ? (
                <ConsoleLine_Multiline key={key} content={why}/>
              ) : item === "link" ? (
                <ConsoleLine_Links key={key}/>
              ) : item !== "" ? (
                <ConsoleLine_Unknown command={item}/>
              ) :    
              (
                <div key={key}></div>
              )

        ))}
  

          

        </div>

        <div className='consoleprompt'>
          <span>guest@voidAI.com:-{'> '}</span> <input type='text' value={inputvalue} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
        </div>

        
      </div>

    </div>

  )
 
}
