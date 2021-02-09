<template>
  <div id="app">
    <router-view to="Canvas" />
    <router-view to="StageOne" />
    <router-view to="StageTwo" />
    <router-view to="StageThree" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
  overflow: hidden;
}
</style>
