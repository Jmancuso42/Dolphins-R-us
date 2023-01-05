"use strict"

function dolphinSound() {

  var sound = new Audio("resources/Dolphin-sound.mp3");
  
  var div = document.getElementById("picture-div");
  
  div.addEventListener("click",  sound.play());

  
}