import React from 'react'
import DrumPad from './DrumPad'
import "./Display.sass"
const keys = ["Q","W","E","A","S","D","Z","X","C"]

const Display = () => {
  return (
    <div id='display'>
        {keys.map((key, index) => (
            <DrumPad keyName={key} key={index}/>
        ))}
    </div>
  )
}

export default Display