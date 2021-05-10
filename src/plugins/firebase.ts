import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm2-6q-kh25n74VFffIojo0T8kNJyUD6Y",
    authDomain: "console-db.firebaseapp.com",
    databaseURL: "https://console-db.firebaseio.com",
    projectId: "console-db",
    storageBucket: "console-db.appspot.com",
    messagingSenderId: "183818393685",
    appId: "1:183818393685:web:2c80e752151951beab5cdc",
    measurementId: "G-9Q53S374D8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, analytics };
