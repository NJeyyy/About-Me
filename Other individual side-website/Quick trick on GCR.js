// ==UserScript==
// @name            Quick trick on GCR
// @namespace       GCR_quicktrick
// @match           https://classroom.google.com/*
// @grant           none
// @version         1.0
// @author          NJ1n9
// @description     Do simple task quickly.
// @noframes
// @icon            https://i2.wp.com/img.icons8.com/plasticine/2x/google-classroom.png
// ==/UserScript==


/**
 * Go to Homepage with hotkey!
 *    [InserKey + AltKey]
 */
var page_LOC = window.location.pathname.slice(5)
if (page_LOC !== "h") {

window.addEventListener('keyup', function(event) {
    var Hotkey1 = event.which == 36 // <-- 36 = Home key
    var Hotkey2 = event.CtrlKey
// which == (unicodekey code) for not standalone hotkey
// standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
// unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
// Add another HotkeyN for more collumn
// Add more hotkey function by adding "&&" and event.(varname)😊
      if (Hotkey1 && Hotkey2) {
        var th_Homepage = window.location.pathname.slice(0, 7)
        window.location.pathname = th_Homepage
      }
});
}
