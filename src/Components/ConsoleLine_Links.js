import React from 'react'
import ConsoleLine_Prompt from './ConsoleLine_Prompt'

export default function ConsoleLine_Links() {

    const links  = ["https://www.youtube.com" , "https://monkeytype.com"]


  return (
    <>
      <ConsoleLine_Prompt message="guest@voidAI.com:-> link"/>
      <br/>
        <div className='px-3'>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'>
                        <a  href='https://www.youtube.com' target='_blank'>videos</a>

                    </div>
                    <div className='col-md-1'>
                        <a  href='https://monkeytype.com' target='_blank'>skill</a>

                    </div>

                    <div className='col-md-1'>
                        <a  href='https://www.youtube.com' target='_blank'>videos</a>

                    </div>
                    <div className='col-md-1'>
                        <a  href='https://monkeytype.com' target='_blank'>skill</a>

                    </div>

                    <div className='col-md-1'>
                        <a  href='https://www.youtube.com' target='_blank'>videos</a>

                    </div>
                    <div className='col-md-1'>
                        <a  href='https://monkeytype.com' target='_blank'>skill</a>

                    </div>
                    <div className='col-md-1'>
                        <a  href='https://www.youtube.com' target='_blank'>videos</a>

                    </div>
                    <div className='col-md-1'>
                        <a  href='https://monkeytype.com' target='_blank'>skill</a>

                    </div>
                    

                    

                </div>
         

            </div>


        </div>

      <br/>
    </>
  )
}
