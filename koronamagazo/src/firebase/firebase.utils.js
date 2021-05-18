import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzyxfWMIgHF3_Zmhf92e4w5ItCFqyV-m8",
    authDomain: "crwn-db-ec285.firebaseapp.com",
    databaseURL: "https://crwn-db-ec285.firebaseio.com",
    projectId: "crwn-db-ec285",
    storageBucket: "crwn-db-ec285.appspot.com",
    messagingSenderId: "1011339584497",
    appId: "1:1011339584497:web:18d33033d32ed6d76f1a50",
    measurementId: "G-1S6QE4GTQ7"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  // oi {} dld to innitial object paei sto transformedCollection kai pairnei to prwto antikeimeno px hats to epistrefei kai ksana phgainei na parei to epomeno klp
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();  // gives me access to googleauthprovider through auth library
  provider.setCustomParameters({promt: 'select_account'}); //we allways trigger the google popup whenever i use googleauthprovider
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;