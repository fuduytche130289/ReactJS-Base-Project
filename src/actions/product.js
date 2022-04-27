import axios from "axios";

export const getHome = () => {
    return (dispatch) => {
        dispatch({
            type: "product/GET_HOME_DATA"
        })
        axios.get("http://128.199.211.17/api/v1/home").then(resp => {
            const data = resp.data;
            dispatch({
                type: "product/GET_HOME_DATA_SUCCESS",
                payload: data,
            });
        }).catch((err) => {
            dispatch({
                type: "product/GET_HOME_DATA_FAILURE",
                payload: err,
            });
        })
    }
}