import React, {useEffect} from 'react';
import {db} from "../../firebase";
import {collection, getDocs, deleteDoc, doc, onSnapshot,query,limit} from 'firebase/firestore'
import {Link} from "react-router-dom";

const List = () => {
    const [todos, setTodos] = React.useState([]);
    let unsub = null;
    useEffect(() => {
        (async () => {
            const collectionRef = collection(db, 'todos');
            //Lấy về snapshot 1 lần
            const collectionSnapShot = await getDocs(collectionRef);
            //subcribe vào observable
            //observable / mô hình pub-sub
            const collectionQuery = query(collectionRef,limit(10))
            unsub = onSnapshot(collectionQuery, (snapShot) => {
                const localTodos = [];
                console.log("Co su thay doi du lieu")
                snapShot.forEach(doc => {
                    localTodos.push({id: doc.id, message: doc.data().message});
                });
                setTodos(localTodos);
            });

            // collectionSnapShot.forEach(doc => {
            //     localTodos.push({id: doc.id, message: doc.data().message});
            // });

        })();
    }, []);

    const deleteNote = async (id) => {
        const docRef = doc(db, 'todos', id);
        await deleteDoc(docRef);
    }
    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.message}
                        <Link to={`/edit?id=${todo.id}`}>Edit</Link>
                        <button onClick={() => deleteNote(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;