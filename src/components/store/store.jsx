import "./store.css";
import storeImage from "../../images/store.jpg"

export default function StoreDetail({store}) {
    console.log(store);
    console.log(store.name);
        return  (
            <section>
                <img src={storeImage}></img>
                <div className="vertical">
                <title>{store.name}</title>
                </div>
            </section>
        );
}