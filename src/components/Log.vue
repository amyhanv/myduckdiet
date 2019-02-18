<template>
  <div id="log" class="container">
    <!-- <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add Duck Diet Info</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookUrl">Url:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book">
        </form>
      </div>
    </div>-->
    <header id="app-header" class="text-left">
      <h1>Duck Diet</h1>
      <!-- <p>What are the ducks eating?</p> -->
    </header>

    <form v-on:submit.prevent="addLog" id="add-log">
      <!-- Question #1 -->
      <div class="form-question">
        <label>
          <i>What food</i> were the ducks fed?
        </label>
        <input v-model="newFood" class="input-form" type="text">
        <b-form-group label="Individual radios">
          <b-form-radio value="A" v-model="selected" name="some-radios">Option A</b-form-radio>
          <b-form-radio value="B" v-model="selected" name="some-radios">Option B</b-form-radio>
        </b-form-group>

        <div class="mt-3">
          Selected:
          <strong>{{ selected }}</strong>
        </div>
      </div>

      <!-- Question #2 -->
      <div class="form-question">
        <label for="food">
          <i>What time</i> were the ducks fed?
        </label>
        <datetime type="datetime" v-model="newTimeFed"></datetime>
        <!-- <input v-model="newTimeFed" class="input-form" type="text"> -->
      </div>

      <!-- Question #3 -->
      <div class="form-question">
        <label for="food">
          <i>How much food</i> were the ducks fed?
        </label>
        <input v-model="newFoodAmt" class="input-form" type="text">
      </div>

      <!-- Question #4 -->
      <div class="form-question">
        <label for="food">
          <i>What kind of food</i> were the ducks fed?
        </label>
        <input v-model="newFoodKind" class="input-form" type="text">
      </div>

      <!-- Question #5 -->
      <div class="form-question">
        <label for="food">
          <i>Where</i> were the ducks fed?
        </label>
        <input v-model="newWhereFed" class="input-form" type="text">
      </div>

      <!-- Question #6 -->
      <div class="form-question">
        <label for="food">
          <i>How many ducks</i> were fed?
        </label>
        <input id="food" v-model="newNumDucks" class="input-form" type="text">
      </div>

      <input id="submit-log" type="submit" value="Submit">
    </form>

    <p v-for="item in timeFed">
      <a>{{item[".value"]}}</a>
    </p>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

// Import Firebase from the core firebase library
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

export default {
  name: "Log",
  firebase: {
    // books variable gives us access to the books items from the Firebase database
    food: foodRef,
    foodAmount: foodAmountRef,
    foodKind: foodKindRef,
    numDucks: numDucksRef,
    timeFed: timeFedRef,
    whereFed: whereFedRef
  },
  data() {
    return {
      newFood: "",
      newFoodAmt: "",
      newFoodKind: "",
      newNumDucks: "",
      newTimeFed: "",
      newWhereFed: "",
      selected: ""
    };
  },
  methods: {
    addLog: function() {
      foodRef.push(this.newFood);
      foodAmountRef.push(this.newFoodAmt);
      foodKindRef.push(this.newFoodKind);
      numDucksRef.push(this.newNumDucks);
      timeFedRef.push(this.newTimeFed);
      whereFedRef.push(this.newWhereFed);
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 50px;
}

.form-question {
  margin: 100px 30px;
  padding: 50px;
  border-radius: 5px;
  background-color: #f5f5f5;
}

label {
  font-size: 24px;
  float: left;
  color: #565656;
  line-height: 1.8;
}

.input-form {
  border: none;
  border-radius: 5px;
  margin: 0;
  outline: 0;
  padding: 10px;
  color: #8a97a0;
  width: 100%;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.03);
}
</style>
