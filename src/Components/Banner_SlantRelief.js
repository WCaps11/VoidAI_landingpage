import React, { Component } from 'react'
import ConsoleLine from './ConsoleLine'

export default class Banner_SlantRelief extends Component {
  render() {
    return (

     <div className='header'>

        <div>
        <div className='banner'>
    
              <ConsoleLine ascii message="__/\\\________/\\\_________________________/\\\_______/\\\\\\\\\_____/\\\\\\\\\\\_" />
              <ConsoleLine ascii message=" _\/\\\_______\/\\\________________________\/\\\_____/\\\\\\\\\\\\\__\/////\\\///__" />
              <ConsoleLine ascii message="  _\//\\\______/\\\_____________/\\\________\/\\\____/\\\/////////\\\_____\/\\\_____" />
              <ConsoleLine ascii message="   __\//\\\____/\\\___/\\\\\____\///_________\/\\\___\/\\\_______\/\\\_____\/\\\_____" />
              <ConsoleLine ascii message="    ___\//\\\__/\\\__/\\\///\\\___/\\\___/\\\\\\\\\___\/\\\\\\\\\\\\\\\_____\/\\\_____" />
              <ConsoleLine ascii message="     ____\//\\\/\\\__/\\\__\//\\\_\/\\\__/\\\////\\\___\/\\\/////////\\\_____\/\\\_____" />
              <ConsoleLine ascii message="      _____\//\\\\\__\//\\\__/\\\__\/\\\_\/\\\__\/\\\___\/\\\_______\/\\\_____\/\\\_____" />
              <ConsoleLine ascii message="       ______\//\\\____\///\\\\\/___\/\\\_\//\\\\\\\/\\__\/\\\_______\/\\\__/\\\\\\\\\\\_" />
              <ConsoleLine ascii message="        _______\///_______\/////_____\///___\///////\//___\///________\///__\///////////_" />

            
          </div>

        </div>
         
      </div>

       


 
    )
  }
}
