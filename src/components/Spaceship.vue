<template lang="">
  <div
    id="spaceship"
    class=" w-36 h-72 bg-cover z-20 "
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
  transform: translateX(-50%);
}
</style>
