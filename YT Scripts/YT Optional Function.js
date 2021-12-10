/* JUST SAVING IT HERE.. WHO KNOW I WILL LOST IT RIGHT? */

// ==UserScript==
// @name           YT Optional Function
// @version        1.6.1
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
//=================== Skip Ads with shortcut (`/~) ========================================
/**/

Startonlyonweb()

async function Startonlyonweb() {
  await sleep(5000)
  var URLRequirements = window.location.href
  var UsedURL = new RegExp("https://www.youtube.com/watch*")
  
  if (URLRequirements.match(UsedURL)) {
    check()
  }
  else {
    console.log("Not on Video page.")
  }
}

function check () {
    document.onkeyup = function(Event) {
      evt = Event || window.event;
    
        var Skipads = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
        var HK1 = Event.which == 192 // <-- ` = 192
        var HK2 = Event.Ctrlkey
        var HK3 = Event.Shiftkey
        var Hotkeyz3 = Event.which == 49 //<-- 1 = 49
  // which == (unicodekey code) for not standalone hotkey
  // standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
  // unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
        if (HK1) {
         //var ActiveElem = document.activeElement
           if (!(document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLInputElement)) {
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
/**

AKUGATAW()
  
//Since I am confuse and have small time doing this, I just.. gonna do this.. SH-SHUT UPP  
async function AKUGATAW() {

      //First, Let's click this button to load the elements we needed.. I DONT KNOW HOW TO DO IT WITH SCRIPT RN AND I AM TO BUSY FOR NOW SO--SO-- SHUT UPPP!??
  await document.getElementById("avatar-btn").click()
  await document.getElementById("avatar-btn").click()

    //Then we will call a function we made to change theme based on time
    changedathim()
};
*

    document.getElementById("avatar-btn").click()
*/


async function runtp() {
  //Toggle variable to disable the direct start
  var startupchkthm = "NO" // <-- "YES" to enable and "NO" to disable. (btw it must be capital!)
  if (startupchkthm == "YES") {
    var UPC = confirm("This gonna take 23 Seconds,\nYou really want to continue?")
    if (UPC == true) {
      Changedathim()
      await sleep(12570);
      Object.prototype.twoDigits = function () {
         return ('0' + this).slice(-2);
       }
      // get current date and time
      var now = new Date()
      // compile the current hour and minutes in the format 09:35
      var timeOfDay = now.getHours().twoDigits() + ':' + now.getMinutes().twoDigits();
      var alertTEXT = "DONE!\nbtw the time is" + ' ' + timeOfDay + ' ' + "So make fun day fun!\n(𝑝𝑙𝑒𝑎𝑠𝑒)"
      alert(alertTEXT)
      }
    else if (UPC == false) {
      console.log("Check time and changing theme has been canceled.")
    }
  }
  else if (startupchkthm == "NO" ) {
    console.log("The script doesn't run directly.")
    let LGTx = "The startup stats: " + startupchkthm + "\n'NO' mean Disabled and 'YES' mean Enabled"
    console.log(LGTx)
  }
Theme_by_time = setInterval(Changedathim, 120 * 60000); // 3 * 1000 milsec || N * 60000 for minutes
console.log("The interval command is setted up!")
}

function DoubleClickPropf() {
  document.getElementById("avatar-btn").click()
}
  
async function Changedathim() {
    await sleep(8100);
    DoubleClickPropf()
    await sleep(1000)
  if (document.getElementsByClassName("style-scope yt-multi-page-menu-section-renderer").length == '26'){
     document.getElementsByClassName("style-scope yt-multi-page-menu-section-renderer")[13].click();
     await sleep(3000);
    
      if (document.getElementsByClassName("yt-simple-endpoint style-scope ytd-compact-link-renderer").length == '17') {
        // we need a function that makes hours and minutes a two digit number
          Object.prototype.twoDigits = function () {
             return ('0' + this).slice(-2);
          }
  
         // get current date and time
         var now = new Date()
  
         // compile the current hour and minutes in the format 09:35
         var timeOfDay = now.getHours().twoDigits() + ':' + now.getMinutes().twoDigits();
  
      
        // <-- Use "||" because it's more to "or" than "and" and also because it's PM to AM combined.. not AM to PM:P
            if (timeOfDay >= '18:00' || timeOfDay <= '06:44') {  //<-- NIGHT TIME [Dark Theme]
               document.getElementsByClassName("yt-simple-endpoint style-scope ytd-compact-link-renderer")[15].click();
              //The Code to make it change the theme
               document.html
               
             }
            else if (timeOfDay >= '06:45' && timeOfDay <= '17:59') {  //<-- DAY TIME [Light Theme]
               document.getElementsByClassName("yt-simple-endpoint style-scope ytd-compact-link-renderer")[16].click();
              //The Code to make it change the theme
               console.log("Light Theme.")
               
             }
            else {
               console.log("Somthing rong!") //If something go wrong I will knew it! :D
             }
          }
          else {
            console.log("Element not exist.(theme switcher)") //If something go wrong I will knew it! :D
            }
  }
    else {
      console.log("Element not exist.(profile)") //If something go wrong I will knew it! :D
      
         }
}

console.log("The userscript is run successfully.") //<-- JUST TO MAKE SURE!!:D

//  Theme_by_time = setInterval(Changedathim, 60 * 60000); // 60 * 1000 milsec || N * 60000 for minutes 
// 60 = 1 Hours

///
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
