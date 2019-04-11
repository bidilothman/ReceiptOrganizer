import Firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import '@firebase/auth';

 let config = {
    apiKey: "AIzaSyA7CfVU1jwSN-K2myrs8L-NL42z6jeiaK0",
    authDomain: "receipt-organizer-a2229.firebaseapp.com",
    databaseURL: "https://receipt-organizer-a2229.firebaseio.com",
    projectId: "receipt-organizer-a2229",
    storageBucket: "receipt-organizer-a2229.appspot.com",
    messagingSenderId: "153660925781"
  };

//   firebase.initializeApp(config);

let app = Firebase.initializeApp(config);
export const db = app.database();