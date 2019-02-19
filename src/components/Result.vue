<template>
  <div id="result" class="container">
    <h1>RESULT PAGE</h1>

    <p v-for="item in timeFed">
      <a>{{item[".value"]}}</a>
    </p>
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
    return {
      // Variables from form
    };
  },
  methods: {
    // on Submit -> addLog
    addLog: function() {
      return;
    }
  },
  components: {}
};
</script>

<style>
</style>
