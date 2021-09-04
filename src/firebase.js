import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlyNaHNqfwF3MXlaZLcgCVA0mBOo6NJr4",
    authDomain: "slack-react-2a125.firebaseapp.com",
    projectId: "slack-react-2a125",
    storageBucket: "slack-react-2a125.appspot.com",
    messagingSenderId: "898403886633",
    appId: "1:898403886633:web:bdf10b0a4b2d190f37de38"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = Firebase.auth();
const provider = new Firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;