import {useState, } from 'react'
import { TogllerContext } from './TogllerContext'
const TogllerProvider = ({children}) => {
    const [toggle, setToggle] = useState(false)
    const [cartFull, setCartFull] = useState(false)
    const [active, setActive] = useState(false)
  return (
   <TogllerContext.Provider value={{toggle, setToggle, cartFull, setCartFull, active, setActive}}>
               {children}
           </TogllerContext.Provider>
  )
}

export default TogllerProvider
