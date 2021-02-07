<template>
  <BackgroundImage />
  <Spaceship />
  <Galaxy />
</template>

<script>
import BackgroundImage from "./components/Background.vue";
import Spaceship from "./components/Spaceship.vue";
import Galaxy from "./components/StarBackground.vue";

export default {
  name: "App",
  components: {
    BackgroundImage,
    Spaceship,
    Galaxy,
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
