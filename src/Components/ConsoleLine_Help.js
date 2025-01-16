import React, { Component } from 'react'
import ConsoleLine from './ConsoleLine'
import ConsoleLine_Prompt from './ConsoleLine_Prompt';


export default class ConsoleLine_Help extends Component {
  render() {
    return (
      <>
    
                    <br/>

                    <div className='px-3'>
                    <ConsoleLine title="what" message="What is Void Terminal AI" />
                    <ConsoleLine title="why" message="Why Void Terminal AI" />
                    <ConsoleLine title="tokenomics" message="Tokenomics"/>
                    <ConsoleLine title="howtobuy" message="How to Buy"/>
                    <ConsoleLine title="socials" message="Social Media links"/>
                    <ConsoleLine title="buy" message="Buy"/>
                    <ConsoleLine title="roadmap" message="View Roadmap"/>
                    <ConsoleLine title="clear" message="clear console"/>
                    <ConsoleLine title="sound on" message=""/>
                    <ConsoleLine title="sound off" message=""/>
                    <ConsoleLine message="  "/>
                    <ConsoleLine message="Features:"/>
                    <ConsoleLine message="Terminal Game - Coming Soon"/>
                    <ConsoleLine message="TerminalChat - Coming Soon"/>
                    <ConsoleLine message="TerminalAI - Coming Soon"/>


                    </div>
  
        <br/>
      </>
    )
  }
}
