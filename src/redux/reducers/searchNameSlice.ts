import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SearchNameState {
  name: string | undefined;
}

const initialState: SearchNameState = {
    name: undefined,
};

export const searchNameSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearValue: (state) => {
      state.name = undefined;
    },
  },
});

export const { setName, clearValue } = searchNameSlice.actions;

export default searchNameSlice.reducer;
