import React, { Component } from 'react'
import ConsoleLine from './ConsoleLine'

export default class Banner_Dollar extends Component {
  render() {
    return (
      <div className='banner'>

                <ConsoleLine ascii message=' __     __   ______   ______  _______          ______   ______ '/>
                <ConsoleLine ascii message='|  \   |  \ /      \ |      \|       \        /      \ |      \'/>
                <ConsoleLine ascii message='| $$   | $$|  $$$$$$\ \$$$$$$| $$$$$$$\      |  $$$$$$\ \$$$$$$'/>
                <ConsoleLine ascii message='| $$   | $$| $$  | $$  | $$  | $$  | $$      | $$__| $$  | $$ '/>
                <ConsoleLine ascii message=' \$$\ /  $$| $$  | $$  | $$  | $$  | $$      | $$    $$  | $$  '/>
                <ConsoleLine ascii message='  \$$\  $$ | $$  | $$  | $$  | $$  | $$      | $$$$$$$$  | $$ '/>
                <ConsoleLine ascii message='   \$$ $$  | $$__/ $$ _| $$_ | $$__/ $$      | $$  | $$ _| $$_'/>
                <ConsoleLine ascii message='    \$$$    \$$    $$|   $$ \| $$    $$      | $$  | $$|   $$ \'/>
                <ConsoleLine ascii message='     \$      \$$$$$$  \$$$$$$ \$$$$$$$        \$$   \$$ \$$$$$$'/>
        
      </div>
    )
  }
}
