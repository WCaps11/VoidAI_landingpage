import React, { Component } from 'react'

import Banner_Dollar from './Banner_Dollar'
import Banner_SlantRelief from './Banner_SlantRelief'



export default class Page_Starting extends Component {
  render() {
    return (
      <div className='loading'>

        <div>
            <Banner_SlantRelief/>
        </div>

        
         
          <div>

            initializing...
          </div>
          
        
      </div>
    )
  }
}
