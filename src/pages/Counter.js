import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const count = useSelector(state => state.counter.count);//trích xuất state count từ count reducer
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch({type: 'counter/increment', payload: {step: 10}})}>+</button>
                <button onClick={() => dispatch({type: 'counter/decrement', payload: {step: 1}})}>-</button>
            </div>
        </div>
    );
};

export default Counter;