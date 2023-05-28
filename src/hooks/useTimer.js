import { useState, useEffect } from "react";
import moment from 'moment';
import _ from 'lodash';

const useTimer = () => {
    const [timeTaken, setTimeTaken] = useState(0)
    const [counter, setCounter] = useState('00:00:00')
    const [timeInteval, setTimeInterval] = useState('00:00:00')

    const createCounter = () => {
        let interval = 1000;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        setTimeInterval(setInterval(() => {
            seconds = ++seconds;
            if (seconds >= 60) {
                minutes = ++minutes;
                seconds = 0;
            }
            if (minutes >= 60) {
                hours = ++hours;
                minutes = 0;
            }
            let hour_string = hours < 10 ? '0' + hours : hours;
            let minute_string = minutes < 10 ? '0' + minutes : minutes;
            let second_string = seconds < 10 ? '0' + seconds : seconds;
            setCounter(`${hour_string}:${minute_string}:${second_string}`)
            setTimeTaken(seconds)
        }, interval))
    }

    function clearTimeInterval(){
        clearInterval(timeInteval)
        setCounter('00:00:00')
        setTimeTaken(0)
        setTimeInterval(null)
        createCounter()
    }

    return {
        createCounter,
        counter,
        timeTaken,
        clearTimeInterval
    }

};

export default useTimer;