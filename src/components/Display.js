import React,{useState} from 'react'
import DrumPad from './DrumPad'
import "./Display.sass"
const keys = ["Q","W","E","A","S","D","Z","X","C"]

const Display = () => {

  const [audioName, setAudioName] = useState("");
  return (
    <div id='display'>
        {keys.map((key, index) => (
            <DrumPad keyName={key} key={index} setAudioName={setAudioName}/>
        ))}
        <p>{audioName}</p>
    </div>
  )
}

export default Display