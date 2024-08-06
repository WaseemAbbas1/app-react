import React,{useState} from 'react'

export default function UseState() {
  const [count,setcount ] = useState(0)
  const add= ()=>{
    setcount(count + 1)
  }
  const remove= ()=>{
    count > 0 && setcount( count -1 )
  }
  const reset=()=>{
    setcount(0)
  }
  
    return (
    <>
    <div className="container py-4">
        <div className="row text-center">
            <div className="col">
                    <h1 >Use state Hook</h1>
            </div>
        </div>
        <div className="row text-center">
            <div className="col">
                <button className='btn btn-success btn-outline-light mb-3' onClick={add}> Add</button>
                <p className='mb-3'>{count}</p>
                <button className='btn btn-light btn-outline-primary mb-3' onClick={remove}> Remove</button><br />
                <button className='btn btn-dark btn-outline-light ' onClick={reset}> Reset</button>

            </div>
        </div>
    </div>
    </>
  )
}