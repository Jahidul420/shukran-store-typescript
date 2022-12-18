import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './src/slices/counterSlice';
const store= configureStore({
    reducer: {
        counter: counterReducer
    }
})


export default store