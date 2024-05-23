
import firebase from "firebase/compat/app"

import "firebase/compat/firestore" 

import { getAuth ,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAzu4N95ddAl4Ot3AQRnJYpf2Fz5ZNx2MM",
  authDomain: "ecommerce-app-72264.firebaseapp.com",
  projectId: "ecommerce-app-72264",
  storageBucket: "ecommerce-app-72264.appspot.com",
  messagingSenderId: "538220375138",
  appId: "1:538220375138:web:15b8fdeaa07a970e88f53b"
};


// To connect to firebase Appn

const app = firebase.initializeApp(firebaseConfig)

// To connect to firestore database

export const myDatabase = firebase.firestore()

//To connect to Authentication (Google Authentication)

// getAuth--->  This method will help our react application to connect with the authentication which is present inside the firebase which is present inside the firebase

// auth ---> Authentication System of firebase
export const auth = getAuth(app) 

//GoogleAuthProvider ----> This is a class will help our react application to connect with Google Authentication

// provider ---> Google Authentication
export const provider = new GoogleAuthProvider()



// two things require one is Class and another is Method