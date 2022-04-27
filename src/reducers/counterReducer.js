//first step
export default function counterReducer(state = {count: 0}, action) {
    switch (action.type) {
        case 'counter/increment':
            return {
                count: state.count + action.payload.step
            };
        case 'counter/decrement':
            return {
                count: state.count - action.payload.step
            };
        default:
            return state;
    }
}