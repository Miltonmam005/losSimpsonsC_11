import { Container, Button } from "react-bootstrap";
import Frase from "./components/Frase";
import  logo from './assets/logosimpson.png'
import { useEffect, useState } from "react";

function App() {
  const [frase, setFrase] = useState({});
  // https://thesimpsonsquoteapi.glitch.me/quotes

  useEffect(()=>{
    obtenerFrase()
  },[]) 

  const obtenerFrase = async () => {
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    console.log(respuesta);
    if(respuesta.status === 200){
      const datos = await respuesta.json()
      console.log(datos[0])
      // guardar en el state las frases
      setFrase(datos[0])
    }
  }
  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo simpson" className="w-50 mb-4" />
        {/* <div>
          <Spinner animation="grow" variant="info" />
        </div> */}
        <Frase frasePops={frase}></Frase> 
        <Button variant="warning" className="mt-4">
          Enviar
        </Button>
      </Container>
    </>
  );
}

export default App;
