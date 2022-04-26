import React, {useState} from 'react';
import {db} from "../../firebase"
import {collection,addDoc} from "firebase/firestore";
const Add = () => {
    const [message, setMessage] = useState('');
    const addNote = async () => {
        if(!message){
            alert("Nhap du lieu pls");
            return;
        }
      const collectionRef = collection(db,'todos');
      await addDoc(collectionRef,{
          message
      });
      setMessage('')
    }
    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" onChange={(evt) => setMessage(evt.target.value)} value={message}/>
            <button onClick={addNote}>Add Note</button>
        </div>
    );
};

export default Add;