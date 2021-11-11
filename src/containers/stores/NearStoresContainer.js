import { useEffect, useState } from "react";
import Stores from "../../components/stores/stores";
import { fetchStores } from "../../reduxThunk/stores/api";
import getNearStores from "../../util/distanceBetweenPlaces";

export default function NearStoresContainer(props) {
    const [nearStores, setNearStores] = useState([]);
    let totalStores = [];

    useEffect( async () => {
        const stores = await fetchStores();
        console.log(stores);
        totalStores = stores;
        setNearStores(stores);
    }, []);

    useEffect(async () => {
        if(totalStores.length == 0)  {
            totalStores = await fetchStores();
            console.log(totalStores);
        }
        setNearStores(await getNearStores(props.curLocation, totalStores, 3));
    }, [props.curLocation]);

    return (
        <Stores isLoaded={false} stores={nearStores}/>
    );
}