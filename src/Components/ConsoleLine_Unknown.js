import React, { Component } from 'react'
import ConsoleLine from './ConsoleLine';
import ConsoleLine_Prompt from './ConsoleLine_Prompt';

export default class ConsoleLine_Unknown extends Component {
    
  render() {
    const temp = "Invalid command '"  + this.props.command + "'";
    return (
          <>
     
              <ConsoleLine_Prompt message={"guest@VoidTerminalAI:->" + temp} />
   
            <ConsoleLine message= {temp} / >
            <ConsoleLine message='For a list of available commands, type "help"' />
        
        
            <br/>

          </>
    )
  }
}
