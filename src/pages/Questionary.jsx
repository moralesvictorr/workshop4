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
  console.log("eleccion es: ", words);
  console.log("category es: ", category);
  const navigate = useNavigate();
  /* ----------------------------   */
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
  let contador = 0;
  let pregunta = questions[contador].question;
  let a = questions[contador].a;
  let b = questions[contador].b;
  let c = questions[contador].c;
  let d = questions[contador].d;
  let correct = questions[contador].correct;


  console.log(pregunta);
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
  console.log("correct", correct);

  const validateOption = (respuesta) => {
    if (respuesta === correct) {
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

  function handleSubmit(evt) {
    /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */
    evt.preventDefault();

    // Aquí puedes usar values para enviar la información
  }

  const [opcion, setOpcion] = React.useState('');
  const handleChange = (event) => {
    setOpcion(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <h1>Questionary</h1>
      <h2>Estamos en la categoria: {category}</h2>
      <label htmlFor="a">A. {pregunta}</label>
      <input value='a' type="radio" id="a" name="pregunta" checked={opcion === 'a'} onChange={handleChange}/>
      <label htmlFor="b">B. {pregunta}</label>
      <input type="radio" id="b" name="pregunta"/>

      <label htmlFor="c">C. {pregunta}</label>
      <input type="radio" id="c" name="pregunta" />

      <button className="bg-gray-400" onClick={validateOption(opcion)} >Comprobar</button>

      </form>




      <button className="bg-gray-500 text-white" onClick={() => navigate("/home")}>
        HOME
      </button>
    </div>
  );
};

export default Questionary;
