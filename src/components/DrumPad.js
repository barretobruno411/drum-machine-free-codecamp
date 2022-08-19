import React, {useEffect} from 'react'
import "./DrumPad.sass"
import {soundProvider} from "../soundProvider"

const DrumPad = ({keyName, setAudioName}) => {

  useEffect(() => {
    const pads = document.querySelectorAll(".drum-pad");
    document.addEventListener("keypress",(e) => {

      pads.forEach((element) => {
        if(e.key === element.innerText.toLowerCase()){
          console.log(e.key)
          setAudioName(element.id)
          element.querySelector("audio").play()
        }
      })
      
    })
    
  },[])
  
  
  return (
    <div id={keyName} className='drum-pad' onClick={e => {
      setAudioName(e.target.querySelector("audio").id)
      e.target.querySelector("audio").play()}
      }>
      {keyName}
      <audio className='clip' id={keyName} src={soundProvider(keyName)}></audio>
    </div>
  )
}

export default DrumPad