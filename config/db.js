import Firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import '@firebase/auth';

 let config = {
  apiKey: "AIzaSyAkiBUpwb-3EjZ8TC6OT4nNQ-52bsCwrjY",
  authDomain: "react-native-7871f.firebaseapp.com",
  databaseURL: "https://react-native-7871f.firebaseio.com",
  projectId: "react-native-7871f",
  storageBucket: "react-native-7871f.appspot.com",
  messagingSenderId: "823831857106"
  };

//   firebase.initializeApp(config);

let app = Firebase.initializeApp(config);
export const db = app.database();