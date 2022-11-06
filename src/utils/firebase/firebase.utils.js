import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGbiPutwcLI6cTk2pCGt50j5RHnN-uY6g",
  authDomain: "crwn-clothing-db-5a171.firebaseapp.com",
  projectId: "crwn-clothing-db-5a171",
  storageBucket: "crwn-clothing-db-5a171.appspot.com",
  messagingSenderId: "566049113190",
  appId: "1:566049113190:web:0b6ce4a47e824b6e6259a7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error){
      console.error("error creating the user", error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmailAndPasswordAuth = async (email, password) => {
  if(!email || ! password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () =>  await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);