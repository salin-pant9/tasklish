import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import EventModal from './EventModal'

const EventDialog = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
        <Plus className='w-10 h-10'/>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
                <DialogTitle>Create Task or Events</DialogTitle>

            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default EventDialog