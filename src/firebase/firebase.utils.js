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
    appId: "1:587368790512:web:157f207cdae4e14f73c535",
    measurementId: "G-C7K0X73FZP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;