import firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDgcfzIAi28M_hq4-ko4u9CbokGHbT5FQs",
  authDomain: "ookk-22ee8.firebaseapp.com",
  databaseURL: "https://ookk-22ee8.firebaseio.com",
  projectId: "ookk-22ee8",
  storageBucket: "ookk-22ee8.appspot.com",
  messagingSenderId: "690543925359",
  appId: "1:690543925359:web:bcf8886d4b140145da559a"
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore()