import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAXYF9UgiS3Iw8EO38gMVR0SIpcYYB_1j4",
    authDomain: "linkedin-clone-cf684.firebaseapp.com",
    projectId: "linkedin-clone-cf684",
    storageBucket: "linkedin-clone-cf684.appspot.com",
    messagingSenderId: "825806373907",
    appId: "1:825806373907:web:5b5e4e31bd2dc50c8debe6"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db,auth};