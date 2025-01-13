import React, { Component, use, useEffect, useState, useTransition } from 'react'
import ConsoleLine from './ConsoleLine'
import ConsoleLine_Prompt from './ConsoleLine_Prompt'


export default function ConsoleLine_What({content ,  command}) {
      const inputArray = (content || '').split('\n')
      const [outputArray , setArray] = useState([]);
      const [waiting, setWaiting] = useState(0);
      const [initialized , setInitial] = useState(false);
    



      const what1 = "   Void Terminal AI is an innovative AI-powered terminal designed for seamless interactions with ChatBox and chatAI within the Sui Network ecosystem."
      const what2 = "    It offers advanced conversational capabilities, intuitive integration, and enhanced user engagement for decentralized applications (dApps)."
      const what3 = "    Leveraging the power of Sui's scalability, Void Terminal AI ensures fast, secure, and reliable communication, making it ideal for Web3 projects."

        useEffect(()=>{
       
      
          let index = outputArray.length
          const index2 = inputArray.length;
      
          if(initialized == false){
            
            setInitial(true);
            setArray([inputArray[0]]); 
      
           
          }else if(index < inputArray.length){
      
            setArray((prevItems) => [...prevItems, inputArray[index]]); 
       
          }
      
        },[waiting]);

        const prompt = "guest@voidAI.com:->" + command

   return (
     <>
       <ConsoleLine_Prompt message={prompt}/>
       <br/>
          <div className='px-3'>
                <ConsoleLine message={"============================================ "} />  
                              <br/> 
                <ConsoleLine_Prompt message={"What is Void Terminal AI?"}/>
                <br/> 
                <ConsoleLine message={what1} />      
                <ConsoleLine message={what2} />   
                <ConsoleLine message={what3} />  
                <br/>
                <ConsoleLine message={"============================================ "} />  


                
          </div>
 
       <br/>
     </>
   )
}
