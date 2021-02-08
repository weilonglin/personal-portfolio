<template>
  <div class="w-full h-full">
    <div id="dustStormOne"></div>
    <div id="dustStormTwo"></div>
    <div id="dustStormThree"></div>
    <div id="sprites"></div>
    <div id="spritesTwo"></div>
    <div id="bigClouds"></div>
    <div id="space-box"></div>
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
        { backgroundPosition: "-1500px 0px" },
        {
          backgroundPosition: "500px 200px",
          opacity: 0,
          duration: 2,
          delay: 0,
          repeat: -1,
        }
      );
    },
    simpleFade2() {
      gsap.fromTo(
        "#dustStormTwo",
        { backgroundPosition: "-1500px 0px" },
        {
          backgroundPosition: "500px 400px",
          opacity: 0,
          duration: 4,
          delay: 0,
          repeat: -1,
        }
      );
    },
    simpleFade3() {
      gsap.fromTo(
        "#dustStormThree",
        { backgroundPosition: "-1500px 0px" },
        {
          backgroundPosition: "500px -300px",
          opacity: 0,
          duration: 6,
          delay: 0,
          repeat: -1,
        }
      );
    },
  },
  mounted() {
    this.simpleFade();
    this.simpleFade2();
    this.simpleFade3();
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

#space-box {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("../assets/backgroundNew.png"),
    url("../assets/planet.svg"), url("../assets/backgroundHue.svg");
  background-size: cover, 200px, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 0px 0px, 0px 0px, 0px 0px;
  background-blend-mode: normal, normal, color-dodge;
  animation: space-jam linear 90s infinite forwards;
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
  animation: fadeIn 10s linear 0.1s infinite forwards;
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
  animation: fadeInTwo 10s linear 0.1s infinite forwards;
}

@keyframes dustStorm {
  0% {
    background-position: 0px 2px, 0px 30px, 0px 2px;
  }
  10% {
    background-position: 6px 4px, 0px 24px, -6px 4px;
  }
  20% {
    background-position: 12px 6px, 0px 18px, -12px 6px;
  }
  30% {
    background-position: 18px 8px, 0px 12px, -18px 8px;
  }
  40% {
    background-position: 24px 10px, 0px 6px, -24px 10px;
  }
  50% {
    background-position: 30px 12px, 0px 0px, -30px 12px;
  }
  60% {
    background-position: 24px 10px, 0px 6px, -24px 10px;
  }
  70% {
    background-position: 18px 8px, 0px 12px, -18px 8px;
  }
  80% {
    background-position: 12px 6px, 0px 18px, -12px 6px;
  }
  90% {
    background-position: 6px 4px, 0px 24px, -6px 4px;
  }
  100% {
    background-position: 0px 2px, 0px 30px, -0px 2px;
  }
}

@keyframes space-jam {
  from {
    background-position: 0px 0px, -500px 0px, 0px 0px;
  }
  to {
    background-position: 0px 0px, 2000px 370px, 0px 0px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0.1;
    background-position: 0px 4px;
  }
  10% {
    opacity: 0.2;
    background-position: 0px 3px;
  }
  20% {
    opacity: 0.5;
    background-position: 0px 2px;
  }
  30% {
    opacity: 0.7;
    background-position: 0px 1px;
  }
  40% {
    opacity: 0.9;
    background-position: 0px 0px;
  }
  50% {
    opacity: 0.7;
    background-position: 0px -1px;
  }
  60% {
    opacity: 0.5;
    background-position: 0px -2px;
  }
  80% {
    opacity: 0.2;
    background-position: 0px -3px;
  }
  100% {
    opacity: 0;
    background-position: 0px -4px;
  }
}

@keyframes fadeInTwo {
  0% {
    opacity: 0.1;
    background-position: 0px 8px;
  }
  10% {
    opacity: 0.2;
    background-position: 0px 5px;
  }
  20% {
    opacity: 0.5;
    background-position: 0px 2px;
  }
  30% {
    opacity: 0.7;
    background-position: 0px -1px;
  }
  40% {
    opacity: 0.9;
    background-position: 0px -4px;
  }
  50% {
    opacity: 0.7;
    background-position: 0px -7px;
  }
  60% {
    opacity: 0.5;
    background-position: 0px -10px;
  }
  80% {
    opacity: 0.2;
    background-position: 0px -13px;
  }
  100% {
    opacity: 0;
    background-position: 0px -15px;
  }
}

@keyframes bigClouds {
  0% {
    background-position: 0px 0px;
  }
  10% {
    background-position: 6px 0px;
  }
  20% {
    background-position: 12px 0px;
  }
  30% {
    background-position: 18px 0px;
  }
  40% {
    background-position: 24px 0px;
  }
  50% {
    background-position: 30px 0px;
  }
  60% {
    background-position: 24px 0px;
  }
  70% {
    background-position: 18px 0px;
  }
  80% {
    background-position: 12px 0px;
  }
  90% {
    background-position: 6px 0px;
  }
  100% {
    background-position: 0px 0px;
  }
}
</style>
