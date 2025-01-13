import React from 'react'
import ConsoleLine_Prompt from './ConsoleLine_Prompt'

export default function ConsoleLine_Links({command}) {



    const prompt = "guest@voidAI.com:->" + command
  return (
    <>
       <ConsoleLine_Prompt message={prompt}/>
      <br/>
        <div className='px-3'>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'>
                        <a  href='https://x.com/?lang=en&mx=2' target='_blank'>twitter</a>

                    </div>
                    <div className='col-md-1'>
                        <a  href='https://web.telegram.org' target='_blank'>telegram</a>

                    </div>
                </div>
         

            </div>


        </div>

      <br/>
    </>
  )
}
