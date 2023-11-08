import React, { useState,useEffect, useContext } from 'react'
import {PALABROS} from '../assets/palabros'
import { useNavigate } from 'react-router-dom'
import ahorcado1 from '../assets/images/el_ahorcado1.png';
import ahorcado2 from '../assets/images/el_ahorcado2.png';
import ahorcado3 from '../assets/images/el_ahorcado3.png';
import ahorcado4 from '../assets/images/el_ahorcado4.png';
import ahorcado5 from '../assets/images/el_ahorcado5.png';
import ahorcado6 from '../assets/images/el_ahorcado6.png';
import Contex from '../contex/Contex';

const Juego = () => {
    const navegacion = useNavigate();
    const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    const misColores = [{backgroundColor:"white"},{backgroundColor:"green"},{color:"white"},{backgroundColor:"red"},{color:"white"}] 
    const letras_array = letras.split("")
   const [azar,setAzar] = useState(0) 
   const[palabra,setPalabra] = useState([])
   const[misLetras,setMisLetras]= useState([]);
   const[correctas,setCorrectas] = useState([])
   const [erroneas,setErroneas] = useState([])
   const[imagen,setImagen] = useState(1)
   const {escribirCorrecta} = useContext(Contex)

   useEffect(() => {       
  setAzar(Math.floor(Math.random()*PALABROS.length))  
   }, [])
   

   useEffect(() => {
    setPalabra(PALABROS[azar].palabro.split(""))
    escribirCorrecta(PALABROS[azar].palabro)

   }, [azar])

   const pulsado = (e) => {
   const letra = e.target.innerHTML;

   setMisLetras([...misLetras,letra])

   if(palabra.indexOf(letra) >=0){
   setCorrectas([...correctas,(letra)])
   } else{
    setErroneas([...erroneas,(letra)])
    setImagen(imagen+1)
    if(imagen >5){
        navegacion("/final")
    }
   }

   }

   useEffect(() => {
    let noEncontrado = 0;
    palabra.map(p => {
        if(misLetras.find(e => e===p) === undefined){
            noEncontrado++;
        }
    })
    if(noEncontrado ===0 && correctas.length>0){
      navegacion("/ganado")
    }
   }, [correctas])
   
   const imagenes = {
    1: ahorcado1,
    2: ahorcado2,
    3: ahorcado3,
    4: ahorcado4,
    5:ahorcado5,
    6:ahorcado6
 
  };
   
  return (
    <>

    <div className='pregunta'>
     <h1>{PALABROS[azar].pregunta}</h1>   
    </div>
    <div className='palabra'>
        {
           palabra.map((letra,i) => (
            misLetras.indexOf(letra) === -1
            ?
            <div className='palo' key={i}></div>
            :
            <div className='palo' key={i}>{letra.toUpperCase()}</div>


           )) 
        }
    </div>
    <div className='imagen'>
        <img src={imagenes[imagen]} alt=''/>
    </div>
      
    <div className='botones-container'>
  {letras_array.map((letra) => (
    (correctas.find((e) => e === letra)) ? (
      <button className='boton' style={misColores[1]} key={letra}>
        {letra}
      </button>
    ) : (erroneas.find((e) => e === letra)) ? (
      <button className='boton' style={misColores[3]} key={letra}>
        {letra}
      </button>
    ) : (
      <button className='boton' style={misColores[0]} onClick={pulsado} key={letra}>
        {letra}
      </button>
    )
  ))}
</div>

  

    </>
  )
}

export default Juego
