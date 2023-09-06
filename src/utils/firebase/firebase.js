import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBnawkF3qkEekQ44Uaq4jDpItMWTTM4ONQ",
  authDomain: "crown-project111.firebaseapp.com",
  projectId: "crown-project111",
  storageBucket: "crown-project111.appspot.com",
  messagingSenderId: "160114899279",
  appId: "1:160114899279:web:3bb20300d15ce035a3ad3a"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};