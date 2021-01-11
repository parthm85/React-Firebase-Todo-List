import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBInjhbqfEmNRe8iC9davZjbI8hXRPVq2E",
    authDomain: "todo-app-react-723d3.firebaseapp.com",
    projectId: "todo-app-react-723d3",
    storageBucket: "todo-app-react-723d3.appspot.com",
    messagingSenderId: "326557570637",
    appId: "1:326557570637:web:0275c3f6cd8c4dcf40ee04"
});

const db = firebaseApp.firestore();

export default db;