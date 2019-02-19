import Firebase from "firebase";

var config = {
  apiKey: "AIzaSyBf1cp1N-NmTD0fbLBpeFvab2bTjRZwPxw",
  authDomain: "myduckdiet.firebaseapp.com",
  databaseURL: "https://myduckdiet.firebaseio.com",
  projectId: "myduckdiet",
  storageBucket: "myduckdiet.appspot.com",
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
