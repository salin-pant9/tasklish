import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type CardProps =  {
    title: string,
    count: number
    className?: string,
}
const Dashboard_boards = ({title, count, className}: CardProps) => {

  return (
  <Card className={`w-[350px] ${className}`}>
    <CardHeader>
        <CardTitle className='text-center'>{title}</CardTitle>
    </CardHeader>
    <CardContent>
        <h1 className='font-extrabold text-2xl text-center'>{count}</h1>
    </CardContent>
  </Card>
  )
}

export default Dashboard_boards