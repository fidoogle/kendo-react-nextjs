
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
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

// Use for <ChartContainer seriesData={seriesData2} categories={categories} />
const ChartContainer2 = ({seriesData, categories}) => (
    <Chart style={{width: '700px', height: '500px'}}>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem data={seriesData} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;