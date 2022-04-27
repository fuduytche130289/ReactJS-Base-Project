import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getHome = createAsyncThunk(
    "products/getHome",
    async () => {
        const response = await axios.get("http://128.199.211.17/api/v1/home");
        return response.data;
    }
);

export const getDetailProduct = createAsyncThunk(
    "products/getHome",
    async () => {
        const response = await axios.get("http://128.199.211.17/api/v1/home");
        return response.data;
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        homeData: {},
        isLoading: false,
        error: false
    },
    extraReducers: (builder => {
        builder.addCase(getHome.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getHome.fulfilled, (state, action) => {
            state.homeData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getHome.rejected, (state, action) => {
            state.error = true;
            state.isLoading = false;
        });
    })
});

export default productSlice.reducer;