import {
    SET_DATA,
    GET_DATA,
    SET_LOADING,
    SET_ERROR,
    SET_SORT
} from "../constants";

export const getData = () => ({
    type: GET_DATA
})

export const setData = (payload) => ({
    type: SET_DATA,
    payload
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const setError = (payload) => ({
    type: SET_ERROR,
    payload
})

export const setSortActionCreator = (payload) => ({
    type: SET_SORT,
    payload
})