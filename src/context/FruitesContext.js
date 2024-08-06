import React,{createContext} from 'react'
export const FruitesContext = createContext()
export default function FruitesContextProvider(props) {
 const itemName  = "Fruites Items"
 const fruitesArray =["Apple",'Banana',"Mango",'cherry',"Orange","Watermalen"]
 
    return (
    <FruitesContext.Provider value={{itemName,fruitesArray}}>
        {props.children}
    </FruitesContext.Provider>
  )
}
