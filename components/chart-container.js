
import {
    Chart,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';
import 'hammerjs';


const ChartContainer = ({seriesData}) => (
    <Chart style={{width: '600px', height: '500px'}}>
        <ChartSeries>
            <ChartSeriesItem data={seriesData} type="column" field="volume" categoryField="month" />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;