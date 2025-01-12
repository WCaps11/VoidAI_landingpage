import React, { useState ,useEffect , useRef} from 'react'

export default function ConsoleLine(props) {



    const inputmessage = props.message;
    const[ outputmessage , setMessage] = useState("")


    useEffect(() => {
      let index = outputmessage.length;

      if(index < inputmessage.length ){
        index ++;
        let result = inputmessage.substring(0, index);

        setTimeout(() => {
          setMessage(result);
        }, 4);
  
      }

    }, [outputmessage]);
  



 if(props.title != undefined){
    return (
      <div className='consoleline-title'>
        <div> {props.title}</div>
        
        <div>{props.message}</div>

      </div>


    )
  }else if(props.ascii === true){
    return (
      <code className='ascii'> {outputmessage} </code>

    )
  }else{

    return(
      <div>{outputmessage} </div>

    )
      
  }

}
