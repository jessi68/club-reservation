import { useEffect } from "react";
import {connect, useSelector} from "react-redux";
import Stores from "../../components/stores/stores";
import {getStores} from "../../reduxThunk/stores/reducer.js";

const StoresContainer = ({getStores, isLoaded, stores}) => {

    useEffect(() => {
        getStores();
    }, [getStores])
    return  (
        <Stores isLoaded={isLoaded} stores={stores}/>
    )
} 

export default connect(
    (reducer) => { 
        const storeReducer = reducer.storeReducer;
        const state = storeReducer;
        return ({
        stores: state.stores,
        isLoaded: state.loading.GET_STORES
    });
},
    {
        getStores
    }
)(StoresContainer);