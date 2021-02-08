<template lang="">
  <div
    id="spaceship"
    class=" w-36 h-72 bg-cover z-20"
    :style="{
      'background-image': `url(${require('@/assets/rocket.svg')})`,
    }"
  ></div>
</template>
<script>
export default {
  name: "Spaceship",
};
</script>

<style>
#spaceship {
  position: absolute;
  left: 50%;
  bottom: 10%;
  animation: turbulence 1s linear infinite;
}

@keyframes turbulence {
  100% {
    transform: translateY(-1px) translateX(-49%);
  }
  50% {
    transform: translateY(2px) translateX(-50%);
  }
  0% {
    transform: translateY(-1px) translateX(-49%);
  }
}
</style>
