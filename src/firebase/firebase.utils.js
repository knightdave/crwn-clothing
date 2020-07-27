import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCPaofS5fWG4PCGgDUMUW-i0iakxserXB0",
    authDomain: "crwn-db-9fb44.firebaseapp.com",
    databaseURL: "https://crwn-db-9fb44.firebaseio.com",
    projectId: "crwn-db-9fb44",
    storageBucket: "crwn-db-9fb44.appspot.com",
    messagingSenderId: "587368790512",
    appId: "1:587368790512:web:32e66984ffb0c58573c535",
    measurementId: "G-J5VC2B8MPS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestrore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;