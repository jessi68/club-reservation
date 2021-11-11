import "./store.css";
import storeImage from "../../images/store.jpg"

export default function StoreDetail({store}) {
    console.log(store);
    console.log(store.name);

        return  (
            <section>
                <img src={storeImage}></img>
                <div className="vertical">
                    <div className="name">{store.name}</div>
                    <div className="address">{store.address}</div>
                    <div className="time">영업 시간: {store.openTime} ~ {store.closeTime}</div>
                </div>
            </section>
        );
}