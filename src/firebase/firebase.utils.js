import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;
	const userRef = doc(firestore, 'users', userAuth.uid);
	const userSnap = await getDoc(userRef);

	// console.log(snapShot.exists());

	if(!userSnap.exists())
	{
		const { displayName, email, phoneNumber, photoURL } = userAuth;
		const createdAt = new Date();
		
		try {
			await setDoc(userRef, {
				displayName,
				email,
				phoneNumber,
				photoURL,
				createdAt,
				...additionalData
			})
		}catch(err) {
			console.log('Error creating User : ', err.message);
		}
	}
	return userRef;
}

const firebase = initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(firestore, collectionKey);
	
	const batch = writeBatch(firestore);
	objectsToAdd.forEach(obj => {
		const newDocRef = doc(collectionRef);
		batch.set(newDocRef, obj);
	})

	return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	})
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
}

export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;