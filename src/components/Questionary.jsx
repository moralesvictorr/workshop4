import React from "react";
import { useNavigate } from "react-router-dom";
// import Selection from "../components/Selection";


const Questionary = () => {

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

  return (
    <div>
      <h1>Questionary</h1>
      <h2>Estamos en la categoria: {category}</h2>

      <button className="bg-gray-500 text-white" onClick={() => navigate("/home")}>
        HOME
      </button>
    </div>
  );
};

export default Questionary;
