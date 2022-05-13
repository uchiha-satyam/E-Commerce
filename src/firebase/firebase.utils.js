import {initializeApp}  from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
	apiKey: "AIzaSyBKNkAe61YUyQf9LnyNLVeD1MYVIqqcFwk",
	authDomain: "well-worn.firebaseapp.com",
	projectId: "well-worn",
	storageBucket: "well-worn.appspot.com",
	messagingSenderId: "610846195124",
	appId: "1:610846195124:web:08d0137831926c8fe146e1",
	measurementId: "G-TTZ2GZW5EF"
}

const firebase = initializeApp(config);

export const auth = getAuth(firebase);
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;