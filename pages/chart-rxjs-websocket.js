import  React, { useState, useEffect, useLayoutEffect } from  "react"
import '@progress/kendo-theme-default/dist/all.css'
import Nav from '../components/nav'
import ChartContainer from '../components/chart-container'
import { waterUsageStore, sendMessages} from '../store/water-usage'
import JSONPretty from 'react-json-prettify'

const Chart = () => {
    const [waterState, setWaterState] = useState(waterUsageStore.initialState);

    useEffect(()=> {
        waterUsageStore.subscribe(setWaterState);
        waterUsageStore.init();
        sendMessages(); // start simulated messages from backend
    },[]);

    return (
        <>
            <Nav/>
            <h2>Kendo Live Chart</h2>
            <p>This uses a simulated websocket to feed data to a Kendo chart. New data is pushed to the chart every 2 seconds for 30 seconds. 
                Notice the entire chart needs to reload to show the new data.
                Note: I didn't put a reconnect if the websocket abruptly disconnects.
            </p>
            <ChartContainer seriesData={waterState.data} />
            <div>
                This is the data fed thru a websocket every 2 seconds:
                <JSONPretty json={waterState.data} />
            </div>
        </>
    )
}

export default Chart;