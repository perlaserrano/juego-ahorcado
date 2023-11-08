import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ganado = () => {
    const navegacion = useNavigate()
  return (
    <>
        <h2>Muy bien, has ganado, y continuas manteniendo tu cabeza sobre los hombros</h2>
        <div className='imagen'>
            <img src={require(`../assets/images/el_ahorcado1.png`)} alt="" />

        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button style={{fontSize:"27px",width:"25%",textAlign:"center"}} onClick={() => navegacion("/juego/")} className='boton-ganado btn btn-success'>Volver a jugar</button>

        </div>
      
    </>
  )
}

export default Ganado
