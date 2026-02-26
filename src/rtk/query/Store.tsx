import { configureStore } from "@reduxjs/toolkit";
import baseApis from "./baseApis";
import propertySlice from "../slices/PropertySlice";

const store = configureStore({
    reducer: {
        [baseApis.reducerPath]: baseApis.reducer,
        property: propertySlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApis.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;