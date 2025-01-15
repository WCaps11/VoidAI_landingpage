import React from 'react'
import CommandBox from './CommandBox'
import { Howl } from 'howler'

import { useEffect , useState } from 'react';




export default function Page_Console({handletoggleSound}) {


  return (
    <div>


        <CommandBox  handletoggleSound1={handletoggleSound}/>
    </div>
  )
}
