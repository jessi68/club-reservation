import StoreDetail from "../store/store";
import "./stores.css";

export default  function Stores({isLoaded, stores}) {
    console.log(stores);
    return (
        <div className="container">
            {isLoaded && <h1>로딩중입니다.</h1>}
            {!isLoaded && stores.length === 0 &&  <h1>3km 내에 매장이 없습니다.</h1>}
            {!isLoaded && stores
            && stores.map((store) => <StoreDetail store={store} key={store.name}></StoreDetail>)}
        </div>
    );
}