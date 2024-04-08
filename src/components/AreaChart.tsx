'use client '
import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
type Props = {}

const AreaChart = ({events}: any) => {
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
    const dataday1 = [0,0,0,0,0,0,0];
    const dataday2 = [0,0,0,0,0,0,0];
    if(events){
        for(let i=0; i < labels.length; i++){
            for(let j =0; j < events.length; j++){
                if(labels[i] === new Date(events[j].start_date).toLocaleString('en-US',{weekday:'long'}) && events[j].status === "TODO"){
                    dataday1[i]++
                }else if(labels[i] === new Date(events[j].start_date).toLocaleString('en-US',{weekday:'long'}) && events[j].status === "Completed"){
                    dataday2[i]++;
                    console.log(dataday2);
                }
            }
        }
    }
    const data = {
        labels,
        datasets: [
            {
                label: 'Completed',
                data: dataday2,
                borderColor: 'lightGreen',
            },
            {
                label: 'Not Completed',
                data: dataday1,
                borderColor: '#E72929',
            }
        ]
    }

  return (
    <div className="h-[20rem] w-[100%]">
        <Line options={options}  data={data} />
    </div>
  )
}

export default AreaChart