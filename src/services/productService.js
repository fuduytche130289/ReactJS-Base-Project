import {Axios} from "./Axios";

export function getProductById(id) {
    return Axios.get(`products/get?active=1&id_parent=0&id_website=4&id_cat=${id}`)
}

export const productService = {
    getProductById
};