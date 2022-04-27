import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers/index';
import thunk from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(thunk));//tạo một cái store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

