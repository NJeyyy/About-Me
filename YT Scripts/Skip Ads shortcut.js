// ==UserScript==
// @name           Skip Ads Shortcut
// @version        0.1.5
// @namespace      YT_scripts
// @homepageURL    
// @author         NJ1n9
// @description    none for now..
// @include        https://www.youtube.com/watch?v=*
// @icon           -
// ==/UserScript==


function doc_Keyup(Event) {
      var Skipads = document.getElementsByClassName("ytp-ad-skip-button");
      var HK1 = Event.which == 192
      var HK2 = Event.Ctrlkey
      var HK3 = Event.Shiftkey
// which == (unicodekey code) for not standalone hotkey
// standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
// unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
  if (HK1 && HK2 && HK3) {
    if (Skipads.length == 1) { //Just to make sure the button exist:P
          Skipads[0].click();
    }
  }
};
//register the handler
document.addEventListener('keyup', doc_Keyup, false);
