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

export default function CommandBox() {

  const what = "Void Terminal AI is an innovative AI-powered terminal designed for seamless interactions with ChatBox and chatAI within the Sui Network ecosystem. "+
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


  const goTwitter= ()=>{
    const timer = setTimeout(() => {
      window.open("https://x.com/?lang=en&mx=2", "_blank"); // Opens the URL in a new tab
    }, 3000);
  }


  const goTelegram= ()=>{
    const timer = setTimeout(() => {
      window.open("https://web.telegram.org", "_blank"); // Opens the URL in a new tab
    }, 3000);
  }

  const handleKeyPress = (event) => {


      if (event.key === "Enter" && inputvalue !== "") {

        if(inputvalue.trim() == "clear"){
          setActions([""]);
        }else{
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

 
      <Banner_SlantRelief/>

      <div className='consolebox'>
        
        <div className='consoleoutput'> 

        <ConsoleLine_Intro />
        <ConsoleLine_Help />

        {actions.map((item ,key) => (

              item.toLowerCase() === "what" ? (
                <ConsoleLine_What key={key} content={what} command={item}/>
              ) : item.toLowerCase() === "why" ? (
                <ConsoleLine_Why key={key} content={why} command={item}/>
              ) :item.toLowerCase() === "roadmap" ? (
                <ConsoleLine_Multiline key={key} content={"roadmap"} command={item}/>
              ) : item.toLowerCase() === "socials" ? (
                <ConsoleLine_Links key={key} command={item}/>
              ) : item.toLowerCase() === "twitter" ? (
                <ConsoleLine_Multiline key={key} content={"Opening...... X"} command={item}/>
              ) : item.toLowerCase() === "telegram" ? (
                <ConsoleLine_Multiline key={key} content={"Opening...... Telegram"} command={item}/>
              ) :item.toLowerCase() !== "" ? (
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
