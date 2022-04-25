import React, { useEffect, useReducer } from "react";

import productReducer from "../reducer/productReducer";

export const Store = React.createContext();

export const MyStore = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, {});

    useEffect(() => {
        dispatch({});
    }, []);

    return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};