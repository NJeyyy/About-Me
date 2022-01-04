/* JUST SAVING IT HERE.. WHO KNOW I WILL LOST IT RIGHT? */

// ==UserScript==
// @name           YT Optional Function
// @version        2
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
/* There are 2 variable:
 * => AlreadyRUN_YTOptionalFunction1
 *  Is for command that runs only on video page.
 * => AlreadyRUN_YTOptionalFunction2
 *  For element(ToggleThemeBTN) that already created.
 * => AlreadyRUN_YTOptionalFunction3
 *  Temporary var
*/
sessionStorage.setItem("AlreadyRUN_YTOptionalFunction1", false)
sessionStorage.setItem("AlreadyRUN_YTOptionalFunction2", false)

start_YTOptionalFunction()
async function start_YTOptionalFunction() {
let LoadingOverlayCSS = document.createElement("style")
LoadingOverlayCSS.setAttribute("class", "LoadingOverlayELEMENTS")  
LoadingOverlayCSS.innerHTML = 'div[name="LoadingOverlay"] {\n'
  + ' background-color: black;\n'
  + ' top: 0px;\n'
  + ' left: 0px;\n'
  + ' width: 100vw;\n'
  + ' height: 100vh;\n'
  + ' z-index: 99999;\n'
  + ' opacity: 80%;\n'
  + ' position: fixed;\n'
  + ' cursor: url(https://i.ibb.co/qgPfw89/m5p-FZPd-RESIZED.png), auto;\n'
  + ' user-select: none;'
  + '}\n'
  + 'img[name="LoadingIcon"] {\n'
  + ' filter: invert(86%) sepia(1%) saturate(1660%) hue-rotate(115deg) brightness(107%) contrast(113%);\n'
  + ' height: auto;\n'
  + ' width: 10vw;\n'
  + ' position: absolute;\n'
  + ' top: 50vh;\n'
  + ' left: 50vw;\n'
  + ' transform: translate(-50%,-50%);\n'
  + '}\n'
;
document.head.appendChild(LoadingOverlayCSS)
let LoadingOverlayDIV = document.createElement("div")
LoadingOverlayDIV.setAttribute("class", "LoadingOverlayELEMENTS")
LoadingOverlayDIV.setAttribute("name", "LoadingOverlay")
LoadingOverlayDIV.innerHTML = '<img name="LoadingIcon" src="https://i0.wp.com/mdhsociety.com/wp-content/uploads/2017/11/throbber.gif">'
document.body.appendChild(LoadingOverlayDIV)
document.getElementsByName('LoadingIcon')[0].setAttribute('draggable', false);
document.getElementsByName('LoadingOverlay')[0].addEventListener("contextmenu", (event) => {
  event.preventDefault();
  let CFM = confirm("Do you want to remove the ['𝘌𝘭𝘦𝘮𝘦𝘯𝘵.𝙻𝚘𝚊𝚍𝚒𝚗𝚐𝙾𝚟𝚎𝚛𝚕𝚊𝚢𝙴𝙻𝙴𝙼𝙴𝙽𝚃𝚂'].\nTo ignore the loading and just do whatever U want?")
  if (CFM == true) {
    document.getElementsByClassName("LoadingOverlayELEMENTS")[1].remove();
    document.getElementsByClassName("LoadingOverlayELEMENTS")[0].remove();
  }
});
if (window.location.href.match("https://www.youtube.com/watch*")) {
  var BlockVideo2Play = setInterval(BLOCKAUTOPLAY, 1000)
}
var THEMETIMERL = setInterval(Theme_BasedTime, 60 * 60000) // Change YouTube Website theme based on time (make it runs on time of interval)
await sleep(700)
await ToggleTHEMEBTN();
await Startonlyonvideopage() // START ONLY ON VIDEO PAGE
await sleep(1000)
await Theme_BasedTime()
await sleep(500)
if (document.getElementsByClassName("LoadingOverlayELEMENTS").length > 0) {
   document.getElementsByClassName("LoadingOverlayELEMENTS")[1].remove();
   document.getElementsByClassName("LoadingOverlayELEMENTS")[0].remove();
}
if (window.location.href.match("https://www.youtube.com/watch*")) {
  await sleep(1500)
  // "true" to make it go to 0:00 Automatically
  // "[Insert any words to disable it(or just 'false')]" it's not gonna ask or automatically go to 0:00
  // "ask" It ask wether it wanna go to 0:00 or not
  let GOTOZERO = "false" // ALL MUST LOWER CASE
  if (GOTOZERO == "ask") {
    let YESNO = confirm("Go to [0:00]? ")
    if (YESNO == true) {
      document.getElementById("movie_player").seekTo(0,true);
    }
  }
  else if (GOTOZERO == "true") {
    document.getElementById("movie_player").seekTo(0,true);
  }
  clearInterval(BlockVideo2Play)
}
}


// Start whenever page changed the URL
window.addEventListener('locationchange', async function() {
  // Put your code here
  await sleep(2000)
  let LoadingOverlayCSS = document.createElement("style")
LoadingOverlayCSS.setAttribute("class", "LoadingOverlayELEMENTS")  
LoadingOverlayCSS.innerHTML = 'div[name="LoadingOverlay"] {\n'
  + ' background-color: black;\n'
  + ' top: 0px;\n'
  + ' left: 0px;\n'
  + ' width: 100vw;\n'
  + ' height: 100vh;\n'
  + ' z-index: 99999;\n'
  + ' opacity: 80%;\n'
  + ' position: fixed;\n'
  + ' cursor: url(https://i.ibb.co/qgPfw89/m5p-FZPd-RESIZED.png), auto;\n'
  + ' user-select: none;'
  + '}\n'
  + 'img[name="LoadingIcon"] {\n'
  + ' filter: invert(86%) sepia(1%) saturate(1660%) hue-rotate(115deg) brightness(107%) contrast(113%);\n'
  + ' height: auto;\n'
  + ' width: 10vw;\n'
  + ' position: absolute;\n'
  + ' top: 50vh;\n'
  + ' left: 50vw;\n'
  + ' transform: translate(-50%,-50%);\n'
  + '}\n'
;
document.head.appendChild(LoadingOverlayCSS)
let LoadingOverlayDIV = document.createElement("div")
LoadingOverlayDIV.setAttribute("class", "LoadingOverlayELEMENTS")
LoadingOverlayDIV.setAttribute("name", "LoadingOverlay")
LoadingOverlayDIV.innerHTML = '<img name="LoadingIcon" src="https://i0.wp.com/mdhsociety.com/wp-content/uploads/2017/11/throbber.gif">'
document.body.appendChild(LoadingOverlayDIV)
  await sleep(500)
  if (window.location.href.match("https://www.youtube.com/watch*")) {
    var BlockVideo2Play = setInterval(BLOCKAUTOPLAY, 1000)
  }
  await Startonlyonvideopage()
  await Theme_BasedTime()
  if (window.location.href.match("https://www.youtube.com/watch*")) {
    await sleep(1500)
  // "true" to make it go to 0:00 Automatically
  // "[Insert any words to disable it(or just 'false')]" it's not gonna ask or automatically go to 0:00
  // "ask" It ask wether it wanna go to 0:00 or not
  let GOTOZERO = "false" // ALL MUST be LOWER CASE
  if (GOTOZERO == "ask") {
    let YESNO = confirm("Go to [0:00]? ")
    if (YESNO == true) {
      document.getElementById("movie_player").seekTo(0,true);
    }
  }
  else if (GOTOZERO == "true") {
    document.getElementById("movie_player").seekTo(0,true);
  }
    clearInterval(BlockVideo2Play)
  }
  await sleep(500)
  if (document.getElementsByClassName("LoadingOverlayELEMENTS").length > 0) {
   document.getElementsByClassName("LoadingOverlayELEMENTS")[1].remove();
   document.getElementsByClassName("LoadingOverlayELEMENTS")[0].remove();
}
  console.log("YT Optional Function")

})


// START ONLY ON VIDEO PAGE
async function Startonlyonvideopage() {
  await sleep(5000)
  var URLRequirements = window.location.href
  var UsedURL = new RegExp("https://www.youtube.com/watch*")
  
  if (sessionStorage.getItem("AlreadyRUN_YTOptionalFunction1") == "true") {
    window.removeEventListener('keyup', YTAds_Shortcut, false);
    sessionStorage.setItem("AlreadyRUN_YTOptionalFunction1", false)
  }
  if (URLRequirements.match(UsedURL)) {
    window.addEventListener('keyup', YTAds_Shortcut, false); // Skip Ads with shortcut (`/~)
    sessionStorage.setItem("AlreadyRUN_YTOptionalFunction1", true)
  }
  else {
    console.log("This script is not working here =w=")
  }
}
//~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ~ ~\\
//=================== Skip Ads with shortcut (`/~) ========================================
/**/
function YTAds_Shortcut (Event) {
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
}

///
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\

//=================== Change YouTube Website theme based on time ========================================
/**/

async function Theme_BasedTime() {
  
  // get current date and time
  var now = new Date()
  
  // we need a function that makes hours and minutes a two digit number
 /* Object.prototype.HOURMINDGIT = function() {
    return ('0' + this).slice(-2);
  }*/
  function CURRENT_HOURS() {
    let The_Hours = now.getHours()
    return ('0' + The_Hours).slice(-2)
  }
  function CURRENT_MINUTES() {
    let The_Minutes = now.getMinutes()
    return ('0' + The_Minutes).slice(-2)
  }
  
  // compile the current hour and minutes in the format HH:MM
  var timeOfDay = CURRENT_HOURS() + ':' + CURRENT_MINUTES()
  
// VARIABLES for the settings
  // --The times settings--
  var time_DAY1 = '08:00'
  var time_DAY2 = '16:59'
  var time_NIGHT1 = '17:00'
  var time_NIGHT2 = '07:59'
  // --The selected theme settings--
  /* "Dark" for dark theme and "Light" for light theme. Be careful on the capital! It's important. */
  var theme_SELECTIONONE = "Dark" // NIGHT TIME
  var theme_SELECTIONTWO = "Light" // DAY TIME
  
  // <-- Use "||" because it's more to "or" than "and" and also because it's PM to AM combined.. not AM to PM:P
  if (timeOfDay >= time_NIGHT1 || timeOfDay <= time_NIGHT2) {  //<-- NIGHT TIME [Dark Theme]
    await GM.setValue("CurrentTheme", theme_SELECTIONONE)
    console.log(theme_SELECTIONONE, "Theme")
  }
  
  else if (timeOfDay >= time_DAY1 && timeOfDay <= time_DAY2) {  //<-- DAY TIME [Light Theme]
    await GM.setValue("CurrentTheme", theme_SELECTIONTWO)
    console.log(theme_SELECTIONTWO, "Theme")
  }
  
  
  
  
// Code to Change theme based on the "CurrentTheme_time" variable
  
  var CurrentTheme_time = await GM.getValue("CurrentTheme") // <-- Get The stored variables
  var Element_HTML = document.getElementsByTagName("html")[0] // <-- Get the HTML element.
  if (CurrentTheme_time == "Dark") {
    if (!(Element_HTML.getAttribute("dark") == "true")) { // <-- Check if the dark attributes exist in the html element
      Element_HTML.setAttribute("dark", "true") // Add "dark" attributes to change it to Dark Theme
      document.getElementsByClassName("ycs-app")[0].innerHTML.reload
      console.log("Dark Theme applied.") // <-- Show sign of applied Theme on browser console
      if (sessionStorage.getItem("AlreadyRUN_YTOptionalFunction2") == "true") {
        CheckEditToggleThemeBTN()
      }
    }
  }
  else if (CurrentTheme_time == "Light") {
    if (Element_HTML.getAttribute("dark") == "true") { // <-- Check if the dark attributes exist in the html element.
      Element_HTML.removeAttribute("dark") // Delete "dark" attributes to change it to Light Theme
      console.log("Light Theme applied.") // <-- Show sign of applied Theme on browser console
      if (sessionStorage.getItem("AlreadyRUN_YTOptionalFunction2") == "true") {
        CheckEditToggleThemeBTN()
      }
    }
  }
}

//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\

//=================== Subtitle Settings ========================================
/**
if (!localStorage.getItem("yt-player-caption-display-settings")) {
  var YT_CaptionSetting = "{\\"fontSizeIncrement\\":-2,\\"textOpacity\\":0.25,\\"windowOpacity\\":0.25,\\"color\\":\\"#0ff\\",\\"fontFamily\\":5,\\"backgroundOpacity\\":0,\\"windowColor\\":\\"#fff\\",\\"charEdgeStyle\\":1}"
  localStorage.setItem("yt-player-caption-display-settings", YT_CaptionSetting)
}
//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//=================== Toggle Theme ========================================
/**/
//ToggleTHEMEBTN();
async function ToggleTHEMEBTN() {
  await sleep(3500)
var createThisDIV = document.createElement("div")
createThisDIV.setAttribute("class", "ToggleTHEME_NJ1n9 fas")
await document.getElementById("start").appendChild(createThisDIV)
// fontawesome5 script will be on another userscript.
var createThisDIVCSS = document.createElement("style")
createThisDIVCSS.setAttribute("class", "ToggleTHEME_NJ1n9")
var ValueThisDIVCSS = 'div.ToggleTHEME_NJ1n9 {\n'
+ ' font-size: 24px;\n'
+ ' user-select: none;\n'
+ ' position: relative;\n'
+ ' bottom: 5px;\n'
+ '}\n'
+ 'div.ToggleTHEME_NJ1n9[THEME="dark"] {\n'
+ ' color: rgb(50,50,50);\n'
+ ' text-shadow: -1px 1px 0 #FFF,\n'
+ '               1px 1px 0 #FFF,\n'
+ '               1px -1px 0 #FFF,\n'
+ '              -1px -1px 0 #FFF;\n'
+ '}\n'
+ 'div.ToggleTHEME_NJ1n9[THEME="dark"]:hover {\n'
+ '  color: rgb(80,80,80);\n'
+ '}\n'
+ 'div.ToggleTHEME_NJ1n9[THEME="dark"]:active {\n'
+ '  color: rgb(90,90,90);\n'
+ ' text-shadow: -1px 1px 0 #EEE,\n'
+ '               1px 1px 0 #EEE,\n'
+ '               1px -1px 0 #EEE,\n'
+ '              -1px -1px 0 #EEE;\n'
+ '}\n'
+ 'div.ToggleTHEME_NJ1n9[THEME="light"] {\n'
+ ' color: rgb(240,240,240);\n'
+ ' text-shadow: -1px 1px 0 #000,\n'
+ '               1px 1px 0 #000,\n'
+ '               1px -1px 0 #000,\n'
+ '              -1px -1px 0 #000;\n'
+ '}\n'
+ 'div.ToggleTHEME_NJ1n9[THEME="light"]:hover {\n'
+ '   color: rgb(230,230,230);\n'
+ '}\n'
+ 'div.ToggleTHEME_NJ1n9[THEME="light"]:active {\n'
+ '   color: rgb(210,210,210);\n'
+ '   text-shadow: -1px 1px 0 #333,\n'
+ '                 1px 1px 0 #333,\n'
+ '                 1px -1px 0 #333,\n'
+ '                -1px -1px 0 #333;\n'
+ '}\n'
;
createThisDIVCSS.innerHTML = ValueThisDIVCSS
await document.head.appendChild(createThisDIVCSS)
  
CheckEditToggleThemeBTN()
}
function CheckEditToggleThemeBTN() {
    function TOdark() {
    let USEELEMNT = document.getElementsByClassName("ToggleTHEME_NJ1n9")[1]
    let Element_HTML = document.getElementsByTagName("html")[0]
    Element_HTML.setAttribute("dark", "true")
    CheckEditToggleThemeBTN()
    USEELEMNT.removeEventListener("click", TOdark)
  }
  function TOLight() {
    let USEELEMNT = document.getElementsByClassName("ToggleTHEME_NJ1n9")[1]
    let Element_HTML = document.getElementsByTagName("html")[0]
    Element_HTML.removeAttribute("dark")
    CheckEditToggleThemeBTN()
    USEELEMNT.removeEventListener("click", TOLight)
  }
  
  
var Element_HTML = document.getElementsByTagName("html")[0]
if (Element_HTML.getAttribute("dark") == "true") { // When Current theme is Dark and Action is set to switch to light theme
    var USEELEMNT = document.getElementsByClassName("ToggleTHEME_NJ1n9")[1]
    if (USEELEMNT.classList.contains("fa-sun")) {
      USEELEMNT.classList.replace("fa-sun", "fa-moon")
    }
  else {
    USEELEMNT.classList.add("fa-moon")
  }
  USEELEMNT.setAttribute("THEME", "dark")
  USEELEMNT.title = "Current Theme is Dark.\nClick to switch to Light Theme"
  USEELEMNT.addEventListener("click", TOLight)
}
else if (!(Element_HTML.getAttribute("dark") == "true")) { // When Current theme is Light and Action is set to switch to dark theme
  var USEELEMNT = document.getElementsByClassName("ToggleTHEME_NJ1n9")[1]
  if (USEELEMNT.classList.contains("fa-moon")) {
    USEELEMNT.classList.replace("fa-moon", "fa-sun")
  }
  else {
    USEELEMNT.classList.add("fa-sun")
  }
  USEELEMNT.setAttribute("THEME", "light")
  USEELEMNT.title = "Current Theme is Light.\nClick to switch to Dark Theme"
  USEELEMNT.addEventListener("click", TOdark)
}
  
  sessionStorage.setItem("AlreadyRUN_YTOptionalFunction2", true)
}
//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//=================== Block Video Play on Loading ========================================
/**/
function BLOCKAUTOPLAY() {
  var vids = document.getElementsByClassName("video-stream");
  if (vids.length) { // this is basically to make sure there are videos on the page, but it is probably unnecessary
    var Controls = document.getElementsByClassName("ytp-play-button");
    var Status = Controls[0].getAttribute("aria-label");
    
    if (!(Status == "Play (k)")) { //if the video is playing, status comes back as "Pause"
      Controls[0].click(); // in which case we want to click on the play-pause button to pause it
    }
  }
}
//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
