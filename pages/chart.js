import '@progress/kendo-theme-default/dist/all.css'
import Nav from '../components/nav'
import ChartContainer from '../components/chart-container'
import { configureWs } from '../components/websocket'
import React, { useState, useEffect } from 'react';

let ws = null; // reference to websocket

let seriesData = [
    { month: "Aug 18", volume: 6000 },
    { month: "Sep 18", volume: 3000 },
    { month: "Oct 18", volume: 1500 },
    { month: "Nov 18", volume: 2250 },
    { month: "Dec 18", volume: 1500 },
    { month: "Jan 19", volume: 3000 },
    { month: "Feb 19", volume: 2250 },
    { month: "Mar 19", volume: 1500 },
    { month: "Apr 19", volume: 2250 },
    { month: "May 19", volume: 1500 },
    { month: "Jun 19", volume: 2250 },
    { month: "Jul 19", volume: 2250 },
    { month: "Aug 19", volume: 4500 },
    { month: "Sep 19", volume: 7500 }
];

// Use with: <ChartContainer seriesData={seriesData2} categories={categories} />
const seriesData2 = [
    6000, 
    3000, 
    1500, 
    2250, 
    1500,
    3000,
    2250,
    1500,
    2250,
    1500,
    2250,
    2250,
    4500,
    7500,
    4500
];
const categories = [
    'Aug 18',
    'Sep 18',
    'Oct 18',
    'Nov 18',
    'Dec 18',
    'Jan 19',
    'Feb 19',
    'Mar 19',
    'Apr 19',
    'May 19',
    'Jun 19',
    'Jul 19',
    'Aug 19',
    'Sep 19',
    'Oct 19',
];

const getRndInteger = (min, max) => {
    const rnd = Math.floor(Math.random() * (max - min + 1) ) + min;
    return Math.round(rnd/100)*100; //rounds to nearest 100
}

const buildMsg = () => {
    return JSON.stringify({ month: "Oct 19", volume: getRndInteger(500, 7500) });
}

const sendMessages = () => {
    const sendMsgs = setInterval(() => { ws.send(buildMsg()) }, 2000);
    setTimeout(() => { clearInterval(sendMsgs)}, 15000);
}

const Chart = () => {
    const [dataFromServer, setDataFromServer] = useState([]);

    useEffect(() => {
        
    setDataFromServer(previous => {return {month: 'Fidel', volume: 4444}})
    console.log('new:', dataFromServer)
        ws = configureWs();
        ws.onmessage = evt => {
            // may need to parse data sent from the websocket server
            const msg = JSON.parse(evt.data)
            console.log('onmessage: ', evt.data);
            console.log(...seriesData, JSON.parse(evt.data))
            //setDataFromServer([...dataFromServer, msg]);
            //setDataFromServer([...dataFromServer, evt.data]);
            //setDataFromServer(evt.data);
            //setDataFromServer(...seriesData, JSON.parse(evt.data));
            //setDataFromServer({month: 'Fidel', volume: 3333})
            setDataFromServer(previous => {return {month: 'Fidel', volume: 4444}})
            console.log('post:', dataFromServer)
        }
        sendMessages(); // simulate a live websocket by sending and echoing messages
    }, []);

    return (
    <>
        <Nav />
        <ChartContainer seriesData={seriesData} />
        <div>
            The websocket returned:  
        </div>
    </>)
};

export default Chart;
