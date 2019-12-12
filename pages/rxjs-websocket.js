import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import { webSocket } from 'rxjs/webSocket';

const subject = webSocket("wss://echo.websocket.org/");

const getRndInteger = (min, max) => {
    const rnd = Math.floor(Math.random() * (max - min + 1) ) + min;
    return Math.round(rnd/100)*100; //rounds to nearest 100
}

const buildMsg = () => {
    return JSON.stringify({ month: "Oct 19", volume: getRndInteger(500, 7500) });
}

const sendMessages = (subject) => {
    const sendMsgs = setInterval(() => { subject.next(buildMsg()) }, 2000);
    setTimeout(() => { clearInterval(sendMsgs)}, 15000);
}

const RxJSWebsocket = () => {
    useEffect( () => {
        subject.subscribe(
            msg => console.log('message received: ' + JSON.stringify(msg)), // Called whenever there is a message from the server.
            err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
            () => console.log('complete') // Called when connection is closed (for whatever reason).
        );
    
        subject.next({ message: 'some message' });
        sendMessages(subject);
        // This will send a message to the server once a connection is made. Remember value is serialized with JSON.stringify by default!
    
        //subject.complete(); // Closes the connection.
    
        //subject.error({ code: 4000, reason: 'I think our app just broke!' });
        // Also closes the connection, but let's the server know that this closing is caused by some error.
    });
    

    return (
        <>
            <Nav />
            <div>
                This is the RxJSWebsocket page.
            </div>
        </>
    );
}

export default RxJSWebsocket;