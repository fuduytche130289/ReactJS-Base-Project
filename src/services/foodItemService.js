import { Axios } from "./Axios";

function getFoodItem() {
    return Axios.get(`categories/get?id_website=4`);
}

export const foodItemService = {
    getFoodItem,
};