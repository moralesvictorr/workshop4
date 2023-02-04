import React from "react";
import { useNavigate } from "react-router-dom";
import { questionHTML, questionCSS, questionFigma, questionUX, questionJS } from "../data/Questionario";
import { Lives, getFromLocalStorage, subtractLive, setLivesToLocalStorage } from "../components/Lives";
import { correctQuestionsToLs, incorrectQuestionsToLs, totalQuestionsToLs, timeToLs } from "../components/HandleStats";
// Funcion que retorna la categoria de la url
const matchCategory = () => {
  const nameUrl = window.location.href;
  const words = nameUrl.split("/");
  return words.find(element =>
    ["js", "html", "css", "figma", "ux"].includes(
      element.toLocaleLowerCase()
    )
  );
}
/* ------------  Traemos los datos dependiendo de categoria ----------------   */
const getQuestionsArray = (category) => {
  const questionData = { // Objeto con las data correspondiente a cada categoria
    HTML: questionHTML,
    CSS: questionCSS,
    FIGMA: questionFigma,
    UX: questionUX,
    JS: questionJS
  };

  return questionData[category] // Vector con las preguntas de la categoria seleccionada
}


/* EMPIEZA EL COMOPONENTE QUESTIONARY */
const Questionary = () => {
  // Declarations of variables
  const [dataLives, setDataLives] = React.useState(getFromLocalStorage());
  /*   const [correctQuestions, setCorrectQuestions] = React.useState(0);
    const [incorrectQuestions, setIncorrectQuestions] = React.useState(0);
    const [totalQuestions, setTotalQuestions] = React.useState(0);
    const [time, setTime] = React.useState(0); */
  const navigate = useNavigate();

  // Runnung functions
  const category = matchCategory(); // Identificamos la categoria de la url
  const questions = getQuestionsArray(category); // Obtenemos el vector de preguntas de la categoria seleccionada

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
    if (respuesta === correct) {
      alert("Correcto");
      correctQuestionsToLs();
    } else {
      if (dataLives > 1) {
        alert("Incorrecto");
        subtractLive(dataLives, setDataLives);
        incorrectQuestionsToLs();
      } else {
        setLivesToLocalStorage(4);
        navigate("/home");
      }
    }
    totalQuestionsToLs();
  }
  /* ------------------- FUNCION QUE VALIDA EL ENVIO DEL FORMULARIO  --------------- */
  function handleSubmit(evt) {
    evt.preventDefault(); // Evita que se recargue la pagina
    console.log("Formulario enviado");
    validateOption(selectedValue); // Validamos la opcion enviada
    setSelectedValue("") // Limpiamos el input seleccionado
    /* ------ Hace uso de setMethods para pasar a la siguiente pregunta----  */
    const nextQuestion = (questions) => {
      if (contador === questions.length - 1) {
        alert("Terminaste el cuestionario");
        setLivesToLocalStorage(4);
        navigate("/home");
      } else {
        if (contador === 0) {
          contador = 1;// Para que no se repita la primera pregunta
        }
        setContador(contador + 1);
        setPregunta(questions[contador].question);
        setA(questions[contador].a);
        setB(questions[contador].b);
        setC(questions[contador].c);
        setD(questions[contador].d);
        setCorrect(questions[contador].correct);
        console.log("Contador: ", contador)
      }
    }
      nextQuestion(questions);

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
        <input value='a' type="radio" id="a" name="pregunta" checked={selectedValue === 'a'} onChange={handleChange} />

        <label htmlFor="b">B. {b}</label>
        <input value='b' type="radio" id="b" name="pregunta" checked={selectedValue === 'b'} onChange={handleChange} />

        <label htmlFor="c">C. {c}</label>
        <input value='c' type="radio" id="c" name="pregunta" checked={selectedValue === 'c'} onChange={handleChange} />

        <label htmlFor="d">D. {d}</label>
        <input value='d' type="radio" id="d" name="pregunta" checked={selectedValue === 'd'} onChange={handleChange} />

        <button className="bg-gray-400"  >Comprobar</button>

      </form>

      <h2>Selected radio: {selectedValue}</h2>
      <Lives dataLives={dataLives} setDataLives={setDataLives} />

      <button className="bg-gray-500 text-white" onClick={() => { navigate("/home"); setLivesToLocalStorage(4) }}>
        HOME
      </button>
    </div>
  );
};

export default Questionary;
