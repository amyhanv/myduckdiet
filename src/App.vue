<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>-->
  <div id="app" class="panel-body">
    <div class="panel panel-default">
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
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td>
            <a v-bind:href="book.url">{{book.title}}</a>
          </td>
          <td>{{book.author}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

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

// Create a Firebase instance taking config values
let app = Firebase.initializeApp(config);

// Retrieve a database reference by using the app.database() call
let db = app.database();

// Retrieve a reference to the books node
let booksRef = db.ref("time");

export default {
  name: "App",
  firebase: {
    // books variable gives us access to the books items from the Firebase database
    books: booksRef
  },
  data() {
    return {
      newBook: {
        title: "",
        author: "",
        url: "http://"
      }
    };
  },
  methods: {
    addBook: function() {
      booksRef.push(this.newBook);
      this.newBook.title = "";
      this.newBook.author = "";
      this.newBook.url = "http://";
    }
  },
  components: {
    HelloWorld
  }
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
}
</style>
