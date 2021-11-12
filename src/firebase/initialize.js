import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDoYZ6xSDj42gUFqLNwByd-2Xl0LgQkDsQ",
    authDomain: "reservation-7cc8e.firebaseapp.com",
    projectId: "reservation-7cc8e",
    storageBucket: "reservation-7cc8e.appspot.com",
    messagingSenderId: "517696782099",
    appId: "1:517696782099:web:6acf834ab351927972a4e6",
    measurementId: "G-JRV9XZKHTW"
};

export const firebaseApp = initializeApp(firebaseConfig);
