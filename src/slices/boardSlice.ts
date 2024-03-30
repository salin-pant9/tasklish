import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface boardState {
  description: string;
  id: number;
  name: string;
}

interface State {
  items: boardState[];
}

const initialState: State = {
  items: [],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    AddBoards: (state, action: PayloadAction<boardState>) => {
     const exist = state.items.find((item)=> (
      item.id === action.payload.id
     )) 
     if(!exist){
      state.items.push(action.payload);
    
     }
    },
  },
});

export const { AddBoards } = boardSlice.actions;
export default boardSlice.reducer;
