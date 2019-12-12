
import {
    Chart,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';
import '@egjs/hammerjs'; //version of hammer that also runs on server


const ChartContainer = ({seriesData}) => (
    <Chart style={{width: '600px', height: '500px'}}>
        <ChartSeries>
            <ChartSeriesItem data={seriesData} type="column" field="volume" categoryField="month" />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;