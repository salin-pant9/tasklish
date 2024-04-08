'use client '
import React from 'react'
import {  Bar, Radar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
type Props = {}

const BarChart = ({events}:any) => {
    ChartJS.register(CategoryScale)

    
    const options = {
        responsive:true,
        plugins:{
            legend: {
                position:'top' as const,
            },
           
        },
    };
    const labels = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dataday = [0,0,0,0,0,0,0];
    if(events){
        for(let i=0; i < labels.length; i++){
            for(let j =0; j < events.length; j++){
                if(labels[i] === new Date(events[j].start_date).toLocaleString('en-US',{weekday:'long'})){
                    dataday[i]++
                }
            }
        }
    }
    const data = {
        labels,
        datasets: [
            {
                fill:true,
                label: 'Dataset 2',
                data: dataday,
                borderColor: 'lightGreen',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

  return (
    <div className="h-[15rem] w-full">
        <Bar options={options}   data={data} />
    </div>
  )
}

export default BarChart