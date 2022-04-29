import React, {useEffect, useState} from 'react';
import {db} from "../../firebase"
import {collection, addDoc, doc, getDoc, getDocs, query, limit, onSnapshot, deleteDoc, where} from "firebase/firestore";


const Add = () => {

    const [localCategories, setLocalCategories] = useState([]);
    const [localPost, setLocalPost] = useState([]);
    let unsub = null;

    useEffect(() => {

        (async () => {
            const collectionRef = collection(db, 'categories');
            unsub = onSnapshot(collectionRef, (snapShot) => {
                const localCategories = [];
                snapShot.forEach(doc => {
                    localCategories.push({
                        id: doc.id,
                        categories: doc.data().categories
                    });
                });
                setLocalCategories(localCategories);
            });
        })();
    }, []);

    const selectCategory = (categories) => {
        const collectionRef = collection(db, 'posts');
        const collectionQuery = query(collectionRef, where('cid','==', categories));
        unsub = onSnapshot(collectionQuery, (snapShot) => {
            const localPost = [];
            snapShot.forEach(doc => {
                localPost.push({
                    id: doc.id,
                    cid: doc.data().cid,
                    content: doc.data().content,
                    title: doc.data().title
                });
            });
            setLocalPost(localPost);
        });
    }

    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">

                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Admin - Categories</h1>
                        <div className="flex flex-col mt-4 w-full">
                            {localCategories.map((categoriesItem, index) => (
                                <div key={index} className="flex justify-between">
                                    <h3 className="flex flex-col justify-center m-4 text-teal-500"
                                        onClick={()=>{selectCategory(categoriesItem.categories)}}
                                    >{categoriesItem.categories}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Admin - Posts</h1>
                        <div className="flex flex-col">
                            {
                                localPost.map((postItem, index) => {
                                    return (
                                        <div key={index} className="flex">
                                            <div className="flex flex-col p-4 m-2">
                                                <p>Title</p>
                                                <p className="text-teal-500">{postItem.title}</p>
                                            </div>
                                            <div className="flex flex-col p-4 m-2">
                                                <p> Content</p>
                                                <p className="text-teal-500">{postItem.content}</p>
                                            </div>
                                            <div className="flex flex-col p-4 m-2">
                                                <p>Category</p>
                                                <p className="text-teal-500">{postItem.cid}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;