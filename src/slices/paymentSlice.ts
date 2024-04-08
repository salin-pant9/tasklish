
import {createSlice,PayloadAction} from "@reduxjs/toolkit"



const initialState= {
   status:""
}


const paymentSlice = createSlice({
    name:'payment',
    initialState,
    reducers:{
        addPayment:(state,action:PayloadAction<string>) => {
          state.status = action.payload
        }
    }
})

export const {addPayment} = paymentSlice.actions
export default paymentSlice.reducer