import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2FLsnBy1bV5fk5Z0FM_IHgkaVIbndTVw",
    authDomain: "sample-project-358ed.firebaseapp.com",
    databaseURL: "https://sample-project-358ed.firebaseio.com",
    projectId: "sample-project-358ed",
    storageBucket: "sample-project-358ed.appspot.com",
    messagingSenderId: "278494636464",
    appId: "1:278494636464:web:1d5ed14f52db598053ce75"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;