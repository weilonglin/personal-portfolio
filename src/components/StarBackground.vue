<template>
  <div class="w-full h-full">
    <div id="space-boxTwo"></div>
    <div id="planet"></div>
    <div id="space-boxOne"></div>
    <div id="bigClouds"></div>
    <div id="dustStormOne"></div>
    <div id="dustStormTwo"></div>
    <div id="dustStormThree"></div>
    <div id="dustBigOne"></div>
    <div id="dustBigTwo"></div>
    <div id="sprites"></div>
    <div id="spritesTwo"></div>
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  name: "Galaxy",
  methods: {
    simpleFade() {
      gsap.fromTo(
        "#dustStormOne",
        { transform: "translateX(-1500px)" },
        {
          transform: "translateX(1500px)",
          opacity: 1,
          duration: 10,
          delay: 0,
          repeat: -1,
        }
      );
    },
    simpleFade2() {
      gsap.fromTo(
        "#dustStormTwo",
        { transform: "translateX(-1500px)" },
        {
          transform: "translateX(2000px)",
          opacity: 1,
          duration: 10,
          delay: 6,
          repeat: -1,
        }
      );
    },
    simpleFade3() {
      gsap.fromTo(
        "#dustStormThree",
        { transform: "translateX(-1500px)" },
        {
          transform: "translateX(1500px)",
          opacity: 1,
          duration: 10,
          delay: 3,
          repeat: -1,
        }
      );
    },
    dustBigOne() {
      gsap.fromTo(
        "#dustBigOne",
        { transform: "translateX(0px)" },
        {
          transform: "translateX(2px) translateY(-3px)",
          opacity: 0.9,
          duration: 3,
          delay: 0,
          repeat: -1,
          yoyo: true,
        }
      );
    },
    dustBigTwo() {
      gsap.fromTo(
        "#dustBigTwo",
        { transform: "translateX(0px)" },
        {
          transform: "translateX(3px) translateY(2px)",
          opacity: 0.7,
          duration: 2,
          delay: 0,
          repeat: -1,
          yoyo: true,
        }
      );
    },
    wellSpritesOne() {
      gsap.fromTo(
        "#sprites",
        { transform: "translateY(0px)", opacity: 1 },
        {
          transform: "translateY(3px)",
          opacity: 0.1,
          duration: 2,
          delay: 0,
          repeat: -1,
          yoyo: true,
        }
      );
    },
    wellSpritesTwo() {
      gsap.fromTo(
        "#spritesTwo",
        { transform: "translateY(0px)" },
        {
          transform: "translateY(3px)",
          opacity: 0.2,
          duration: 2,
          delay: 2,
          repeat: -1,
          yoyo: true,
        }
      );
    },
    planetBig() {
      gsap.fromTo(
        "#planet",
        { transform: "translateY(0px) translateX(-500px)" },
        {
          transform: "translateY(800px) translateX(2500px)",
          opacity: 1,
          duration: 40,
          repeat: -1,
        }
      );
    },
    cloudBig() {
      gsap.fromTo(
        "#bigClouds",
        { transform: "translateY(0px) translateX(0px)" },
        {
          transform: "translateY(0px) translateX(90px)",
          opacity: 1,
          duration: 10,
          repeat: -1,
          yoyo: true,
        }
      );
    },
    hueShift() {
      gsap.fromTo(
        "#space-boxTwo",
        { transform: "translateY(0px)" },
        {
          transform: "translateY(-200px)",
          opacity: 1,
          duration: 20,
          repeat: -1,
          yoyo: true,
        }
      );
    },
  },
  mounted() {
    this.simpleFade();
    this.simpleFade2();
    this.simpleFade3();
    this.dustBigOne();
    this.dustBigTwo();
    this.wellSpritesOne();
    this.wellSpritesTwo();
    this.planetBig();
    this.cloudBig();
    this.hueShift();
  },
};
</script>
<style>
#dustStormOne {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.5;
  background-image: url("../assets/dust1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}
#dustStormTwo {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.5;
  background-image: url("../assets/dust3.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}
#dustStormThree {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.5;
  background-image: url("../assets/dust4.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}

#dustBigOne {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.5;
  background-image: url("../assets/dust.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}
#dustBigTwo {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  opacity: 0.5;
  background-image: url("../assets/dust2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}

#space-boxOne {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/backgroundNew.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}
#space-boxTwo {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/backgroundHue.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: color-dodge;
}
#planet {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/planet.svg");
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}

#bigClouds {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/bigClouds.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}

#sprites {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/sprites.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}

#spritesTwo {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-image: url("../assets/sprites2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-blend-mode: normal;
}
</style>
