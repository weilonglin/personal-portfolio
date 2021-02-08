<template>
  <div class="w-full h-full">
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
  background-image: url("https://res.cloudinary.com/gelsot/image/upload/v1537745472/space-box/moon.png"),
    url("../assets/backgroundVector.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: 0px 0px, 0px 0px;
  background-blend-mode: normal, normal, normal, color-dodge;
  animation: space-jam linear 90s infinite forwards;
}

@keyframes space-jam {
  from {
    background-position: -500px 0px, 0px 0px;
  }
  to {
    background-position: 2000px 370px, 0px 0px;
  }
}
</style>
