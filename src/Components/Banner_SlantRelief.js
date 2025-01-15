import React, { Component } from 'react'
import ConsoleLine from './ConsoleLine'

export default class Banner_SlantRelief extends Component {
  render() {
    return (

     <div className='header'>

        <div>
        <div className='banner slantrelief'>
    
            <ConsoleLine ascii message=" _    __      _     ________                    _             _____    ____" />
            <ConsoleLine ascii message="| |  / /___  (_)___/ /_  __/__  _________ ___  (_)___  ____ _/ /   |  /  _/" />
            <ConsoleLine ascii message="| | / / __ \/ / __  / / / / _ \/ ___/ __ `__ \/ / __ \/ __ `/ / /| |  / /  " />
            <ConsoleLine ascii message="| |/ / /_/ / / /_/ / / / /  __/ /  / / / / / / / / / / /_/ / / ___ |_/ /   " />
            <ConsoleLine ascii message="|___/\____/_/\__,_/ /_/  \___/_/  /_/ /_/ /_/_/_/ /_/\__,_/_/_/  |_/___/" /><br/>
              <ConsoleLine ascii message="                 Void Terminal AI, All Rights Reserved"/>

            
          </div>

        </div>
         
      </div>

       


 
    )
  }
}
