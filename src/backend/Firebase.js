import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBFwAV9YuCPs6VrKTPFvBHR4-CYsJ124Kw",
  authDomain: "poolie-80c40.firebaseapp.com",
  databaseURL: "https://poolie-80c40.firebaseio.com",
  projectId: "poolie-80c40",
  storageBucket: "poolie-80c40.appspot.com",
  messagingSenderId: "647969325103"
};
firebase.initializeApp(config);

export default firebase;
