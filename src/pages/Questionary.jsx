import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questionHTML, questionCSS, questionFigma, questionUX, questionJS } from "../data/Questionario";
import { Lives, getFromLocalStorage, subtractLive, setLivesToLocalStorage } from "../components/Lives";
import { correctQuestionsToLs, incorrectQuestionsToLs, totalQuestionsToLs } from "../components/HandleStats";
import { Timer } from "../components/Timer";
import Toast from "../components/Toast";
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
  let [previousCorrect, setPreviusCorrect] = React.useState("") // Variable que guarda la respuesta correcta anterior
  let [previusSelected, setPreviusSelected] = React.useState("") // Variable que guarda la respuesta seleccionada anterior
  // Declarations of variables
  const [dataLives, setDataLives] = React.useState(getFromLocalStorage());
  const navigate = useNavigate();
  /* ---------------  USE STATE y METODO PARA SABER INPUT SELECCIONADO -------- */
  const [selected, setSelected] = React.useState("");//Variable que cambia el input seleccionado ( Logica de Checkbox)

  /* USE STATE PARA EL FUTURO TOAST */
  const [showToast, setShowToast] = React.useState(false);
  setTimeout(() => {
    setShowToast(false);
  }, 5000);
  // Running functions
  const category = matchCategory(); // Identificamos la categoria de la url
  const questions = getQuestionsArray(category); // Obtenemos el vector de preguntas de la categoria seleccionada
  /* ------------------ Variables con useState para capturar la info a mostrar---------------------- */
  let [contador, setContador] = React.useState(1); // Contador de preguntas
  let [pregunta, setPregunta] = React.useState(questions[0].question); // Variable en la que iremos itereando las preguntas
  let [a, setA] = React.useState(questions[0].a); // respuesta A
  let [b, setB] = React.useState(questions[0].b); // respuesta B
  let [c, setC] = React.useState(questions[0].c); // respuesta C
  let [d, setD] = React.useState(questions[0].d);  // respuesta D
  let [correct, setCorrect] = React.useState(questions[0].correct);  // respuesta correcta

  /*----------  FUNCION PARA CONTROLAR EL LLENADO DE PROGRESSBAR */
  const progressBarValues = [0, 10, 30, 50, 70, 90];

  const progressBarValue = () => {
    return { width: `${progressBarValues[contador - 1]}%` };
  };


  /* ------------  FUNCION QUE VALIDA SI LA RESPUESTA ENVIADA ES CORRECTA --------------------------- */

  const validateOption = () => {
    console.log(selected, "correct")
    let labelCorrectIn = document.querySelector("." + `${correct}`)
    labelCorrectIn.classList.add("border-green-500");
    if (selected === correct) {

      console.log("Correcto");
      correctQuestionsToLs();
      setShowToast(true);

    } else if (dataLives > 1) {

      let labelResponse = document.querySelector("." + `${selected}`)
      labelResponse.classList.add("border-red-500");

      console.log("Incorrecto");
      subtractLive(dataLives, setDataLives);
      incorrectQuestionsToLs();
    } else {
      setLivesToLocalStorage(4);
      navigate("/home");
    }
    totalQuestionsToLs();
    setSelected("") // Limpiamos el input seleccionado

  }

  /* ------------------- FUNCION QUE VALIDA EL ENVIO DEL FORMULARIO  --------------- */
  function handleSubmit(evt) {
    evt.preventDefault(); // Evita que se recargue la pagina
    /* Ocultar boton Comprobar y mostrar boton Siguiente */
    document.querySelector(".btnSubmit").classList.add("hidden");
    document.querySelector(".btnNext").classList.remove("hidden");
    console.log("Formulario enviado");
    validateOption(); // Validamos la opcion enviada
    setPreviusCorrect(correct)
    setPreviusSelected(selected)
  }

  /* -------------- FUNCION QUE REALIZA EL CAMBIO DE PREGUNTA */
  const nextQuestion = (evt) => {
    evt.preventDefault();
    console.log(previusSelected, "correct")

    /* Ocultar boton Siguiente y mostrar boton Comprobar */
    document.querySelector(".btnSubmit").classList.remove("hidden");
    document.querySelector(".btnNext").classList.add("hidden");

    let labelResponse = document.querySelector("." + `${previusSelected}`)
    let labelCorrectIn = document.querySelector("." + `${previousCorrect}`)

    labelResponse.classList.remove("border-red-500");
    labelCorrectIn.classList.remove("border-green-500");
    if (contador === questions.length) {
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

  return (
    <div className=" bg-neutral-900 h-screen p-4">

      {/*    Elementos: Close, ProgressBar, Lives */}
      <div className="flex gap-5 items-center ml-5 mr-4">
        <button className="" onClick={() => { navigate("/home") }}>✖️</button>

        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-white">
          <div className="bg-emerald-500 h-3 rounded-full" style={progressBarValue()}></div>
        </div>
        <div className="w-10">
          <Lives dataLives={dataLives} setDataLives={setDataLives} />
        </div>
      </div>

      {/*  FORM  */}
      <form className=""  >


        <Timer />{/* Inicializa el cronometro("TIMER")  */}

        {/* Elementos: IMG, Question Tittle */}
        <div className="grid justify-center mt-16 mb-16">

          <h1 className="text-white text-2xl">{pregunta}</h1>
        </div>


        <div className="relative m-5 flex bg-slate-800">
          <input value={'a'} checked={selected === 'a'} onChange={(evt) => { setSelected('a') }} type="checkbox" id="a" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="a" className="a text-white select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {a} </label>
        </div>

        <div className="relative m-5 flex bg-slate-800">
          <input value={'b'} checked={selected === 'b'} onChange={(evt) => { setSelected('b') }} type="checkbox" id="b" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="b" className="b text-white  select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {b} </label>
        </div>

        <div className="relative m-5 flex bg-slate-800">
          <input value={'c'} checked={selected === 'c'} onChange={(evt) => { setSelected('c') }} type="checkbox" id="c" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="c" className="c text-white select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {c} </label>
        </div>

        <div className="relative m-5 flex bg-slate-800">
          <input value={'d'} checked={selected === 'd'} onChange={(evt) => { setSelected('d') }} type="checkbox" id="d" className="peer absolute top-[calc(50%-theme(spacing.2))] right-5 h-5 w-5 rounded-full accent-emerald-500" />
          <label htmlFor="d" className="d text-white select-none rounded border-2 p-4  pl-5 w-full font-bold transition-colors duration-200 ease-in-out peer-checked:border-emerald-500 peer-checked:text-emerald-200"> {d} </label>
        </div>



        <button type="submit" onClick={handleSubmit} className="btnSubmit right-5 h-12 w-full rounded-2xl text-white bg-violet-500 " >COMPROBAR</button>

      </form>
      <button onClick={nextQuestion} className="btnNext hidden right-5 h-12 w-full rounded-2xl text-white bg-blue-500 " >CONTINUAR</button>
      {showToast && (
        <Toast message="Respuesta BLABLA"/>
      )}

    </div>
  );
};

export default Questionary;
