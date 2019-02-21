import Firebase from "firebase";
require("dotenv").config();

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseapp.com",
  databaseURL:
    "https://" + process.env.VUE_APP_FIREBASE_PROJECT_ID + ".firebaseio.com",
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_PROJECT_ID + ".appspot.com",
  messagingSenderId: "7148421548"
};

// Create a Firebase instance
let app = Firebase.initializeApp(config);

// Retrieve database reference
let db = app.database();

// Retrieve a reference to nodes of each input field/questions
let booksRef = db.ref("books");
let foodRef = db.ref("food");
let foodAmountRef = db.ref("food-amount");
let foodKindRef = db.ref("food-kind");
let numDucksRef = db.ref("num-duck");
let timeFedRef = db.ref("time-fed");
let whereFedRef = db.ref("where");

export {
  db,
  booksRef,
  foodRef,
  foodAmountRef,
  foodKindRef,
  numDucksRef,
  timeFedRef,
  whereFedRef
};
