import React, { Component, use, useEffect, useState, useTransition } from 'react'
import ConsoleLine from './ConsoleLine'
import ConsoleLine_Prompt from './ConsoleLine_Prompt'


export default function ConsoleLine_Why({content ,  command}) {

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

        const prompt = "guest@voidAI.com:->" + command
    
  return (
    <>
      <ConsoleLine_Prompt message={prompt}/>
      <br/>
   <div className='px-3'>


       {outputArray.map((item ,key) => (
          <ConsoleLine message={item} key={key}/>
            ))}
   </div>

      <br/>
    </>
  )
}
