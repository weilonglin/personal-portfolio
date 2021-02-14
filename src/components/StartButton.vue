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

    <!-- <div class="bg-white rounded-lg">
      <div class="w-full border-t-8 border-red-600 rounded-lg flex">
        <div class="pt-6 flex justify-center"></div>
        <div class="w-full pt-9 pr-4">
          <h3 class="font-bold text-pink-700">Welcome soldier!</h3>
          <p class="py-4 text-sm text-gray-400">
            Firstly, how may I call you?
          </p>
          <div class="w-full pt-9 pr-4">
            <select
              class="p-4 text-gray-500 rounded-xl resize-none border-2 border-red-500"
            >
              <option class="py-1">Sir</option>
              <option class="py-1">Miss</option>
              <option class="py-1">Rather not tell</option>
              <option class="py-1">Pizza</option>
            </select>
            <textarea
              rows="1"
              class="p-4 text-gray-500 rounded-xl resize-none border-2 border-red-500"
            >
Enter your name</textarea
            >
          </div>
        </div>
      </div>

      <div class="p-4 flex space-x-4">
        <a
          href="#"
          class="w-full px-4 py-3 text-center text-red-100 bg-red-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"
          >Confirm</a
        >
      </div>
    </div> -->
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
