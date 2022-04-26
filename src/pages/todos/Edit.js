import {doc, updateDoc, getDoc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {db} from '../../firebase';

const Edit = () => {
    const [searchParam] = useSearchParams()
    const [message, setMessage] = useState('')
    useEffect(() => {
        (async () => {
            const docRef = doc(db, 'todos', searchParam.get('id'))
            const docSnapShot = await getDoc(docRef)
            setMessage(docSnapShot.data().message)
        })()
    }, [])
    const editNote = async () => {
        const docRef = doc(db, 'todos', searchParam.get('id'))
        await updateDoc(docRef, {message: message})
    }
    return (
        <div>
            <h1>Add todo</h1>
            <input type="text"
                   onChange={(e) => setMessage(e.target.value)}
                   value={message}
            />
            <button onClick={editNote}>edit Note</button>
        </div>
    );
};

export default Edit;