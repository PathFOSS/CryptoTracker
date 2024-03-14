import { configureStore } from "@reduxjs/toolkit";
import prefReducer from "./slices/PrefSlice";
import coinReducer from "./slices/CoinSlice";
import callsReducer from "./slices/CallsSlice";

export const Store = configureStore({
    reducer: {
        preference: prefReducer,
        coin: coinReducer,
        calls: callsReducer,
    }
})

