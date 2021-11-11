import { useEffect } from "react";
import {connect, useSelector} from "react-redux";
import Stores from "../../components/stores/stores";
import {getStores} from "../../reduxThunk/stores/reducer.js";
import nearStores from "../../util/distanceBetweenPlaces";

const StoresContainer = ({getStores, isLoaded, stores}) => {

  const asyncFunc = async () => {
    console.log(await nearStores("서울특별시 서대문구 창천동 연세로12길 33",  stores, 3));
  }

  useEffect(() => {
    asyncFunc();

  }, [])

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