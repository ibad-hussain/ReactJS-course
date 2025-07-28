import React, { useState, useEffect } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    // Variation 2 : Runs on only first render
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Timer started");
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("TimerComponent unmounted");
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div>
            <h2>Seconds : {seconds}</h2>
        </div>
    )
}

export default TimerComponent
