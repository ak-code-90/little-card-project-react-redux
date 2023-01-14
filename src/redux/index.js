import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import toggleBtnReducer from "./toggleBtn";
import moviesReducer from "./movies";
import setSelectedCategoriesReducer from "./selectedCategories";



const rootReducer = combineReducers({
    toggleBtn: toggleBtnReducer,
    movies: moviesReducer,
    selectedCatgories : setSelectedCategoriesReducer
})


const store = configureStore({reducer:rootReducer})
export default store