import { createSlice } from '@reduxjs/toolkit'

export const PrefSlice = createSlice({
  name: 'preference',
  initialState: {
    value: 0
  },
  reducers: {
    changePreference: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changePreference } = PrefSlice.actions

export default PrefSlice.reducer