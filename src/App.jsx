import { Container, Button, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import logo from "./assets/logosimpson.png";
import { useEffect, useState } from "react";

function App() {
  const [frase, setFrase] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(false);
  // https://thesimpsonsquoteapi.glitch.me/quotes

  useEffect(() => {
    obtenerFrase();
  }, []);

  const obtenerFrase = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos[0]);
        // guardar en el state las frases
        setFrase(datos[0]);
        // actualizar el Spinner
        setMostrarSpinner(false);
      }
    } catch (error) {
      console.error(error);
      //  aca puedo agrfegar un mensaje o alert que justifique que intente hacer la operacion dentro de unos minutos
    }
  };
  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo simpson" className="w-50 mb-4" />

        {mostrarSpinner ? (
          <div className="my-4">
            <Spinner animation="grow" variant="light" />
          </div>
        ) : (
          <Frase frasePops={frase}></Frase>
        )}

        <Button variant="warning" className="mt-4" onClick={obtenerFrase}>
          Enviar
        </Button>
      </Container>
    </>
  );
}

export default App;
