import React from "react";
import { useNavigate } from "react-router-dom";
import {questionHTML,questionCSS,questionFigma,questionUX,questionJS} from "../data/Questionario";
// import Selection from "../components/Selection";


const Questionary = () => {
 /* ------------   IDENTIFICANDO CATEGORIA----------------   */
 const nameUrl = window.location.href;
 const words = nameUrl.split("/");
 const category = words.find(element =>
   ["js", "html", "css", "figma", "ux"].includes(
     element.toLocaleLowerCase()
   )
 );
  const navigate = useNavigate();
  /* ------------  Traemos los datos dependiendo de categoria ----------------   */
  const questionData = { // Objeto con las data correspondiente a cada categoria
    HTML: questionHTML,
    CSS: questionCSS,
    FIGMA: questionFigma,
    UX: questionUX,
    JS: questionJS
  };
  
  let questions = questionData[category] // Vector con las preguntas de la categoria seleccionada

 /* ------------------ Variables con useState para capturar la info a mostrar---------------------- */ 
 let [contador, setContador] = React.useState(0); // Contador de preguntas
 let [pregunta, setPregunta] = React.useState(questions[contador].question); // Variable en la que iremos itereando las preguntas
 let [a, setA] = React.useState(questions[contador].a); // respuesta A
 let [b, setB] = React.useState(questions[contador].b); // respuesta B
 let [c, setC] = React.useState(questions[contador].c); // respuesta C
 let [d, setD] = React.useState(questions[contador].d);  // respuesta D
 let [correct, setCorrect] = React.useState(questions[contador].correct);  // respuesta correcta

/* ------------  FUNCION QUE VALIDA SI LA RESPUESTA ENVIADA ES CORRECTA --------------------------- */  
  const validateOption = (respuesta) => {
    respuesta === correct ? alert("Correcto") : alert("Incorrecto");
  }

  /* ------------------- FUNCION QUE VALIDA EL ENVIO DEL FORMULARIO  --------------- */
  function handleSubmit(evt) {
    evt.preventDefault(); // Evita que se recargue la pagina
    console.log("Formulario enviado");
    validateOption(selectedValue); // Validamos la opcion enviada
    setSelectedValue("") // Limpiamos el input seleccionado
    
    /* ------ Hace uso de useState, exactamente de los metodos set para pasar a la siguiente pregunta----  */
    setContador(contador + 1);
    setPregunta(questions[contador].question);
    setA(questions[contador].a);
    setB(questions[contador].b);
    setC(questions[contador].c);
    setD(questions[contador].d);
    setCorrect(questions[contador].correct);
  }
 /* ---------------  USE STATE y METODO PARA SABER INPUT SELECCIONADO -------- */
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <h1>Questionary</h1>
      <h2>Estamos en la categoria: {category}</h2>

      <h2>{pregunta}</h2>
      <label htmlFor="a">A. {a}</label>
      <input value='a' type="radio" id="a" name="pregunta" checked={selectedValue === 'a'} onChange={handleChange}/>
     
      <label htmlFor="b">B. {b}</label>
      <input value='b' type="radio" id="b" name="pregunta"checked={selectedValue === 'b'} onChange={handleChange}/>

      <label htmlFor="c">C. {c}</label>
      <input value='c' type="radio" id="c" name="pregunta" checked={selectedValue === 'c'} onChange={handleChange}/>

      <label htmlFor="d">D. {d}</label>
      <input value='d' type="radio" id="d" name="pregunta" checked={selectedValue === 'd'} onChange={handleChange}/>

      <button className="bg-gray-400"  >Comprobar</button>

      </form>

      <h2>Selected radio: {selectedValue}</h2>


      <button className="bg-gray-500 text-white" onClick={() => navigate("/home")}>
        HOME
      </button>
    </div>
  );
};

export default Questionary;
