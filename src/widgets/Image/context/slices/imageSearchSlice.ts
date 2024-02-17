import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ImageService} from "@/services/ImageService";
import {Image, ImageFetchData, ImageSearchSlice} from "@/widgets/Image/context/types";

const initialState: ImageSearchSlice = {
    value: [],
    status: null,
    error: null
}

export const fetchImages = createAsyncThunk('images/fetchImages', async (params: { query: string }): Promise<ImageFetchData[]> => {
    const response = await ImageService.searchImage(params.query)
    return response.data.results
})


export const imageSearchSlice = createSlice({
    name: 'imageSearchSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchImages.fulfilled, (state: ImageSearchSlice, action) => {
                let images: Image[] = []
                for (const item of action.payload) {
                    images.push({
                        id: item.id,
                        url: item.urls.small,
                        description: item.alt_description
                    })
                }
                state.value = images
                state.status = 'success'
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})