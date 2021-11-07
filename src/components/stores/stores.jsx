import StoreDetail from "../store/store";


export default  function Stores({isLoaded, stores}) {
    return (
        <div>
            {isLoaded && <h1>로딩중입니다.</h1>}
            {!isLoaded && stores 
            && stores.map((store) => <StoreDetail store={store}></StoreDetail>)}
        </div>
    );
}