import {configureStore} from "@reduxjs/toolkit";
import {imageSearchSlice} from "@/widgets/Image/context/slices/imageSearchSlice";

export const store = configureStore({
    reducer: {
        images: imageSearchSlice.reducer
    }
})

export type ImageSearchState = ReturnType<typeof store.getState>

export type ImageSearchDispatch = typeof store.dispatch