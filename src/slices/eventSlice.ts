import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface eventState {
  title:string,
  description:string
  time:number,
  eventDate: string
  
   
}
interface State {
    items:eventState[]
}
const initialState:State = {
    items:[]
}


const eventSlice = createSlice({
    name:'events',
    initialState,
    reducers:{
        AddEvents:(state,action:PayloadAction<eventState>) => {
            state.items.push(action.payload);
        }
    }
})

export const {AddEvents} = eventSlice.actions
export default eventSlice.reducer