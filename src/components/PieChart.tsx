'use client '
import React from 'react'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { CategoryScale } from 'chart.js/auto'
type Props = {}

const PieChart = ({events}: any) => {
    ChartJS.register(CategoryScale)

    
    const options = {
        responsive:true,
        plugins:{
            legend: {
                position:'top' as const,
            },
           
        },
    };
    const labels = ['January', 'February','March','April','May', 'June','July','August','September','October','November','December'];
    const datamonth = [0,0,0,0,0,0,0,0,0,0,0,0]
    if(events){
        for(let i=0; i < labels.length; i++){
            for(let j =0; j < events.length; j++){
                if(labels[i] === new Date(events[j].start_date).toLocaleString('en-US',{month:'long'}) && events[j].status === "TODO"){
                    datamonth[i]++
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
                data: datamonth,
                borderColor: [ 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',],
                backgroundColor: [ 'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',],
            }
        ]
    }

  return (
    <div className="h-[20rem] w-full">
        <Pie  data={data} />
    </div>
  )
}

export default PieChart