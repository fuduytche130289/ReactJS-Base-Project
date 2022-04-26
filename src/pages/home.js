import "../index.css"
import React, {useCallback, useContext, useEffect, useState} from "react";
import {getProductById} from "../services/productService";
import {useDispatch, useSelector} from "react-redux";
import {foodItemService} from "../services/foodItemService";
import {getListCategoriesSuccess} from "../action/categories";
import {getListProductSuccess} from "../action/product";

const Home = () => {

    const dispatch = useDispatch();

    const {categories} = useSelector((state) => state);

    useEffect(() => {
        (async () => {
            try {
                const resp = await foodItemService.getFoodItem();
                dispatch(getListCategoriesSuccess({data: resp.data.data}));
                console.log(resp.data.data)
            } catch (e) {
                console.log(e)
            }
        })();
    }, []);

    const getProductHandle = async (id) => {
        try {
            // dispatch(getListProduct({id: id}));
            const resp = await getProductById(id);
            dispatch(getListProductSuccess({data: resp.data.data}))
        } catch (e) {
            console.log(e)
        }
    }

    return <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        (categories?.data || []).map((foodItem,foodIndex)=>{
                            return(
                                <div className="p-4 md:w-1/2 h-fit" key={foodIndex} onClick={()=>getProductHandle(foodItem.id) }>
                                    <div
                                        className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                            src={"http://192.168.1.43:80/storage/"+foodItem.thumb}
                                            alt="blog"/>
                                        <div className="p-4">

                                            <h1 className="title-font text-lg font-bold text-center text-3xl text-gray-600">{foodItem.name}</h1>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/*{*/}
                {/*    (products || []).map((product, productIndex) => {*/}
                {/*        return <div>*/}
                {/*            <div className="p-4 md:w-1/2 h-fit" key={productIndex} >*/}
                {/*                <div*/}
                {/*                    className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">*/}
                {/*                    <img*/}
                {/*                        className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"*/}
                {/*                        src={"http://192.168.1.20/storage/" + product.thumb}*/}
                {/*                        alt="blog"/>*/}
                {/*                    <div className="p-4">*/}

                {/*                        <h1 className="title-font text-lg font-bold text-center text-3xl text-gray-600">{product.name}</h1>*/}

                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </section>
    </div>;
};

export default Home;