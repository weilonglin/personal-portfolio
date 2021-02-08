<template>
  <div class="w-full h-full">
    <div id="sprites"></div>
    <div id="spritesTwo"></div>
    <div id="space-box"></div>
  </div>
</template>
<script>
export default {
  name: "Galaxy",
};
</script>
<style>
#space-box {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("../assets/backgroundNew.png"),
    url("../assets/bigClouds.png"), url("../assets/planet.svg"),
    url("../assets/backgroundHue.svg");

  background-size: cover, cover, 200px, cover, cover;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  background-blend-mode: normal, normal, normal, color-dodge;
  animation: space-jam linear 90s infinite forwards;
}

#sprites {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/sprites.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
  animation: fadeIn 10s linear 0.1s infinite forwards;
}

#spritesTwo {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/sprites2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
  animation: fadeInTwo 10s linear 0.1s infinite forwards;
}

@keyframes space-jam {
  from {
    background-position: 0px 0px, 0px 0px, -500px 0px, 0px 0px;
  }
  to {
    background-position: 0px 0px, 0px 0px, 2000px 370px, 0px 0px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0.1;
    background-position: 0px 4px;
  }
  10% {
    opacity: 0.2;
    background-position: 0px 3px;
  }
  20% {
    opacity: 0.5;
    background-position: 0px 2px;
  }
  30% {
    opacity: 0.7;
    background-position: 0px 1px;
  }
  40% {
    opacity: 0.9;
    background-position: 0px 0px;
  }
  50% {
    opacity: 0.7;
    background-position: 0px -1px;
  }
  60% {
    opacity: 0.5;
    background-position: 0px -2px;
  }
  80% {
    opacity: 0.2;
    background-position: 0px -3px;
  }
  100% {
    opacity: 0;
    background-position: 0px -4px;
  }
}

@keyframes fadeInTwo {
  0% {
    opacity: 0.1;
    background-position: 0px 8px;
  }
  10% {
    opacity: 0.2;
    background-position: 0px 5px;
  }
  20% {
    opacity: 0.5;
    background-position: 0px 2px;
  }
  30% {
    opacity: 0.7;
    background-position: 0px -1px;
  }
  40% {
    opacity: 0.9;
    background-position: 0px -4px;
  }
  50% {
    opacity: 0.7;
    background-position: 0px -7px;
  }
  60% {
    opacity: 0.5;
    background-position: 0px -10px;
  }
  80% {
    opacity: 0.2;
    background-position: 0px -13px;
  }
  100% {
    opacity: 0;
    background-position: 0px -15px;
  }
}
</style>
