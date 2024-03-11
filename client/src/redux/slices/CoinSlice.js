import { createSlice } from '@reduxjs/toolkit'

export const CoinSlice = createSlice({
  name: 'coin',
  initialState: {
    name: null
  },
  reducers: {
    changeCoin: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { changeCoin } = CoinSlice.actions

export default CoinSlice.reducer