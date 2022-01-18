import chart from 'chart.js/auto';
import moment from 'moment'
import React, { useEffect } from 'react';

const Chart = ({revenueThisWeek}) => {
    const chartRef = React.createRef();

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

		const myChart = new chart(ctx, {
            type: 'line',
            data: revenueThisWeek,
            options: {
                scales: {
                    y: {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, ticks) {
                                return '$' + value / 1000 + 'k';
                            }
                        }
                    },
                    x: {
                        ticks: {
                            callback: function(value, index, ticks) {
                                return this.getLabelForValue(value);
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                }
            }
        });
    });
    
    return (
        <div className="px-10 my-10 border-solid border-black border-2">
            <div className="flex justify-between my-5">
                <h3>Last 7 Day Revenue</h3>
                <p>11/12-15/12</p>
            </div>
            <canvas ref={chartRef} id="myChart" width="300" height="100"></canvas>
        </div>
    )
}

export default Chart;