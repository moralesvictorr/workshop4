import React from "react";
import { useNavigate } from "react-router-dom";
import { questionHTML, questionCSS, questionFigma, questionUX, questionJS } from "../data/Questionario";
import { Lives, getFromLocalStorage, subtractLive, setLivesToLocalStorage } from "../components/Lives";
import { correctQuestionsToLs, incorrectQuestionsToLs, totalQuestionsToLs } from "../components/HandleStats";
import { Timer } from "../components/Timer";
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
  const navigate = useNavigate();

  // Runnung functions
  const category = matchCategory(); // Identificamos la categoria de la url
  const questions = getQuestionsArray(category); // Obtenemos el vector de preguntas de la categoria seleccionada
console.log( questions)
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
      console.log(respuesta)
      console.log(correct)
      alert("Correcto");
      correctQuestionsToLs();
      setShowToast(true);
    } else {
      console.log("FALSO")
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
    validateOption(selected); // Validamos la opcion enviada
    setSelected("") // Limpiamos el input seleccionado
    /* ------ Hace uso de setMethods para pasar a la siguiente pregunta----  */
    const nextQuestion = (questions) => {
      console.log(contador)
      if (contador === 0) {
        contador = 1;// Para que no se repita la primera pregunta
      }

      if (contador === questions.length - 1) {
        alert("Terminaste el cuestionario");
        setLivesToLocalStorage(4);
        navigate("/home");
      } else {
        setContador(contador + 1);
        setPregunta(questions[contador].question);
        setA(questions[contador].a);
        setB(questions[contador].b);
        setC(questions[contador].c);
        setD(questions[contador].d);
        setCorrect(questions[contador].correct);
      }
    }
    nextQuestion(questions);

  }

  /* ---------------  USE STATE y METODO PARA SABER INPUT SELECCIONADO -------- */
  const [selected, setSelected] = React.useState("");//Variable que cambia el input seleccionado ( Logica de Checkbox)

  const [showToast, setShowToast] = React.useState(false);

  return (
    <div className=" bg-neutral-900 h-screen p-4">

      {/*    Elementos: Close, ProgressBar, Lives */}
      <div className="flex gap-5 items-center ml-5 mr-4">
        <button className="" onClick={() => { navigate("/home") }}>✖️</button>

        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-white">
          <div className="bg-emerald-500 h-3 rounded-full" style={{ width: (contador * 130) }}></div>
        </div>
        <div className="w-10">
          <Lives dataLives={dataLives} setDataLives={setDataLives} />
        </div>
      </div>

      {/*  FORM  */}
      <form className="" onSubmit={handleSubmit} >

        
        <Timer />{/* Inicializa el cronometro("TIMER")  */}

        {/* Elementos: IMG, Question Tittle */}
        <div className="grid justify-center mt-16 mb-16">

          <h1 className="text-white text-2xl">{pregunta}</h1>
        </div>


        <div className="relative m-5 flex bg-slate-800">
          <input value={'a'} checked={selected === 'a'} onChange={(evt) => {  setSelected('a') }} type="checkbox" id="a" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="a" className="text-white select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {a} </label>
        </div>

        <div className="relative m-5 flex bg-slate-800">
          <input value={'b'} checked={selected === 'b'} onChange={(evt) => {  setSelected('b') }} type="checkbox" id="b" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="b" className="text-white  select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {b} </label>
        </div>

        <div className="relative m-5 flex bg-slate-800">
          <input value={'c'} checked={selected === 'c'} onChange={(evt) => {  setSelected('c') }} type="checkbox" id="c" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="c" className="text-white select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {c} </label>
        </div>

        <div className="relative m-5 flex bg-slate-800">
          <input value={'d'} checked={selected === 'd'} onChange={(evt) => {  setSelected('d') }} type="checkbox" id="d" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="d" className="text-white select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {d} </label>
        </div>

        

        <button className="right-5 h-12 w-full rounded-2xl text-white bg-violet-500   accent-emerald-500" >COMPROBAR</button>

      </form>
      {showToast && (
        <div
          className="fixed bottom-0 right-0 w-full h-72 bg-green-500 text-white rounded-lg shadow-lg"
        >
          Respuesta correcta
        </div>
      )}

    </div>
  );
};

export default Questionary;
