import React from 'react';
import {signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebase";

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const _doLogin = async (evt) => {
        evt.preventDefault();
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password);
            console.log(resp.user);
            sessionStorage.setItem('user', JSON.stringify(resp.user));
        } catch (e) {
            alert("Ko đăng nhập đc bạn ei, non")
            console.error(e);
        }

    }

    const signOut = async (evt) => {
        await signOut(auth);
    };
    return (
        <form onSubmit={_doLogin}>
            <input type="text" placeholder="Email"
                   onChange={(evt) => setEmail(evt.target.value)}/>
            <input type="password" placeholder="Password"
                   onChange={(evt) => setPassword(evt.target.value)}/>
            <button>Login</button>
        </form>
    );
};

export default Login;