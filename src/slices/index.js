import counterReducer from "./counterSlice";
import productSlice from "./productSlice";

export const reducers = {
    counter: counterReducer,
    product: productSlice
}