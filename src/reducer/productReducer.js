const initialSate = {
    categories: {
        loading: false,
        data: [],
        mess: null,
    },
    product: {
        loading: false,
        data: [],
        mess: null,
    },
};

const productReducer = (state = initialSate, action) => {
    switch (action.type) {

        case "GET_CATEGORIES":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: true,
                },
            };

        case "GET_CATEGORIES_SUCCESS":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: false,
                    data: action.data,
                },
            };

        case "GET_CATEGORIES_ERROR":
            return {
                ...state,
                categories: {
                    ...state.categories,
                    loading: false,
                    mess: action.mess,
                },
            };

        case "GET_PRODUCT":
            return {
                ...state,
                product: {
                    ...state.product,
                    loading: true,
                },
            };

        case "GET_PRODUCT_SUCCESS":
            return {
                ...state,
                product: {
                    ...state.product,
                    loading: false,
                    data: action.data,
                },
            };

        case "GET_PRODUCT_ERROR":
            return {
                ...state,
                product: {
                    ...state.product,
                    loading: false,
                    mess: action.mess,
                },
            };

        default:
            return state;
    }
};

export default productReducer;