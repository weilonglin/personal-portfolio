<template lang="">
  <div id="startButton" class="absolute left-1/2 bottom-1/2 z-50">
    <button
      class="bg-yellow-500 text-white font-bold py-2 px-4 hover:border-blue rounded"
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
}
</style>
