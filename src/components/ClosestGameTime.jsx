import React, { useState, useEffect, useRef } from 'react';
import { client } from "../client";
import { format } from 'date-fns'

// const currTime = format(new Date(Date()), 'yyyy-MM-dd HH:mm');

const currTime = (new Date(Date())).toJSON();







export default function ClosestGameTime() {

    const [closestGameTime, setClosestGameTime] = useState(0);
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");
    const [distance, setDistance] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    let interval = useRef();


    useEffect(() => {
        client.fetch(
            `*[_type == "schedule"] {
         publishedAt,
         } | order(publishedAt asc)`
        ).then((data) => {
            setClosestGameTime(data.filter(game => (game.publishedAt > currTime)).slice(0, 1)[0].publishedAt);
        }).then(
            interval = setInterval(() => {
                setCurrentTime(new Date().getTime())
            }, 1000)
        ).catch(console.error);
    }, []);



    // useEffect(() => {
    //     setDistance(gameTime != 0 ? gameTime  - currentTime : currentTime - currentTime)
    // }, [currentTime, gameTime])



    useEffect(() => {
        setGameTime(new Date(closestGameTime).getTime())
    }, [closestGameTime])

    useEffect(() => {
        setDistance(gameTime != 0 ? gameTime  - currentTime : currentTime - currentTime)
    }, [currentTime, gameTime])


    useEffect(() => {
        setTimerDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    }, [distance])

    useEffect(() => {
        setTimerHours(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
    }, [distance])

    useEffect(() => {
        setTimerMinutes(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)));
    }, [distance])
    
    useEffect(() => {
        setTimerSeconds(Math.floor(distance % (1000 * 60) / 1000));
    }, [distance])

    return (
        <>
            <h4 className='max-w-7xl text-2xl mx-auto px-5'>
            Iki rungtynių liko:
            </h4>
            <h3 className='max-w-7xl text-3xl mx-auto pb-5 px-5'>
                {timerDays} d. {timerHours} val. {timerMinutes} min. {timerSeconds} s.
            </h3>

        </>
    )
}



