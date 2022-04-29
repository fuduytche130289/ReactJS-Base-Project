import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {collection,addDoc, getDocs, deleteDoc, doc, onSnapshot, limit, query, orderBy, where} from 'firebase/firestore';

function Category(props) {
    const [listCategory,setListCategory] = useState([]);
    const [listNewsPost,setListNewsPost] = useState([]);
    const [categoryId,setCategoryId] = useState('');
    let unsub = null;

    useEffect(() => {
        (async () => {
            const collectionRef = collection(db, 'category');
            unsub = onSnapshot(collectionRef, (snapShot) => {
                const localCategory = [];
                snapShot.forEach(doc => {
                    localCategory.push({
                        id: doc.id,
                        category: doc.data().category
                    });
                });
                setListCategory(localCategory);
            });
        })();
    }, []);

    const selectCategory = (category) => {
        alert(category)
        const collectionRef = collection(db, 'newsPost');
        const collectionQuery = query(collectionRef, where('categoryId','==', category));
        unsub = onSnapshot(collectionQuery, (snapShot) => {
            const localNewsPost = [];
            snapShot.forEach(doc => {
                localNewsPost.push({
                    id: doc.id,
                    categoryId: doc.data().categoryId,
                    content: doc.data().content,
                    title: doc.data().title
                });
            });
            setListNewsPost(localNewsPost);
        });
    }

    console.log(listNewsPost);
    return (
        <div>
            <div>
                <div className="mt-10 bg-gray-400">
                    <h5>NEWSPOST</h5>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            listCategory?.map((listCategoryItem,listCategoryIndex)=>{
                                return(
                                    <div key={listCategoryIndex} onClick={()=>{selectCategory(listCategoryItem.category)}}>{listCategoryItem.category}</div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="mt-10 bg-gray-400">
                    <h5>NEWSPOST</h5>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            listNewsPost?.map((listNewsPostItem,listNewsPostIndex)=>{
                                return(
                                    <div className="bg-white" key={listNewsPostIndex}>
                                        <div>
                                            <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                                                <div>
                                                    <div className="px-4 py-2">
                                                        <h6 className="text-xl font-gray-700 font-bold">{listNewsPostItem.title}</h6>
                                                        <p className="text-sm tracking-normal">{listNewsPostItem.content}</p>
                                                        <p>{listNewsPostItem.categoryId}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;