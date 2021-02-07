<template lang="">
  <div
    class="absolute pt-16 pb-32 flex content-center items-center justify-center z-0"
    style="min-height: 100vh;"
  >
    <div
      id="app"
      class="absolute top-0 w-full h-full bg-center bg-cover bg"
      :style="{
        'background-image': `url(${require('@/assets/Galaxy.jpg')})`,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Galaxy",
};
</script>
<style lang=""></style>
