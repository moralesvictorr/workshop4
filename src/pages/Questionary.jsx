import React from "react";
import { useNavigate } from "react-router-dom";
import {questionHTML,questionCSS,questionFigma,questionUX,questionJS} from "../data/Questionario";
// import Selection from "../components/Selection";


const Questionary = () => {
 /* ------------   IDENTIFICANDO CATEGORIA----------------   */
  const nameUrl = window.location.href;
  const words = nameUrl.split("/");
  const category = words.find((element) => 
  element.toLocaleLowerCase() === "js" 
  || element.toLocaleLowerCase() === "html"
  || element.toLocaleLowerCase() === "css"
  || element.toLocaleLowerCase() === "figma"
  || element.toLocaleLowerCase() === "ux"
  );
  const navigate = useNavigate();
  /* ------------  Traemos los datos dependiendo de categoria ----------------   */
  let questions = [];
  switch (category) {
    case 'HTML':
      questions = questionHTML;
      break;
    case 'CSS':
      questions = questionCSS;
      break;
    case 'FIGMA':
      questions = questionFigma;
      break;
    case 'UX':
      questions = questionUX;
      break;
    case 'JS':
      questions = questionJS;
      break;
      default:
        alert('No se encontro la categoria')  
  }

 /* ---------------------------------------- */ 
  let contador = 0; // Contador de preguntas
  let pregunta = questions[contador].question;  // Variable en la que iremos itereando las preguntas
  let a = questions[contador].a;  // respuesta A
  let b = questions[contador].b; // respuesta B
  let c = questions[contador].c; // respuesta C
  let d = questions[contador].d;  // respuesta D
  let correct = questions[contador].correct;  // respuesta correcta

/* ------------  FUNCION QUE VALIDA SI LA RESPUESTA ENVIADA ES CORRECTA --------------------------- */  
  const validateOption = (respuesta) => {
    console.log(respuesta);
    console.log(questions[contador].respuesta)
    if (questions[contador].respuesta  === correct) {
     
      alert("Correcto");
      contador++;
      pregunta = questions[contador].question;
      a = questions[contador].a;
      b = questions[contador].b;
      c = questions[contador].c;
      d = questions[contador].d;
      correct = questions[contador].correct;
    } else {
      alert("Incorrecto");
    }
  }

  /* ------------------- FUNCION QUE VALIDA EL ENVIO DEL FORMULARIO  --------------- */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Formulario enviado");
    console.log(opcion);
    validateOption(opcion);
  }
 /* ---------------  USE STATE y METODO PARA SABER INPUT SELECCIONADO -------- */
  const [opcion, setOpcion] = React.useState('');
  const handleChange = (event) => {
    setOpcion(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <h1>Questionary</h1>
      <h2>Estamos en la categoria: {category}</h2>

      <label htmlFor="a">A. {a}</label>
      <input value='a' type="radio" id="a" name="pregunta" checked={opcion === 'a'} onChange={handleChange}/>
     
      <label htmlFor="b">B. {b}</label>
      <input value='b' type="radio" id="b" name="pregunta"checked={opcion === 'b'} onChange={handleChange}/>

      <label htmlFor="c">C. {c}</label>
      <input value='c' type="radio" id="c" name="pregunta" checked={opcion === 'c'} onChange={handleChange}/>

      <button className="bg-gray-400"  >Comprobar</button>

      </form>

      <h2>Selected radio: {opcion}</h2>


      <button className="bg-gray-500 text-white" onClick={() => navigate("/home")}>
        HOME
      </button>
    </div>
  );
};

export default Questionary;
