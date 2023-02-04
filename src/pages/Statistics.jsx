import React from 'react'
import Navbar from '../layout/Navbar'
import Timer from '../components/Timer'
const Statistics = () => {
  return (
    <div>
      <h1>Statistics</h1>

      <div>
        <h2>Tiempo de estudio:{"EN PROCESO"}</h2>
        <Timer />
      </div>

      <div>
        <h2>Respuestas contestadas:{localStorage.getItem("totalQuestions")}</h2>
      </div>

      <div>
        <h2>Respuestas correctas:{localStorage.getItem("correctQuestions")}</h2>
      </div>

      <div>
        <h2>Respuestas incorrectas:{localStorage.getItem("incorrectQuestions")}</h2>
      </div>

      <Navbar />
    </div>
  )
}

export default Statistics