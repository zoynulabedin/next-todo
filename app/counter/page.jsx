"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  decrement, increment, selectCount } from './counterSlice';

function Counter() {
    
const { count } = useSelector(selectCount);
    const dispatch = useDispatch();


  return (
		<>
			<div className="container w-96 mx-auto text-center border border-gray-400 p-3 mt-52 shadow-2xl rounded">
				<h1 className="text-9xl font-extrabold shadow-2xl">{count}</h1>
				<div className="divide-black-700"></div>
				<button
					onClick={() => dispatch(decrement())}
					className="bg-red-500 p-1 w-20 text-white text-3xl">
					--
				</button>
				<button
					onClick={() => dispatch(increment())}
					className="bg-green-500 p-1 w-20 text-white text-3xl">
					++
				</button>
			</div>
		</>
	);
}

export default Counter;