//first step
export default function multipleReducer(state = {count: 0}, action) {
    switch (action.type) {
        case 'counter/multiplePositive':
            return {
                count: state.count * 1
            };
        case 'counter/multipleNegative':
            return {
                count: state.count * (-1)
            };
        default:
            return state;
    }
}