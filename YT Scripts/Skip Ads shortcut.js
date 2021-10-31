// ==UserScript==
// @name           Skip Ads Shortcut
// @version        0.2.0
// @namespace      YT_scripts
// @homepageURL    https://github.com/NJeyyy/About-Me/tree/Userscripts/YT%20Scripts
// @supportURL     https://github.com/NJeyyy/About-Me/blob/e939879175cdfb16dfa88733d50a80eed583bb64/YT%20Scripts/Skip%20Ads%20shortcut.log
// @updateURL      https://github.com/NJeyyy/About-Me/blob/6e989e5cee261f8e9b2a77ceb01d6a34b7f6edd4/YT%20Scripts/Skip%20Ads%20shortcut.js
// @author         NJ1n9
// @description    Skip Ads with shortcut!!
// @include        https://www.youtube.com/watch?v=*
// @icon           https://ricardoreadingmouse.com.au/wp-content/uploads/2018/04/youtube.png
// @grant          none
// ==/UserScript==


function check () {
  document.onkeyup = function(Event) {
    evt = Event || window.event;
       console.log(Event.target)
      var Skipads = document.getElementsByClassName("ytp-ad-skip-button");
      var HK1 = Event.which == 192
      var HK2 = Event.Ctrlkey
      var HK3 = Event.Shiftkey
// which == (unicodekey code) for not standalone hotkey
// standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
// unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
       if (HK1) {
         if (!(Event.target instanceof HTMLTextAreaElement) && !(Event.target instanceof HTMLInputElement)) {
         // Your commands after the shortcut here
            if (Skipads.length == 1) { //Just to make sure the button exist:P
                Skipads[0].click();
              }
           }
        }  
    };
}
    
check()
