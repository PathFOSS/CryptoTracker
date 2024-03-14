import { createSlice } from '@reduxjs/toolkit'

export const CallsSlice = createSlice({
  name: 'calls',
  initialState: {
    value: 0
  },
  reducers: {
    changeCalls: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeCalls } = CallsSlice.actions

export default CallsSlice.reducer