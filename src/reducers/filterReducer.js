import { createSlice } from "@reduxjs/toolkit";
const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilter(state, action) {
      const currentInput = action.payload
      return currentInput
    }
  }
})

export const { getFilter } = filterSlice.actions
export default filterSlice.reducer