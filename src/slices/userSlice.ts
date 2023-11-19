import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface UserState {
    username:string,
    first_name:string,
    last_name:string,
   
}

const initialState:UserState = {
    username : "",
    first_name:"",
    last_name:'',
}


const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        increment:(state,action:PayloadAction<UserState>) => {
          return  {...state,...action.payload}
        }
    }
})

export const {increment} = userSlice.actions
export default userSlice.reducer