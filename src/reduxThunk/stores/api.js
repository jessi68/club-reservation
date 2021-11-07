import { firestore } from "firebase-admin";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoYZ6xSDj42gUFqLNwByd-2Xl0LgQkDsQ",
  authDomain: "reservation-7cc8e.firebaseapp.com",
  projectId: "reservation-7cc8e",
  storageBucket: "reservation-7cc8e.appspot.com",
  messagingSenderId: "517696782099",
  appId: "1:517696782099:web:6acf834ab351927972a4e6",
  measurementId: "G-JRV9XZKHTW"
};

firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();

export default firebase;

export const fetchStores = async () => {
    if(localStorage.getItem("stores")) {
        return JSON.parse(localStorage.getItem("stores"));
    }
    let stores = [];
    const documents = await fireStore.collection("Store").get();
    documents.forEach(querySnapShot => {
        console.log(querySnapShot.data());
        stores.push({id: querySnapShot.id, 
        ...(querySnapShot.data())})

    }
        );
    
    localStorage.setItem("stores", JSON.stringify(stores));
        
    return stores;
}

export const addStore = async (store) => {
    await fireStore.collection("Store").add(store);
    
}