import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTreeActive,
  buttonTreeNotActive,
  buttonRainActive,
  buttonRainNotActive,
  buttonCoffeeActive,
  buttonCoffeeNotActive,
  buttonFireplaceActive,
  buttonFireplaceNotActive,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTreeActive,
  buttonTreeNotActive,
  buttonRainActive,
  buttonRainNotActive,
  buttonCoffeeActive,
  buttonCoffeeNotActive,
  buttonFireplaceActive,
  buttonFireplaceNotActive,
});

const sound = Sound();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

Events({ controls, timer, sound });
