import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../slices/counterSlice";


const Counter = () => {
    const count = useSelector(state => state.counter.count);//trích xuất state count từ count reducer
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment({step: 10}))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    );
};

export default Counter;