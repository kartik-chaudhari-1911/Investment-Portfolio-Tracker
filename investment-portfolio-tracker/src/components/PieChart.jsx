import React, { useRef, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/PieChart.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Stocks', 'Bonds', 'Crypto'],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="pie-chart">
      <Pie ref={chartRef} data={data} />
    </div>
  );
};

export default PieChart;