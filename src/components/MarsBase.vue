<template>
  <div>
    <div
      id="marsView"
      v-html="require('!html-loader!../assets/mars.svg')"
    ></div>
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  name: "Mars",
  methods: {
    movingPlanet() {
      gsap.fromTo(
        "#planetBig",
        { transform: "translateX(0)" },
        {
          transform: "translateX(2000px)",
          duration: 1,
          repeat: -1,
        }
      );
    },
  },
  mounted() {
    this.movingPlanet();
  },
};
</script>

<style>
#marsView {
  position: absolute;
  top: 0;

  width: 100vw;
  height: 100vh;
  display: block;
  margin: auto;
}
</style>

// wellGlowOne // wellGlowTwo // wellGlowThee // wellGlowFour // planetBig //
planetSmall // fallingStar // cloudBig // cloudSmallOne // cloudSmallTwo //
bigDustRight // bigDustLeft // smallDustOne // smallDustTwo // wellSpritesOne //
wellSpritesTwo
