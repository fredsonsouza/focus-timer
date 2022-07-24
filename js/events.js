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
  buttonMinus,
  buttonPlus,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    sound.pressButton();
    timer.countDown();
  });
  buttonPause.addEventListener("click", function () {
    controls.pause();
    sound.pressButton();
    timer.hold();
  });
  buttonStop.addEventListener("click", function () {
    controls.reset();
    sound.pressButton();
    sound.rainAudio.pause();
    sound.treeAudio.pause();
    sound.coffeeAudio.pause();
    sound.fireplaceAudio.pause();
    timer.reset();
  });

  buttonTreeActive.addEventListener("click", function () {
    buttonTreeActive.classList.add("hide");
    buttonTreeNotActive.classList.remove("hide");

    sound.treeAudio.pause();
  });
  buttonTreeNotActive.addEventListener("click", function () {
    buttonTreeActive.classList.remove("hide");
    buttonTreeNotActive.classList.add("hide");
    buttonRainActive.classList.add("hide");
    buttonRainNotActive.classList.remove("hide");
    buttonCoffeeNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");
    buttonFireplaceNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");

    sound.treeAudio.play();
    sound.rainAudio.pause();
    sound.coffeeAudio.pause();
    sound.fireplaceAudio.pause();
  });
  buttonRainActive.addEventListener("click", function () {
    buttonRainNotActive.classList.remove("hide");
    buttonRainActive.classList.add("hide");

    sound.rainAudio.pause();
  });
  buttonRainNotActive.addEventListener("click", function () {
    buttonRainActive.classList.remove("hide");
    buttonRainNotActive.classList.add("hide");
    buttonTreeActive.classList.add("hide");
    buttonTreeNotActive.classList.remove("hide");
    buttonCoffeeNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");
    buttonFireplaceNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");

    sound.rainAudio.play();
    sound.treeAudio.pause();
    sound.coffeeAudio.pause();
    sound.fireplaceAudio.pause();
  });
  buttonCoffeeActive.addEventListener("click", function () {
    buttonCoffeeNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");

    sound.coffeeAudio.pause();
  });
  buttonCoffeeNotActive.addEventListener("click", function () {
    buttonCoffeeActive.classList.remove("hide");
    buttonCoffeeNotActive.classList.add("hide");
    buttonTreeActive.classList.add("hide");
    buttonTreeNotActive.classList.remove("hide");
    buttonRainNotActive.classList.remove("hide");
    buttonRainActive.classList.add("hide");
    buttonFireplaceNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");

    sound.coffeeAudio.play();
    sound.treeAudio.pause();
    sound.rainAudio.pause();
    sound.fireplaceAudio.pause();
  });
  buttonFireplaceActive.addEventListener("click", function () {
    buttonFireplaceNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");

    sound.fireplaceAudio.pause();
  });
  buttonFireplaceNotActive.addEventListener("click", function () {
    buttonFireplaceActive.classList.remove("hide");
    buttonFireplaceNotActive.classList.add("hide");
    buttonTreeActive.classList.add("hide");
    buttonTreeNotActive.classList.remove("hide");
    buttonRainNotActive.classList.remove("hide");
    buttonRainActive.classList.add("hide");
    buttonCoffeeNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");

    sound.fireplaceAudio.play();
    sound.treeAudio.pause();
    sound.coffeeAudio.pause();
    sound.rainAudio.pause();
  });
  buttonPlus.addEventListener("click", function () {
    minutesDisplay.textContent = String(
      parseInt(minutesDisplay.textContent) + 5
    ).padStart(2, "0");
  });

  buttonMinus.addEventListener("click", function () {
    if (minutesDisplay.textContent > 5) {
      minutesDisplay.textContent = String(
        parseInt(minutesDisplay.textContent) - 5
      ).padStart(2, "0");
    }
  });
}
