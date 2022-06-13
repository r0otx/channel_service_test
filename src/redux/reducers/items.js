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
            if (payload.attrSort === 'name') {
                if (payload.logicSort === 'contain') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.name.toString().toLowerCase().includes(payload.searchQuery)),
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'more') {
                    return {
                        ...state,
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'less') {
                    return {
                        ...state,
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'equals') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.name === payload.searchQuery),
                        sort: {...payload}
                    }
                }
                return {
                    ...state,
                    data: [...state.data].sort((a, b) => a[payload.attrSort].toString().localeCompare(b[payload.attrSort].toString())),
                    sort: {...payload}
                }
            }
            if (payload.attrSort === 'count') {
                if (payload.logicSort === 'contain') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.count.toString().toLowerCase().includes(payload.searchQuery)),
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'more') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.count > payload.searchQuery),
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'less') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.count < payload.searchQuery),
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'equals') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => parseInt(el.count) === parseInt(payload.searchQuery)),
                        sort: {...payload}
                    }
                }
                return {
                    ...state,
                    data: [...state.data].sort((a, b) => a[payload.attrSort].toString().localeCompare(b[payload.attrSort].toString())),
                    sort: {...payload}
                }
            }
            if (payload.attrSort === 'dist') {
                if (payload.logicSort === 'contain') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.dist.toString().toLowerCase().includes(payload.searchQuery)),
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'more') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.dist > payload.searchQuery),
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'less') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => el.dist < payload.searchQuery),
                        sort: {...payload}
                    }
                }
                if (payload.logicSort === 'equals') {
                    return {
                        ...state,
                        data: [...state.data].filter(el => parseInt(el.dist) === parseInt(payload.searchQuery)),
                        sort: {...payload}
                    }
                }
                return {
                    ...state,
                    data: [...state.data].sort((a, b) => a[payload.attrSort].toString().localeCompare(b[payload.attrSort].toString())),
                    sort: {...payload}
                }
            }
            return {
                ...state,
                sort: {...payload}
            }
        default:
            return state;
    }
}

export default items;