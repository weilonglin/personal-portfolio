<template>
  <div
    id="landscape"
    class="absolute w-full h-full bg-center bg-cover z-10 overflow-hidden"
    :style="{
      'background-image': `url(${require('@/assets/backgroundNew.png')})`,
    }"
  ></div>
</template>
<script>
export default {
  name: "BackgroundImage",
};
</script>

<style></style>
