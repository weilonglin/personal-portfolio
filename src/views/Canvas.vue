<template>
  <div>
    <Spaceship />
    <Galaxy />
    <StartButton />
  </div>
</template>

<script>
import Spaceship from "../components/Spaceship.vue";
import Galaxy from "../components/StarBackground.vue";
import StartButton from "../components/StartButton";

export default {
  components: {
    Spaceship,
    Galaxy,
    StartButton,
  },
};
</script>

<style></style>
