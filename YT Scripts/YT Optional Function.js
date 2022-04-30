/* JUST SAVING IT HERE.. WHO KNOWs I WILL LOST IT RIGHT? */

// ==UserScript==
// @name           YT Optional Function
// @version        2.6c_1846-30042022
// @namespace      YT_scripts
// @homepageURL    https://github.com/NJeyyy/About-Me/tree/Userscripts/YT%20Scripts
// @supportURL     https://github.com/NJeyyy/About-Me/blob/Userscripts/YT%20Scripts/YT%20Optional%20Function.log
// @author         NJ1n9
// @description    Optional YouTube function in a script😏🎸🎶🎧
// @require        https://github.com/NJeyyy/About-Me/raw/13e26733d8953ed7989cf852d5836357cc47f1d8/ToolScript_Global_min.js
// @match          https://www.youtube.com/*
// @run-at         document-idle
// @icon           https://i.imgur.com/Xzfid2K.png
// @grant          GM.setValue
// @grant          GM.getValue
// @noframes
// ==/UserScript==
/** Description for each function available here:
>Skip Ads Shortcut: Skip Ads with shortcut!! Instead of wait the button or click on it🥱😒
>Change YouTube Website theme based on time: Does what it say, It change when match the time there btw
|>Subtitle Settings: Restore YT Subtitle(/Caption) Settings
>Toggle Theme Button: Toggle theme temporary by button! Y'KNOW INSTEAD TO CLICK MORE THAN ONE TIME ON THE PROFILE AND STUFF..
and also this is temporary! so it is not saved:P
||FootNote:
 - List that used "|>" instead of ">" have note of => {*Note! It not tested, so be careful! I didn't rlly need it rn so.. yea:P not developing it maybe later!}
 * [If you have more function added, add above from here:D
 * Thanks for your time adding information and helping other!]
 */
/**
 * CREDITS!
 *  Run command in desired time(included minutes): https://stackoverflow.com/a/57998003/15715476
 *  The simple tricks to change website theme: https://dev.to/lakshmananarumugam/the-simple-tricks-to-change-your-website-theme-based-on-day-and-night-23l0
 */

//||~~~~~~~~~~~~USERSCRIPT REQUIREMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
/*
// >Custom Addition ToolScript
//    * SLEEP(miliseconds) Function
//    * WaitFor a conditionFunction
// 
// >FontIcon Script
// >Optional EventListener
//[NOTE!! You can insert the code below here too since this is from "Custom Addition ToolScript"]
// Below this line (Or just.. use @require)
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

//~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ~ ~\\
/* There are 2 variable:
 * => AlreadyRUN_YTOptionalFunction1
 *  Is for command that runs only on video page.
 * => AlreadyRUN_YTOptionalFunction2 {Deprecated}
 *  For element(ToggleThemeBTN) that already created.
 * => AlreadyRUN_YTOptionalFunction3
 *  Temporary var
*/

//Reset some stuff for new session
sessionStorage.setItem("AlreadyRUN_YTOptionalFunction1", false);
GM.setValue("SubmitCommentEvent_ErrorCounter", 0);
//-------------------------------------------------------------------

start_YTOptionalFunction(); // <-- Start when the page load/reload

async function start_YTOptionalFunction() {
  if(!ISE('div#LutleLoadingSpinIcon')) {
		var BlockVideo2Play;
    if(window.location.href.match(/https\:\/\/www\.youtube\.com\/watch*/)) {
      BlockVideo2Play = setInterval(BLOCKAUTOPLAY, 100);
			console.log('Interval ID: '+BlockVideo2Play);
    }
    //RestorePreferredOption_4YT("First-Run");
    //await sleep(30);
    await waitFor(_ => document.readyState == 'complete');
		await waitFor(_ => document.visibilityState == 'visible' || document.webkitVisibilityState == "visible");
    SidebarPARENT();
    await LittleLoadingIcon(); //<-- Hmmm
    if(window.location.href.match(/https\:\/\/www\.youtube\.com\/watch*/)) {
      let LoadingOverlayCSS = document.createElement("style");
      LoadingOverlayCSS.setAttribute("class", "LoadingOverlayELEMENTS");
      LoadingOverlayCSS.innerHTML = 'div[name="LoadingOverlay"] {\n' + ' background-color: black;\n' + ' top: 0px;\n' + ' left: 0px;\n' + ' width: 100vw;\n' + ' height: 100vh;\n' + ' z-index: 99999;\n' + ' opacity: 80%;\n' + ' position: fixed;\n' + ' cursor: url(https://i.ibb.co/qgPfw89/m5p-FZPd-RESIZED.png), auto;\n' + ' user-select: none;\n' + ' pointer-events: none;\n' + '}\n' + 'img[name="LoadingIcon"] {\n' + ' filter: invert(86%) sepia(1%) saturate(1660%) hue-rotate(115deg) brightness(107%) contrast(113%);\n' + ' height: auto;\n' + ' width: 10vw;\n' + ' position: absolute;\n' + ' top: 50vh;\n' + ' left: 50vw;\n' + ' transform: translate(-50%,-50%);\n' + ' pointer-events: auto;\n' + '}\n';
      document.head.appendChild(LoadingOverlayCSS);
      let LoadingOverlayDIV = document.createElement("div");
      LoadingOverlayDIV.setAttribute("class", "LoadingOverlayELEMENTS");
      LoadingOverlayDIV.setAttribute("name", "LoadingOverlay");
      LoadingOverlayDIV.innerHTML = '<img name="LoadingIcon" title="Right click here to remove this overlay!" src="https://i0.wp.com/mdhsociety.com/wp-content/uploads/2017/11/throbber.gif">';
      await document.body.appendChild(LoadingOverlayDIV);
      document.getElementsByName('LoadingIcon')[0].setAttribute('draggable', false);
      document.getElementsByName('LoadingIcon')[0].addEventListener("contextmenu", (event) => {
        event.preventDefault();
        let CFM = confirm("Do you want to remove the ['𝘌𝘭𝘦𝘮𝘦𝘯𝘵.𝙻𝚘𝚊𝚍𝚒𝚗𝚐𝙾𝚟𝚎𝚛𝚕𝚊𝚢𝙴𝙻𝙴𝙼𝙴𝙽𝚃𝚂'].\nTo ignore the loading and just do whatever U want?")
        if(CFM == true) {
          document.getElementsByClassName("LoadingOverlayELEMENTS")[1].remove();
          document.getElementsByClassName("LoadingOverlayELEMENTS")[0].remove();
        }
      });
    }
		var THEMETIMERL = setInterval(Theme_BasedTime, 60 * 60000); // Change YouTube Website theme based on time (make it runs on time of interval)
		await Theme_BasedTime();
    await sleep(70);
    ToggleTHEMEBTN();
    await Startonlyonvideopage(); // START ONLY ON VIDEO PAGE
    /*if(window.location.href.match("https:\/\/www.youtube.com\/watch*")) {
      await sleep(180);
      BLOCKAUTOPLAY();
      // "true" to make it go to 0:00 Automatically
      // "[Insert any words to disable it(or just 'false')]" it's not gonna ask or automatically go to 0:00
      // "ask" It ask wether it wanna go to 0:00 or not
      let GOTOZERO = "false"; // ALL MUST LOWER CASE
      if(GOTOZERO == "ask") {
        let YESNO = confirm("Go to [0:00]? ")
        if(YESNO == true) {
          document.getElementById("movie_player").seekTo(0, true);
        }
      } else if(GOTOZERO == "true") {
        document.getElementById("movie_player").seekTo(0, true);
      }
    }*/
    await sleep(70);
    await waitFor(_ => document.visibilityState == 'visible' || document.webkitVisibilityState == "visible");
    await sleep(90);
    BLOCKAUTOPLAY();
    document.addEventListener('click', ClearYTSearchBox_Byfewact);
    while(ISE(".LoadingOverlayELEMENTS")) {
      ISE(".LoadingOverlayELEMENTS").remove();
    }
    while(document.getElementById("LutleLoadingSpinIcon")) {
      document.getElementById("LutleLoadingSpinIcon").remove();
    }
    /*
      let BlockVideo2Play_Modes = await GM.getValue("VideoBlockingModes", "Auto");
      if (BlockVideo2Play_Modes == "Auto" && BlockVideo2Play) {
        await clearInterval(BlockVideo2Play);
    		await sleep(500);
    		console.log("BlockVideo2Play Interval has been cleared.");
      } else if (BlockVideo2Play_Modes == "Manual" && BlockVideo2Play) {
        await waitFor(_ => document.getElementById("Optional-EventListener_CTXContainer"));
        let Create_BlockVideo2PlayPreventElem = document.createElement("div");
        Create_BlockVideo2PlayPreventElem.setAttribute("id", "BlockVideo2PlayButton");
        Create_BlockVideo2PlayPreventElem.innerHTML = "Clear BlockVideo2Play Interval";
        document.getElementById("Optional-EventListener_CTXContainer").appendChild(Create_BlockVideo2PlayPreventElem);
        Create_BlockVideo2PlayPreventElem.addEventListener("click", function(){clearInterval(BlockVideo2Play);Create_BlockVideo2PlayPreventElem.remove();console.log("BlockVideo2Play Interval is cleared.");}, {once: true});
      }*/
		if(window.location.href.match(/https\:\/\/www\.youtube\.com\/watch*/)) {
			clearInterval(BlockVideo2Play);
			ISE("ytd-app").focus();
		}
    console.log("YT Optional Function")
  } else {
    console.warn('BLOCKED TO LAUNCH MORE THAN ONCE.');
  }
}


// Start whenever page changed the URL
window.addEventListener('locationchange', async function() {
  if(!ISE('div#LutleLoadingSpinIcon')) {
    // Put your code here
		await waitFor(_ => document.visibilityState == 'visible' || document.webkitVisibilityState == "visible");
    await LittleLoadingIcon(); //<-- well..
		var BlockVideo2Play = setInterval(BLOCKAUTOPLAY, 100);
		console.log('Interval ID: '+BlockVideo2Play);
    await sleep(150);
    //await RestorePreferredOption_4YT("Rerun");
    if(window.location.href.match(/https\:\/\/www\.youtube\.com\/watch*/)) {
      let LoadingOverlayCSS = document.createElement("style")
      LoadingOverlayCSS.setAttribute("class", "LoadingOverlayELEMENTS")
      LoadingOverlayCSS.innerHTML = 'div[name="LoadingOverlay"] {\n' + ' background-color: black;\n' + ' top: 0px;\n' + ' left: 0px;\n' + ' width: 100vw;\n' + ' height: 100vh;\n' + ' z-index: 99999;\n' + ' opacity: 70%;\n' + ' position: fixed;\n' + ' cursor: url(https://i.ibb.co/qgPfw89/m5p-FZPd-RESIZED.png), auto;\n' + ' user-select: none;\n' + ' pointer-events: none;\n' + '}\n' + 'img[name="LoadingIcon"] {\n' + ' filter: invert(86%) sepia(1%) saturate(1660%) hue-rotate(115deg) brightness(107%) contrast(113%);\n' + ' height: auto;\n' + ' width: 10vw;\n' + ' position: absolute;\n' + ' top: 50vh;\n' + ' left: 50vw;\n' + ' transform: translate(-50%,-50%);\n' + ' pointer-events: auto;\n' + '}\n';
      await document.head.appendChild(LoadingOverlayCSS)
      let LoadingOverlayDIV = document.createElement("div")
      LoadingOverlayDIV.setAttribute("class", "LoadingOverlayELEMENTS")
      LoadingOverlayDIV.setAttribute("name", "LoadingOverlay")
      LoadingOverlayDIV.innerHTML = '<img name="LoadingIcon" title="Right click here to remove this overlay!" src="https://i0.wp.com/mdhsociety.com/wp-content/uploads/2017/11/throbber.gif">'
      await document.body.appendChild(LoadingOverlayDIV)
      await document.getElementsByName('LoadingIcon')[0].setAttribute('draggable', false);
      await document.getElementsByName('LoadingIcon')[0].addEventListener("contextmenu", (event) => {
        event.preventDefault();
        let CFM = confirm("Do you want to remove the ['𝘌𝘭𝘦𝘮𝘦𝘯𝘵.𝙻𝚘𝚊𝚍𝚒𝚗𝚐𝙾𝚟𝚎𝚛𝚕𝚊𝚢𝙴𝙻𝙴𝙼𝙴𝙽𝚃𝚂'].\nTo ignore the loading and just do whatever U want?")
        if(CFM == true) {
          document.getElementsByClassName("LoadingOverlayELEMENTS")[1].remove();
          document.getElementsByClassName("LoadingOverlayELEMENTS")[0].remove();
        }
      });
    }
    await Theme_BasedTime();
    await Startonlyonvideopage();
    /*if(window.location.href.match("https\:\/\/www\.youtube\.com\/watch*")) {
      // "true" to make it go to 0:00 Automatically
      // "[Insert any words to disable it(or just 'false')]" it's not gonna ask or automatically go to 0:00
      // "ask" It ask wether it wanna go to 0:00 or not
      let GOTOZERO = "false" // ALL MUST be LOWER CASE
      if(GOTOZERO == "ask") {
        let YESNO = confirm("Go to [0:00]? ")
        if(YESNO == true) {
          document.getElementById("movie_player").seekTo(0, true);
        }
      } else if(GOTOZERO == "true") {
        document.getElementById("movie_player").seekTo(0, true);
      }
    }*/
    await waitFor(_ => document.visibilityState == 'visible' || document.webkitVisibilityState == "visible");
    while(ISE(".LoadingOverlayELEMENTS")) {
      ISE(".LoadingOverlayELEMENTS").remove();
    }
    while(document.getElementById("LutleLoadingSpinIcon")) {
      document.getElementById("LutleLoadingSpinIcon").remove();
    }
    /*
      let BlockVideo2Play_Modes = await GM.getValue("VideoBlockingModes_onlocationchange", "Auto");
      if (BlockVideo2Play_Modes == "Auto" && BlockVideo2Play) {
        await clearInterval(BlockVideo2Play);
    		await sleep(500);
    		console.log("BlockVideo2Play Interval has been cleared.");
      } else if (BlockVideo2Play_Modes == "Manual" && BlockVideo2Play) {
    		await sleep(600);
        await waitFor(_ => document.getElementById("Optional-EventListener_CTXContainer"));
        var Create_BlockVideo2PlayPreventElem = document.createElement("div");
        Create_BlockVideo2PlayPreventElem.setAttribute("id", "BlockVideo2PlayButton");
        Create_BlockVideo2PlayPreventElem.innerHTML = "Clear BlockVideo2Play Interval";
        document.getElementById("Optional-EventListener_CTXContainer").appendChild(Create_BlockVideo2PlayPreventElem);
        Create_BlockVideo2PlayPreventElem.addEventListener("click", function(){clearInterval(BlockVideo2Play);Create_BlockVideo2PlayPreventElem.remove();console.log("BlockVideo2Play Interval is cleared.");}, {once: true});
      }*/
		if(window.location.href.match(/https\:\/\/www\.youtube\.com\/watch*/)) {
			clearInterval(BlockVideo2Play);
			ISE("ytd-app").focus();
		}
		console.log("YT Optional Function");
    return;
  } else {
    console.warn('BLOCKED TO LAUNCH MORE THAN ONCE.');
  }
});


// START ONLY ON VIDEO PAGE
async function Startonlyonvideopage() {
  //var UsedURL = new RegExp(/https\:\/\/www\.youtube\.com\/watch*/);
  var URLRequirements = window.location.href;
  
  if (sessionStorage.getItem("AlreadyRUN_YTOptionalFunction1") == "true") {
    document.removeEventListener('keyup', YTAds_Shortcut, false);
		await sleep(90);
    sessionStorage.setItem("AlreadyRUN_YTOptionalFunction1", false);
  }
  if (URLRequirements.match(/https\:\/\/www\.youtube\.com\/watch*/)) {
		await waitFor(_=> ISE('div#info-strings yt-formatted-string.ytd-video-primary-info-renderer'));
    await document.addEventListener('keyup', YTAds_Shortcut, false); // Skip Ads with shortcut (`/~)
    await document.addEventListener("keypress", EnterCommentKEYFunc); // Enter to submit comment
		ISE('.view-count.ytd-video-view-count-renderer').addEventListener('contextmenu', function(){
			ISE('.view-count.ytd-video-view-count-renderer').setAttribute('title', ISE('div#info-strings yt-formatted-string.ytd-video-primary-info-renderer').textContent);
		}, {once: true});
		ISE('.view-count.ytd-video-view-count-renderer').setAttribute('title', ISE('div#info-strings yt-formatted-string.ytd-video-primary-info-renderer').textContent);
		if (document.location.href.match(/&list=/)) {
			ISE('video').onplay = E => {
				var thiz = E.path[0];
				var getPrevTimestamp = thiz.duration - 0.15;
				if (thiz.currentTime >= getPrevTimestamp) {
					thiz.pause();
					thiz.currentTime = getPrevTimestamp;
					thiz.onplay = E1 => {
						if (thiz.currentTime >= getPrevTimestamp) {
							thiz.pause();
							thiz.currentTime = getPrevTimestamp;console.error(E.path[0].currentTime);
							console.warn('This video was about to end... Moreover, it seems that your video was shown in a playlist.\nSo... it\'s best to stop here to not proceed to the next video without your consent.');
						}
					}
				}
			}
		}
    sessionStorage.setItem("AlreadyRUN_YTOptionalFunction1", true);
		console.log("DONE! that\'s script that's only run in video page!");
  } else {
    console.log("This script is not working here =w=");
  }
	await sleep(50);
	return;
}
//~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ``  ~ ~ ~\\
//=================== Skip Ads with shortcut (`/~) ========================================
/**/
async function YTAds_Shortcut (Event) {
    
    //VARIABLES//
    var Skipads = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
    var HK1 = Event.which == 192; // <-- ` = 192
 // which == (unicodekey code) for not standalone hotkey
 // standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
 // unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
    
    
    if (HK1) {
      var ActiveElem = document.activeElement
      // Your commands after the shortcut here
      if (!(ActiveElem instanceof HTMLTextAreaElement || ActiveElem instanceof HTMLInputElement || ActiveElem.isContentEditable == true)) {
        //Just to make sure the button exist:P
        if (Skipads.length == 1) { // If the ads showed was a skippable ads
          Skipads[0].click();
          console.log("Skippable ads skipped.")
					await sleep(50);
					return;
        } else if (ISE(".ytp-ad-text.ytp-ad-preview-text")) { // If the ads showed doesn't allow to skip, instead you can only wait for few secs
          document.querySelector("video.video-stream").pause();
          await sleep(70);
          alert("It's not skippable:P");
          document.querySelector("video.video-stream").play();
          await sleep(50);
          return;
        } else if (ISE(".ytp-ad-text-overlay")) { // If the ads was just an overlay--Close with the shortcut instead of mouse!
          ISE(".ytp-ad-overlay-close-button").click();
          console.log("Overlay ads is closed.");
          await sleep(50);
          return;
        } else { // Else, there's no ads at all and you're just goofing around
          alert("THERE'S NO ADS HERE\nSO CAN YA JUST STOP");
					return;
        }
      }
    } else {
			return;
		}
}

///
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\

//=================== Change YouTube Website theme based on time ========================================
/**/

async function Theme_BasedTime() {
  
  // we need a function that makes hours and minutes a two digit number
 /* Object.prototype.HOURMINDGIT = function() {
    return ('0' + this).slice(-2);
  }*/
  var GetCurrentTIME = {
    'HOURS': function() {return ('0' + new Date().getHours()).slice(-2);},
    'MINUTES': function() {return ('0' + new Date().getMinutes()).slice(-2);}
  };
  
  // compile the current hour and minutes in the format HH:MM
  var timeOfDay = GetCurrentTIME.HOURS() + ':' + GetCurrentTIME.MINUTES();
  
// VARIABLES for the settings
  // --The times settings--
  var time_DAY1 = '08:00';
  var time_DAY2 = '16:59';
  var time_NIGHT1 = '17:00';
  var time_NIGHT2 = '07:59';
  // --The selected theme settings--
  /* "Dark" for dark theme and "Light" for light theme. Be careful on the capital! It's important. */
  //NEW NOTE! The capital or cases is not really that important to look at anymore!~
  var theme_SELECTIONONE = await GM.getValue("theme_SELECTION1", "Dark"); // NIGHT TIME
  var theme_SELECTIONTWO = await GM.getValue("theme_SELECTION2", "Light"); // DAY TIME
  
  // <-- Use "||" because it's more to "or" than "and" and also because it's PM to AM combined.. not AM to PM:P
  var CurrentTheme;
  if (timeOfDay >= time_NIGHT1 || timeOfDay <= time_NIGHT2) {  //<-- NIGHT TIME [Dark Theme]
    var CurrentTheme = theme_SELECTIONONE;
    console.log(theme_SELECTIONONE, "Theme");
  } else if (timeOfDay >= time_DAY1 && timeOfDay <= time_DAY2) {  //<-- DAY TIME [Light Theme]
    var CurrentTheme = theme_SELECTIONTWO;
    console.log(theme_SELECTIONTWO, "Theme");
  }
  
  
// Code to Change theme based on the "CurrentTheme_time" variable
  var CurrentTheme_time = CurrentTheme;
  var Element_HTML = document.getElementsByTagName("html")[0]; // <-- Get the HTML element.
  if (CurrentTheme_time.match(/Dark/i)) {
    Element_HTML.setAttribute("dark", "true"); // Add "dark" attributes to change it to Dark Theme
    console.log("Dark Theme applied."); // <-- Show sign of applied Theme on browser console
    if (SE(".ToggleTHEME_NJ1n9")) {
      await CheckEditToggleThemeBTN();
    }
  } else if (CurrentTheme_time.match(/Light/i)) {
    Element_HTML.removeAttribute("dark"); // Delete "dark" attributes to change it to Light Theme
    console.log("Light Theme applied."); // <-- Show sign of applied Theme on browser console
    if (SE(".ToggleTHEME_NJ1n9")) {
      await CheckEditToggleThemeBTN();
    }
  }
	console.log("Theme Switcher thingy is done!");
  return;
}

//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//=================== Restore Subtitle Settings ========================================
// Enable this, when you want to start saving your caption preferred setting.
// Because the setting that being set gonna be permanent, which mean next time you edit the settings
// The changes not gonna stay there.
// ~~~~~YouTube Caption~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// List of what it wanted to restore and not
/*
//What is restore: (You could pick btw)
// - windowOpacity
// My Value: 0
// - color (text color)
// My Value: "#0ff"
// - fontFamily
// My Value: 5
// - backgroundOpacity
// My Value: 0
// - windowColor
// My Value: "#080808"
// - charEdgeStyle
// My Value: 1
// - background
// My Value: "#fff"
//What is doesn't restore: (same with this)
// - textOpacity (default: 1)
// - fontSizeIncrement (default: -1)
*/
//-------------
//>Settings Option(Subtitle):
/*
	~HexCode for background, color, windowColor:
		`"#fff" (White)
		`"#ff0" (Yellow)
		`"#0f0" (Green)
		`"#0ff" (Cyan)
		`"#00f" (Blue)
		`"#f0f" (Magenta) <-- It was similar to pink btw
		`"#f00" (Red)
		`"#080808" (Black)
	~Opacity Option for backgroundOpacity, textOpacity, windowOpacity:
		` 0			(0%)
		`0.25 	(25%)
		`0.5		(50%)
		`0.75		(75%)
		` 1			(100%)
	~charEdgeStyle:
		`0			(None)
		`4			(Drop Shadow)
		`1			(Raised)
		`2			(Depressed)
		`3			(Outline)
	~fontFamily:
		`1			(Monospaced Serif)
		`2			(Proportional Serif)
		`3			(Monospaced Sans-Serif)
		`4			(Proportional Sans-Serif)
		`5			(Casual)
		`6			(Cursive)
		`7			(Small Capitals)
	~fontSizeIncrement:
		`-2			(50%)
		`-1			(75%)
		` 0			(100%)
		` 1			(150%)
		` 2			(200%)
		` 3			(300%)
		` 4			(400%)
------------		-----------		----------||
*/
// The structure example
/*
{
	"background": "#fff",
	"backgroundOpacity": 0,
	"charEdgeStyle": 1,
	"color": "#0ff",
	"fontFamily": 5,
	"fontSizeIncrement": -1,
	"textOpacity": 0.5,
	"windowColor": "#080808",
	"windowOpacity": 0
}
*/
// ~~~~~YouTube Player Settings~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//>Settings Option:
/*
 	~Quality Option:
		`{Auto} <-- dunno
		`144
		`240
		`360
		`480
		`720
		`1080
*/
// The structure example
/*
{
	previousQuality: 720
	quality: 480
}
*/
//-------------------------------------------------
/**/
async function RestorePreferredOption_4YT(CurrentStateScript) {
	// Edit your preferred settings here!
	let SubtitleSettings_ActiveState = false;
	var SubtitleSettings = {
		"background": "#fff",
		"backgroundOpacity": 0,
		"charEdgeStyle": 1,
		"color": "#0ff",
		"fontFamily": 5,
		"fontSizeIncrement": null,
		"textOpacity": null,
		"windowColor": "#080808",
		"windowOpacity": 0
	};
	let YTPlayer_vidQuality_ActiveState = true;
	var YTPlayer_vidQuality = {
		"quality": 720,
		"previousQuality": null
	}
	
	if (SubtitleSettings_ActiveState) {
		//Applying it.
    var YTCaptionSettings;
    var YTCaptionSettings_data;
    if (localStorage.getItem("yt-player-caption-display-settings")) {
      YTCaptionSettings = JSON.parse(localStorage.getItem("yt-player-caption-display-settings"));
      YTCaptionSettings_data = JSON.parse(YTCaptionSettings.data);
    } else {
      YTCaptionSettings = {};
      YTCaptionSettings_data = {};
    }
    if (SubtitleSettings.background) {
			let Set_SettingValue = SubtitleSettings.background;
			YTCaptionSettings_data.background = Set_SettingValue;
		}
		if (SubtitleSettings.backgroundOpacity || SubtitleSettings.backgroundOpacity == 0) {
			let Set_SettingValue = SubtitleSettings.backgroundOpacity;
			YTCaptionSettings_data.backgroundOpacity = Set_SettingValue;
		}
		if (SubtitleSettings.charEdgeStyle || SubtitleSettings.charEdgeStyle == 0) {
			let Set_SettingValue = SubtitleSettings.charEdgeStyle;
			YTCaptionSettings_data.charEdgeStyle = Set_SettingValue;
		}
		if (SubtitleSettings.color) {
			let Set_SettingValue = SubtitleSettings.color;
			YTCaptionSettings_data.color = Set_SettingValue;
		}
		if (SubtitleSettings.fontFamily || SubtitleSettings.fontFamily == 0) {
			let Set_SettingValue = SubtitleSettings.fontFamily;
			YTCaptionSettings_data.fontFamily = Set_SettingValue;
		}
		if (SubtitleSettings.fontSizeIncrement || SubtitleSettings.fontSizeIncrement == 0) {
			let Set_SettingValue = SubtitleSettings.fontSizeIncrement;
			YTCaptionSettings_data.fontSizeIncrement = Set_SettingValue;
		}
		if (SubtitleSettings.textOpacity || SubtitleSettings.textOpacity == 0) {
			let Set_SettingValue = SubtitleSettings.textOpacity;
			YTCaptionSettings_data.textOpacity = Set_SettingValue;
		}
		if (SubtitleSettings.windowColor) {
			let Set_SettingValue = SubtitleSettings.windowColor;
			YTCaptionSettings_data.windowColor = Set_SettingValue;
		}
		if (SubtitleSettings.windowOpacity || SubtitleSettings.windowOpacity == 0) {
			let Set_SettingValue = SubtitleSettings.windowOpacity;
			YTCaptionSettings_data.windowOpacity = Set_SettingValue;
		}
		YTCaptionSettings.data = JSON.stringify(YTCaptionSettings_data);
		await sleep(70);
		console.log("Setting that supposed to be set to the caption/subtitle settings");
		console.log(YTCaptionSettings);
		if (CurrentStateScript == "Rerun") {
			if (JSON.stringify(YTCaptionSettings) != localStorage.getItem("yt-player-caption-display-settings")) {
				let CONFIRMATIONState = "ask"; //Option: "ask"(will confirm to refresh or not), true(Will immediately refresh to complete the process), false/null(don't do both. Ignore it)
				if (CONFIRMATIONState == "ask") {
					let CONFIRMATION_POP = confirm("Need to refresh to apply the restored settings, Want to do it now?\n *You can do it later tho");
					if (CONFIRMATION_POP) {
						localStorage.setItem("yt-player-caption-display-settings", JSON.stringify(YTCaptionSettings));
						await sleep(100);
						window.location.reload();
					} else {
						localStorage.setItem("yt-player-caption-display-settings", JSON.stringify(YTCaptionSettings));
						await sleep(100);
						alert("DONT FORGET IT OKAY??")
					}
				} else if (CONFIRMATIONState == true) {
					localStorage.setItem("yt-player-caption-display-settings", JSON.stringify(YTCaptionSettings));
					await sleep(200);
					window.location.reload();
				}
			}
		} else if (CurrentStateScript == "First-Run") {
		localStorage.setItem("yt-player-caption-display-settings", JSON.stringify(YTCaptionSettings));
		await sleep(100);
		alert("Caption/Subtitle Setting of preferred option has been set.")
	} else {
		alert("Caption/Subtitle preferred setting cannot been set due to unvalid string\nPlease check the console for more information of this unexpected behaviour.");
		console.error("CurrentStateScript is undefined or not been set, or maybe the string is not correct");
	}
		return;
	}
	if (YTPlayer_vidQuality_ActiveState) {
    var YTPlayer;
    var YTPlayer_data;
    if (localStorage.getItem("yt-player-quality")) {
      YTPlayer = JSON.parse(localStorage.getItem("yt-player-quality"));
      YTPlayer_data = JSON.parse(YTPlayer.data);
    } else {
      YTPlayer = {};
      YTPlayer_data = {};
    }
		if (YTPlayer_vidQuality.quality) {
			let Set_Settings = YTPlayer_vidQuality.quality;
			YTPlayer_data.quality = Set_Settings;
		}
		if (YTPlayer_vidQuality.previousQuality) {
			let Set_Settings = YTPlayer_vidQuality.previousQuality;
			YTPlayer_data.previousQuality = Set_Settings;
		}
		YTPlayer.data = JSON.stringify(YTPlayer_data);
		if (JSON.stringify(YTPlayer) != localStorage.getItem("yt-player-quality")) {
			localStorage.setItem("yt-player-quality", JSON.stringify(YTPlayer));
		}
	}
	await sleep(130);
	return;
}
//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//=================== Toggle Theme Button ========================================
/**/
//ToggleTHEMEBTN();
async function ToggleTHEMEBTN() {
  await sleep(70);
  //await waitFor(_ => document.getElementById("start"));
	var createThisDIV = document.createElement("div")
	createThisDIV.setAttribute("class", "ToggleTHEME_NJ1n9 fas")
	document.getElementById("start").appendChild(createThisDIV)
	// fontawesome5 script will be added by another userscript.
	await waitFor(_ => document.getElementById("FontAwesome5script")); // <-- AND WAIT!
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
	createThisDIVCSS.innerHTML = ValueThisDIVCSS;
	await document.head.appendChild(createThisDIVCSS);
	
	await sleep(50);
	CheckEditToggleThemeBTN();
	await sleep(50);
	return;
}
async function CheckEditToggleThemeBTN() {
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
	
	var Element_HTML = document.getElementsByTagName("html")[0];
	if (Element_HTML.getAttribute("dark") == "true") { // When Current theme is Dark and Action is set to switch to light theme
		var USEELEMNT = document.getElementsByClassName("ToggleTHEME_NJ1n9")[1];
		if (USEELEMNT.classList.contains("fa-sun")) {
			USEELEMNT.classList.replace("fa-sun", "fa-moon");
		} else {
			USEELEMNT.classList.add("fa-moon");
		}
		USEELEMNT.setAttribute("THEME", "dark");
		USEELEMNT.title = "Current Theme is Dark.\nClick to switch to Light Theme";
		USEELEMNT.addEventListener("click", TOLight);
	} else if (!(Element_HTML.getAttribute("dark") == "true")) { // When Current theme is Light and Action is set to switch to dark theme
		var USEELEMNT = document.getElementsByClassName("ToggleTHEME_NJ1n9")[1];
		if (USEELEMNT.classList.contains("fa-moon")) {
			USEELEMNT.classList.replace("fa-moon", "fa-sun");
		} else {
			USEELEMNT.classList.add("fa-sun");
		}
		USEELEMNT.setAttribute("THEME", "light");
		USEELEMNT.title = "Current Theme is Light.\nClick to switch to Dark Theme";
		USEELEMNT.addEventListener("click", TOdark);
	}
	
	console.log("Toggle Theme Button has been added.");
	await sleep(50);
	return;
}
//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//=================== Block Video Play on Loading ========================================
/**/
//let CRT_menuelem = document.createElement("div");
//CRT_menuelem.setAttribute("id", "PlayPause_controlmenu");
//document.body.appendChild(CRT_menuelem);
//let 2Pmenuelem = document.getElementsByClassName("ytp-play-button")[0];
//2Pmenuelem.addEventListener("contextmenu", (evt) => {evt.preventDefault();//Togglething})
async function BLOCKAUTOPLAY() {
  let vids = document.getElementsByClassName("video-stream");
  if (vids.length) { // this is basically to make sure there are videos on the page, but it is probably unnecessary
    document.querySelector("video.video-stream").pause(); // pause the vid. JUST THAT!
  }
	await sleep(30);
  return;
}
//*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//=================== Press enter to Comment Instead of clicking + Shortcut to comment ========================================
// unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
async function EnterCommentKEYFunc(E) {
	var ConsoleERROR = "font-weight: bold;color: #b90000;";
  let ECKEYHk1 = E.which == 13; // <-- EnterKey
  let ECKEYHk2 = E.shiftKey;
  if (!ECKEYHk2 && ECKEYHk1) {
		let TheCONTSParentsElement_SpecifiedElement = document.activeElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		let GET_SpecifiedElementID = TheCONTSParentsElement_SpecifiedElement.id.toUpperCase();
		let GET_SpecifiedElementTagName = TheCONTSParentsElement_SpecifiedElement.tagName.toUpperCase();
		let SpecifiedID = "commentbox".toUpperCase();
		let SpecifiedTagName = "ytd-commentbox".toUpperCase();
		if (GET_SpecifiedElementTagName == SpecifiedTagName && GET_SpecifiedElementID == SpecifiedID) {
			E.preventDefault();
			var ActiveCommentBoxCOUNT = 0;
			while (!SE("ytd-commentbox#commentbox")[ActiveCommentBoxCOUNT].contains(document.activeElement)) {
				ActiveCommentBoxCOUNT++;
			}
			await sleep(80);
			var CommentBoxContainer = SE("ytd-commentbox#commentbox")[ActiveCommentBoxCOUNT];
			CommentBoxContainer.querySelector("#submit-button");
			if (!CommentBoxContainer.querySelector("#submit-button").hasAttribute("disabled")) {
				CommentBoxContainer.querySelector("#submit-button").click();
				await sleep(100);
				return;
			} else {
				var EventErrorCOUNT = await GM.getValue("SubmitCommentEvent_ErrorCounter");
				if (Number.isInteger(EventErrorCOUNT/7)) {
					EventErrorCOUNT++;
					GM.setValue("SubmitCommentEvent_ErrorCounter", EventErrorCOUNT);
					let NameList = ["YouTube Userscript", "Steve", "ME", "You", "YT Optional Function's script", "from a YT userscript", "NJ1n9 the great creator"];
					let GetRandom_NameList = NameList[Math.floor(Math.random() * NameList.length)];
					let ErrorMessage_alert = "Just wanted to let y'know,\nYou cannot submit it without any text or without any changes in it.\n\n-Love, " + GetRandom_NameList + ".";
					alert(ErrorMessage_alert);
					return;
				} else {
					console.error("%cCannot comment/reply nothing, make sure there's a text there. PLEASE\nAlso if you're editing a comment, you cannot save edited comment that doesn\'t have changes too\n\nTY. -Love, some random YT Users", ConsoleERROR);
					EventErrorCOUNT++;
					GM.setValue("SubmitCommentEvent_ErrorCounter", EventErrorCOUNT);
					await sleep(50);
					return;
				}
			}
		}
  } else {
		await sleep(50);
		return;
	}
}

async function gotoCommentIT(E) {
  await sleep(300);
  let gtCommentHk1 = E.which == 67 // <-- C
  let gtCommentHk2 = E.altKey
  if (gtCommentHk2 && gtCommentHk1) {
      if ((document.getElementsByClassName("style-scope ytd-comment-simplebox-renderer").length == 7) && (document.activeElement !== document.getElementsByClassName("yt-formatted-string")[9])) {
        document.getElementsByClassName("style-scope ytd-comment-simplebox-renderer")[1].click();
      } else if (document.activeElement == document.getElementsByClassName("yt-formatted-string")[9]) {
        document.activeElement.blur()
        window.scrollTo(0,0);
      }
  }
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
/*document.querySelector("video").addEventListener("timeupdate", function() {
    var VideoLength = Number(document.querySelector("video").duration.toFixed()) - 1;
    if (Number(document.querySelector("video").currentTime.toFixed()) == VideoLength) {
        //let VideoA = document.querySelector("video").duration - 1;
        //document.querySelector("#movie_player").seekTo(VideoA);
        document.querySelector("video.video-stream").pause();
    }
});*/
//=================== Loading Icon on the header ========================================
async function LittleLoadingIcon() {
  await sleep(70);
  await waitFor(_ => document.querySelector("#masthead #container #end"));
	let LoadingIconSpinning = document.createElement("div");
	LoadingIconSpinning.setAttribute("style", "position: relative;");
	LoadingIconSpinning.setAttribute("id", "LutleLoadingSpinIcon")
	LoadingIconSpinning.innerHTML = "\n"
		+ '<div style="transform: scale(0.7);position: absolute;top: -17px;left: -57px;">\n'
		+ '<div class="loadingio-spinner-eclipse-vt0i90fkm1a">\n'
		+ '	<div class="ldio-38lnbzayuu6">\n'
		+ '		<div></div>\n'
		+ '</div></div>\n'
		+ '	<style type="text/css">\n'
		+	'  @keyframes ldio-38lnbzayuu6 {\n'
		+	'   	0% { transform: rotate(0deg) }\n'
		+	'     50% { transform: rotate(180deg) }\n'
		+	'   	100% { transform: rotate(360deg) }\n'
		+	'  }\n'
		+ '  .ldio-38lnbzayuu6 div {\n'
		+ '     position: absolute;\n'
		+ '     animation: ldio-38lnbzayuu6 2.4499999999999997s linear infinite;\n'
		+ '     width: 50px;\n'
		+ '     height: 50px;\n'
		+ '     top: 25px;\n'
		+ '     left: 25px;\n'
		+ '     border-radius: 50%;\n'
		+ '     box-shadow: 0 3.8000000000000003px 0 0 #ff3333;\n'
		+ '     transform-origin: 25px 26.9px;\n'
		+ '  }\n'
		+ '  .loadingio-spinner-eclipse-vt0i90fkm1a {\n'
		+ '     width: 71px;\n'
		+ '     height: 71px;\n'
		+ '     display: inline-block;\n'
		+ '     overflow: hidden;\n'
		+ '     background: none;\n'
		+ '  }\n'
		+ '  .ldio-38lnbzayuu6 {\n'
		+ '     width: 100%;\n'
		+ '     height: 100%;\n'
		+ '     position: relative;\n'
		+ '     transform: translateZ(0) scale(0.71);\n'
		+ '     backface-visibility: hidden;\n'
		+ '     transform-origin: 0 0; /* see note above */\n'
		+ '  }\n'
		+ '  .ldio-38lnbzayuu6 div {\n'
		+ '     box-sizing: content-box;\n'
		+ '  }\n'
		+ '/* generated by https://loading.io/ */\n'
		+ '</style></div>\n'
	;
	await document.querySelector("#masthead #container #end").children[1].insertBefore(LoadingIconSpinning, document.querySelector("#masthead #container #end").children[1].childNodes[0]);
	await sleep(50);
  return;
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//=================== Disable Auto-NextVid in playlist ========================================
/*
if (SE("#playlist.ytd-watch-flexy")) {
  document.querySelector("video").addEventListener("timeupdate", function() {
    var VideoLength = Number(document.querySelector("video").duration.toFixed()) - 1;
    if (Number(document.querySelector("video").currentTime.toFixed()) == VideoLength) {
        //let VideoA = document.querySelector("video").duration - 1;
        //document.querySelector("#movie_player").seekTo(VideoA);
        document.querySelector("video.video-stream").pause();
    }
    console.log("HMM");
  });
}
*/
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
////=================== Sidebar state opened/closed ========================================
function SidebarPARENT() {
  window.addEventListener("locationchange", Sidebar_StoreSTATE);
  window.addEventListener("resize", Sidebar_StoreSTATE);
  ISE("yt-icon-button#guide-button.style-scope.ytd-masthead").addEventListener("click", OpenCloseSTATE_Sidebar);
  return;
}
async function OpenCloseSTATE_Sidebar() {
  await sleep(100);
  if (ISE("tp-yt-app-drawer#guide[role='navigation'][persistent].style-scope.ytd-app[opened]") && ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation'][guide-persistent-and-visible][hidden][disable-upgrade]:not(mini-guide-visible)")) {
    sessionStorage.setItem("YTSidebarSTATE", "Opened");
  } else if (ISE("tp-yt-app-drawer#guide[role='navigation'][persistent].style-scope.ytd-app:not([opened])") && ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation'][mini-guide-visible]:not([disable-upgrade], [hidden], [guide-persistent-and-visible])")) {
    sessionStorage.setItem("YTSidebarSTATE", "Closed");
  }
  return;
}
function Sidebar_StoreSTATE() {
  if (sessionStorage.getItem("YTSidebarSTATE") == null) {
    return;
  } else if (sessionStorage.getItem("YTSidebarSTATE").match(/Closed/i)) {
    if (ISE("tp-yt-app-drawer#guide[role='navigation'][persistent].style-scope.ytd-app[opened]")) {
      ISE("tp-yt-app-drawer#guide[role='navigation'][persistent].style-scope.ytd-app").removeAttribute("opened");
    }
    if (ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation'][guide-persistent-and-visible][hidden][disable-upgrade]:not(mini-guide-visible)")) {
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").setAttribute("mini-guide-visible", "");
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").removeAttribute("guide-persistent-and-visible");
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").removeAttribute("hidden");
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").removeAttribute("disable-upgrade");
    }
  } else if (sessionStorage.getItem("YTSidebarSTATE").match(/Opened/i)) {
    if (ISE("tp-yt-app-drawer#guide[role='navigation'][persistent].style-scope.ytd-app:not([opened])")) {
      ISE("tp-yt-app-drawer#guide[role='navigation'][persistent].style-scope.ytd-app:not([opened])").setAttribute("opened", "");
    }
    if (ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation'][mini-guide-visible]:not([disable-upgrade], [hidden], [guide-persistent-and-visible])")) {
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").setAttribute("guide-persistent-and-visible", "");
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").setAttribute("hidden", "");
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").setAttribute("disable-upgrade", "");
      ISE("ytd-mini-guide-renderer.style-scope.ytd-app[role='navigation']").removeAttribute("mini-guide-visible");
    }
  }
  return;
}

//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//////=================== Clear SearchBox by few act ================================================
function MatchObjectKeyValue_inArray(getArray, KeyNames, getMatch) {
    var Matchreg = new RegExp(getMatch , "i");
    var ab = null;
    for (var i = 0; i < getArray.length; i++) {
        if (getArray[i][KeyNames] && getArray[i][KeyNames].match(Matchreg)) {
            ab = getArray[i][KeyNames].match(Matchreg);
            break;
        }
    }
    if (ab) {
        return true;
    } else {
        return false;
    }
    //console.log(getKeyValue);
    //console.log(getKeyValue.match(Matchreg))
}
async function ClearYTSearchBox_Byfewact(evy) {
  if (ISE("#search-input.ytd-searchbox-spt input").value.length != 0) {
    var get_targetElemTAG = evy.path;
    //document.activeElement.tagName.toLocaleUpperCase();
    let MatchTAG0 = 'YTD-VIDEO-RENDERER';
    let MatchTAG1 = 'YTD-CHANNEL-RENDERER';
    
    let CheckTAG0 = await MatchObjectKeyValue_inArray(get_targetElemTAG, 'tagName', MatchTAG0);
    let CheckTAG1 = await MatchObjectKeyValue_inArray(get_targetElemTAG, 'tagName', MatchTAG1);
    let CheckTAG2 = await MatchObjectKeyValue_inArray(get_targetElemTAG, 'tagName', 'input');
    
    if (CheckTAG0) {
      ISE("#search-input.ytd-searchbox-spt input").value = "";
    } else if (CheckTAG1) {
      ISE("#search-input.ytd-searchbox-spt input").value = "";
    } else if (CheckTAG2) {
      ISE("#search-input.ytd-searchbox-spt input").focus();
      ISE("#search-input.ytd-searchbox-spt input").select();
    }/* else {
      console.error("NOPE.");
    }*/
  }
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````\\
