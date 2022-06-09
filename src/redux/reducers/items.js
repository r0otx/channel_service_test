import {
    SET_DATA,
    SET_LOADING,
    SET_ERROR
} from "../constants";

const initialState = {
    data: [],
    isLoading: false,
    error: '',
    searchQuery: ''
}

const items = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_DATA:
            return {
                ...state,
                data: [...payload]
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state;
    }
}

export default items;