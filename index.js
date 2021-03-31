// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyB6WyaumhBYdYHXPmdTpCA3aQY_6HKf36Q",
    authDomain: "e-recruitment-dad78.firebaseapp.com",
    databaseURL: "https://e-recruitment-dad78-default-rtdb.firebaseio.com",
    projectId: "e-recruitment-dad78",
    storageBucket: "e-recruitment-dad78.appspot.com",
    messagingSenderId: "578688877344",
    appId: "1:578688877344:web:7b94e2734b48ec2ee40d45",
    measurementId: "G-1R29EDPRGQ"
  };
  firebase.initializeApp(firebaseConfig);
  
  var ref = firebase.database().ref("Players");
  var playerRef = ref.child("Players/")
  ref.push({
    id: 8,
    name: "Mubarak Hossain"
  });
  


  