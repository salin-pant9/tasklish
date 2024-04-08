import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface eventState {
  title: string;
  description: string;
  eventStarttime: number;
  eventFinishtime: number;
  eventStartDate: string;
  eventFinishDate: string;
  status: string;
  id: number;
  board: number;
}
interface State {
  items: eventState[];
}
const initialState: State = {
  items: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    AddEvents: (state, action: PayloadAction<eventState>) => {
    state.items.push(action.payload)
    },
  },
});

export const { AddEvents } = eventSlice.actions;
export default eventSlice.reducer;
