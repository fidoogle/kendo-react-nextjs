import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const ws = new W3CWebSocket('wss://echo.websocket.org/');

const configureWs = () => {
    ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
    }

    ws.onclose = () => {
        console.log('disconnected')
        //TODO: automatically try to reconnect on connection loss

    }

    return ws;
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
