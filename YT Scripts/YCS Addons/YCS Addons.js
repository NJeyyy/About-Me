// ==UserScript==
// @name             YCS optional function
// @namespace        YCS_Addons
// @homepageURL      https://github.com/NJeyyy/About-Me/tree/Userscripts/YT%20Scripts/YCS%20Addons
// @supportURL       https://github.com/NJeyyy/About-Me/blob/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
// @version          5.6.2.1531_11032022
// @description      Various optional function for the YCS Extension!
// @author           NJ1n9
// @match            https://www.youtube.com/*
// @icon             https://cdn-icons-png.flaticon.com/128/1383/1383327.png
// @require          https://github.com/NJeyyy/About-Me/raw/dd58f08d979f095a98dfa464d8b0896cbb2528d6/Global%20Tool%20Script/Custom%20Addition%20ToolScript%5BOnly%20the%20script%20list%5D.js
// @grant            GM.setValue
// @grant            GM.getValue
// @noframes
// ==/UserScript==
//Note> I know you may be confuse.. the "SupportURL" literally brought you to change log pageXD not support page, but don't worry there are also some help there (probably)

/** List of function included here and the quick description**
 * description(focused Shortcut)   Since the developer (of YCS Extension) SUCKS, and didn't want to add this "SIMPLE" feature.. I will just add it myself😎
 * description(Add clear button)   I am to lazy pressing Ctrl + A always! or just use the clear button sometimes🙄 so why not🤓
 */

// since I cannot add multiple link:\
//I will put credits here😎😛
//Focus script action         : "https://github.com/jabbalaci/AutoFocus/blob/master/auto_focus.user.js"
//Hotkey script action        : "http://www.w3schools.com/jsref/event_key_keycode.asp"
//"Select all Text" Command   : "https://gist.github.com/gibson042/c9b3406bc54f55726ec4#file-focus_search-user-js"



//||~~~~~~~~~~~~USERSCRIPT REQUIREMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
/*
// >Custom Addition ToolScript
// >FontIcon Script
// >Optional EventListener
//[NOTE!! You can insert the code below here too since this is from "Custom Addition ToolScript"]
// Above this line (Or just.. use @require)
//=================================================================================================================*/
//STARTER
//sessionStorage.setItem("AlreadyRUN_YCSoptionalfunction", "false");

YCSSTARTER();
async function YCSSTARTER() {
  await sleep(150);
  await waitFor(_ => document.visibilityState == 'visible');
  await waitFor(_=> ISE(".ycs-app"));
  await waitFor(_=> document.getElementById('ycs-input-search'));
  let YIS = document.getElementById('ycs-input-search');
  YIS.setAttribute("type", "search");
  /*
  var Shortcut_FocusSearch;
  for (let i = 0; i < document.getEventListeners().keyup.length; i++) {
    if (document.getEventListeners().keyup[i].listener.name == "doc_keyUp") {
      Shortcut_FocusSearch = true; 
      break;
    } else {
      Shortcut_FocusSearch = false;
    }
  }
  if (Shortcut_FocusSearch) {
    document.removeEventListener('keyup', doc_keyUp, false);
  }
  if (document.getElementById("ycs-input-search")) {
    var SearchEmptyClear;
    for (let i = 0; i < document.getEventListeners().search.length; i++) {
      if (document.getEventListeners().keyup[i].listener.name == "SearchValueCLEAR") {
        SearchEmptyClear = true; 
        break;
      } else {
        SearchEmptyClear = false;
      }
    }
  }
  if (SearchEmptyClear) {
    document.getElementById("ycs-input-search").removeEventListener('search', SearchValueCLEAR);
  }
  */
  if (document.querySelector("div.YCS-optional-function-CONTAINER") || document.querySelector("style.YCS-optional-function-CONTAINER")) {
    if (document.querySelector("div.YCS-optional-function-CONTAINER")) {
      while (document.querySelector("div.YCS-optional-function-CONTAINER")) {
        document.querySelector("div.YCS-optional-function-CONTAINER").remove();
      }
    }
    if (document.querySelector("style.YCS-optional-function-CONTAINER")) {
      while (document.querySelector("style.YCS-optional-function-CONTAINER")) {
        document.querySelector("style.YCS-optional-function-CONTAINER").remove();
      }
    }
  }
  if (ISE("#YCS_SearchTextPreview")) {
    while (ISE("#YCS_SearchTextPreview")) {
      ISE("#YCS_SearchTextPreview").remove();
    }
  }
  
  await sleep(90);
  if (window.location.href.match("www.youtube.com\/watch*")) {
    document.addEventListener('keyup', doc_keyUp, false);
    document.getElementById("ycs-input-search").addEventListener('search', SearchValueCLEAR);
    await sleep(70);
    if (!ISE("#YCS_SearchTextPreview")) {
      await waitFor(_ => document.visibilityState == 'visible');
      await sleep(50);
      WhatTextIsSearchedin_YCS();
    }
    if (!(document.querySelector("div.YCS-optional-function-CONTAINER"))) {
      await waitFor(_ => document.visibilityState == 'visible');
      await sleep(50);
      await AddmoreButtonFunctionality();
    }
    await waitFor(_=> document.getElementById("ycs-input-search"));
    if (document.getElementById('ycs-input-search').getAttribute("type") != "search") {
      document.getElementById('ycs-input-search').setAttribute("type", "search");
    }
    document.getElementById("ycs-input-search").addEventListener("blur", function() {
      //await sleep(300);
      document.getSelection().removeAllRanges();
    });
    ISE("ytd-app").focus();
    console.log("The Script is running.");
  } else {
    console.log("It's not on video page and the extension can't run here so it's not running:<")
  }
}
function YCS_visibilityDS() {
  if (document.activeElement === ISE('#ycs-input-search')) {
    document.getElementById("ycs-input-search").blur();
  }
}

// Start whenever page changed the URL
window.addEventListener('locationchange', YCSSTARTER);
// Do something when visibility changed
document.addEventListener('visibilitychange', YCS_visibilityDS);

//+=-==-=-===-==-=-=-==-=-=-==-=-=-=-=-==--=--==-=-=-=-=-=-=-==-=-=-=-=--=-===-=-==--==-=-=-==-=-=-=--=-=-==-=-=-
// To clear comments when input field is empty
async function SearchValueCLEAR(e) {
  if (document.getElementById('ycs-input-search').value.length == "0") {
    document.getElementById("ycs_btn_clear").click();
    document.getElementById('ycs-input-search').blur();
  }
}
//==============================================================================
// Shortcut for YCS Extension
function doc_keyUp(event) { //The hotkey/function is somekind of.. toggle🙃:P
  let Hotkey1 = event.which == 83;
  let Hotkey2 = event.altKey;
    // which == (unicodekey code) for not standalone hotkey
    // standalone hotkey list: "altKey", "MetaKey(winkey)", "CtrlKey", "shiftKey"
    // unicodekey code of hotkey can be found here -> https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
    // Add another HotkeyN for more collumn
    // Add more hotkey function by adding "&&" and event.(varname)😊
  if (Hotkey2 && Hotkey1 && !(event.MetaKey && event.CtrlKey && event.shiftKey)) { //<-- "83" is S(capital, because of keyboard layout)
    // call your function to do the thing
		if (ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay") || ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
			if (document.activeElement.id == "ycs-input-search") {
				document.getElementById("ycs-input-search").blur(); //<-- Unfocus YCS search field if focused and if shortcut pressed
				ISE("#CollapseButton").click();
        let docPositionX = window.scrollX;
        let docPositionY = window.scrollY;
        ISE(".html5-video-player.ytp-transparent.ytp-exp-bottom-control-flexbox.ytp-larger-tap-buttons.ytp-exp-ppp-update").focus();
        window.scrollTo(docPositionX, docPositionY);
      } else {
				if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
					ISE("#CollapseButton").click();
				}
				document.getElementById("ycs-input-search").focus(); //<-- Set focus to YCS search field if not focused with the same shortcut
			}
		} else {
			if (document.activeElement.id == "ycs-input-search") {
				document.getElementById("ycs-input-search").blur(); //<-- Unfocus YCS search field if focused and if shortcut pressed
				window.scrollTo(0,0);
			} else {
				document.getElementById("ycs-input-search").focus(); //<-- Set focus to YCS search field if not focused with the same shortcut
/*      document.getElementById("ycs-input-search").select(); //<-- "Select all" text in the field if 'available'😄, add "//" before the command to disable it!*/
      	//^^ Is not needed anymore. But.. Just wanted to kept it:P
    	}
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
  await waitFor(_ => document.querySelector(".ycs-app-main")); //<-- Just waiting~
  // The container for some optional physical Function
  if (!document.querySelector("div.YCS-optional-function-CONTAINER")) {
    let Create_Optionalmorephysicalfunction = document.createElement("div");
    Create_Optionalmorephysicalfunction.setAttribute("class", "YCS-optional-function-CONTAINER");
    Create_Optionalmorephysicalfunction.setAttribute("style", "position: relative;font-size: 20px;float: left;margin-top: 5px;margin-bottom: 5px;clear: both;");
    await document.getElementsByClassName("ycs-app-main")[0].insertBefore(Create_Optionalmorephysicalfunction, document.getElementsByClassName("ycs-app-main")[0].children[2]);
  }
	// And the CSSContainer for those element.
  if (!document.querySelector("style.YCS-optional-function-CONTAINER")) {
    let CreateCSS_Optionalmorephysicalfunction = document.createElement("style");
    CreateCSS_Optionalmorephysicalfunction.setAttribute("class", "YCS-optional-function-CONTAINER");
    CreateCSS_Optionalmorephysicalfunction.innerHTML = "\n"
      + "@import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap');\n"
      + "\n"
      + 'div.YCS-optional-function-CONTAINER *:hover:not(#SearchAddons, #SearchAddons *) {\n'
      + '	filter: brightness(90%);\n'
      + '}\n'
      + 'div.YCS-optional-function-CONTAINER *:active {\n'
      + '	filter: brightness(80%);\n'
      + '}\n'
      + 'div.YCS-optional-function-CONTAINER *:not(:first-child) {\n'
      + ' margin-left: 5px;'
      + ' position: relative;'
      + ' bottom: 5px;'
      + '}\n'
      + 'div.YCS-optional-function-CONTAINER * {\n'
      + ' display: inline-block;\n'
      + '}\n'
    ;
    await document.head.appendChild(CreateCSS_Optionalmorephysicalfunction);
  }
  
  //Take Container Element
	var ElementContainer = document.querySelector("div.YCS-optional-function-CONTAINER");
  var CSSContainer = document.querySelector("style.YCS-optional-function-CONTAINER");
  var LocationElem_Searchfield = document.getElementById("ycs-input-search");
	
  
  let SearchAddons = true; // Just option to pick wanted this to be enabled or not
  
  if (SearchAddons) {
    let ElmCONT = document.createElement("div");
    ElmCONT.setAttribute("id", "SearchAddons");
    await ElementContainer.prepend(ElmCONT);
    var SearchAddons_Container = ISE("#SearchAddons");
    CSSContainer.innerHTML += "\n\n\n\n\n/*====SearchAddons=====*/"
    + "div.YCS-optional-function-CONTAINER #SearchAddons {\n"
    + "  transform: scale(80%);\n"
    + "  position: relative;\n"
    + "  top: -10px;\n"
    + "  left: -10px;\n"
    + "  display: block;\n"
    + "  background: #dfdfdf;\n"
    + '  border-radius: 4px;\n'
    + '  box-shadow: inset 0 0 7px 0 #00000024;\n'
    + "  color: black;\n"
    + "}\n"
    ;
    
    //Option thing, false to disable a tool button(i.e make it not added/created.) true is the opposite.
    let timestampMATCH = true;
    
    
    if (timestampMATCH) {
      let timestampMATCH_compiledData = {
        "style": "\n\n\n/*--timestampMATCH---*/"
        + '.Checkbox_SearchAddons span#text {\n'
        + '  position: relative;\n'
        + '  left: 4px;\n'
        + '}\n'
        + '/* Customize the label (the container) */\n'
        + '.Checkbox_SearchAddons {\n'
        + '  display: inline-block;\n'
        + '  position: relative;\n'
        + '  padding-left: 27px;\n'
        + '  margin: 12px;\n'
        + '  cursor: pointer;\n'
        + '  font-family: calibri;\n'
        + '  font-size: 15px;\n'
        + '  user-select: none;\n'
        + '}\n'
        + '\n'
        + '/* Hide the browser\'s default checkbox */\n'
        + '.Checkbox_SearchAddons input[type="checkbox"] {\n'
        + '  position: absolute;\n'
        + '  opacity: 0;\n'
        + '  cursor: pointer;\n'
        + '  height: 0;\n'
        + '  width: 0;\n'
        + '}\n'
        + '\n'
        + '/* Create a custom checkbox */\n'
        + '.Checkbox_SearchAddons span#Custom-Checkbox {\n'
        + '  position: absolute;\n'
        + '  top: 0;\n'
        + '  left: 0;\n'
        + '  height: 20px;\n'
        + '  width: 20px;\n'
        + '  background-color: #eee;\n'
        + '  border-radius: 50%;\n'
        + '}\n'
        + '\n'
        + '/* On mouse-over, add a grey background color */\n'
        + '.Checkbox_SearchAddons:hover input[type="checkbox"] ~ span#Custom-Checkbox {\n'
        + '  filter: brightness(80%);\n'
        + '}\n'
        + '\n'
        + '/* When the checkbox is checked, add a blue background */\n'
        + '.Checkbox_SearchAddons input[type=\'checkbox\']:checked ~ span#Custom-Checkbox {\n'
        + '  background-color: #67b971;\n'
        + '}\n'
        + '\n'
        + '/* Create the checkmark/indicator (hidden when not checked) */\n'
        + '.Checkbox_SearchAddons span#Custom-Checkbox:after {\n'
        + '  content: "";\n'
        + '  position: absolute;\n'
        + '  display: none;\n'
        + '}\n'
        + '\n'
        + '/* Show the checkmark when checked */\n'
        + '.Checkbox_SearchAddons input[type=\'checkbox\']:checked ~ span#Custom-Checkbox:after {\n'
        + '  display: block;\n'
        + '}\n'
        + '\n'
        + '/* Style the checkmark/indicator */\n'
        + '.Checkbox_SearchAddons span#Custom-Checkbox:after {\n'
        + '  left: 7px;\n'
        + '  top: 4px;\n'
        + '  width: 6px;\n'
        + '  height: 9px;\n'
        + '  border: solid white;\n'
        + '  border-width: 0 2px 2px 0;\n'
        + '  -webkit-transform: rotate(45deg);\n'
        + '  -ms-transform: rotate(45deg);\n'
        + '  transform: rotate(45deg);\n'
        + '}\n',
        "YTMarkerStyle": "/*YTTimestampMarker*/"
        + "\n.Absolutematch_yttimestamp {\n"
        + "  background: #0cbcc92b;\n"
        + "  padding: 10px;\n"
        + "  border-radius: 5px;\n"
        + "}\n"
        + ".Textmatch_yttimestampEXP {\n"
        + "  background: #EEE8A92b;\n"
        + "  padding: 10px;\n"
        + "  border-radius: 5px;\n"
        + "}\n"
      };
      CSSContainer.innerHTML += timestampMATCH_compiledData.style;
      let a = document.createElement('label');
      a.setAttribute("class", "Checkbox_SearchAddons");
      a.setAttribute("id", "FindMatchedTimeStamps");
      await SearchAddons_Container.appendChild(a);
      let aa = document.createElement('span');
      aa.setAttribute("id", "text");
      aa.innerHTML = "find timestamp";
      a.appendChild(aa);
      let ab = document.createElement('input');
      ab.setAttribute("type", "checkbox");
      a.appendChild(ab);
      let ac = document.createElement('span');
      ac.setAttribute("id", "Custom-Checkbox");
      a.appendChild(ac);
      ISE('.Checkbox_SearchAddons#FindMatchedTimeStamps input[type="checkbox"]').checked = false;
      let ytMARKERCSS = document.createElement("style");
      ytMARKERCSS.setAttribute("class", "YTTimestamp_match");
      ytMARKERCSS.innerHTML = timestampMATCH_compiledData.YTMarkerStyle;
      await document.head.appendChild(ytMARKERCSS);
      let YTFindMatchedResult = document.createElement("label");
      YTFindMatchedResult.setAttribute("id", "YCS_TimestampMatchResult");
      await document.getElementById("ycs-search").children[0].appendChild(YTFindMatchedResult);
      ISE("label#YCS_TimestampMatchResult").style.float = "right";
      
      
      ISE("#ycs_btn_timestamps").addEventListener("click", ClearResult);
      ISE("#ycs_btn_author").addEventListener("click", ClearResult);
      ISE("#ycs_btn_likes").addEventListener("click", ClearResult);
      ISE("#ycs_btn_replied_comments").addEventListener("click", ClearResult);
      ISE("#ycs_btn_members").addEventListener("click", ClearResult);
      ISE("#ycs_btn_donated").addEventListener("click", ClearResult);
      ISE("#ycs_btn_sort_first").addEventListener("click", ClearResult);
      ISE("#ycs_btn_random").addEventListener("click", ClearResult);
      ISE("#ycs_btn_clear").addEventListener("click", ClearResult);
      let checkboxELEM = await ISE(".Checkbox_SearchAddons#FindMatchedTimeStamps input[type='checkbox']");
      checkboxELEM.addEventListener("change", async function() {
        if (ISE('.Checkbox_SearchAddons#FindMatchedTimeStamps input[type="checkbox"]').checked) {
          document.getElementById("ycs-input-search").addEventListener("keyup", FindComment_TimeStamps);
          ISE("#ycs_btn_search").addEventListener("click", FindComment_TimeStamps);
          await GM.setValue("YCSADDONS_YTMatchedTimeStamp", true);
          console.log("ON");
        } else if (!ISE('.Checkbox_SearchAddons#FindMatchedTimeStamps input[type="checkbox"]').checked) {
          document.getElementById("ycs-input-search").removeEventListener("keyup", FindComment_TimeStamps);
          ISE("#ycs_btn_search").removeEventListener("click", FindComment_TimeStamps);
          await GM.setValue("YCSADDONS_YTMatchedTimeStamp", false);
          console.log("OFF");
        }
      });
      
      
      let ToggleState = await GM.getValue("YCSADDONS_YTMatchedTimeStamp", false);
      if (ToggleState && ToggleState == true) {
        document.getElementById("ycs-input-search").addEventListener("keyup", FindComment_TimeStamps);
        ISE("#ycs_btn_search").addEventListener("click", FindComment_TimeStamps);
        ISE('.Checkbox_SearchAddons#FindMatchedTimeStamps input[type="checkbox"]').checked = true;
        console.log("Timestamp matched turned on.");
        console.log("GM.Variable State: " + await GM.getValue("YCSADDONS_YTMatchedTimeStamp", false));
      } else {
        console.log("Timestamp matched not enabled.");
        console.log("GM.Variable State: " + await GM.getValue("YCSADDONS_YTMatchedTimeStamp", false));
      }
    }
    
    if (SearchAddons_Container.children.length == 0) {
      SearchAddons_Container.remove();
    }
  }
  
  
	//Option thing, false to disable a tool button(i.e make it not added/created.) true is the opposite.
	let ToptheBTNToggle = true;
	let PauseOnWhenSearchcmnt = true;
	let SelectAllOnfocus = true;
  let BlurAfterEnterinSearchField = true;
	let YCSBOX_OverlayCSS = true;
  let YCSBOX_OverlaySimpleCSS = true;
  
  
// Button to go to top of comment search result
//*
	if (ToptheBTNToggle) {
		let Create_ToptheBTN = document.createElement("div");
		Create_ToptheBTN.setAttribute("id", "GTopButton");
		Create_ToptheBTN.setAttribute("style", "position: relative;border-radius: 15%;background: #B5E1DB;width: 25px;height: 25px;color: #3c9fa3;cursor: pointer;display: inline-block;");
		Create_ToptheBTN.innerHTML = '<i class="far fa-arrow-alt-circle-up" style="margin: 0;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"></i>';
		await ElementContainer.appendChild(Create_ToptheBTN);
		Create_ToptheBTN.setAttribute("title", "Click to make the comment-searchResult go to top of it.\nRight Click to go to top of page.");
		document.getElementById("GTopButton").addEventListener("click", function(){document.getElementById("ycs-search-result").scrollTo(0, 0);});
    document.getElementById("GTopButton").addEventListener("contextmenu", function(e){e.preventDefault();window.scrollTo(0, 0);});
	}
//*/
		
// Button to Toggle: select all text on focus
//*
	if (SelectAllOnfocus) {
    let ToggleStatus = "ON"; // ON and OFF (All-must-caps) | ON : The function activated at the start (Text selected when search field on focus) || OFF : The function must manually activated
    
    if (ToggleStatus == "OFF") {
      let Create_toggleSelectAllOnfocus = document.createElement("div");
      Create_toggleSelectAllOnfocus.setAttribute("id", "SelectAll-Onfocus");
      Create_toggleSelectAllOnfocus.setAttribute("style", "display: inline-block;background: rgb(231 231 231);border-radius: 25%;text-shadow: -1px 1px 0px #ffffff, 1px 1px 0px #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;cursor: grabbing;color: grey;");
      Create_toggleSelectAllOnfocus.setAttribute("class", "fas fa-pen");
      await ElementContainer.appendChild(Create_toggleSelectAllOnfocus);
      document.getElementById("SelectAll-Onfocus").setAttribute("title", "Just like casual");
      document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_ON);
    }
    else if (ToggleStatus == "ON") {
      LocationElem_Searchfield.addEventListener("focus", SelectAllOnfocus_func);
      let Create_toggleSelectAllOnfocus = document.createElement("div");
      Create_toggleSelectAllOnfocus.setAttribute("id", "SelectAll-Onfocus");
      Create_toggleSelectAllOnfocus.setAttribute("style", "display: inline-block;background: rgb(231 231 231);border-radius: 25%;text-shadow: -1px 1px 0px #ffffff, 1px 1px 0px #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;cursor: grabbing;color: grey;");
      Create_toggleSelectAllOnfocus.setAttribute("class", "fas fa-pen-square");
      await ElementContainer.appendChild(Create_toggleSelectAllOnfocus);
      document.getElementById("SelectAll-Onfocus").setAttribute("title", "All Text selected when input field is focused.");
      document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_OFF);
    }
  }
//*/
	
// Pause a video when searching comment, triggered when pressing the focused. (Toggleable)
//*
	if (PauseOnWhenSearchcmnt) {
		let Create_PauseOnWhenSearchElem = document.createElement("div");
		Create_PauseOnWhenSearchElem.setAttribute("id", "PauseOnWhenSearchBTN");
		Create_PauseOnWhenSearchElem.setAttribute("style", "background: rgb(163,163,163);padding: 3px;border-radius: 6px;cursor: url(https://cdn.custom-cursor.com/128/assets/pointers/32/Translucent_Pixel_Cursor.png) , pointer;");
		await ElementContainer.appendChild(Create_PauseOnWhenSearchElem);
		
		let PauseOnWhenSearchcmnt_ToggleStart = false;
    // if true, it gonna enabled once it created. false is the opposite.
    
    if (PauseOnWhenSearchcmnt_ToggleStart) {
      await sleep(50);
      let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
      LocationElem_Searchfield.addEventListener("focus", PauseYTVid);
      ButtonElem.setAttribute("class", "fas fa-stop-circle");
      ButtonElem.style.color = "rgb(249,107,86)";
      ButtonElem.addEventListener("click", PauseOnWhenSearch_Disableit);
      await sleep(70);
      ButtonElem.title = "Video will be paused when you're searching comments.";
    } else {
      let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
      ButtonElem.setAttribute("class", "fas fa-play-circle");
      ButtonElem.style.color = "rgb(107,245,86)";
      ButtonElem.addEventListener("click", PauseOnWhenSearch_Enableit);
      await sleep(90);
      ButtonElem.title = "This button function is disabled.";
    }
  }
//*/

// Blur search field after desired amount of time. (Toggleable)
  if (BlurAfterEnterinSearchField) {
    // BE CAREFUL ON CASES!!
    let ToggleStatusOfThisFunc_Stored = await GM.getValue("BlurAfterEnterinSearchField_Toggle", false);
    let ToggleStatusOfThisFunc = "OFF"; //"ON" make it turned on at the start, "OFF" is the opposite.
    
    let CSS_BlurAfterEnterinSearchField = {
      "a": "\n\n\n/* ===Blur() after enter in SearchField CSS=== */\n"
      + '#BlurAfterSearch[ToggleStatus="OFF"] {\n'
      + ' box-shadow: inset 0 0 20px 1px rgba(219, 83, 83, 40%), 0 0 5px 0 black;\n'
      + ' color: #72706f;\n'
      + '}\n'
      + '#BlurAfterSearch[ToggleStatus="ON"] {\n'
      + ' box-shadow: inset 0 0 15px 1px greenyellow, 0 0 5px 0 rgb(100,100,100);\n'
      + ' animation: shakyshakeHourglass_icon 2s infinite;\n'
      + ' color: #FFF;\n'
      + '}\n'
      + '@keyframes shakyshakeHourglass_icon {\n'
      + ' 0% {\n'
      + '  transform: rotatez(0deg);\n'
      + ' }\n'
      + ' 25% {\n'
      + '  transform: rotatez(10deg);\n'
      + ' }\n'
      + ' 30% {\n'
      + '  transform: rotatez(15deg);\n'
      + ' }\n'
      + ' 35% {\n'
      + '  transform: rotatez(10deg);\n'
      + ' }\n'
      + ' 40% {\n'
      + '  transform: rotatez(15deg);\n'
      + ' }\n'
      + ' 50% {\n'
      + '  transform: rotatez(0deg);\n'
      + ' }\n'
      + ' 75% {\n'
      + '  transform: rotatez(-10deg);\n'
      + ' }\n'
      + ' 80% {\n'
      + '  transform: rotatez(-15deg);\n'
      + ' }\n'
      + ' 85% {\n'
      + '  transform: rotatez(-10deg);\n'
      + ' }\n'
      + ' 90% {\n'
      + '  transform: rotatez(-15deg);\n'
      + ' }\n'
      + '}\n'
    };
    CSSContainer.innerHTML += CSS_BlurAfterEnterinSearchField.a
    let Create_thisfunctionElem = document.createElement("div");
    Create_thisfunctionElem.setAttribute("style", "background: rgb(240,240,240);text-align: center;padding: 5px;border-radius: 7px;width: 27px;margin: 0;font-size: 17px;cursor: progress;");
    Create_thisfunctionElem.setAttribute("id", "BlurAfterSearch");
    await ElementContainer.appendChild(Create_thisfunctionElem);
    Create_thisfunctionElem.addEventListener("contextmenu", BlurAfterEnterinSearchField_ctxSettings);
    
    if (ToggleStatusOfThisFunc.match(/ON/i) || ToggleStatusOfThisFunc_Stored.match(/ON/i)) { // ONNNNNNN
      let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
      Get_thisfunctionElem.setAttribute("ToggleStatus", "ON");
      Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass-half");
			let GetDelay = await GM.getValue("BlurycsSearchField_delay", 10);
			Get_thisfunctionElem.setAttribute("title", "Gonna blur() the search element after enter the search in " + GetDelay + " Secs");
      LocationElem_Searchfield.addEventListener("keyup", BlurycsSearchField);
      Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Disableit, {once: true});
    } else if (ToggleStatusOfThisFunc.match(/OFF/i) || ToggleStatusOfThisFunc_Stored.match(/OFF/i)) { // OFFFFFFFFF
      let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
      Get_thisfunctionElem.setAttribute("ToggleStatus", "OFF");
			Get_thisfunctionElem.setAttribute("title", "Not gonna blur() the Search element when it\'s entered");
      Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass");
      Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Enableit, {once: true});
    }
  }
	
// Make the YCS-Box be an overlay
//so you could watch while search comments without scrolling UP-DOWN
  if (YCSBOX_OverlayCSS && !YCSBOX_OverlaySimpleCSS) {
	 let YCSOverlay_CSSValue = {
     'a': "\n\n\n/* ===YCSBOX_OverlayCSS=== */\n"
     + ".ycs-app.YCS-ModCSSByNJ1n9_Overlay {\n"
     + "  z-index: 2500;\n"
     + "  position: fixed;\n"
     + "  padding: 20px;\n"
     + "  background: var(--yt-spec-brand-background-solid);\n"
     + "  left: auto;\n"
     + "  right: -45px;\n"
     + "  top: 0;\n"
     /*+ "  top: -25px;\n"*/
     + "  opacity: 95%;\n"
     + "  width: 1000px;\n"
     + "  border-color: var(--yt-spec-text-primary) !important;"
     + "  border: solid 2px !important;\n"
     + "  border-radius: 5px;\n"
     + "  transition: all 600ms ease-out;\n"
     + "}\n"
     + '.ycs-app.YCS-ModCSSByNJ1n9_Overlay[CollapsedState="true"] {\n'
     + "	transform: translateX(95.5%);"
     + "}\n"
     + '.ycs-app.YCS-ModCSSByNJ1n9_Overlay[CollapsedState="false"] {\n'
     + "  transform: scale(90%);"
     + "}\n"
   };
	 CSSContainer.innerHTML += YCSOverlay_CSSValue.a;
	 let ToggleOverlayMOD_Button = document.createElement("div");
	 ToggleOverlayMOD_Button.setAttribute("class", "fas fa-clone");
	 ToggleOverlayMOD_Button.setAttribute("id", "YCSBox-OverlayToggle")
	 ToggleOverlayMOD_Button.setAttribute("style", "color: rgb(229, 92, 92);padding: 0px 5px;cursor: alias;");
	 await ElementContainer.appendChild(ToggleOverlayMOD_Button);
	 ToggleOverlayMOD_Button.addEventListener("click", ToggleMODButton_Overlay);
	 ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is normal mode.");
   
	 let ToggleOverlayMOD_State = await GM.getValue("YCSSTYLEMod_State", null);
	 if (ToggleOverlayMOD_State.match(/^Overlay/i)) {
     ISE(".ycs-app").style.transitionDuration = "50ms";
     ISE(".ycs-app").style.opacity = "0";
     await sleep(20);
     if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay")) {
       ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_Overlay");
     }
     ISE(".ycs-app").setAttribute("CollapsedState", "true");
     ISE(".ycs-app").style.top = "0";
     ISE("#YCSBox-OverlayToggle").style.color = "rgb(145, 213, 153)";
		 let CollapsedToggle = document.createElement("div");
		 CollapsedToggle.setAttribute("id", "CollapseButton");
		 CollapsedToggle.setAttribute("style", "cursor: pointer;width: 25px;height: 290px;position: absolute;left: -20px;top: 2px;background: #aacbe7;border-radius: 15px;opacity: 90%;");
		 await ISE(".ycs-app").appendChild(CollapsedToggle);
		 CollapsedToggle.addEventListener("click", function(){
			 if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
				 ISE(".ycs-app").setAttribute("CollapsedState", "false");
				 if (ISE(".ycs-app").offsetHeight >= 779) {
					 ISE(".ycs-app").style.top = "-20px";
				 } else {
					 ISE(".ycs-app").style.top = "0";
				 }
         document.addEventListener("keydown", Disable_Key); // Disable a key
         document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
			 } else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
				 ISE(".ycs-app").setAttribute("CollapsedState", "true");
				 ISE(".ycs-app").style.top = "0";
         document.removeEventListener("keydown", Disable_Key); // Disable a key
         document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
       }
     });
		 ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode.");
     await sleep(30);
     await waitFor(_ => document.visibilityState == 'visible');
     ISE(".ycs-app").style.opacity = "";
     ISE(".ycs-app").style.transitionDuration = "";
     await YCSBox_NotOverwhelmHeight();
     window.addEventListener("resize", YCSBox_NotOverwhelmHeight);
     LocationElem_Searchfield.addEventListener("search", CheckSizeResize);
     ISE("#ycs_btn_search").addEventListener("click", CheckSizeResize);
     ISE(".ycs-btn-panel.ycs_noselect").addEventListener("click", CheckSizeResize);
     if (document.activeElement == ISE("#ycs-input-search.ycs-search__input")) {
       if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
         await waitFor(_ => ISE("#CollapseButton"));
         ISE("#CollapseButton").click();
       }
     }
	 }
 }
  
// Make the YCS-Box be an overlay
//so you could watch while search comments without scrolling UP-DOWN
//**BUT THE DIFFERENCE IS, this one is simpler version.. Just contain ONLY most used thing
  if (YCSBOX_OverlaySimpleCSS && !YCSBOX_OverlayCSS) {
    let YCSSimplerOverlay_CSSValue = {
      'a': "\n\n\n/* ===YCSBOX_SimpleOverlayCSS=== *\/\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple {\n"
      + "  z-index: 2500;\n"
      + "  position: fixed;\n"
      + "  padding: 20px;\n"
      + "  background: var(--yt-spec-brand-background-solid);\n"
      + "  left: auto;\n"
      + "  right: -25px;\n"
      + "  opacity: 95%;\n"
      + "  width: 500px;\n"
      + "  top: 0;\n"
      + "  border-color: var(--yt-spec-text-primary) !important;\n"
      + "  border: solid 2px !important;\n"
      + "  border-radius: 5px;\n"
      + "  transition: all 600ms ease-out;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs_infobar_btns,\n"
      //+ ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-btn-panel,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-btn-panel *,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple #ycs_btn_open_modal,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple #ycs_view_mode,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-infobar\n"
      + "{\n"
      + "  display: none;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple div.YCS-optional-function-CONTAINER {\n"
      + "  margin-top: 15px !important;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple div#ycs-search-result * {\n"
      + "  font-size: 13px;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-datetime-goto {\n"
      + "  font-size: 12px !important;\n"
      + "}\n"
      + '.ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple[CollapsedState="true"] {\n'
      + "	transform: translateX(95%);"
      + "}\n"
      + '.ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple[CollapsedState="false"] {\n'
      + "  transform: scale(90%);"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple  #ycs_btn_clear {\n"
      + "  display: inline !important;\n"
      + "  top: -36px;\n"
      + "  position: relative;\n"
      + "  transform: scale(1.45);\n"
      + "}\n"
    };
    CSSContainer.innerHTML += YCSSimplerOverlay_CSSValue.a;
    
    let ToggleOverlayMOD_Button = document.createElement("div");
    ToggleOverlayMOD_Button.setAttribute("class", "fas fa-clone");
    ToggleOverlayMOD_Button.setAttribute("id", "YCSBox-OverlayToggle")
    ToggleOverlayMOD_Button.setAttribute("style", "color: rgb(229, 92, 92);padding: 0px 5px;cursor: alias;");
    await ElementContainer.appendChild(ToggleOverlayMOD_Button);
    ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is normal mode.");
    ISE("#YCSBox-OverlayToggle").addEventListener("click", async function() {
      if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
        ISE(".ycs-app").style.transitionDuration = "50ms";
        ISE(".ycs-app").style.opacity = "0";
        ISE(".ycs-app").setAttribute("CollapsedState", "true");
        ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_OverlaySimple");
        await sleep(70);
        ISE("#YCSBox-OverlayToggle").style.color = "rgb(145, 213, 153)";
        let CollapsedToggle = document.createElement("div");
        CollapsedToggle.setAttribute("id", "CollapseButton");
        CollapsedToggle.setAttribute("style", "cursor: pointer;width: 19px;height: 190px;position: absolute;left: -19px;top: 0px;background: #aacbe7;border-top-left-radius: 15px;border-top-right-radius: 0;border-bottom-right-radius: 0;border-bottom-left-radius: 15px;opacity: 90%;");
        await ISE(".ycs-app").appendChild(CollapsedToggle);
        CollapsedToggle.addEventListener("click", function(){
          if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
            ISE(".ycs-app").setAttribute("CollapsedState", "false");
            document.addEventListener("keydown", Disable_Key); // Disable a key
            document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
          } else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
            document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
            document.removeEventListener("keydown", Disable_Key); // Disable a key
            ISE(".ycs-app").setAttribute("CollapsedState", "true");
          }
        });
        GM.setValue("YCSSTYLEMod_State", "SimpleOverlay");
        ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode\n[Simpler version].");
        await sleep(70);
        ISE(".ycs-app").style.opacity = "";
        ISE(".ycs-app").style.transitionDuration = "";
        await YCSBox_NotOverwhelmHeight();
        window.addEventListener("resize", YCSBox_NotOverwhelmHeight);
        LocationElem_Searchfield.addEventListener("search", CheckSizeResize);
        ISE("#ycs_btn_search").addEventListener("click", CheckSizeResize);
        ISE(".ycs-btn-panel.ycs_noselect").addEventListener("click", CheckSizeResize);
        
      } else if (ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
      if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
        document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
        document.removeEventListener("keydown", Disable_Key); // Disable a key
      }
      ISE(".ycs-app").classList.remove("YCS-ModCSSByNJ1n9_OverlaySimple");
      ISE("#CollapseButton").remove();
      ISE("#YCSBox-OverlayToggle").style.color = "rgb(229, 92, 92)";
      if (ISE(".ycs-app").getAttribute("style").length == 0) {
        ISE(".ycs-app").removeAttribute("style");
      }
        window.removeEventListener("resize", YCSBox_NotOverwhelmHeight);
        LocationElem_Searchfield.removeEventListener("search", CheckSizeResize);
        ISE("#ycs_btn_search").removeEventListener("click", CheckSizeResize);
        ISE(".ycs-btn-panel.ycs_noselect").removeEventListener("click", CheckSizeResize);
        ISE(".ycs-app").removeAttribute("CollapsedState");
        if (ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result")) {
          ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.maxHeight = "";
        }
        GM.setValue("YCSSTYLEMod_State", null);
        ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is normal mode.");
    }
    });
    
    let ToggleMOD_State = await GM.getValue("YCSSTYLEMod_State", null);
    if (ToggleMOD_State.match(/^SimpleOverlay/i)) {
      ISE(".ycs-app").style.transitionDuration = "50ms";
      ISE(".ycs-app").style.opacity = "0";
      await sleep(20);
      if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
        ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_OverlaySimple");
      }
      ISE(".ycs-app").setAttribute("CollapsedState", "true");
      ISE("#YCSBox-OverlayToggle").style.color = "rgb(145, 213, 153)";
      let CollapsedToggle = document.createElement("div");
      CollapsedToggle.setAttribute("id", "CollapseButton");
      CollapsedToggle.setAttribute("style", "cursor: pointer;width: 19px;height: 190px;position: absolute;left: -19px;top: 0px;background: #aacbe7;border-top-left-radius: 15px;border-top-right-radius: 0;border-bottom-right-radius: 0;border-bottom-left-radius: 15px;opacity: 90%;");
      await ISE(".ycs-app").appendChild(CollapsedToggle);
      CollapsedToggle.addEventListener("click", function(){
        if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
          ISE(".ycs-app").setAttribute("CollapsedState", "false");
          document.addEventListener("keydown", Disable_Key); // Disable a key
          document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
        } else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
          ISE(".ycs-app").setAttribute("CollapsedState", "true");
          ISE(".ycs-app").style.top = "0";
          document.removeEventListener("keydown", Disable_Key); // Disable a key
          document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
        }
      });
      
      ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode\n[Simpler version].");
      await sleep(30);
      await waitFor(_ => document.visibilityState == 'visible');
      ISE(".ycs-app").style.opacity = "";
      ISE(".ycs-app").style.transitionDuration = "";
      await YCSBox_NotOverwhelmHeight();
      window.addEventListener("resize", YCSBox_NotOverwhelmHeight);
      LocationElem_Searchfield.addEventListener("search", CheckSizeResize);
      ISE("#ycs_btn_search").addEventListener("click", CheckSizeResize);
      ISE(".ycs-btn-panel.ycs_noselect").addEventListener("click", CheckSizeResize);
      if (document.activeElement == ISE("#ycs-input-search.ycs-search__input")) {
        if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
          await waitFor(_ => ISE("#CollapseButton"));
          ISE("#CollapseButton").click();
        }
      }
    }
  }
  
// Combined of the YCS-Box Mode, Just the toggleList and stuff
  if (YCSBOX_OverlayCSS && YCSBOX_OverlaySimpleCSS) {
    let YCSBOXMode_CSSCompile = {
    "YCSOverlay_CSSValue": "\n\n\n/* ===YCSBOX_OverlayCSS=== */\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_Overlay {\n"
      + "  z-index: 2500;\n"
      + "  position: fixed;\n"
      + "  padding: 20px;\n"
      + "  background: var(--yt-spec-brand-background-solid);\n"
      + "  left: auto;\n"
      + "  right: -45px;\n"
      /*+ "  top: -25px;\n"*/
      + "  opacity: 95%;\n"
      + "  width: 1000px;\n"
      + "  border-color: var(--yt-spec-text-primary) !important;"
      + "  border: solid 2px !important;\n"
      + "  border-radius: 5px;\n"
      + "  transition: all 600ms ease-out;\n"	 + "}\n"
      + '.ycs-app.YCS-ModCSSByNJ1n9_Overlay[CollapsedState="true"] {\n'
      + "	transform: translateX(95.5%);"
      + "}\n"
      + '.ycs-app.YCS-ModCSSByNJ1n9_Overlay[CollapsedState="false"] {\n'
      + "  transform: scale(90%);"
      + "}\n",
    "YCSSimplerOverlay_CSSValue": "\n\n\n/* ===YCSBOX_SimpleOverlayCSS=== *\/\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple {\n"
      + "  z-index: 2500;\n"
      + "  position: fixed;\n"
      + "  padding: 20px;\n"
      + "  background: var(--yt-spec-brand-background-solid);\n"
      + "  top: 0;\n"
      + "  left: auto;\n"
      + "  right: -25px;\n"
      + "  opacity: 95%;\n"
      + "  width: 500px;\n"
      + "  border-color: var(--yt-spec-text-primary) !important;\n"
      + "  border: solid 2px !important;\n"
      + "  border-radius: 5px;\n"
      + "  transition: all 600ms ease-out;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs_infobar_btns,\n"
      //+ ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-btn-panel,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-btn-panel *,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple #ycs_btn_open_modal,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple #ycs_view_mode,\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-infobar\n"
      + "{\n"
      + "  display: none;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple div.YCS-optional-function-CONTAINER {\n"
      + "  margin-top: 15px !important;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple div#ycs-search-result * {\n"
      + "  font-size: 13px;\n"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple .ycs-datetime-goto {\n"
      + "  font-size: 12px !important;\n"
      + "}\n"
      + '.ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple[CollapsedState="true"] {\n'
      + "	transform: translateX(95%);"
      + "}\n"
      + '.ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple[CollapsedState="false"] {\n'
      + "  transform: scale(90%);"
      + "}\n"
      + ".ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple  #ycs_btn_clear {\n"
      + "  display: inline !important;\n"
      + "  top: -36px;\n"
      + "  position: relative;\n"
      + "  transform: scale(1.45);\n"
      + "}\n",
    "YCSSToggleList": "\n\n/* ===YCSBOX-ModeToggleList=== *\/\n"
      + "#YCSSTYLEMod_ToggleList {\n"
      + "  position: fixed;\n"
      + "  background: #6e948d;\n"
      + "  width: 95px;\n"
      + "  height: 75px;\n"
      + "  font-size: 13px;\n"
      + "  line-height: 10px;\n"
      + '  padding-top: 4px;\n'
      + '  padding-bottom: 1px;\n'
      + '  padding-left: 3px;\n'
      + '  padding-right: 3px;\n'
      + "  font-family: 'Baloo 2';\n"
      + "  text-align: center;\n"
      + "  border-radius: 3px;\n"
      + "  user-select: none;\n"
      + "  transform-origin: top left;\n"
      + "  transition: all 300ms linear;\n"
      + "}\n"
      + "#YCSSTYLEMod_ToggleList:not([Opened]) {\n"
      + "  transform: scale(0);\n"
      + "}\n"
      + "#YCSSTYLEMod_ToggleList[Opened] {\n"
      + "  transform: scale(1);\n"
      + "}\n"
      + '.YCSSTYLEMod_ToggleList {\n'
      + "  padding-top: 7px;\n"
      + "  padding-bottom: 7px;\n"
      + "  padding-left: 2px;\n"
      + "  padding-right: 2px;\n"
      + '}\n'
      + ".ycs-app.YCS-ModCSSByNJ1n9_Overlay #YCSSTYLEMod_ToggleList, .ycs-app.YCS-ModCSSByNJ1n9_OverlaySimple #YCSSTYLEMod_ToggleList {\n"
      + "  z-index: 3000;\n"
      + "}\n"
      + '.ycs-app:not(.YCS-ModCSSByNJ1n9_Overlay, .YCS-ModCSSByNJ1n9_OverlaySimple) #YCSSTYLEMod_ToggleList {\n'
      + '  z-index: 2000;\n'
      + '}\n'
      + ".YCSSTYLEMod_ToggleList:hover:not([selected]) {\n"
      + "  background: linear-gradient(to right, #00000064, #00000000, #00000000, #00000064);\n"
      + "  cursor: pointer;\n"
      + "}\n"
      + ".YCSSTYLEMod_ToggleList:active:not([selected]) {\n"
      + "  background: linear-gradient(to right, #00000090, #ffffff35, #ffffff35, #00000090);\n"
      + "  border-radius: 2px;\n"
      + "  }\n"
      + ".YCSSTYLEMod_ToggleList[selected] {\n"
      + "  background: rgba(230,230,230, 30%);\n"
      + "  border-radius: 2px;\n"
      + "}\n"
      + "@keyframes CollapseYCSToggleList {"
      + "  0%   {transform: scale(1); filter: blur(1px);}\n"
      + "  25%  {filter: brightness(70%) blur(2px);}\n"
      + "  50%  {filter: brightness(60%) blur(2px);}\n"
      + "  60%  {filter: brightness(45%) blur(0);}\n"
      + "  99%  {transform: scale(0);  filter: brightness(0) blur(2px);}\n"
      + "  100% {transform: scale(0);  filter: brightness(0) blur(0);}\n"
      + "}\n"
      + "@keyframes ExpandYCSToggleList {\n"
      + "  0%   {transform: scale(0); filter: brightness(70%) blur(1px);}\n"
      + "  50%  {filter: brightness(1) blur(0);}\n"
      + "  99%  {transform: scale(1);  filter: blur(1px);}\n"
      + "  100% {transform: scale(1);  filter: blur(0);}\n"
      + "}\n"
    };
    CSSContainer.innerHTML += YCSBOXMode_CSSCompile[Object.keys(YCSBOXMode_CSSCompile)[0]] + YCSBOXMode_CSSCompile[Object.keys(YCSBOXMode_CSSCompile)[1]] + YCSBOXMode_CSSCompile[Object.keys(YCSBOXMode_CSSCompile)[2]];
    
    let ToggleOverlayMOD_Button = document.createElement("div");
    ToggleOverlayMOD_Button.setAttribute("class", "fas fa-clone");
    ToggleOverlayMOD_Button.setAttribute("id", "YCSBox-OverlayToggle");
    ToggleOverlayMOD_Button.setAttribute("style", "color: rgb(110, 164, 209);padding: 0px 5px;cursor: alias;");
    await ElementContainer.appendChild(ToggleOverlayMOD_Button);
    ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is normal mode.");
    var ELEMToggleListP = document.createElement("div");
    ELEMToggleListP.setAttribute("id", "YCSSTYLEMod_ToggleList");
    let ELEMToggleListC1 = document.createElement("div");
    ELEMToggleListC1.setAttribute("class", "YCSSTYLEMod_ToggleList");
    ELEMToggleListC1.setAttribute("ToggleValue", "Default");
    ELEMToggleListC1.innerHTML = "Default";
    let ELEMToggleListC2 = document.createElement("div");
    ELEMToggleListC2.setAttribute("class", "YCSSTYLEMod_ToggleList");
    ELEMToggleListC2.setAttribute("ToggleValue", "Overlay");
    ELEMToggleListC2.innerHTML = "Overlay";
    let ELEMToggleListC3 = document.createElement("div");
    ELEMToggleListC3.setAttribute("class", "YCSSTYLEMod_ToggleList");
    ELEMToggleListC3.setAttribute("ToggleValue", "SimpleOverlay");
    ELEMToggleListC3.innerHTML = "Simple-Overlay";
    ELEMToggleListP.appendChild(ELEMToggleListC1);
    ELEMToggleListP.appendChild(ELEMToggleListC2);
    ELEMToggleListP.appendChild(ELEMToggleListC3);
    if (!document.getElementById("YCSSTYLEMod_ToggleList")) {
      await document.body.appendChild(ELEMToggleListP);
      ISE('.YCSSTYLEMod_ToggleList[ToggleValue="Default"]').addEventListener("click", YCSSTYLEMod_ToggleList_SwitchEvent);
      ISE('.YCSSTYLEMod_ToggleList[ToggleValue="Overlay"]').addEventListener("click", YCSSTYLEMod_ToggleList_SwitchEvent);
      ISE('.YCSSTYLEMod_ToggleList[ToggleValue="SimpleOverlay"]').addEventListener("click", YCSSTYLEMod_ToggleList_SwitchEvent);
    }
    ISE("#YCSBox-OverlayToggle").addEventListener("click", function(){
      var ButtonEl = document.querySelector("#YCSBox-OverlayToggle");
      var ToggleListEl = document.getElementById("YCSSTYLEMod_ToggleList");
      if (document.getElementById("YCSSTYLEMod_ToggleList").getAttribute("Opened") != null) {
        document.getElementById("YCSSTYLEMod_ToggleList").removeAttribute("Opened");
        document.querySelector("#YCSSTYLEMod_ToggleList").style.animation = "CollapseYCSToggleList 500ms 1";
      } else if (!document.getElementById("YCSSTYLEMod_ToggleList").getAttribute("Opened")) {
        document.getElementById("YCSSTYLEMod_ToggleList").setAttribute("Opened", "");
        let ELEml = document.querySelector("#YCSSTYLEMod_ToggleList[Opened]");
        ELEml.style.animation = "ExpandYCSToggleList 500ms 1";
        if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay") && !ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
          document.querySelector("#YCSSTYLEMod_ToggleList[Opened]").style.top = "1278px";
          document.querySelector("#YCSSTYLEMod_ToggleList[Opened]").style.position = "absolute";
        } else {
          document.querySelector("#YCSSTYLEMod_ToggleList[Opened]").style.top = (ButtonEl.getBoundingClientRect().bottom - 10) + "px";
          document.querySelector("#YCSSTYLEMod_ToggleList[Opened]").style.position = "";
        }
        ELEml.style.left = (ButtonEl.getBoundingClientRect().right - 15) + "px";
      }
    });
    document.addEventListener("click", function(Ee){
      let not_hereElm = document.querySelector("#YCSBox-OverlayToggle");
      if (Ee.target != not_hereElm && document.getElementById("YCSSTYLEMod_ToggleList").getAttribute("Opened") != null) {
        document.getElementById("YCSSTYLEMod_ToggleList").removeAttribute("Opened");
        document.querySelector("#YCSSTYLEMod_ToggleList").style.animation = "CollapseYCSToggleList 500ms 1";
      } else if (Ee.target == not_hereElm) {
        return;
      }
    });
    let ToggleMOD_State = await GM.getValue("YCSSTYLEMod_State", null);
    if (ToggleMOD_State.match(/^Overlay/i)) {
      ISE('.YCSSTYLEMod_ToggleList[ToggleValue="Overlay"]').setAttribute("selected", "");
      ISE(".ycs-app").style.transitionDuration = "50ms";
      ISE(".ycs-app").style.opacity = "0";
      await sleep(20);
      if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay")) {
        ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_Overlay");
      }
      ISE(".ycs-app").setAttribute("CollapsedState", "true");
      ISE(".ycs-app").style.top = "0";
      let CollapsedToggle = document.createElement("div");
      CollapsedToggle.setAttribute("id", "CollapseButton");
      CollapsedToggle.setAttribute("style", "cursor: pointer;width: 25px;height: 290px;position: absolute;left: -20px;top: 2px;background: #aacbe7;border-radius: 15px;opacity: 90%;");
      await ISE(".ycs-app").appendChild(CollapsedToggle);
      CollapsedToggle.addEventListener("click", function(){
        if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
          ISE(".ycs-app").setAttribute("CollapsedState", "false");
          if (ISE(".ycs-app").offsetHeight >= 779) {
            ISE(".ycs-app").style.top = "-20px";
          } else {
            ISE(".ycs-app").style.top = "0";
          }
          document.addEventListener("keydown", Disable_Key); // Disable a key
          document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
        } else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
          ISE(".ycs-app").setAttribute("CollapsedState", "true");
          ISE(".ycs-app").style.top = "0";
          document.removeEventListener("keydown", Disable_Key); // Disable a key
          document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
        }
      });
      ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode.");
      await sleep(30);
      await waitFor(_ => document.visibilityState == 'visible');
      ISE(".ycs-app").style.opacity = "";
      ISE(".ycs-app").style.transitionDuration = "";
      await YCSBox_NotOverwhelmHeight();
      window.addEventListener("resize", YCSBox_NotOverwhelmHeight);
      LocationElem_Searchfield.addEventListener("search", CheckSizeResize);
      ISE("#ycs_btn_search").addEventListener("click", CheckSizeResize);
      ISE(".ycs-btn-panel.ycs_noselect").addEventListener("click", CheckSizeResize);
      if (document.activeElement == ISE("#ycs-input-search.ycs-search__input")) {
        if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
          await waitFor(_ => ISE("#CollapseButton"));
          ISE("#CollapseButton").click();
        }
      }
    } else if (ToggleMOD_State.match(/^SimpleOverlay/i)) {
      ISE('.YCSSTYLEMod_ToggleList[ToggleValue="SimpleOverlay"]').setAttribute("selected", "");
      ISE(".ycs-app").style.transitionDuration = "50ms";
      ISE(".ycs-app").style.opacity = "0";
      await sleep(20);
      if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
        ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_OverlaySimple");
      }
      ISE(".ycs-app").setAttribute("CollapsedState", "true");
      let CollapsedToggle = document.createElement("div");
      CollapsedToggle.setAttribute("id", "CollapseButton");
      CollapsedToggle.setAttribute("style", "cursor: pointer;width: 19px;height: 190px;position: absolute;left: -19px;top: 0px;background: #aacbe7;border-top-left-radius: 15px;border-top-right-radius: 0;border-bottom-right-radius: 0;border-bottom-left-radius: 15px;opacity: 90%;");
      await ISE(".ycs-app").appendChild(CollapsedToggle);
      CollapsedToggle.addEventListener("click", function(){
        if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
          ISE(".ycs-app").setAttribute("CollapsedState", "false");
          document.addEventListener("keydown", Disable_Key); // Disable a key
          document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
        } else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
          ISE(".ycs-app").setAttribute("CollapsedState", "true");
          document.removeEventListener("keydown", Disable_Key); // Disable a key
          document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
        }
      });
      
      ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode\n[Simpler version].");
      await sleep(30);
      await waitFor(_ => document.visibilityState == 'visible');
      ISE(".ycs-app").style.opacity = "";
      ISE(".ycs-app").style.transitionDuration = "";
      if (document.activeElement == ISE("#ycs-input-search.ycs-search__input")) {
        if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
          await waitFor(_ => ISE("#CollapseButton"));
          ISE("#CollapseButton").click();
        }
      }
    } else {
      ISE('.YCSSTYLEMod_ToggleList[ToggleValue="Default"]').setAttribute("selected", "");
    }
    
  }
//- - - - - - - - - - - - -
	if (!(ToptheBTNToggle) && !(SelectAllOnfocus) && !(PauseOnWhenSearchcmnt) && !(BlurAfterEnterinSearchField)) {
		document.querySelector("div.YCS-optional-function-CONTAINER").remove();
		document.querySelector("style.YCS-optional-function-CONTAINER").remove();
    console.error('no button or anything added, container deleted.');
	} else {
    console.log('button added.');
  }
  return;
//--------------------
}


function PauseYTVid() {
	document.querySelector("video.video-stream").pause();
}

async function FindComment_TimeStamps(e) {
  if ((e && ((e.type === 'keyup' && e.which == 13) || e.type === 'click') || e == null) && !ISE("label#YCS_TimestampMatchResult").innerHTML.match(/Loading../i)) {
    ISE("label#YCS_TimestampMatchResult").innerHTML = "Loading..";
    var SearchInput = document.querySelector("#ycs-input-search").value;
    await sleep(1000);
    while (ISE(".Absolutematch_yttimestamp")) {
      ISE(".Absolutematch_yttimestamp").classList.remove("Absolutematch_yttimestamp");
    }
    while (ISE(".Textmatch_yttimestampEXP")) {
      ISE(".Textmatch_yttimestampEXP").classList.remove("Textmatch_yttimestampEXP");
    }
    ISE("label#YCS_TimestampMatchResult").style.float = "right";
    ISE("label#YCS_TimestampMatchResult").style.color = "";
    ISE("label#YCS_TimestampMatchResult").style.fontStyle = "";
    if (!SearchInput || SearchInput.length == 0) {
      let CStyle = "font-weight: 900; color: red;";
      console.error("%c01000101501010010501010010501001111501010010500100001500100000501010100501101000501100101501110010501100101500100111501110011500100000501101110501101111500100000501100011501101111501101101501101101501100101501101110501110100500100000501100110501101111501110101501101110501100100500100000501110111501101001501110100501101000500100000501110100501101000501100101500100000501101101501100001501110100501100011501101000501100101501100100500100000501110100501101001501101101501100101501110011501110100501100001501101101501110000500101110", CStyle);
      ISE("label#YCS_TimestampMatchResult").innerHTML = "";
    } else if (SearchInput && SearchInput.match(/([0-9]+:)?[0-9]+:[0-9]+/gi)) {
      if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")) {
        var regexTOyk = new RegExp(".*(?<![1-9])" + SearchInput + "([0-9])?(\\s+)?.*(\\s+)?(.*)?", "gm");
        var a__data = {
          "Index": {
            "Included": [],
            "Excluded": [],
            "TextMatch": []
          },
          "Matched_Comment": [],
          "Excluded_Comment": [],
          "TextMatch": []
        };
        console.groupCollapsed("comment(s) with the matched timestamp [" + SearchInput + "] founded data:");
        console.group('Matching comment log:');
        for (var i0 = 0; i0 < SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment").length; i0++) {
          if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector(".ycs-comment__main-text").textContent.match(regexTOyk)) {
            if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector("a.ycs-gotochat-video[href]")) {
              if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]").length > 1) {
                for (var i1 = 0; i1 < SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]").length; i1++) {
                  let max_check = SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[1].querySelectorAll("a.ycs-gotochat-video[href]").length;
                  if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]")[i1].textContent.match(regexTOyk)) {
                    let iN = i0 + 1;
                    a__data["Matched_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
                    a__data["Index"]["Included"].push(iN);
                    console.log('%c[' + iN + ']' + 'MATCH!', 'background: #90da93;');
                    break;
                  } else if (i1 == max_check) {
                    let iN = i0 + 1;
                    a__data["Excluded_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
                    a__data["Index"]["Excluded"].push(iN);
                    console.error(iN + ' were excluded because all timestamp is not match in the comment although the scan already performed.')
                    break;
                  }
                }
              } else if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]").length == 1) {
                if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]")[0].textContent.match(regexTOyk)) {
                  let iN = i0 + 1;
                  a__data["Matched_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
                  a__data["Index"]["Included"].push(iN);
                  console.log('%c[' + iN + ']' + 'MATCH!', 'background: #90da93;');
                } else {
                  let iN = i0 + 1;
                  a__data["Excluded_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
                  a__data["Index"]["Excluded"].push(iN);
                  console.error(iN + ' were excluded because the timestamp in it (which only one) is not a match.');
                }
              }
            } else {
              if (!SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector("a.ycs-gotochat-video[href]")) {
                let iN = i0 + 1;
                a__data["Index"]["TextMatch"].push(iN);
                a__data["TextMatch"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
                console.error((i0 + 1) + ' Match! But only the text because there is no timestamp defined there, so it\'s probably gonna be placed at the last');
              }
            }
          } else {
            let iN = i0 + 1;
            a__data["Excluded_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
            a__data["Index"]["Excluded"].push(iN);
            if (!SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector(".ycs-comment__main-text").textContent.match(regexTOyk)) {
              console.error((i0 + 1) + ' exclude, reason: textContent is not match:P');
            } else {
              console.error('[' + i0 + '] welp we have a problem here<:');
            }
          }
        }
        console.groupEnd();
        if (a__data && (a__data["Matched_Comment"].length != 0 | a__data["TextMatch"].length != 0)) {
          for (var iElem1 = 0; iElem1 < a__data["Matched_Comment"].length; iElem1++) {
            if (!a__data["Matched_Comment"][iElem1].classList.contains("Absolutematch_yttimestamp")) {
              a__data["Matched_Comment"][iElem1].classList.add("Absolutematch_yttimestamp");
            }
          }
          for (var iElem1 = 0; iElem1 < a__data["TextMatch"].length; iElem1++) {
            if (!a__data["TextMatch"][iElem1].classList.contains("Textmatch_yttimestampEXP")) {
              a__data["TextMatch"][iElem1].classList.add("Textmatch_yttimestampEXP");
            }
          }
          if ((a__data["Matched_Comment"].length != 0 && SE(".Absolutematch_yttimestamp")) | (a__data["TextMatch"].length != 0 && SE(".Textmatch_yttimestampEXP"))) {
            for (let iElem2 = SE(".Absolutematch_yttimestamp").length - 1; iElem2 >= 0; iElem2--) {
              ISE("#ycs_wrap_comments").prepend(SE(".Absolutematch_yttimestamp")[iElem2]);
            }
            for (let iElem3 = SE(".Textmatch_yttimestampEXP").length - 1; iElem3 >= 0; iElem3--) {
              ISE("#ycs_wrap_comments").prepend(SE(".Textmatch_yttimestampEXP")[iElem3]);
            }
          }
          console.log("Index that\'s match the specified timestamp: " + a__data["Index"]["Included"].join(", "));
          if (a__data["Index"]["Excluded"].length != 0) {
            console.log("Index that\'s excluded--doesnt match the specified timestamp: " + a__data["Index"]["Excluded"].join(", "));
          } else if (a__data["Index"]["Excluded"].length == 0) {
            console.log("Index that\'s excluded--doesnt match the specified timestamp: All comment is match the timestamp, nothing excluded");
          }
          console.log(a__data);
          if (a__data["Index"]["Excluded"].length != 0) {
            ISE("label#YCS_TimestampMatchResult").innerHTML = "Comment with timestamp match found: " + a__data["Matched_Comment"].length + "/" + SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment").length;
          } else if (a__data["Index"]["Excluded"].length == 0) {
            ISE("label#YCS_TimestampMatchResult").innerHTML = "Comment with timestamp match found: All";
          }
        } else if (a__data && a__data["Matched_Comment"].length == 0 || !a__data) {
          console.error("NOT FOUND!");
          ISE("label#YCS_TimestampMatchResult").style.color = "red";
          ISE("label#YCS_TimestampMatchResult").innerHTML = "There\'s no matched timestamp.";
          return null;
        } else {
          console.error(a__data);
        }
        console.groupEnd();
      } else {
        ISE("label#YCS_TimestampMatchResult").innerHTML = "There\'s no matched timestamp nor comment available";
      }
    } else {
      console.log("You're not searching a timestamp!");
      ISE("label#YCS_TimestampMatchResult").style.fontStyle = "italic";
      ISE("label#YCS_TimestampMatchResult").style.color = "red";
      ISE("label#YCS_TimestampMatchResult").innerHTML = "[No match--the input is not timestamp]";
    }
  } else {
    console.error('BLOCKED!');
  }
  return;
}
function ClearResult() {
	ISE("label#YCS_TimestampMatchResult").innerHTML = "";
}

function SelectAllOnfocus_func() { //<-- Function for the target Element(Search Input)
	document.getElementById("ycs-input-search").select();
}
function SelectAllOnfocus_ON() { //<-- For the button (toggle)
	document.getElementById("SelectAll-Onfocus").classList.replace("fa-pen", "fa-pen-square");
	document.getElementById("SelectAll-Onfocus").setAttribute("title", "All Text selected when input field is focused.");
	document.getElementById("ycs-input-search").addEventListener("focus", SelectAllOnfocus_func);
	document.getElementById("SelectAll-Onfocus").removeEventListener("click", SelectAllOnfocus_ON);
	document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_OFF);
}
function SelectAllOnfocus_OFF() { //<-- For the button (toggle)
	document.getElementById("SelectAll-Onfocus").classList.replace("fa-pen-square", "fa-pen");
	document.getElementById("SelectAll-Onfocus").setAttribute("title", "Just like casual");
	document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_ON);
	document.getElementById("SelectAll-Onfocus").removeEventListener("click", SelectAllOnfocus_OFF);
}

function PauseOnWhenSearch_Enableit() { // Turning it on. Current state off
	let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
	document.getElementById("ycs-input-search").addEventListener("focus", PauseYTVid);
	ButtonElem.style.color = "rgb(249,107,86)";
	ButtonElem.setAttribute("class", "fas fa-stop-circle");
	ButtonElem.setAttribute("title", "Video will be paused when you're searching comments.");
	ButtonElem.addEventListener("click", PauseOnWhenSearch_Disableit);
	ButtonElem.removeEventListener("click", PauseOnWhenSearch_Enableit);
}
function PauseOnWhenSearch_Disableit() { // Turning it off Current state on
	let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
	document.getElementById("ycs-input-search").removeEventListener("focus", PauseYTVid);
	ButtonElem.style.color = "rgb(107,245,86)";
	ButtonElem.setAttribute("class", "fas fa-play-circle");
	ButtonElem.setAttribute("title", "This button function is disabled.");
	ButtonElem.addEventListener("click", PauseOnWhenSearch_Enableit);
	ButtonElem.removeEventListener("click", PauseOnWhenSearch_Disableit);
}

async function BlurAfterEnterinSearchField_ctxSettings(e) {
	e.preventDefault();
	if (document.getElementById("BlurAfterSearch").getAttribute("ToggleStatus") == "ON") {
		let InputValue = prompt("Set the delay?\n*this gonna be stored.");
		var InputConvert = Number(InputValue);
		if (!InputConvert) {
			return;
		} else if (InputConvert && !isNaN(InputConvert)) {
			let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
			await GM.setValue("BlurycsSearchField_delay", InputConvert);
			/*let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
			LocationElem_Searchfield.removeEventListener("search", BlurycsSearchField);
			LocationElem_Searchfield.addEventListener("search", BlurycsSearchField);*/
			Get_thisfunctionElem.setAttribute("title", "Gonna blur() the search element after enter the search in " + InputConvert + " Secs");
		} else {
			let AskIT = confirm("want to reset then?");
			if (AskIT) {
				let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
				GM.setValue("BlurycsSearchField_delay", null);
				Get_thisfunctionElem.setAttribute("title", "Gonna blur() the search element after enter the search in 10 Secs");
			}
		}
	}
}
async function BlurAfterEnterinSearchField_Enableit() { // Turning it on, current state off
	let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
	Get_thisfunctionElem.setAttribute("ToggleStatus", "ON");
	Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass-half");
	document.getElementById("ycs-input-search").addEventListener("keyup", BlurycsSearchField);
	let GetDelay = await GM.getValue("BlurycsSearchField_delay", null) || 10;
	Get_thisfunctionElem.setAttribute("title", "Gonna blur() the search element after enter the search in " + GetDelay + " Secs");
	Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Disableit, {
		once: true
	});
	GM.setValue("BlurAfterEnterinSearchField_Toggle", "ON");
}
async function BlurAfterEnterinSearchField_Disableit() { // Turning it off, current state on
	let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
	Get_thisfunctionElem.setAttribute("ToggleStatus", "OFF");
	Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass");
	document.getElementById("ycs-input-search").removeEventListener("keyup", BlurycsSearchField);
	await GM.setValue("BlurycsSearchField_delay", 10);
	Get_thisfunctionElem.setAttribute("title", "Not gonna blur() the Search element when it\'s entered");
	Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Enableit, {
		once: true
	});
	GM.setValue("BlurAfterEnterinSearchField_Toggle", "OFF");
}

async function ResetYCSBOXMode() {
  if (ISE(".ycs-app").getAttribute("CollapsedState")) {
    ISE(".ycs-app").removeAttribute("CollapsedState");
  }
  if (ISE(".ycs-app").getAttribute("style")) {
    ISE(".ycs-app").removeAttribute("style");
  }
  if (ISE("#CollapseButton")) {
    ISE("#CollapseButton").remove();
  }
  if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
    document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
    document.removeEventListener("keydown", Disable_Key); // Disable a key
  }
  if (ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay")) {
    ISE(".ycs-app").classList.remove("YCS-ModCSSByNJ1n9_Overlay");
    window.removeEventListener("resize", YCSBox_NotOverwhelmHeight);
    let Elem_Searchfield = document.getElementById("ycs-input-search");
    Elem_Searchfield.removeEventListener("search", CheckSizeResize);
    ISE("#ycs_btn_search").removeEventListener("click", CheckSizeResize);
    ISE(".ycs-btn-panel.ycs_noselect").removeEventListener("click", CheckSizeResize);
  } else if (ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
    ISE(".ycs-app").classList.remove("YCS-ModCSSByNJ1n9_OverlaySimple");
    window.removeEventListener("resize", YCSBox_NotOverwhelmHeight);
    document.getElementById("ycs-input-search").removeEventListener("search", CheckSizeResize);
    ISE("#ycs_btn_search").removeEventListener("click", CheckSizeResize);
    ISE(".ycs-btn-panel.ycs_noselect").removeEventListener("click", CheckSizeResize);
    ISE(".ycs-app").removeAttribute("CollapsedState");
  }
  if (ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result")) {
    ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.maxHeight = "";
  }
  await GM.setValue("YCSSTYLEMod_State", null);
  ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is normal mode.");
  await sleep(50);
  return;
}
async function YCSSTYLEMod_ToggleList_SwitchEvent(E) {
	if (!E.target.hasAttribute("selected")) {
		document.querySelector(".YCSSTYLEMod_ToggleList[selected]").removeAttribute("selected");
		E.target.setAttribute("selected", "");
		//Your code after the buttonswitch selected, and what to do with it
		var selectedmode = E.target.getAttribute("ToggleValue");
		console.log("E.target--Toggle Value: " + selectedmode);
		console.groupCollapsed("CheckMode");
		console.log("overlay\n", selectedmode.match(/^Overlay/i));
		console.log("simple overlay\n", selectedmode.match(/^SimpleOverlay/i));
		console.groupEnd();
		//await sleep(200);
		var CollapseGetSTATE;
		if (selectedmode == null || selectedmode == false) {
			alert("ERROR, check DevTools!");
			return;
		} else if (selectedmode.match(/^Overlay/i)) {
			CollapseGetSTATE = ISE(".ycs-app").getAttribute("collapsedstate");
			await ResetYCSBOXMode();
			await sleep(500);
			if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay")) {
				ISE(".ycs-app").style.transitionDuration = "50ms";
				ISE(".ycs-app").style.opacity = "0";
				ISE(".ycs-app").setAttribute("CollapsedState", "true");
				ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_Overlay");
				await sleep(70);
				ISE(".ycs-app").style.top = "0";
				let CollapsedToggle = document.createElement("div");
				CollapsedToggle.setAttribute("id", "CollapseButton");
				CollapsedToggle.setAttribute("style", "cursor: pointer;width: 25px;height: 290px;position: absolute;left: -20px;top: 2px;background: #aacbe7;border-radius: 15px;opacity: 90%;");
				await ISE(".ycs-app").appendChild(CollapsedToggle);
				CollapsedToggle.addEventListener("click", function () {
					if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
						ISE(".ycs-app").setAttribute("CollapsedState", "false");
						if (ISE(".ycs-app").offsetHeight >= 779) {
							ISE(".ycs-app").style.top = "-20px";
						} else {
							ISE(".ycs-app").style.top = "0";
						}
						document.addEventListener("keydown", Disable_Key); // Disable a key
						document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
					} else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
						document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
						document.removeEventListener("keydown", Disable_Key); // Disable a key
						ISE(".ycs-app").setAttribute("CollapsedState", "true");
						ISE(".ycs-app").style.top = "0";
					}
				});
				ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode.");
				await sleep(70);
				await YCSBox_NotOverwhelmHeight();
				let Elem_Searchfield = document.getElementById("ycs-input-search");
				window.addEventListener("resize", YCSBox_NotOverwhelmHeight);
				Elem_Searchfield.addEventListener("search", CheckSizeResize);
				ISE("#ycs_btn_search").addEventListener("click", CheckSizeResize);
				ISE(".ycs-btn-panel.ycs_noselect").addEventListener("click", CheckSizeResize);
				ISE(".ycs-app").style.opacity = "";
				ISE(".ycs-app").style.transitionDuration = "";
				if (CollapseGetSTATE && CollapseGetSTATE == "false") {
					ISE(".ycs-app").setAttribute("CollapsedState", "false");
				}
			}
			console.log("Overlay");
		} else if (selectedmode.match(/^SimpleOverlay/i)) {
			CollapseGetSTATE = ISE(".ycs-app").getAttribute("collapsedstate");
			await ResetYCSBOXMode();
			await sleep(500);
			if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_OverlaySimple")) {
				ISE(".ycs-app").style.transitionDuration = "50ms";
				ISE(".ycs-app").style.opacity = "0";
				ISE(".ycs-app").setAttribute("CollapsedState", "true");
				ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_OverlaySimple");
				await sleep(70);
				let CollapsedToggle = document.createElement("div");
				CollapsedToggle.setAttribute("id", "CollapseButton");
				CollapsedToggle.setAttribute("style", "cursor: pointer;width: 19px;height: 190px;position: absolute;left: -19px;top: 0px;background: #aacbe7;border-top-left-radius: 15px;border-top-right-radius: 0;border-bottom-right-radius: 0;border-bottom-left-radius: 15px;opacity: 90%;");
				await ISE(".ycs-app").appendChild(CollapsedToggle);
				CollapsedToggle.addEventListener("click", function () {
					if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
						ISE(".ycs-app").setAttribute("CollapsedState", "false");
						document.addEventListener("keydown", Disable_Key); // Disable a key
						document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
					} else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
						ISE(".ycs-app").setAttribute("CollapsedState", "true");
						document.removeEventListener("keydown", Disable_Key); // Disable a key
						document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
					}
				});

				ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode\n[Simpler version].");
				await sleep(70);
				await YCSBox_NotOverwhelmHeight();
				window.addEventListener("resize", YCSBox_NotOverwhelmHeight);
				document.getElementById("ycs-input-search").addEventListener("search", CheckSizeResize);
				ISE("#ycs_btn_search").addEventListener("click", CheckSizeResize);
				ISE(".ycs-btn-panel.ycs_noselect").addEventListener("click", CheckSizeResize);
				ISE(".ycs-app").style.opacity = "";
				ISE(".ycs-app").style.transitionDuration = "";
				if (CollapseGetSTATE && CollapseGetSTATE == "false") {
					ISE(".ycs-app").setAttribute("CollapsedState", "false");
				}
			}
			console.log("SimpleOverlay");
		} else {
			ResetYCSBOXMode();
			console.log("Default");
		}
		await GM.setValue("YCSSTYLEMod_State", selectedmode);
	}
}
  
async function BlurycsSearchField(e) {
	if (e.type === 'keyup' && e.key.match(/enter/i)) {
		let msTIME = await GM.getValue("BlurycsSearchField_delay", 10); //<-- SPECIFY YOUR DELAY (Number and not string! and also in milisecond.)
		let mT = Number(msTIME);
		await sleep(mT * 1000);
		if (document.activeElement.id == "ycs-input-search") {
			document.activeElement.blur();
		}
	}
}
  
async function ToggleMODButton_Overlay() {
	if (!ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay")) {
		ISE(".ycs-app").style.transitionDuration = "50ms";
		ISE(".ycs-app").style.opacity = "0";
		ISE(".ycs-app").setAttribute("CollapsedState", "true");
		ISE(".ycs-app").classList.add("YCS-ModCSSByNJ1n9_Overlay");
		await sleep(70);
		ISE("#YCSBox-OverlayToggle").style.color = "rgb(145, 213, 153)";
		ISE(".ycs-app").style.top = "0";
		let CollapsedToggle = document.createElement("div");
		CollapsedToggle.setAttribute("id", "CollapseButton");
		CollapsedToggle.setAttribute("style", "cursor: pointer;width: 25px;height: 290px;position: absolute;left: -20px;top: 2px;background: #aacbe7;border-radius: 15px;opacity: 90%;");
		await ISE(".ycs-app").appendChild(CollapsedToggle);
		CollapsedToggle.addEventListener("click", function () {
			if (ISE(".ycs-app").getAttribute("CollapsedState") == "true") {
				ISE(".ycs-app").setAttribute("CollapsedState", "false");
				if (ISE(".ycs-app").offsetHeight >= 779) {
					ISE(".ycs-app").style.top = "-20px";
				} else {
					ISE(".ycs-app").style.top = "0";
				}
				document.addEventListener("keydown", Disable_Key); // Disable a key
				document.addEventListener("keyup", CollapseOverlay_Shortcut); // Press "Tab" to collapse the overlay YCScomment-box!
			} else if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
				document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
				document.removeEventListener("keydown", Disable_Key); // Disable a key
				ISE(".ycs-app").setAttribute("CollapsedState", "true");
				ISE(".ycs-app").style.top = "0";
			}
		});
		GM.setValue("YCSSTYLEMod_State", "Overlay");
		ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is in overlay-mode.");
		await sleep(70);
		await YCSBox_NotOverwhelmHeight();
		window.addEventListener("resize", YCSBox_NotOverwhelmHeight);
		let Elem_Searchfield = document.getElementById("ycs-input-search");
		Elem_Searchfield.addEventListener("search", CheckSizeResize);
		ISE("#ycs_btn_search").addEventListener("click", CheckSizeResize);
		ISE(".ycs-btn-panel.ycs_noselect").addEventListener("click", CheckSizeResize);
		ISE(".ycs-app").style.opacity = "";
		ISE(".ycs-app").style.transitionDuration = "";
	} else if (ISE(".ycs-app").classList.contains("YCS-ModCSSByNJ1n9_Overlay")) {
		if (ISE(".ycs-app").getAttribute("CollapsedState") == "false") {
			document.removeEventListener("keyup", CollapseOverlay_Shortcut); // Remove the eventListener to collapse the overlay
			document.removeEventListener("keydown", Disable_Key); // Disable a key
		}
		ISE(".ycs-app").classList.remove("YCS-ModCSSByNJ1n9_Overlay");
		ISE("#CollapseButton").remove();
		ISE("#YCSBox-OverlayToggle").style.color = "rgb(229, 92, 92)";
		ISE(".ycs-app").style.top = "";
		if (ISE(".ycs-app").getAttribute("style").length == 0) {
			ISE(".ycs-app").removeAttribute("style");
		}
		ISE(".ycs-app").removeAttribute("CollapsedState");
		GM.setValue("YCSSTYLEMod_State", null);
		ISE("#YCSBox-OverlayToggle").setAttribute("title", "YCS-Box is normal mode.");
		window.removeEventListener("resize", YCSBox_NotOverwhelmHeight);
		let Elem_Searchfield = document.getElementById("ycs-input-search");
		Elem_Searchfield.removeEventListener("search", CheckSizeResize);
		ISE("#ycs_btn_search").removeEventListener("click", CheckSizeResize);
		ISE(".ycs-btn-panel.ycs_noselect").removeEventListener("click", CheckSizeResize);
		if (ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result")) {
			ISE(".ycs-app.YCS-ModCSSByNJ1n9_Overlay .ycs-app-main #ycs-search-result").style.maxHeight = "";
			if (ISE(".ycs-app.YCS-ModCSSByNJ1n9_Overlay .ycs-app-main #ycs-search-result").style.length == 0) {
				ISE(".ycs-app.YCS-ModCSSByNJ1n9_Overlay .ycs-app-main #ycs-search-result").removeAttribute("style");
			}
		}
	}
}
function CheckSizeResize() {
	if (ISE(".ycs-app").offsetHeight >= 779) {
		ISE(".ycs-app").style.top = "-20px";
	} else {
		ISE(".ycs-app").style.top = "0";
	}
}

function CollapseOverlay_Shortcut(evtz) {
	if (evtz.which == 9) { // Tab Key
		evtz.preventDefault();
		ISE(".html5-video-player.ytp-transparent.ytp-exp-bottom-control-flexbox.ytp-larger-tap-buttons.ytp-exp-ppp-update").focus();
		ISE("#CollapseButton").click();
	}
}
function Disable_Key(evtz) {
	if (evtz.which == 9) { // Tab Key
		evtz.preventDefault();
		return;
	}
}
//*/
//==============================================================================
//Add label: What being searched?
//**
async function WhatTextIsSearchedin_YCS() {
  let CreateCSS_TextPreviewElem = document.createElement("style");
  CreateCSS_TextPreviewElem.innerHTML = '\n#YCS_SearchTextPreview::before {\n' + '  content: attr(ContentBeforeInner);\n' + '}\n';
  document.head.appendChild(CreateCSS_TextPreviewElem);
  await waitFor(_=> function(){if(document.getElementById("ycs-search").children.length > 0){return true;}return false;});
  var Create_TextPreviewElem = document.createElement("label");
  Create_TextPreviewElem.setAttribute("id", 'YCS_SearchTextPreview');
  if (ISE("label#YCS_TimestampMatchResult")) {
    await document.getElementById("ycs-search").children[0].insertBefore(Create_TextPreviewElem, ISE("label#YCS_TimestampMatchResult"));
  } else {
    await document.getElementById("ycs-search").children[0].appendChild(Create_TextPreviewElem);
  }
  
  function PreviewWhatTextSearched(e) {
    if (e.key && e.key.match(/enter/i)) {
      var Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
      var SearchFieldText = document.getElementsByClassName("ycs-searchbox")[0].children[0].value;
      if (SearchFieldText.length == 0) {
        Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Cleared! The previous result: ");
        if (ISE("#YCS_SearchTextPreview").getElementsByTagName("br").length == 0) {
          var Get_PreviousText = ISE("#YCS_SearchTextPreview").innerHTML;
          if (Get_PreviousText.replaceAll("\n", "").length == 0) {
            document.getElementById("YCS_SearchTextPreview").innerHTML = "\n<br>" + "[NONE XD]";
          } else {
            document.getElementById("YCS_SearchTextPreview").innerHTML = "\n<br>" + Get_PreviousText;
          }
        }
      } else {
        Get_TextPreviewElem.innerHTML = SearchFieldText;
        Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Searching: ");
      }
    }
  }
  await waitFor(_=> document.getElementById("ycs-input-search"));
  document.getElementById("ycs-input-search").addEventListener("keyup", PreviewWhatTextSearched);
	ISE("#ycs_btn_search").addEventListener("click", PreviewWhatTextSearched);
	ISE("#ycs_btn_timestamps").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[Comments, Replies, Chats with Timestamps]"
	});
	ISE("#ycs_btn_author").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[Comments, Replies, Chats from the Author]"
	});
	ISE("#ycs_btn_likes").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[Comments, Replies, Chats sorted by likes amount(Largest to Smallest)]"
	});
	ISE("#ycs_btn_replied_comments").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[Comments, Replies, Chats sorted by replies amount(Largest to Smallest)]"
	});
	ISE("#ycs_btn_members").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[Comments, Replies, Chats from channel members]"
	});
	ISE("#ycs_btn_donated").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[Chats from users who have donated]"
	});
	ISE("#ycs_btn_sort_first").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[All Comments and Chats sorted by date]"
	});
	ISE("#ycs_btn_random").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Showing: ");
		Get_TextPreviewElem.innerHTML = "[A random Comment]"
	});
	ISE("#ycs_btn_clear").addEventListener("click", function(){
		let Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
		Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Cleared! The previous result: ");
		if (ISE("#YCS_SearchTextPreview").getElementsByTagName("br").length == 0) {
      var Get_PreviousText = ISE("#YCS_SearchTextPreview").innerHTML;
      if (Get_PreviousText.replaceAll("\n", "").length == 0) {
        document.getElementById("YCS_SearchTextPreview").innerHTML = "\n<br>" + "[NONE XD]";
      } else {
        document.getElementById("YCS_SearchTextPreview").innerHTML = "\n<br>" + Get_PreviousText;
      }
    }
  });
  return;
}
//*/
//==============================================================================
//**
//Addons for the YCS-Box Overlay Mode: Resize the YCS-Box so the height will not be collapsed by window size
async function YCSBox_NotOverwhelmHeight(AdjustedSign) {
  if (ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result")) {
    await sleep(100);
  var YCSBox_HeightCalculated = (96 / 100) * ISE(".ycs-app").offsetHeight - 10;
  if (AdjustedSign != true && YCSBox_HeightCalculated < window.innerHeight && ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.length != 0) {
    ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.maxHeight = "";
    YCSBox_NotOverwhelmHeight(true);
    return;
  } else if (YCSBox_HeightCalculated < window.innerHeight && AdjustedSign == true) {
    console.log("YAY! The height is adjusted as needed now!");
    return;
  } else if (YCSBox_HeightCalculated > window.innerHeight) {
    let Get_MaxHeightElem = Number(ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.maxHeight.replace(/[a-z]/g, ""));
    if (Get_MaxHeightElem > 700) {
      ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.maxHeight = "";
      YCSBox_NotOverwhelmHeight(true);
      return;
    }
    let ChangeMaxHeight = (ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").offsetHeight - 10);
    if (Math.sign(ChangeMaxHeight) == -1) {
      ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.maxHeight = "";
      YCSBox_NotOverwhelmHeight(true);
      return;
    }
    let ConvertToPixelsHeight = ChangeMaxHeight + "px";
    ISE(".ycs-app[CollapsedState] .ycs-app-main #ycs-search-result").style.setProperty("max-height", ConvertToPixelsHeight, "important");
    /*if (AdjustedSign) {
      //console.log("Still calculating the MaxHeight...");
    } else {
      console.log("Changing the MaxHeight of the commentResult-Box..");
    }*/
    YCSBox_NotOverwhelmHeight(true);
    return;
  } else if (YCSBox_HeightCalculated < window.innerHeight && AdjustedSign != true) {
    console.log("No need to adjust the height, it is perfect the way it is!~");
    return;
  }
  }
  return;
}
//*/
//-------------------------------------------------------------------------------
//...
//---------------------------------------------------------------------------------------

//NOTE!! to disable thing, add "//" at every line of the command (before the command to be spesific) you want to disable:D
//******************************************************************************************************************************************
//Edit Log at: https://github.com/NJeyyy/About-Me/edit/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
