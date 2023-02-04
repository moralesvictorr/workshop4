import React, { useEffect, useState } from 'react'

export const renderTime = () => {
    const hourTime = localStorage.getItem("dataTimer");
    if (!hourTime) return "0 Min";
    return hourTime < 60
      ? `${hourTime} Min`
      : `${Math.trunc(hourTime / 60)} Hours`;
  };

export const timerToLs = (minutes) => {
    console.log("TIMER TO LS")
    minutes = 1;
    let previousTime = localStorage.getItem("dataTimer");
    previousTime = previousTime ? JSON.parse(previousTime) + minutes : minutes;
    localStorage.setItem("dataTimer", JSON.stringify(previousTime));
  };

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);

    var timer;

    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000)

        if (seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);
            minutes = timerToLs(minutes)

        }
        return () => clearInterval(timer);
    });

    return (
        <p>Minutos:{minutes} Segundos{seconds}</p>
    )

}
