"use client";
import counterReducer from "@/app/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	devTools: true,
});

export default store;
