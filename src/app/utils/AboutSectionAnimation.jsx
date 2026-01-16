import { useLottie, useLottieInteractivity } from "lottie-react";
import robotAnimation from "../../../public/animations/springs.json";

const options = {
  animationData: robotAnimation,
};

const AboutSectionAnimation = () => {
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 308],
      },
      // {
      //   visibility: [0, 0.2],
      //   type: "stop",
      //   frames: [0],
      // },
      // {
      //   visibility: [0.2, 0.45],
      //   type: "seek",
      //   frames: [0, 45],
      // },
      // {
      //   visibility: [0.45, 1.0],
      //   type: "loop",
      //   frames: [45, 60],
      // },

    ],
  });

  return Animation;
};

export default AboutSectionAnimation;
