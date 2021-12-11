/* JUST SAVING IT HERE.. WHO KNOW I WILL LOST IT RIGHT? */

// ==UserScript==
// @name           YT Optional Function
// @version        1.7.5a
// @namespace      YT_scripts
// @homepageURL    https://github.com/NJeyyy/About-Me/tree/Userscripts/YT%20Scripts
// @supportURL     https://github.com/NJeyyy/About-Me/blob/Userscripts/YT%20Scripts/YT%20Optional%20Function.log
// @author         NJ1n9
// @description    Optional YouTube function in a script😏🎸🎶🎧
/** Description for each function available here:
Skip Ads Shortcut: Skip Ads with shortcut!! Instead of wait the button or click one it🥱😒
Change YouTube Website theme based on time: Does what it say, It change when match the time there btw
 * [If you have more function added, add above from here:D
 * Thanks for your time adding information and helping other!]
 */
// @match          https://www.youtube.com/*
// @icon           https://ricardoreadingmouse.com.au/wp-content/uploads/2018/04/youtube.png
// @grant          GM.setValue
// @grant          GM.getValue
// @noframes
// ==/UserScript==
/**
 * CREDITS!
 *  Run command in desired time(included minutes): https://stackoverflow.com/a/57998003/15715476
 *  The simple tricks to change website theme: https://dev.to/lakshmananarumugam/the-simple-tricks-to-change-your-website-theme-based-on-day-and-night-23l0
 */

//||~~~~~~~~~~~~SPECIAL PLACE~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
// use "sleep(N)" to use this function, it is useful to wait for certain task. btw just FYI "N"mean the time you needed, it is in ms btw so-- 1 sec mean 1000 miliseconds
/* I want to use it on my script too! But is doesn't work..
To answer that question:
Add this function to any script you need first, THEN you can use it.
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\
//Add more special function here!!
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\


//~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ~ ~\\
//  START THE FEATURES
window.onload = function() { // <-- What's gonna runs when script executed.
  Startonlyonvideopage() // START ONLY ON VIDEO PAGE
  var THEMETIMERL = setInterval(Theme_BasedTime(), 60 * 60000) // Change YouTube Website theme based on time (make it runs on time of interval)
  
  //Force Comments to load
  window.dispatchEvent(new Event("scroll"));
}


// START ONLY ON VIDEO PAGE
async function Startonlyonvideopage() {
  await sleep(5000)
  var URLRequirements = window.location.href
  var UsedURL = new RegExp("https://www.youtube.com/watch*")
  
  if (URLRequirements.match(UsedURL)) {
    check() // Skip Ads with shortcut (`/~)
  }
  else {
    console.log("Skip Ads shortcut is not working here =w=")
  }
}
//~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ~ ~\\
//=================== Skip Ads with shortcut (`/~) ========================================
/**/

function check () {
  document.onkeyup = function(Event) {
    evt = Event || window.event;
    
    //VARIABLES//
    var Skipads = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
    var HK1 = Event.which == 192 // <-- ` = 192
 // which == (unicodekey code) for not standalone hotkey
 // standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
 // unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
    
    
    if (HK1) {
      var ActiveElem = document.activeElement
      if (!(ActiveElem instanceof HTMLTextAreaElement || ActiveElem instanceof HTMLInputElement || ActiveElem.isContentEditable == true)) {
        // Your commands after the shortcut here
        if (Skipads.length == 1) { //Just to make sure the button exist:P
          Skipads[0].click();
        }
        else {
          alert("THERE'S NO ADS HERE\nSO CAN YA JUST STOP")
        }
      }
    }
  };
}
    

///
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\

//=================== Change YouTube Website theme based on time ========================================
/**/

async function Theme_BasedTime() {

  // we need a function that makes hours and minutes a two digit number
  /**
  Object.prototype.HOURMINDGIT = function () {
    return ('0' + this).slice(-2);
  }*/ //Because of some bugs happened and make the site broken.. I change how I did this.
  function CURRENT_HOURS() {
    let The_Hours = now.getHours()
    return ('0' + The_Hours).slice(-2)
  }
  function CURRENT_MINUTES() {
    let The_Minutes = now.getMinutes()
    return ('0' + The_Minutes).slice(-2)
  }
  
  // get current date and time
  var now = new Date()
  
  // compile the current hour and minutes in the format HH:MM
  var timeOfDay = CURRENT_HOURS() + ':' + CURRENT_MINUTES()
  
  // <-- Use "||" because it's more to "or" than "and" and also because it's PM to AM combined.. not AM to PM:P
  if (timeOfDay >= '18:00' || timeOfDay <= '06:44') {  //<-- NIGHT TIME [Dark Theme]
    GM.setValue("CurrentTheme", "Dark")
    console.log("Dark Theme")
  }
  else if (timeOfDay >= '06:45' && timeOfDay <= '17:59') {  //<-- DAY TIME [Light Theme]
    GM.setValue("CurrentTheme", "Light")
    console.log("Light Theme")
  }
  

  
  var CurrentTheme_time = await GM.getValue("CurrentTheme", "Light") // <-- Get The stored variables
  var Element_HTML = document.getElementsByTagName("html")[0] // <-- Get the HTML element.
  if (CurrentTheme_time == "Dark") {
    if (!(Element_HTML.attributes.getNamedItem("dark"))) { // <-- Check if the dark attributes exist in the html element
      Element_HTML.setAttribute("dark", "true") // Add "dark" attributes to change it to Dark Theme
      document.getElementsByClassName("ycs-app")[0].innerHTML.reload
    }
    console.log("Dark Theme applied.") // <-- Show sign of applied Theme on browser console
  }
  else if (CurrentTheme_time == "Light") {
    if (Element_HTML.attributes.getNamedItem("dark")) { // <-- Check if the dark attributes exist in the html element.
      Element_HTML.removeAttribute("dark") // Delete "dark" attributes to change it to Light Theme
    }
      console.log("Light Theme applied.") // <-- Show sign of applied Theme on browser console
  }
}

///
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
