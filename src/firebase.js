import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHQmFGk7AVd0axRP_fsTFYeo5up97dYLM",
  authDomain: "slack-clone-a3c6c.firebaseapp.com",
  databaseURL: "https://slack-clone-a3c6c.firebaseio.com",
  projectId: "slack-clone-a3c6c",
  storageBucket: "slack-clone-a3c6c.appspot.com",
  messagingSenderId: "719839789645",
  appId: "1:719839789645:web:c18a29d657b1eac3465204",
  measurementId: "G-5JMY6NNR0M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
