import { createStore } from "@reduxjs/toolkit";

const initState = {
    loading: false,
    name: 'Prawito'
}

const reducer = (state = initState, action) => {
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            loading: action.value
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;
