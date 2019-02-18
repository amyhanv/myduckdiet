<template>
  <div id="result" class="container">
    <h1>RESULT PAGE</h1>

    <div class="form-question">
      <form v-on:submit.prevent="addLog" id="add-log">
        <label>
          <i>What food</i> were the ducks fed?
        </label>
        <input v-model="newFood" class="input-form" type="text">
        <input id="submit-log" type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result"
};
</script>

<style>
</style>
