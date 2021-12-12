// ==UserScript==
// @name         YCS optional function
// @namespace    YCS_Addons
// @homepageURL  https://github.com/NJeyyy/About-Me/tree/Userscripts/YT%20Scripts/YCS%20Addons
// @supportURL   https://github.com/NJeyyy/About-Me/blob/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
//Note> I know you may be confuse.. the "SupportURL" literally brought you to change log pageXD not support page, but don't worry there are also some help there (probably)
// @version      3.6.7d
// @description  Various function for the YCS Extension!
/** List of function included here and the quick description**
 * description(focused Shortcut)   Since the developer (of YCS Extension) SUCKS, and didn't want to add this "SIMPLE" feature.. I will just add it myself😎
 * description(Add clear button)   I am to lazy pressing Ctrl + A always! or just use the clear button sometimes🙄 so why not🤓
 */
// @author       NJ1n9
// @match        https://www.youtube.com/*
// @icon         https://cdn-icons-png.flaticon.com/128/1383/1383327.png
// @grant        None
// ==/UserScript==

// since I cannot add multiple link:\
//I will put credits here😎😛
//Focus script action         : "https://github.com/jabbalaci/AutoFocus/blob/master/auto_focus.user.js"
//Hotkey script action        : "http://www.w3schools.com/jsref/event_key_keycode.asp"
//"Select all Text" Command   : "https://gist.github.com/gibson042/c9b3406bc54f55726ec4#file-focus_search-user-js"
//=========================================================================================================
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//=================================================================================================================
// Start whenever page changed the URL
document.addEventListener('onhashchange', YCSADDS, true);

// Start on tab reload/load
document.addEventListener('load', YCSADDS, true);
//---------------------------------------------------------------------------------------
function YCSADDS() {
  var URLRequirements = window.location.href
  var UsedURL = new RegExp("https://www.youtube.com/watch*")

  if (URLRequirements.match(UsedURL)) {
    
    function doc_keyUp(event) { //The hotkey/function is somekind of.. toggle🙃:P
        var Hotkey1 = event.which == 83;
        var Hotkey2 = event.altKey;
        var Hotkey3 = event.shiftKey
    // which == (unicodekey code) for not standalone hotkey
    // standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
    // unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
    // Add another HotkeyN for more collumn
    // Add more hotkey function by adding "&&" and event.(varname)😊
        var YIS = document.getElementById('ycs-input-search')
        YIS.setAttribute("type", "search")
          if (Hotkey2 && Hotkey1) { //<-- "83" is S(capital, because of keyboard layout)
            // call your function to do the thing
                if (document.activeElement.id == "ycs-input-search") {
                  document.getElementById("ycs-input-search").blur(); //<-- Unfocus YCS search field if focused and if shortcut pressed
                  window.scrollTo(0,0)
                }
                else {
                  document.getElementById("ycs-input-search").focus(); //<-- Set focus to YCS search field if not focused with the same shortcut
                  document.getElementById("ycs-input-search").select(); //<-- "Select all" text in the field if 'available'😄, add "//" before the command to disable it!
    
                }
          }
    };
    //register the handler
    document.addEventListener('keyup', doc_keyUp, false);
    console.log("The Script is running.")
  }
  else {
    console.log("It's not on video page. So it doesn't started.")
  }
}

//==============================================================================
//Edit the input search to add clear button
/*
var YIS = document.getElementById('ycs-input-search')
YIS.setAttribute("type", "search")
*///
//-------------------------------------------------------------------------------

//NOTE!! to disable thing, add "//" at every line of the command (before the command to be spesific) you want to disable:D
//******************************************************************************************************************************************
//Edit Log at: https://github.com/NJeyyy/About-Me/edit/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
