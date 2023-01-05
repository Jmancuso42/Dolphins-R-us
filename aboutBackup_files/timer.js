"use strict"






function showClock() {

  //var thisDay = new Date(2018, 4, 19, 9, 31, 27);
  var thisDay = new Date();
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();

  document.getElementById('currentTime').innerHTML ='<span> ' + localTime + '</span>';

  // let hrs = (days - Math.floor(days)) * 24;
  // let mins = (hrs - Math.floor(hrs)) * 60;
  // let secs = (mins-Math.floor(mins))* 60;

}

showClock();
setInterval(showClock,1000);