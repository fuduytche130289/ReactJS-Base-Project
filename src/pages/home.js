import React, {useContext, useEffect, useState} from "react";
import "../index.css"

import {Store} from "../ulti/store";
import {foodItemService} from "../services/foodItemService";
import {getProductById} from "../services/productService";

const Home = () => {
    const [store, dispatch] = useContext(Store);

    const [dataCategories,setDataCategories] = useState([]);

    useEffect(() => {
        foodItemService.getFoodItem().then((resp) => {
            dispatch({ type: "GET_CATEGORIES_SUCCESS", data: resp.data.data });
        }).catch((e) => {
            console.log(e);
            dispatch({ type: "GET_CATEGORIES_ERROR", mess: "lỗi rồi" });
        });
    }, []);

    useEffect(() => {
        setDataCategories(store.categories.data);
        console.log(store.categories.data);
    }, [store]);

    const getProductHandle = async (id) => {
        try {
            // dispatch({type: "GET_PRODUCT", id: id});
            const resp = await getProductById(id);
            dispatch({type: "GET_PRODUCT_SUCCESS", data: resp.data.data})
        } catch (e) {
            console.log(e)
        }
    }
    const products = store?.product?.data;
    console.log("alo1234")
    console.log(store?.product?.data)


    return <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        dataCategories.map((foodItem,foodIndex)=>{
                            return(
                                <div className="p-4 md:w-1/2 h-fit" key={foodIndex} onClick={()=>getProductHandle(foodItem.id) }>
                                    <div
                                        className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                            src={`http://192.168.1.20/storage/${foodItem.thumb}`}
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
                {
                    (products || []).map((product, productIndex) => {
                        return <div>
                            <div className="p-4 md:w-1/2 h-fit" key={productIndex} >
                                <div
                                    className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                                    <img
                                        className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                                        src={"http://192.168.1.20/storage/" + product.thumb}
                                        alt="blog"/>
                                    <div className="p-4">

                                        <h1 className="title-font text-lg font-bold text-center text-3xl text-gray-600">{product.name}</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    </div>;
};

export default Home;