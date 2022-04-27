import "../index.css"
import React, {useCallback, useContext, useEffect, useState} from "react";
import {getProductById} from "../services/productService";
import {useDispatch, useSelector} from "react-redux";
import {foodItemService} from "../services/foodItemService";
import {getListCategoriesSuccess} from "../action/categories";
import {getListProductSuccess} from "../action/product";

const Home = () => {

    const dispatch = useDispatch();

    const temp = useSelector((state) => state);

    console.log("temp", temp)

    useEffect(() => {
        (async () => {
            try {
                const resp = await foodItemService.getFoodItem();
                dispatch(getListCategoriesSuccess({data: resp.data.data}));
                console.log(dispatch(getListCategoriesSuccess({data: resp.data.data})))
            } catch (e) {
                console.log(e)
            }
        })();
    }, []);

    const dataCategories = temp?.table?.data?.data;
    const dataProducts = temp?.product?.product?.data?.data;
    console.log(dataProducts)

    const getProductHandle = async (id) => {
        try {
            // dispatch(getListProduct({id: id}));
            const resp = await getProductById(id);
            dispatch(getListProductSuccess({data: resp.data.data}))
            console.log(dispatch(getListProductSuccess({data: resp.data.data})))
        } catch (e) {
            console.log(e)
        }
    }

    return <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        (dataCategories || []).map((foodItem, foodIndex) => {
                            return (
                                <div className="p-4 md:w-1/2 h-fit" key={foodIndex}
                                     onClick={getProductHandle.bind(this, foodItem.id)}>
                                    <div
                                        className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                            src={"http://192.168.1.43:80/storage/" + foodItem.thumb}
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
                <div className="flex flex-wrap -m-4">
                    {
                        (dataProducts || []).map((product, productIndex) => {
                            return (
                                <div className="p-4 md:w-1/4">
                                    <div
                                        className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                            src={"http://192.168.1.43:80/storage/" + product.thumb}
                                            alt="blog"/>
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{product.name}</h1>
                                            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed
                                                sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            <div className="flex items-center flex-wrap ">
                                                <button
                                                    className="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Learn
                                                    more
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </div>;
};

export default Home;