import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDK_BuwKTp4Bepklug_xXEbnH1Llrl-RCw",
  authDomain: "clone-83554.firebaseapp.com",
  projectId: "clone-83554",
  storageBucket: "clone-83554.appspot.com",
  messagingSenderId: "787755852131",
  appId: "1:787755852131:web:7c23ebfeececed3ac13356",
  measurementId: "G-W6LJWDTQN8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};




