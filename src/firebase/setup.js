import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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
export const storage = getStorage(app);


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBXz0Ew6q7aKq5ST81Ygq7TJkjCv1X0RJg",
//   authDomain: "linkedin-clone-2-89ee6.firebaseapp.com",
//   projectId: "linkedin-clone-2-89ee6",
//   storageBucket: "linkedin-clone-2-89ee6.firebasestorage.app",
//   messagingSenderId: "94591123694",
//   appId: "1:94591123694:web:5b72fc8c88937b4aacb3ff"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);