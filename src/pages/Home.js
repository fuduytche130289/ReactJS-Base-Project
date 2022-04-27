import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getHome} from "../actions/product";

const Home = () => {
    const productData = useSelector(state => state.product);
    const {homeData, isLoading, error} = productData;
    const {lastProducts} = homeData;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHome());
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {isLoading && <div>Đang tải</div>}
            {error && <div>Lỗi</div>}
            {lastProducts &&
                lastProducts.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                    </div>
                ))}
        </div>
    );
};

export default Home;