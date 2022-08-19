import React from 'react'
import "./DrumPad.sass"
import {soundProvider} from "../soundProvider"

const DrumPad = ({keyName}) => {
  return (
    <div id='drum-pad' className='drum-pad'>
      {keyName}
      <audio className='clip' id={keyName} src={soundProvider(keyName)}></audio>
    </div>
  )
}

export default DrumPad