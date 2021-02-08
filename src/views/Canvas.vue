<template>
  <div>
    <BackgroundImage />
    <Spaceship />
    <Galaxy />
    <StartButton />
  </div>
</template>

<script>
import BackgroundImage from "../components/Background.vue";
import Spaceship from "../components/Spaceship.vue";
import Galaxy from "../components/StarBackground.vue";
import StartButton from "../components/StartButton";

export default {
  components: {
    BackgroundImage,
    Spaceship,
    Galaxy,
    StartButton,
  },
};
</script>

<style></style>
