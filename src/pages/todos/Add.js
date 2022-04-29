import React, {useEffect, useState} from 'react';
import {db} from "../../firebase"
import {collection, addDoc, doc, getDoc, getDocs, query, limit, onSnapshot, deleteDoc} from "firebase/firestore";
import {Link} from "react-router-dom";


const Add = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState('');
    const [localCategories, setLocalCategories] = useState([]);
    const [categoriesId, setCategoriesId] = useState('');
    const [localPost, setLocalPost] = useState([]);

    let unsub = null;


    const addPosts = async () => {
        if (!title && !content) {
            alert("Nhap du lieu pls");
            return;
        }
        const collectionRef = collection(db, 'posts');
        await addDoc(collectionRef, {
            title: title,
            content: content,
            cid: categoriesId
        });
        setTitle('');
        setContent('');
    }

    const addCategories = async () => {
        if (!categories) {
            alert("Nhap du lieu pls");
            return;
        }
        const collectionRef = collection(db, 'categories');
        await addDoc(collectionRef, {
            categories: categories,
        });
        setCategories('');
    }

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

    useEffect(() => {

        (async () => {
            const collectionRef = collection(db, 'posts');
            unsub = onSnapshot(collectionRef, (snapShot) => {
                const localPost = [];
                snapShot.forEach(doc => {
                    localPost.push({
                        id: doc.id,
                        title: doc.data().title,
                        content: doc.data().content,
                        cid: doc.data().cid
                    });
                });
                setLocalPost(localPost);
            });
        })();
    }, []);

    const deleteCategory = async (id) => {
        const docRef = doc(db, 'categories', id);
        await deleteDoc(docRef);
    }

    console.log(localCategories)
    console.log(localPost)

    const deletePost = async (id) => {
        const docRef = doc(db, 'posts', id);
        await deleteDoc(docRef);
    }

    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">

                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Admin - Categories</h1>
                        <div className="flex mt-4 w-full">
                            <input
                                className="shadow appearance-none border-2 border-teal-500 rounded w-full py-2 px-3 text-grey-darker"
                                onChange={(evt) => setCategories(evt.target.value)}
                                placeholder="Categories"/>
                        </div>
                        <div className="flex mt-4 w-full">
                            <button
                                onClick={addCategories}
                                className="flex-no-shrink p-2 w-full border-2 rounded text-teal border-teal-500 hover:text-teal-500 hover:bg-teal">Add
                            </button>
                        </div>
                        <div className="flex flex-col mt-4 w-full">
                            {localCategories.map((categoriesItem, index) => (
                                <div key={index} className="flex justify-between">
                                    <h3 className="flex flex-col justify-center">{categoriesItem.categories}</h3>
                                    <button
                                        className="p-2 border-2 rounded text-teal border-teal-500 hover:text-teal-500 hover:bg-teal"
                                        onClick={() => deleteCategory(categoriesItem.id)}>Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Admin - Posts</h1>
                        <div className="flex mt-4 w-full">
                            <input
                                className="shadow appearance-none border-2 border-teal-500 rounded w-full py-2 px-3 text-grey-darker"
                                onChange={(evt) => setTitle(evt.target.value)}
                                placeholder="Title"/>
                        </div>
                        <div className="flex mt-4 w-full">
                            <input
                                className="shadow appearance-none border-2 border-teal-500 rounded w-full py-2 px-3 text-grey-darker"
                                onChange={(evt) => setContent(evt.target.value)}
                                placeholder="Content"/>
                        </div>


                        <div className="flex mt-4 w-full">
                            <select onChange={(e) => setCategoriesId(e.target.value)}
                                    className="border-2 border-teal-500 rounded w-full py-2 px-3 text-teal-500">
                                {
                                    localCategories && localCategories?.map((listCategoryItem, listCategoryIndex) => {
                                        return (
                                            <option key={listCategoryIndex} value={listCategoryItem.categories}>
                                                {listCategoryItem.categories}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>


                        <div className="flex mt-4 w-full">
                            <button
                                onClick={addPosts}
                                className="flex-no-shrink p-2 w-full border-2 rounded text-teal border-teal-500 hover:text-teal-500 hover:bg-teal">Add
                            </button>
                        </div>
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

                                            <button
                                                className="m-2 p-2 border-2 rounded text-teal border-teal-500 hover:text-teal-500 hover:bg-teal"
                                                onClick={(event => deletePost(postItem.id))}>Delete
                                            </button>

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