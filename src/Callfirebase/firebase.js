// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAa8chQUKHC77dPVgUNsp5CfqS-4mXu99M",
    authDomain: "shop-5474e.firebaseapp.com",
    projectId: "shop-5474e",
    storageBucket: "shop-5474e.appspot.com",
    messagingSenderId: "423425021785",
    appId: "1:423425021785:web:52f04d153c1067917fde48"
  };
const firebaseApp = initializeApp(firebaseConfig);

 const db = getFirestore()
 export {db}

export default firebaseApp;