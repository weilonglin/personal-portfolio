<template>
  <BackgroundImage />
</template>

<script>
import BackgroundImage from "./components/Background.vue";
export default {
  name: "App",
  components: {
    BackgroundImage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
