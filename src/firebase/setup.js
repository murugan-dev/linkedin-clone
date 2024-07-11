import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQxOUETidgT3ByOyBboLAK0Wz3_lhFdiw",
  authDomain: "linkedin-clone-15cb5.firebaseapp.com",
  projectId: "linkedin-clone-15cb5",
  storageBucket: "linkedin-clone-15cb5.appspot.com",
  messagingSenderId: "79970323150",
  appId: "1:79970323150:web:0454f4e3564a3c283d9e9f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
console.log(database, auth, googleProvider)