import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
