import {
    SET_DATA,
    SET_LOADING,
    SET_ERROR,
    SET_SORT
} from "../constants";

const initialState = {
    data: [],
    isLoading: false,
    error: '',
    sort: {
        searchQuery: '',
        attrSort: '',
        logicSort: ''
    }
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
        case SET_SORT:
            if (payload.attrSort !== '') {
                return {
                    ...state,
                    data: [...state.data.sort((a, b) => a[payload.attrSort].toString().localeCompare(b[payload.attrSort].toString()))],
                    sort: payload
                }
            } else if (payload.logicSort !== '') {
                return  {
                    ...state,
                    data: state.data.filter(el => el.payload.logicSort.toString().toLowerCase().includes(payload.searchQuery.toString().toLowerCase())),
                    sort: payload
                }
            }
            return {...state, sort: {...payload}}
        default:
            return state;
    }
}

export default items;