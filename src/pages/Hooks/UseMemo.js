import React, { useState, useMemo } from 'react'

export default function UseMemo() {
  const [count, setcount] = useState(0)
  const [todo, setTodo] = useState([])
  const add=()=>{
    setcount(count +1)
  }
  const addTodo=()=>{
    setTodo([...todo, "Add todo"])
  }
  const loopInData =(num)=>{
    for(let i = 0 ; i < 1000000000; i++ ){
      num += 1
    }
    return num
  }
  const total = useMemo(()=>loopInData(count),[count])
  return (
    <>
    <h1 className='text-center mt-3'> use memo hook</h1>
    <div className="container">
      <div className="row mt-3 text-center">
        <div className="col">
          {todo.map((t,i)=>{
           return <p key={i}>{t}</p>
          })}
          <button className='btn btn-info outline-btn-dark' onClick={addTodo}>Add todo</button>
          <hr/>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          count : {count} <br/>
          <button className='btn btn-info outline-btn-dark' onClick={add}>increment</button>
          <p>large calculation</p>
          {total}
        </div>
      </div>
    </div>
    </>
  )
}
