import { configureStore } from "@reduxjs/toolkit";
import prefReducer from "./slices/PrefSlice";
import coinReducer from "./slices/CoinSlice";

export const Store = configureStore({
    reducer: {
        preference: prefReducer,
        coin: coinReducer
    }
})

