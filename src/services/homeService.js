import { Axios } from "./Axios";

function getArticles(payload) {
    return Axios.get(`?q=${payload}&from=2022-03-20&sortBy=publishedAt&apiKey=358a0f2f34bd446987cf461bc88e0176`);
}

export const homeService = {
    getArticles,
};