import * as api from "./api.js";
import {handleActions}  from "redux-actions"
import { connect } from "react-redux";

const GET_STORES = 'GET_STORES';
const GET_STORES_SUCCESS = "GET_STORES_SUCCESS";
const GET_STORES_FAILURE = "GET_STORES_FAILURE";

const ADD_STORE = 'ADD_STORE';
const ADD_STORE_SUCCESS = "ADD_STORE_SUCCESS";
const ADD_STORE_FAILURE = "ADD_STORE_FAILURE";

export const getStores = () => async dispatch => {
    dispatch({type: GET_STORES});
    try {
        const response = await api.fetchStores();
        console.log(response);
        dispatch({
            type: GET_STORES_SUCCESS,
            payload: response
        })
    } catch(e) {
        dispatch({
            type: GET_STORES_FAILURE,
            payload: e,
            error: true
        })
        throw e;
    }
}

export const addStore = (store) => async dispatch => {
    dispatch({type: ADD_STORE});
    try {
        const response = await api.addStore(store);
        dispatch({
            type: ADD_STORE_SUCCESS,
            payload: response
        })
    } catch(e) {
        dispatch({
            type: ADD_STORE_FAILURE,
            payload: e,
            error: true
        });
        throw e;
    }
}

const initialState = {
    loading: {
        GET_STORES: false, 
        ADD_STORE: false
    }, 
    stores: []
}

export const storeReducer = handleActions({
    [GET_STORES]: (state) =>  {
        return ({
        ...state, 
        loading: {
            ...state.loading, 
            GET_STORES: true
        }
    })
},
    [ADD_STORE]: (state) => ({
        ...state,
        loading: {
            ...state.loading,
            ADD_STORE: true
        }
    }),
    [GET_STORES_SUCCESS] : (state, action) => ({
        ...state,
        loading:  {
            ...state.loading,
            GET_STORES: false,
        },
        stores: action.payload
    }),
    [GET_STORES_FAILURE] : (state) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_STORES: false
        }
    }),
    [ADD_STORE_SUCCESS]: (state) => ({
        
    })
}, initialState)