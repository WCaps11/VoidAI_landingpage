import React, { Component, use, useEffect, useState, useTransition } from 'react'
import ConsoleLine from './ConsoleLine'
import ConsoleLine_Prompt from './ConsoleLine_Prompt'


export default function ConsoleLine_Howtobuy({content ,  command}) {

      const inputArray = (content || '').split('\n')
      const [outputArray , setArray] = useState([]);
      const [waiting, setWaiting] = useState(0);
      const [initialized , setInitial] = useState(false);


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

        const prompt = "guest@VoidTerminalAI:->" + command
    
    return (
      <>
        <ConsoleLine_Prompt message={prompt}/>
        <br/>
           <div className='px-3'>
                 <ConsoleLine message={"============================================ "} />  
                               <br/> 
                 <ConsoleLine_Prompt message={"How to Buy $VOIDAI"}/>
                 <br/> 
                 <ConsoleLine message={"Download Sui Wallet or Suiet Wallet"} />   
                <ConsoleLine message={"- Download the Sui Wallet or Suiet Wallet—both are fast, secure, and perfect for $VOIDAI. Choose the best wallet for the best coin."} />  
                 <br/>
                 <ConsoleLine message={"Get some $SUI"} />   
                <ConsoleLine message={"- Grab some $SUI and Swap to $SUIAI "} />  
                 <br/>
                 <ConsoleLine message={"Buy $SUIAI"} />   
                <ConsoleLine message={"- Grab some $SUI and Swap to $SUIAI "} />  
                 <br/>
                 <ConsoleLine message={"Get some $SUI"} />   
                <div>-Go to <a href='https://suiai.fun/' target='_blank'>https://suiai.fun/</a> and Swap your $SUI to $SUIAI</div>
                 <br/>
                 <ConsoleLine message={"Swap to $VOIDAI"} />   
                <ConsoleLine message={"- After that seach the Void Terminal AI in platform and Swap $SUIAI to $VOIDAI. Congrats you have $VOIDAI now."} />  
                 <br/>

                 <ConsoleLine message={"Join the VOID Community"} />   
                <ConsoleLine message={"- Join the Void Terminal AI Community and Become part of the most powerful terminal in SUI Network"} />  
                 <br/>
                 <ConsoleLine message={"============================================ "} />  
           </div>
  
        <br/>
      </>
    )
}

















