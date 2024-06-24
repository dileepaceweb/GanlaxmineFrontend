
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJZbQURVMajACFxsa6FnDbFPE4cdj0AcA",
  authDomain: "project-ca782.firebaseapp.com",
  projectId: "project-ca782",
  storageBucket: "project-ca782.appspot.com",
  messagingSenderId: "1017082515630",
  appId: "1:1017082515630:web:097d82fe3cda06d9c91d3f",
  measurementId: "G-G83J5XEXJK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup };




