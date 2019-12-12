import '@progress/kendo-theme-default/dist/all.css'
import Nav from '../components/nav'
import ChartContainer from '../components/chart-container'
import 'hammerjs';

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

const Chart = () => {
    return (
    <>
        <Nav />
        <h2>Static Chart</h2>
        <ChartContainer seriesData={seriesData} />
    </>)
};

export default Chart;
