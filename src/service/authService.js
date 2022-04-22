import {Axios} from "./Axios";

export function doLogin(payload) {
    return Axios.post("login",payload);
}

function doSignIn(payload) {
    return Axios.post("signup", payload);
}

function getDataUser() {
    return Axios.get("user");
}

export const authService = {
    doLogin,
    doSignIn,
    getDataUser
};