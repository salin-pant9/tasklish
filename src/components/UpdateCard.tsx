'use client';
import React, { useState } from 'react'
import {DialogTitle, Dialog, DialogContent, DialogHeader, DialogTrigger, DialogFooter, DialogClose } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { format } from 'date-fns'
import { update_Card } from '@/lib/update_Card'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useParams } from 'next/navigation';

const UpdateCard = ({data, setData, item}: any) => {
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [status, setStatus] = useState(item.status);
    const [start_date, setStart_date] = useState(format(new Date(item.start_date),'yyyy-MM-dd'))
    const [due_date, setDue_date] = useState(format(new Date(item.due_date), 'yyyy-MM-dd'))
    const [start_time,setStart_time] = useState(new Date(item.start_date).getHours());
    const [end_time, setEnd_time] = useState(new Date(item.due_date).getHours());
  const token = useSelector((state: RootState) => state.token.token);
  const params = useParams();
    const update_card = async () => {

    let getStartDate = new Date(start_date);
    let getDueDate = new Date(due_date);
     getStartDate.setHours(start_time,0,0); 
     getDueDate.setHours(end_time,0,0);
    const response = await update_Card({title, description, token ,board_id:params.board_id as unknown as number, id:item.id, status, start_date:getStartDate.toISOString(), due_date:getDueDate.toISOString()});
     const getData = data.map((e:any)=> (
        e.id === response.id ? response : e
    ));
    setData(getData);
    }
  return (
  <Dialog>
    <DialogTrigger asChild>
        <button className='hover:bg-gray-300'>Update</button>
    </DialogTrigger>
    <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
            <DialogTitle>Update Card</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='title' className=''>Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className='col-span-3'/>
            </div>

            <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='description' className=''>Description</Label>
                <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} className='col-span-3'/>
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='status' >Status</Label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className='col-span-3 h-6 bg-white'>
                    <option value="Completed">Completed</option>
                    <option value="TODO">TODO</option>
                </select>

            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
                <div className='col-span-2'>
                    <Label htmlFor='start_date'>Start Date</Label>
                    <Input id="start_date" type='date'  value={start_date} onChange={(e) => setStart_date(e.target.value)} className='col-span-3'/>
                     
                </div>
                
                <div className='col-span-2'>
                    <Label htmlFor='due_date'>End Date</Label>
                    <Input id="due_date" type='date' value={due_date} onChange={(e) => setDue_date(e.target.value)} className='col-span-3'/>
                     
                </div>

            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
                <div className='col-span-2'>
                    <Label htmlFor='start_time'>Start Time</Label>
                    <Input id="start_time"   value={start_time} onChange={(e) => setStart_time(+e.target.value)} className='col-span-3'/>
                     
                </div>
                
                <div className='col-span-2'>
                    <Label htmlFor='end_time'>End Time</Label>
                    <Input id="end_time"  value={end_time} onChange={(e) => setEnd_time(+e.target.value)} className='col-span-3'/>
                     
                </div>

            </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>

            <button onClick={update_card} className='bg-blue-500 font-bold rounded-xl text-white p-2'>Update</button>
            </DialogClose>
        </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default UpdateCard