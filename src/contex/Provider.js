import { useState } from "react";
import Contex from "./Contex"


const Provider = ({children}) =>{
const[laCorrecta,setLaCorrecta] = useState("")
const escribirCorrecta = (aGuardar = "") =>{
  setLaCorrecta(aGuardar)
}
    return (

    <Contex.Provider value={{
     escribirCorrecta,
     laCorrecta
     
    }}>
      {children}
    </Contex.Provider>
    )


}

export default Provider;