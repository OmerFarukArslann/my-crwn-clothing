import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB04vxkFMHnG3HYbRL3WPNHmtujm3LIxaY",
  authDomain: "crwn-clothing-db-32e1b.firebaseapp.com",
  projectId: "crwn-clothing-db-32e1b",
  storageBucket: "crwn-clothing-db-32e1b.appspot.com",
  messagingSenderId: "140380063869",
  appId: "1:140380063869:web:708302fd040bfd338d0914",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

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
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;

  //if user data does not exist
  // create / set the document with the data from userAuth in my collection

  // if user data exists
  // return userDocRef
};
