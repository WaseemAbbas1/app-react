import React,{useRef} from 'react'
import sound from '../../assets/audio/sound.mp3'
export default function UseRef() {
  const msAlert = useRef (null)
 const message = ()=>{
   msAlert.current.play()
 } 
  
    return (
    <>
  <div className="container py-4">
        <div className="row text-center">
            <div className="col">
                    <h1 >Use Ref Hook</h1>
            </div>
        </div>
        <div className="row text-center">
            <div className="col">
            <audio src={sound}  ref={msAlert}></audio>
            <button className='btn btn-light btn-outline-primary mb-3' onClick={message}>click for sound</button>
            </div>
        </div>
    </div>
    </>
  )
}
