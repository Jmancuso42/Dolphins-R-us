"use strict"



  // Get the table element
  var table = document.querySelector("table");
  
  // Get the header element
  var header = document.querySelector("header");
  
  // Set the width of the header element to the width of the table element
  header.style.width = table.offsetWidth + "px";
