import {createSlice,PayloadAction} from "@reduxjs/toolkit"



const initialState= {
   token:""
}


const userSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
        addToken:(state,action:PayloadAction<string>) => {
          state.token = action.payload
        }
    }
})

export const {addToken} = userSlice.actions
export default userSlice.reducer