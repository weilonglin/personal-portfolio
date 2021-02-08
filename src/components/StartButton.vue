<template>
  <div id="startButton" class="absolute left-1/2 bottom-1/2 z-50">
    <h1 class="text-white underline text-7xl mb-10 font-black antialiased">
      Welcome
    </h1>
    <h3 class="text-white text-1xl mb-3 font-bold antialiased">
      Captain, Weilong has gone missing, it's up to you to find and rescue him!
    </h3>
    <h2 class="text-white text-1xl mb-10 font-bold antialiased">
      Press the button below to start the search & rescue mission.
    </h2>

    <button
      class="bg-yellow-500 text-white font-bold py-2 px-4 hover:bg-red-700 rounded "
    >
      Start Journey
    </button>
  </div>
</template>
<script>
export default {
  name: "StartButton",
};
</script>
<style>
#startButton {
  transform: translateX(-50%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
