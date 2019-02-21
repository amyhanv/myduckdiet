<template>
  <div id="result" class="container">
    <header id="app-header" class="text-center">
      <h1>
        <strong>Duck Diet</strong>
      </h1>

      <p>
        <i>What are you feeding the ducks?</i>
      </p>
      <img id="logo" src="../assets/ducklogo.png">
    </header>

    <b-container>
      <b-row class="result-row">
        <b-col class="result-column">
          <h2>Feeding times</h2>
          <p v-for="time in timeFed">
            <a>{{time[".value"]}}</a>
          </p>
          <h6
            class="text-left"
          >Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h6>
        </b-col>
        <b-col class="result-column">
          <h2>Duck Food</h2>
          <p v-for="fedFood in food">
            <a>{{fedFood[".value"]}}</a>
          </p>
          <h6
            class="text-left"
          >Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h6>
        </b-col>
      </b-row>

      <b-row class="result-row">
        <b-col class="result-column">
          <h2>Food Amount</h2>
          <p v-for="amount in foodAmount">
            <a>{{amount[".value"]}}grams</a>
          </p>
          <h6
            class="text-left"
          >Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h6>
        </b-col>
        <b-col class="result-column">
          <h2>Food kind</h2>
          <p v-for="kind in foodKind">
            <a>{{kind[".value"]}}</a>
          </p>
          <h6
            class="text-left"
          >Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h6>
        </b-col>
      </b-row>

      <b-row class="result-row">
        <b-col class="result-column">
          <h2>Number of ducks fed</h2>
          <p v-for="num in numDucks">
            <a>{{num[".value"]}}grams</a>
          </p>
          <h6
            class="text-left"
          >Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h6>
        </b-col>
        <b-col class="result-column">
          <h2>Location fed</h2>
          <p v-for="loc in whereFed">
            <a>{{loc[".value"]}}</a>
          </p>
          <h6
            class="text-left"
          >Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
var fb = require("../fire.js");

export default {
  name: "Result",
  firebase: {
    // Variable gives us access to the books items from the Firebase database
    food: fb.foodRef,
    foodAmount: fb.foodAmountRef,
    foodKind: fb.foodKindRef,
    numDucks: fb.numDucksRef,
    timeFed: fb.timeFedRef,
    whereFed: fb.whereFedRef
  },
  data() {
    return {};
  },
  methods: {
    addLog: function() {
      return;
    }
  },
  components: {}
};
</script>

<style scoped>
h2 {
  padding-bottom: 15px;
}
h6 {
  margin-top: 60px;
  color: gray;
}
.result-row {
  padding: 40px 20px;
}
.result-column {
  border-radius: 5px;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.03);
  margin: 20px;
  padding: 50px 35px;
}
</style>
