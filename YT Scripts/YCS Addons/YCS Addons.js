// ==UserScript==
// @name         YCS optional function
// @namespace    YCS_Addons
// @homepageURL  https://github.com/NJeyyy/About-Me/tree/Userscripts/YT%20Scripts/YCS%20Addons
// @supportURL   https://github.com/NJeyyy/About-Me/blob/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
//Note> I know you may be confuse.. the "SupportURL" literally brought you to change log pageXD not support page, but don't worry there are also some help there (probably)
// @version      4
// @description  Various optional function for the YCS Extension!
/** List of function included here and the quick description**
 * description(focused Shortcut)   Since the developer (of YCS Extension) SUCKS, and didn't want to add this "SIMPLE" feature.. I will just add it myself😎
 * description(Add clear button)   I am to lazy pressing Ctrl + A always! or just use the clear button sometimes🙄 so why not🤓
 */
// @author       NJ1n9
// @match        https://www.youtube.com/*
// @icon         https://cdn-icons-png.flaticon.com/128/1383/1383327.png
// @grant        none
// @noframes
// ==/UserScript==

// since I cannot add multiple link:\
//I will put credits here😎😛
//Focus script action         : "https://github.com/jabbalaci/AutoFocus/blob/master/auto_focus.user.js"
//Hotkey script action        : "http://www.w3schools.com/jsref/event_key_keycode.asp"
//"Select all Text" Command   : "https://gist.github.com/gibson042/c9b3406bc54f55726ec4#file-focus_search-user-js"

// FOR ME ON THE FUTURE: 
/**
 * THANK YOU FOR YOUR ATTENTION:D
 * Please implement changes of this script
 * To the github page in: https://github.com/NJeyyy/About-Me/blob/Userscripts/YT%20Scripts/YCS%20Addons/YCS%20Addons.js
 Right? I think it's in there tho (Srry if its wrong:<)
 * I am having a great time rn (kinda) and it is rare I got this moment so..
 * I don't want anything to ruin it.
 * 
 * Thank you for your understanding.
 *                                                                                                            -NJ1n9🤗(18/Desember/2021)-
*/


//=========================================================================================================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//=================================================================================================================

// To clear comments when input field is empty
function SearchValueCLEAR() {
  var YIS = document.getElementById('ycs-input-search');
  if (YIS.value.length == "0") {
    YIS.blur();
    document.getElementById("ycs_btn_clear").click();
  }
}
    

// Shortcut for YCS Extension
function doc_keyUp(event) { //The hotkey/function is somekind of.. toggle🙃:P
  let Hotkey1 = event.which == 83;
  let Hotkey2 = event.altKey;
    // which == (unicodekey code) for not standalone hotkey
    // standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
    // unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
    // Add another HotkeyN for more collumn
    // Add more hotkey function by adding "&&" and event.(varname)😊
  let YIS = document.getElementById('ycs-input-search');
  YIS.setAttribute("type", "search");
  if (Hotkey2 && Hotkey1) { //<-- "83" is S(capital, because of keyboard layout)
    // call your function to do the thing
    if (document.activeElement.id == "ycs-input-search") {
      document.getElementById("ycs-input-search").blur(); //<-- Unfocus YCS search field if focused and if shortcut pressed
      window.scrollTo(0,0);
    }
    else {
      document.getElementById("ycs-input-search").focus(); //<-- Set focus to YCS search field if not focused with the same shortcut
/*      document.getElementById("ycs-input-search").select(); //<-- "Select all" text in the field if 'available'😄, add "//" before the command to disable it!*/
      //^^ Is not needed anymore. But.. Just wanted to kept it:P
    }
  }
}
//==============================================================================
//Edit the input search to add clear button
/**
var YIS = document.getElementById('ycs-input-search')
YIS.setAttribute("type", "search")
//*/
//==============================================================================
//More optional physical Function
/**/
async function AddmoreButtonFunctionality() {
  await sleep(5000); //<-- Just waiting~
  
  // The container for some optional physical Function
  let Create_Optionalmorephysicalfunction = document.createElement("div");
  Create_Optionalmorephysicalfunction.setAttribute("id", "YCS-optional-function-CONTAINER");
  Create_Optionalmorephysicalfunction.setAttribute("style", "position: relative;font-size: 20px;float: left;margin-top: 5px;margin-bottom: 5px;");
  await document.getElementsByClassName("ycs-app-main")[0].insertBefore(Create_Optionalmorephysicalfunction, document.getElementsByClassName("ycs-app-main")[0].children[2]);
  
// Button to go to top of page
  let Create_ToptheBTN = document.createElement("div");
  Create_ToptheBTN.setAttribute("id", "GTopButton");
  Create_ToptheBTN.setAttribute("style", "position: relative;border-radius: 15%;background: #B5E1DB;width: 25px;height: 25px;color: cadetblue;cursor: pointer;display: inline-block;");
  Create_ToptheBTN.innerHTML = '<i class="far fa-arrow-alt-circle-up" style="margin: 0;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"></i>';
  await document.getElementById("YCS-optional-function-CONTAINER").appendChild(Create_ToptheBTN);
  document.getElementById("GTopButton").addEventListener("click", () => {
    window.scrollTo(0,0);
  });
  
  
  
// Button to Toggle: select all text on focus
  let ToggleStatus = "ON" // ON and OFF (All-must-caps)
                          // ON : The function activated at the start (Text selected when search field on focus)
                          // OFF : The function must manually activated
  
    function SelectAllOnfocus_func() { //<-- Function for the target Element(Search Input)
    document.getElementById("ycs-input-search").select();
  }
  function SelectAllOnfocus_ON() { //<-- For the button (toggle)
    document.getElementById("SelectAll-Onfocus").classList.replace("fa-pen", "fa-pen-square");
    document.getElementById("SelectAll-Onfocus").title = "All Text selected when input field is focused.";
    document.getElementById("ycs-input-search").addEventListener("focus", SelectAllOnfocus_func);
    document.getElementById("SelectAll-Onfocus").removeEventListener("click", SelectAllOnfocus_ON);
    document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_OFF);
  }
  function SelectAllOnfocus_OFF() { //<-- For the button (toggle)
    document.getElementById("SelectAll-Onfocus").classList.replace("fa-pen-square", "fa-pen");
    document.getElementById("SelectAll-Onfocus").title = "Just like casual";
    document.getElementById("ycs-input-search").removeEventListener("focus", SelectAllOnfocus_func);
    document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_ON);
    document.getElementById("SelectAll-Onfocus").removeEventListener("click", SelectAllOnfocus_OFF);
  }
  
  if (ToggleStatus == "OFF") {
    let Create_toggleSelectAllOnfocus = document.createElement("div");
    Create_toggleSelectAllOnfocus.setAttribute("id", "SelectAll-Onfocus");
    Create_toggleSelectAllOnfocus.setAttribute("style", "display: inline-block;margin-left: 5px;position: relative;bottom: 5px;background: rgb(231 231 231);border-radius: 25%;text-shadow: -1px 1px 0px #ffffff, 1px 1px 0px #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;cursor: grabbing;color: grey;");
    Create_toggleSelectAllOnfocus.setAttribute("class", "fas fa-pen");
    await document.getElementById("YCS-optional-function-CONTAINER").appendChild(Create_toggleSelectAllOnfocus);
    document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_ON);
  }
  else if (ToggleStatus == "ON") {
    document.getElementById("ycs-input-search").addEventListener("focus", SelectAllOnfocus_func);
    let Create_toggleSelectAllOnfocus = document.createElement("div");
    Create_toggleSelectAllOnfocus.setAttribute("id", "SelectAll-Onfocus");
    Create_toggleSelectAllOnfocus.setAttribute("style", "display: inline-block;margin-left: 5px;position: relative;bottom: 5px;background: rgb(231 231 231);border-radius: 25%;text-shadow: -1px 1px 0px #ffffff, 1px 1px 0px #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;cursor: grabbing;color: grey;");
    Create_toggleSelectAllOnfocus.setAttribute("class", "fas fa-pen-square");
    await document.getElementById("YCS-optional-function-CONTAINER").appendChild(Create_toggleSelectAllOnfocus);
    document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_OFF);
  }
}
//*/
//-------------------------------------------------------------------------------
//STARTER
sessionStorage.setItem("AlreadyRUN_YCSoptionalfunction", "false");

YCSSTARTER()
async function YCSSTARTER() {
    await sleep(1500);
    if (sessionStorage.getItem("AlreadyRUN_YCSoptionalfunction") == "true") {
      window.removeEventListener('keyup', doc_keyUp, false);
      window.removeEventListener('search', SearchValueCLEAR);
      if (document.getElementById("YCS-optional-function-CONTAINER")) {
        await document.getElementById("YCS-optional-function-CONTAINER").remove();
      }
      sessionStorage.setItem("AlreadyRUN_YCSoptionalfunction", "false");
    }
    await sleep(900);
    if (window.location.href.match("/*://www.youtube.com/watch*")) {
      await window.addEventListener('keyup', doc_keyUp, false);
      await window.addEventListener('search', SearchValueCLEAR);
      await sleep(1000);
      if (!(document.getElementById("YCS-optional-function-CONTAINER"))) {
          await AddmoreButtonFunctionality();
      }
      console.log("The Script is running.");
      sessionStorage.setItem("AlreadyRUN_YCSoptionalfunction", "true");
    }
  else {
    console.log("It's not on video page and the extension can't run here so it's not running:<")
  }
}

// Start whenever page changed the URL
window.addEventListener('locationchange', YCSSTARTER);

//---------------------------------------------------------------------------------------

//NOTE!! to disable thing, add "//" at every line of the command (before the command to be spesific) you want to disable:D
//******************************************************************************************************************************************
//Edit Log at: https://github.com/NJeyyy/About-Me/edit/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
