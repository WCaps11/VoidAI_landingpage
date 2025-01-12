import React, { Component } from 'react'
import ConsoleLine from './ConsoleLine'
import ConsoleLine_Prompt from './ConsoleLine_Prompt';


export default class ConsoleLine_Help extends Component {
  render() {
    return (
      <>
               <ConsoleLine_Prompt message="guest@voidAI.com:-> help"/>
                    <br/>

                    <div className='px-3'>
                    <ConsoleLine title="voidinfo" message="What is Void AI" />
        <ConsoleLine title="why" message="Why Void AI" />
        <ConsoleLine title="link" message="display links"/>

        <ConsoleLine title="clear" message="clear console"/>



                    </div>
  
        <br/>
      </>
    )
  }
}
