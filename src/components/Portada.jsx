import React from 'react'
import { useNavigate } from 'react-router-dom'

const Portada = () => {
const navegacion = useNavigate();

  return (
    <>
      <h2>Bienvenido/a al juego del ahorcado esta vez con algunos metodos de programacion</h2>
      <div className='imagen'>
            <img src={require(`../assets/images/el_ahorcado6.png`)} alt="" />
           
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

      <button style={{fontSize:"27px",width:"25%",textAlign:"center"}} className='boton-portada btn btn-primary' onClick={() => navegacion("/juego")}>Jugar</button>
        </div>
    </>
  )
}

export default Portada
