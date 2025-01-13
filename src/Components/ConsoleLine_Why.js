import React, { Component, use, useEffect, useState, useTransition } from 'react'
import ConsoleLine from './ConsoleLine'
import ConsoleLine_Prompt from './ConsoleLine_Prompt'


export default function ConsoleLine_Why({content ,  command}) {

      const inputArray = (content || '').split('\n')
      const [outputArray , setArray] = useState([]);
      const [waiting, setWaiting] = useState(0);
      const [initialized , setInitial] = useState(false);

      const why1 = "Void Terminal AI provides immense utility by enhancing user interaction and automation within the Sui Network ecosystem."
      const why2 = "It simplifies complex processes through conversational AI, making dApps more accessible and user-friendly. By integrating with smart contracts, it enables seamless task execution, reduces barriers to entry, and fosters innovation, scalability, and engagement for Web3 projects."
      
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
                <ConsoleLine_Prompt message={"Why Void Terminal AI?"}/>
                <br/> 
                <ConsoleLine message={why1} />     <ConsoleLine message={why2} />  
                <br/>
                <ConsoleLine message={"============================================ "} />  
          </div>
 
       <br/>
     </>
   )
}
