// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var index = 0; index < numberOfDrumButtons; index++) {
  document
    .querySelectorAll(".drum")
    [index].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var jap1 = new Audio("sounds/Jap-1.m4a");
      jap1.play();
      break;
    case "a":
      var jap2 = new Audio("sounds/Jap-2.m4a");
      jap2.play();
      break;

    case "s":
      var jap3 = new Audio("sounds/Jap-3.m4a");
      jap3.play();
      break;

    case "d":
      var jap4 = new Audio("sounds/Jap-4.m4a");
      jap4.play();
      break;

    case "j":
      var jap5 = new Audio("sounds/Jap-5.m4a");
      jap5.play();
      break;

    case "k":
      var jap6 = new Audio("sounds/Jap-6.m4a");
      jap6.play();
      break;

    case "l":
      var jap7 = new Audio("sounds/Jap-7.m4a");
      jap7.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
