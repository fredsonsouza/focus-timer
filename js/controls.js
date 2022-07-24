export default function Controls({
  buttonPlay,
  buttonPause,
  buttonTreeActive,
  buttonTreeNotActive,
  buttonRainActive,
  buttonRainNotActive,
  buttonCoffeeActive,
  buttonCoffeeNotActive,
  buttonFireplaceActive,
  buttonFireplaceNotActive,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }
  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }
  function reset() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
    buttonTreeActive.classList.add("hide");
    buttonTreeNotActive.classList.remove("hide");
    buttonRainActive.classList.add("hide");
    buttonRainNotActive.classList.remove("hide");
    buttonCoffeeActive.classList.add("hide");
    buttonCoffeeNotActive.classList.remove("hide");
    buttonFireplaceActive.classList.add("hide");
    buttonFireplaceNotActive.classList.remove("hide");
  }

  return {
    reset,
    play,
    pause,
  };
}
