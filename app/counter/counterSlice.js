"use client"
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state, action) => {
			state.count++;
		},

		decrement: (state, action) => {
			state.count--;
		},
	},
	extraReducers: (builder) => {},
});

console

export const selectCount = (state) => state.counter;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
