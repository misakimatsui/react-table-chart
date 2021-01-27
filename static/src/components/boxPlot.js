import React from 'react';
import ChartComponent, {Line} from 'react-chartjs-2';
import 'chartjs-chart-box-and-violin-plot'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'square',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#eee',
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [3, 10, 21, 31, 34, 40, 48]
        }
    ]
};

const boxplotData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'boxplot',
            backgroundColor: "rgba(255, 159, 64, 0.5)",
            borderColor: "rgb(255, 159, 64)",
            borderWidth: 1,
            data: [
                {
                    min:50.77, max: 72.205, q1:52.912, median:57.37, q3:67.2230, whiskerMax:72.206, whiskerMin:50.77,
                    outliers:[5.13, 37.62, 38.67, 83.971, 86.22 ]
                },
                {
                    min:40.0, max: 80.0, q1: 50.0, median:55.0, q3:60.0,
                    outliers:[5.13, 37.62, 38.67, 83.971, 86.22 ]
                },
                {
                    min:30.0, max: 80.0, q1: 40.0, median:50.0, q3:70.0,
                    outliers:[5.13, 37.62, 38.67, 83.971, 86.22 ]
                },
                {
                    min:60.0, max: 80.0, q1: 63.0, median:64.0, q3:65.0,
                    outliers:[5.13, 37.62, 38.67, 83.971, 86.22 ]
                },
                {
                    min:35.0, max: 55.0, q1: 40.0, median:46.0, q3:52.0,
                    outliers:[5.13, 37.62, 38.67, 83.971, 86.22 ]
                },
            ],
        },
        {
            label: 'bar',
            data: [3, 10, 21, 31, 34, 40, 48],
            type:'bar',
            backgroundColor: 'rgba(75,192,192,0.4)',
        }
    ]

};

const boxPlot = () => {
    return (
        <div>
            <h2>Line Example</h2>
            <ChartComponent
                type='boxplot'
                data={boxplotData}
            />
        </div>
    );
}

export default boxPlot;
