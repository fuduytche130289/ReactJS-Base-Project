import React, {useEffect, useState} from 'react';
import {db} from "../../firebase"
import {collection, addDoc, doc, getDoc} from "firebase/firestore";
import {Link, useSearchParams} from "react-router-dom";

const Add = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState([]);

    const [searchParam] = useSearchParams();

    const addPosts = async () => {
        if (!title && !content) {
            alert("Nhap du lieu pls");
            return;
        }
        const collectionRef = collection(db, 'posts');
        await addDoc(collectionRef, {
            title: title,
            content: content,
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
            const docRef = doc(db, 'categories', searchParam.get('categories'))
            const docSnapShot = await getDoc(docRef)
            setCategories(docSnapShot.data().categories)
        })()
    }, [])

    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">

                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Admin - Categories</h1>
                        <div className="flex mt-4 w-full">
                            <input
                                className="shadow appearance-none border-2 border-teal-500 rounded w-full py-2 px-3 text-grey-darker"
                                onChange={(evt) => setCategories(evt.target.value)} value={categories}
                                placeholder="Categories"/>
                        </div>
                        <div className="flex mt-4 w-full">
                            <button
                                onClick={addCategories}
                                className="flex-no-shrink p-2 w-full border-2 rounded text-teal border-teal-500 hover:text-teal-500 hover:bg-teal">Add
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Admin - Posts</h1>
                        <div className="flex mt-4 w-full">
                            <input
                                className="shadow appearance-none border-2 border-teal-500 rounded w-full py-2 px-3 text-grey-darker"
                                onChange={(evt) => setTitle(evt.target.value)} value={title}
                                placeholder="Title"/>
                        </div>
                        <div className="flex mt-4 w-full">
                            <input
                                className="shadow appearance-none border-2 border-teal-500 rounded w-full py-2 px-3 text-grey-darker"
                                onChange={(evt) => setContent(evt.target.value)} value={content}
                                placeholder="Content"/>
                        </div>

                        {categories.map((categories, index) => {
                                    return (
                                        <div className="flex mt-4 w-full">
                                            <select className="border-2 border-teal-500 rounded w-full py-2 px-3 text-grey-darker" key={index}>
                                                <option value="">{categories}</option>
                                            </select>
                                        </div>
                                    );
                                })}





                        <div className="flex mt-4 w-full">
                            <button
                                onClick={addPosts}
                                className="flex-no-shrink p-2 w-full border-2 rounded text-teal border-teal-500 hover:text-teal-500 hover:bg-teal">Add
                            </button>
                        </div>
                        <div>{title}</div>
                        <div>{content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;