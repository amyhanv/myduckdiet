<template>
  <div id="log" class="container">
    <header id="app-header" class="text-center">
      <h1>
        <strong>Duck Diet</strong>
      </h1>

      <p>
        <i>What are you feeding the ducks?</i>
      </p>
      <img id="logo" src="../assets/ducklogo.png">
    </header>

    <b-form v-on:submit.stop.prevent="addLog" id="add-log">
      <!-- Question #1 -->
      <div class="form-question">
        <h4>
          <i>What food</i> were the ducks fed?
        </h4>

        <!-- <input v-model="newFood" class="input-form" type="text"> -->
        <b-form-group id="radio-form">
          <b-form-radio value="Small fish" v-model="newFood">Small fish</b-form-radio>
          <b-form-radio value="Seed or grain" v-model="newFood">Seed or grain</b-form-radio>
          <b-form-radio value="Fruits or nuts" v-model="newFood">Fruits or nuts</b-form-radio>
          <b-form-radio value="Snails or worms" v-model="newFood">Snails or worms</b-form-radio>
          <b-form-radio value="Plants" v-model="newFood">Plants</b-form-radio>
          <b-form-radio value="Amphibians" v-model="newFood">Amphibians</b-form-radio>
          <b-form-radio value="Insects" v-model="newFood">Insects</b-form-radio>

          <b-form-radio value="Others" v-model="newFood">Others</b-form-radio>
        </b-form-group>

        <div class="mt-3">
          <h6 v-if="newFood">Selected:</h6>
          <strong>{{ newFood }}</strong>
        </div>
      </div>

      <!-- Question #2 -->
      <div class="form-question">
        <h4 for="food">
          <i>What time</i> were the ducks fed?
        </h4>
        <datetime type="datetime" placeholder="Pick time" v-model="newTimeFed"></datetime>
        <!-- <input v-model="newTimeFed" class="input-form" type="text"> -->
      </div>

      <!-- Question #3 -->
      <div class="form-question">
        <h4 for="food">
          <i>How many grams of food</i> were the ducks fed?
        </h4>
        <!-- <input v-model="newFoodAmt" class="input-form" type="text"> -->
        <b-form-input
          type="range"
          id="range-1"
          class="range-style"
          v-model="newFoodAmt"
          min="1"
          max="100"
          placeholder="Grams fed"
        />
        <h6 v-if="newFoodAmt" class="mt-2">Value: {{ newFoodAmt }} grams</h6>
      </div>

      <!-- Question #4 -->
      <div class="form-question">
        <h4 for="food">
          <i>What kind of food</i> were the ducks fed?
        </h4>
        <br>
        <input
          v-model="newFoodKind"
          placeholder="Plant, fruit, fish, etc"
          class="input-form"
          type="text"
        >
      </div>

      <!-- Question #5 -->
      <div class="form-question">
        <h4 for="food">
          <i>Where</i> were the ducks fed?
        </h4>
        <br>
        <input
          v-model="newWhereFed"
          placeholder="Pond, park, home, etc"
          class="input-form"
          type="text"
        >
      </div>

      <!-- Question #6 -->
      <div class="form-question">
        <h4 for="food">
          <i>How many ducks</i> were fed?
        </h4>
        <b-form-input
          type="range"
          id="range-1"
          class="range-style"
          v-model="newNumDucks"
          min="1"
          max="100"
        />
        <h6 v-if="newNumDucks" class="mt-2">Value: {{ newNumDucks }} ducks</h6>
      </div>
      <div class="row" id="form-buttons">
        <div class="col-md-3">
          <b-button id="reset-log" type="reset" class="button-size" variant="danger">Reset</b-button>
        </div>
        <div class="col-md-9">
          <b-button id="submit-log" class="button-size" type="submit" variant="primary">Submit</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
// Reference fire.js config file
// import fire from "./fire";

var fb = require("../fire.js");

export default {
  name: "Log",
  data() {
    return {
      // Variables from form
      newFood: "",
      newFoodAmt: "",
      newFoodKind: "",
      newNumDucks: "",
      newTimeFed: "",
      newWhereFed: ""
    };
  },
  methods: {
    /* addLog checks to see if all fields are inputed
    and pushes the data to firebase DB
     */
    addLog: function() {
      if (
        this.newFood &&
        this.newFoodAmt &&
        this.newFoodKind &&
        this.newNumDucks &&
        this.newTimeFed &&
        this.newWhereFed != ""
      ) {
        fb.foodRef.push(this.newFood);
        fb.foodAmountRef.push(this.newFoodAmt);
        fb.foodKindRef.push(this.newFoodKind);
        fb.numDucksRef.push(this.newNumDucks);
        fb.timeFedRef.push(this.newTimeFed);
        fb.whereFedRef.push(this.newWhereFed);
        alert("Thanks for logging.");
      } else {
        alert("Please fill all fields.");
      }
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset form values */
      this.form = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
#app {
  font-family: "Roboto Mono", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
  padding: 30px;
}

#nav {
  text-align: center;
  padding: 20px;
}

#nav li {
  float: left;
  padding: 0 20px;
  font-family: "Roboto Mono";
  text-transform: uppercase;
  color: #000;
  list-style-type: none;
}
#app-header {
  margin-top: 60px;
}
h1,
h2,
h6 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#logo {
  margin: 0 auto;
  width: 150px;
  padding: 0;
  display: block;
}
#add-log {
  margin-top: 50px;
}
.range-style {
  width: 300px !important;
  padding-top: 3em;
}

.form-question {
  margin: 30px 0;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.03);
}

#radio-form {
  text-align: left;
  margin: 0 auto;
}

.input-form,
.vdatetime-input {
  outline: 0;
  background: #e6e6e6;
  border: none;
  border-radius: 5px;
  margin: 10px;
  outline: 0;
  padding: 10px;
  color: #6d777e;
  width: 300px;
}

#form-buttons {
  margin-top: 80px;
  margin-bottom: 80px;
}
#submit-log {
  background-color: white;
  color: #007bfe;
  border: 1px solid #007bfe;
}
#reset-log {
  border: 1px solid #9fb8ca;
  background-color: transparent;
  color: #9fb8ca;
}
.button-size {
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
}
</style>
