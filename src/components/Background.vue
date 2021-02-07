<template>
  <div
    class="relative pt-16 pb-32 flex content-center items-center justify-center z-10"
    style="min-height: 100vh;"
  >
    <div
      id="app"
      class="absolute top-0 w-full h-full bg-center bg-cover"
      :style="{
        'background-image': `url(${require('@/assets/landscape.png')})`,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "BackgroundImage",
};
</script>
