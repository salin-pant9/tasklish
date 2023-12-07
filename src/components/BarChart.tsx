'use client '
import React from 'react'
import {  Bar, Radar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
type Props = {}

const BarChart = (props: Props) => {
    ChartJS.register(CategoryScale)

    
    const options = {
        responsive:true,
        plugins:{
            legend: {
                position:'top' as const,
            },
           
        },
    };
    const labels = ['January','February','March','April','May','June','July'];

    const data = {
        labels,
        datasets: [
            {
                fill:true,
                label: 'Dataset 2',
                data: labels.map(() => Math.random()),
                borderColor: 'lightGreen',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

  return (
    <div className="h-[20rem] w-full">
        <Bar options={options}   data={data} />
    </div>
  )
}

export default BarChart