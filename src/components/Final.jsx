import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contex from '../contex/Contex'

const Final = () => {
   const navegacion = useNavigate() 
   const{laCorrecta} = useContext(Contex)
  return (
    <>
    <h1>Vaya, respuesta incorrecta</h1>
    <h3>La respuesta correcta era: <strong>{laCorrecta}</strong></h3>
    <div className='imagen'>
            <img src={require(`../assets/images/el_ahorcado6.png`)} alt="" />

        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button style={{fontSize:"27px",width:"25%",textAlign:"center"}} onClick={() => navegacion("/juego/")} className='boton-final btn btn-primary'>Volver a jugar</button>

        </div>
      
    </>
  )
}

export default Final
