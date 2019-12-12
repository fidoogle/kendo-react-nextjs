import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const ws = new W3CWebSocket('wss://echo.websocket.org/');

const configureWs = (setDataFromServer) => {
    ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
    }

    ws.onmessage = evt => {
        // may need to parse data sent from the websocket server
        const msg = JSON.parse(evt.data)
        console.log('onmessage: ', evt.data);
        setDataFromServer(evt.data);
    }

    ws.onclose = () => {
        console.log('disconnected')
        //TODO: automatically try to reconnect on connection loss

    }

    sendMessages();
}

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

export { configureWs }

// const Main = () => {
//     const [dataFromServer, setDataFromServer] = useState('');
//     useEffect(() => configureWs(setDataFromServer), []);

//     return (
//         <>
//             <Nav/>
//             <div>
//                 The websocket returned: {dataFromServer}
//             </div>
//         </>
//     )
// }

// export default Main;
