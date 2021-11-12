import { firebaseApp } from "./initialize"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore(firebaseApp);

const fetchDb = async (dbName) => {
    let query = [];
    const querySnapshot = await getDocs(collection(db, dbName));
    querySnapshot.forEach(doc => {
        query.push({id: doc.id, ...(doc.data())})
    });
    return query;
}

export default fetchDb;