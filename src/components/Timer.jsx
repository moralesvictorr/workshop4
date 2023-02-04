import React, {useEffect, useState} from 'react'

export const incorrectQuestionsToLs = () => {
    if(localStorage.getItem("incorrectQuestions") != null ){
        const number = localStorage.getItem("incorrectQuestions");
        localStorage.setItem("incorrectQuestions", JSON.stringify(parseInt(number) + 1));
    }else{
        localStorage.setItem("incorrectQuestions", JSON.stringify(1));
    }
}

export const timerToLs = (minutos) => {
    console.log('local '+ minutos)
    if(localStorage.getItem("dataTimer") != null ){
        const previousTime = localStorage.getItem("dataTimer");
        localStorage.setItem("dataTimer", JSON.stringify(parseInt(previousTime) + parseInt(minutos)));
    }else{
        localStorage.setItem("dataTimer", JSON.stringify(parseInt(minutos)));
    }
}

const Timer = () => {
    const [seconds, setSeconds] =useState(0);
    const [minutes, setMinutes] =useState(0);
    const [hours, setHours] =useState(0);

    var timer;

    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000)

        if (seconds === 59){
            setMinutes(minutes + 1);
            setSeconds(0);
        }
        if (minutes === 59){
            setHours(hours + 1);
            setMinutes(0);
        }
    return () => clearInterval(timer);
    });
    const restart = () => {

        console.log('min ' + minutes)
        timerToLs(minutes)
        setHours(0);
        setSeconds(0);
        setMinutes(0);
    }

    const renderTime = () => {
        const hourTime = localStorage.getItem('dataTimer');
        if (hourTime < 60) {
            return hourTime + ' Min'
        } else {
            return Math.trunc(hourTime / 60) + ' Hours'
        }
    }

  return (
    <div>
        <p>
            {minutes< 10 ? "0" + minutes: minutes}:
            {seconds < 10 ? "0" + seconds: seconds}
        </p>
        <p>{renderTime()}</p>
        <button onClick={restart}>Reset</button>
    </div>
  )
}

export default Timer