import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import axios from 'axios'
import instance from '@/lib/axios_instance'
import { toast } from 'sonner'

const DeleteCard = (Props:any) => {
  const token = localStorage.getItem('token');
  const handleDelete = async () => {
    try{

      const response = await instance.delete(`/boards/card/${Props.item.id}`,{
        headers: {
          Authorization: `Token ${token}`
        }
      });
      if(response.status === 200){
        console.log(Array.isArray(Props.data));
        const getData = Props.data.filter((item:any) => (

          item.id !== Props.item.id
        ));
        Props.setData(getData);

        // console.log(getData)
        // console.log('Deleted');
        
        toast('Card deleted successfully');
      }
    }catch(error:any){
      toast(error.message);
    }

  }
  return (
      
          <AlertDialog>
            <AlertDialogTrigger asChild>
            <button className='text-destructive hover:bg-gray-200'>Delete</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete card.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} className='bg-destructive'>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )

}

export default DeleteCard