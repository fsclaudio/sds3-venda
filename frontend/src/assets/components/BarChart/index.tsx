import { SaleSuccess } from 'assets/types/sale';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels:{
        categories: string[];
    };
    series: SeriesData[];
}
const BarChart = () => {   

    const [chartData, setChartData] = useState<ChartData>(
        {
            labels: {
                categories: []
            },
            series: [
                {
                    name: "",
                    data: []                   
                }
            ]
        }
    );

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/succes-by-seller`)
        .then(response =>{
            const data =response.data as SaleSuccess[];
            const mylabel = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.deals / x.visited,1));
 
            setChartData ({
                labels: {
                    categories: mylabel
                },
                series: [
                    {
                        name: "% Success",
                        data: mySeries                   
                    }
                ]
            });
        });
    },[] )  

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    return (

        <Chart 
           options={{...options, xaxis:chartData.labels}}
           series={chartData.series}
           type= "bar"
           height="240"
        />
    );

}

export default BarChart;