import  React, { useState, useEffect, useLayoutEffect } from  "react";
import '@progress/kendo-theme-default/dist/all.css'
import Nav from '../components/nav'
import ChartContainer from '../components/chart-container'
import { waterUsageStore, sendMessages} from '../store/water-usage'

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
            <ChartContainer seriesData={waterState.data} />
            <div>
                This is the rxjs subject chart page.
                { JSON.stringify(waterState.data) }
            </div>
        </>
    )
}

export default Chart;