import React,{useContext} from 'react'
import {FruitesContext} from '../../context/FruitesContext'
export default function Fruits() {
// const { data }= props 
const {itemName, fruitesArray} = useContext(FruitesContext)

return (
  
    <div className='text-center'>
      <p >This Name and Array gets from context.js file </p>
    <h1 className='text-center mt-3'>{itemName}</h1>
      {/* <button className='btn btn-dark mt-3 '>click for data</button> */}
      {
  fruitesArray.map((f,i)=>{
      return <p key={i}>{f}</p>
  })
}
   </div>
  )
}
