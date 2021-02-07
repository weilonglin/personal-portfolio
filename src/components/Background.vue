<template>
  <div
    class="absolute top-0 w-full h-full bg-center bg-cover z-10 overflow-hidden"
    :style="{
      'background-image': `url(${require('@/assets/landscape.png')})`,
    }"
  ></div>
</template>
<script>
export default {
  name: "BackgroundImage",
};
</script>
