<template>
  <div
    id="stars"
    class="absolute top-0 left-0 w-full h-full bg-center bg-cover z-0 overflow-hidden"
    :style="{
      'background-image': `url(${require('@/assets/Galaxy.jpg')})`,
    }"
  ></div>
</template>
<script>
export default {
  name: "Galaxy",
};
</script>
<style>
#stars {
  animation: scrollDown 500s linear infinite;
}

@keyframes scrollDown {
  100% {
    background-position: 0px 500vh, 0px 400vh, 0px 300vh, 0px 200vh, 0px 100vh;
  }
}
</style>
