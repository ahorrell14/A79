import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const ChartComponent = ({ apiEndpoint, title }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                console.log('API Response:', response.data); // Debugging: Log API response
                setChartData({
                    labels: response.data.labels,
                    datasets: [
                        {
                            label: title,
                            data: response.data.values,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };
        fetchData();
    }, [apiEndpoint]);

    return chartData ? (
        <div>
            <h2>{title}</h2>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    ) : (
        <p>Loading chart...</p>
    );
};

export default ChartComponent;