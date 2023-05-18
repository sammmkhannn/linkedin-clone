import firebase from "firebase/compat/app"

const firebaseConfig = {
  apiKey: "AIzaSyA-d9j1QTbF4j7_-Fs_VlEtsu573XiAVGU",
  authDomain: "linkedin-clone-yt-13491.firebaseapp.com",
  projectId: "linkedin-clone-yt-13491",
  storageBucket: "linkedin-clone-yt-13491.appspot.com",
  messagingSenderId: "50986463090",
  appId: "1:50986463090:web:135de9ce6dfd354dde37eb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
