import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension:0.3,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Your Expenses',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Amount of money you spent monthly wise',
      data:[2000,6000,8000,12000,18000,12000,7000,9000,12000,20000,19000,10000],
      borderColor: '#000000',
      backgroundColor: '#000000',
     
    }
    
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
