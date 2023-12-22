import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDyMXrpfBZ5605HSsPZUrUVO98BQfUj5oo",
    authDomain: "amhealth-30dab.firebaseapp.com",
    projectId: "amhealth-30dab",
    storageBucket: "amhealth-30dab.appspot.com",
    messagingSenderId: "1019697125037",
    appId: "1:1019697125037:web:a152208fef6c4337585824"
});

const FIREBASE = firebase;

export default FIREBASE;
