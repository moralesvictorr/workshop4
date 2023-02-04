import React from 'react'

export const getFromLocalStorage = () => {
  const lives = localStorage.getItem("lives") ? JSON.parse(localStorage.getItem("lives")) : localStorage.setItem("lives", JSON.stringify(4));
  return JSON.parse(lives)
};

export const setLivesToLocalStorage = (number) => {
  localStorage.setItem("lives", JSON.stringify(number));
}

export const subtractLive = (dataLives,setDataLives) => {
  if (dataLives > 0) {
  const newLives = dataLives - 1;
  localStorage.setItem("lives", JSON.stringify(newLives));
  setDataLives(newLives);
  }
  };

export const Lives = (dataLives,setDataLives) => {
  return (
    <div>
      <h2>Data from Local Storage: {JSON.stringify(dataLives)}</h2>
    </div>
  );
};

