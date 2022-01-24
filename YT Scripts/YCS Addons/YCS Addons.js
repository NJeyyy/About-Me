// ==UserScript==
// @name             YCS optional function
// @namespace        YCS_Addons
// @homepageURL      https://github.com/NJeyyy/About-Me/tree/Userscripts/YT%20Scripts/YCS%20Addons
// @supportURL       https://github.com/NJeyyy/About-Me/blob/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
//Note> I know you may be confuse.. the "SupportURL" literally brought you to change log pageXD not support page, but don't worry there are also some help there (probably)
// @version          4ab
// @description      Various optional function for the YCS Extension!
/** List of function included here and the quick description**
 * description(focused Shortcut)   Since the developer (of YCS Extension) SUCKS, and didn't want to add this "SIMPLE" feature.. I will just add it myself😎
 * description(Add clear button)   I am to lazy pressing Ctrl + A always! or just use the clear button sometimes🙄 so why not🤓
 */
// @author           NJ1n9
// @match            https://www.youtube.com/*
// @icon             https://cdn-icons-png.flaticon.com/128/1383/1383327.png
// @require          https://github.com/NJeyyy/About-Me/raw/225e9b3930b628b668943ecc193deb3d5933f2cd/Global%20Tool%20Script/Custom%20Addition%20ToolScript%5BOnly%20the%20script%20list%5D.js
// @grant            GM.setValue
// @grant            GM.getValue
// @noframes
// ==/UserScript==

// since I cannot add multiple link:\
//I will put credits here😎😛
//Focus script action         : "https://github.com/jabbalaci/AutoFocus/blob/master/auto_focus.user.js"
//Hotkey script action        : "http://www.w3schools.com/jsref/event_key_keycode.asp"
//"Select all Text" Command   : "https://gist.github.com/gibson042/c9b3406bc54f55726ec4#file-focus_search-user-js"



//||~~~~~~~~~~~~USERSCRIPT REQUIREMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
// >Custom Addition ToolScript
// >FontIcon Script
// >Optional EventListener
//[NOTE!! You can insert the code below here too since this is from "Custom Addition ToolScript"]
// Above this line (Or just.. use @require)
//=================================================================================================================
//STARTER
sessionStorage.setItem("AlreadyRUN_YCSoptionalfunction", "false");

YCSSTARTER();
async function YCSSTARTER() {
    await sleep(1500);
    if (sessionStorage.getItem("AlreadyRUN_YCSoptionalfunction") == "true") {
			await waitFor(function(){if (document.visibilityState == 'visible') {return true} else {return false}})
			await sleep(500)
      window.removeEventListener('keyup', doc_keyUp, false);
      if (document.querySelector("div.YCS-optional-function-CONTAINER")) {
        await document.querySelector("div.YCS-optional-function-CONTAINER").remove();
				await document.querySelector("style.YCS-optional-function-CONTAINER").remove();
      }
      sessionStorage.setItem("AlreadyRUN_YCSoptionalfunction", "false");
    }
    await sleep(900);
    if (window.location.href.match("/*://www.youtube.com/watch*")) {
      await window.addEventListener('keyup', doc_keyUp, false);
      await sleep(1500);
      if (!(document.querySelector("div.YCS-optional-function-CONTAINER"))) {
				await waitFor(function(){if (document.visibilityState == 'visible') {return true} else {return false}})
			    await sleep(500)
          await AddmoreButtonFunctionality();
          await WhatTextIsSearchedin_YCS();
          await waitFor(_=> document.getElementById("ycs-input-search"));
          document.getElementById("ycs-input-search").addEventListener('search', SearchValueCLEAR);
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

//+=-==-=-===-==-=-=-==-=-=-==-=-=-=-=-==--=--==-=-=-=-=-=-=-==-=-=-=-=--=-===-=-==--==-=-=-==-=-=-=--=-=-==-=-=-
// To clear comments when input field is empty
async function SearchValueCLEAR() {
  var YIS = document.getElementById('ycs-input-search');
  if (YIS.value.length == "0") {
    document.getElementById("ycs_btn_clear").click();
		YIS.blur();
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
  await sleep(700);
  
  await waitFor(_ => document.querySelector(".ycs-app-main")); //<-- Just waiting~
  // The container for some optional physical Function
  let Create_Optionalmorephysicalfunction = document.createElement("div");
  Create_Optionalmorephysicalfunction.setAttribute("class", "YCS-optional-function-CONTAINER");
  Create_Optionalmorephysicalfunction.setAttribute("style", "position: relative;font-size: 20px;float: left;margin-top: 5px;margin-bottom: 5px;");
  await document.getElementsByClassName("ycs-app-main")[0].insertBefore(Create_Optionalmorephysicalfunction, document.getElementsByClassName("ycs-app-main")[0].children[2]);
	// And the CSSContainer for those element.
	let CreateCSS_Optionalmorephysicalfunction = document.createElement("style");
	CreateCSS_Optionalmorephysicalfunction.setAttribute("class", "YCS-optional-function-CONTAINER");
	CreateCSS_Optionalmorephysicalfunction.innerHTML = "\n"
		+ 'div.YCS-optional-function-CONTAINER *:hover {\n'
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
	await sleep(500);
  
  //Take Container Element
	var ElementContainer = document.querySelector("div.YCS-optional-function-CONTAINER");
  var CSSContainer = document.querySelector("style.YCS-optional-function-CONTAINER");
  var LocationElem_Searchfield = document.getElementById("ycs-input-search");
	
	//Option thing, false to disable a tool button(i.e make it not added/created.) true is the opposite.
	let ToptheBTNToggle = true;
	let PauseOnWhenSearchcmnt = true;
	let SelectAllOnfocus = true;
  let BlurAfterEnterinSearchField = true;
	
	
// Button to go to top of comment search result
//*
	if (ToptheBTNToggle) {
		let Create_ToptheBTN = document.createElement("div");
		Create_ToptheBTN.setAttribute("id", "GTopButton");
		Create_ToptheBTN.setAttribute("style", "position: relative;border-radius: 15%;background: #B5E1DB;width: 25px;height: 25px;color: #3c9fa3;cursor: pointer;display: inline-block;");
		Create_ToptheBTN.innerHTML = '<i class="far fa-arrow-alt-circle-up" style="margin: 0;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"></i>';
		await ElementContainer.appendChild(Create_ToptheBTN);
		document.getElementById("GTopButton").addEventListener("click", function(){document.getElementById("ycs-search-result").scrollTo(0, 0);});
    document.getElementById("GTopButton").addEventListener("contextmenu", function(e){e.preventDefault();window.scrollTo(0, 0);});
	}
//*/
		
// Button to Toggle: select all text on focus
//*
		if (SelectAllOnfocus) {
			let ToggleStatus = "ON" // ON and OFF (All-must-caps)
                              // ON : The function activated at the start (Text selected when search field on focus)
                              // OFF : The function must manually activated
  
			function SelectAllOnfocus_func() { //<-- Function for the target Element(Search Input)
				LocationElem_Searchfield.select();
			}
			function SelectAllOnfocus_ON() { //<-- For the button (toggle)
				document.getElementById("SelectAll-Onfocus").classList.replace("fa-pen", "fa-pen-square");
				document.getElementById("SelectAll-Onfocus").title = "All Text selected when input field is focused.";
				LocationElem_Searchfield.addEventListener("focus", SelectAllOnfocus_func);
				document.getElementById("SelectAll-Onfocus").removeEventListener("click", SelectAllOnfocus_ON);
				document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_OFF);
			}
			function SelectAllOnfocus_OFF() { //<-- For the button (toggle)
				document.getElementById("SelectAll-Onfocus").classList.replace("fa-pen-square", "fa-pen");
				document.getElementById("SelectAll-Onfocus").title = "Just like casual";
				LocationElem_Searchfield.removeEventListener("focus", SelectAllOnfocus_func);
				document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_ON);
				document.getElementById("SelectAll-Onfocus").removeEventListener("click", SelectAllOnfocus_OFF);
			}
			
			if (ToggleStatus == "OFF") {
				let Create_toggleSelectAllOnfocus = document.createElement("div");
				Create_toggleSelectAllOnfocus.setAttribute("id", "SelectAll-Onfocus");
				Create_toggleSelectAllOnfocus.setAttribute("style", "display: inline-block;background: rgb(231 231 231);border-radius: 25%;text-shadow: -1px 1px 0px #ffffff, 1px 1px 0px #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;cursor: grabbing;color: grey;");
				Create_toggleSelectAllOnfocus.setAttribute("class", "fas fa-pen");
				await ElementContainer.appendChild(Create_toggleSelectAllOnfocus);
				document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_ON);
			}
			else if (ToggleStatus == "ON") {
				LocationElem_Searchfield.addEventListener("focus", SelectAllOnfocus_func);
				let Create_toggleSelectAllOnfocus = document.createElement("div");
				Create_toggleSelectAllOnfocus.setAttribute("id", "SelectAll-Onfocus");
				Create_toggleSelectAllOnfocus.setAttribute("style", "display: inline-block;background: rgb(231 231 231);border-radius: 25%;text-shadow: -1px 1px 0px #ffffff, 1px 1px 0px #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;cursor: grabbing;color: grey;");
				Create_toggleSelectAllOnfocus.setAttribute("class", "fas fa-pen-square");
				await ElementContainer.appendChild(Create_toggleSelectAllOnfocus);
				document.getElementById("SelectAll-Onfocus").addEventListener("click", SelectAllOnfocus_OFF);
			}
	}
//*/
	
// Pause a video when searching comment, triggered when pressing the focused. (Toggleable)
//*
	if (PauseOnWhenSearchcmnt) {
		let Create_PauseOnWhenSearchElem = document.createElement("div");
		Create_PauseOnWhenSearchElem.setAttribute("id", "PauseOnWhenSearchBTN");
		Create_PauseOnWhenSearchElem.setAttribute("style", "background: rgb(163,163,163);padding: 3px;border-radius: 6px;cursor: url(https://cdn.custom-cursor.com/128/assets/pointers/32/Translucent_Pixel_Cursor.png) , pointer;")
		await ElementContainer.appendChild(Create_PauseOnWhenSearchElem);
		
		function PauseOnWhenSearch_Enableit() { // Turning it on. Current state off
			let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
			LocationElem_Searchfield.addEventListener("focus", PauseYTVid);
			ButtonElem.style.color = "rgb(249,107,86)";
			ButtonElem.setAttribute("class", "fas fa-stop-circle");
			ButtonElem.setAttribute("title", "Video will be paused when you're searching comments.");
			ButtonElem.addEventListener("click", PauseOnWhenSearch_Disableit);
			ButtonElem.removeEventListener("click", PauseOnWhenSearch_Enableit);
		}
		function PauseOnWhenSearch_Disableit() { // Turning it off Current state on
			let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
			LocationElem_Searchfield.removeEventListener("focus", PauseYTVid);
			ButtonElem.style.color = "rgb(107,245,86)";
			ButtonElem.setAttribute("class", "fas fa-play-circle");
			ButtonElem.setAttribute("title", "This button function is disabled.");
			ButtonElem.addEventListener("click", PauseOnWhenSearch_Enableit);
			ButtonElem.removeEventListener("click", PauseOnWhenSearch_Disableit);
		}
		
		let PauseOnWhenSearchcmnt_ToggleStart = false;
		// if true, it gonna enabled once it created. false is the opposite.
		
		if (PauseOnWhenSearchcmnt_ToggleStart) {
			await sleep(500)
			let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
			LocationElem_Searchfield.addEventListener("focus", PauseYTVid);
			ButtonElem.setAttribute("class", "fas fa-stop-circle");
			ButtonElem.style.color = "rgb(249,107,86)";
			ButtonElem.addEventListener("click", PauseOnWhenSearch_Disableit);
			await sleep(300)
			ButtonElem.title = "Video will be paused when you're searching comments.";
		} else {
			let ButtonElem = document.getElementById("PauseOnWhenSearchBTN"); // <-- Button that being used.
			ButtonElem.setAttribute("class", "fas fa-play-circle");
			ButtonElem.style.color = "rgb(107,245,86)";
			ButtonElem.addEventListener("click", PauseOnWhenSearch_Enableit);
			await sleep(300)
			ButtonElem.title = "This button function is disabled.";
		}
	}
//*/

// Blur search field after desired amount of time. (Toggleable)
  if (BlurAfterEnterinSearchField) {
    // BE CAREFUL ON CASES!!
    let ToggleStatusOfThisFunc_Stored = await GM.getValue("BlurAfterEnterinSearchField_Toggle", false);
    let ToggleStatusOfThisFunc = "OFF"; //"ON" make it turned on at the start, "OFF" is the opposite.
    
    let CSS_BlurAfterEnterinSearchField = "\n\n"
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
    ;
    CSSContainer.innerHTML += CSS_BlurAfterEnterinSearchField
    let Create_thisfunctionElem = document.createElement("div");
    Create_thisfunctionElem.setAttribute("style", "background: rgb(240,240,240);text-align: center;padding: 5px;border-radius: 7px;width: 27px;margin: 0;font-size: 17px;");
    Create_thisfunctionElem.setAttribute("id", "BlurAfterSearch");
    await ElementContainer.appendChild(Create_thisfunctionElem);
    
    
    function BlurAfterEnterinSearchField_Enableit() { // Turning it on, current state off
      let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
      Get_thisfunctionElem.setAttribute("ToggleStatus", "ON");
      Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass-half");
      LocationElem_Searchfield.addEventListener("search", BlurycsSearchField);
      Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Disableit, {once: true});
      GM.setValue("BlurAfterEnterinSearchField_Toggle", "ON")
    }
    function BlurAfterEnterinSearchField_Disableit() { // Turning it off, current state on
      let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
      Get_thisfunctionElem.setAttribute("ToggleStatus", "OFF");
      Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass");
      window.removeEventListener("search", BlurycsSearchField);
      Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Enableit, {once: true});
      GM.setValue("BlurAfterEnterinSearchField_Toggle", "OFF")
    }
    
    if (ToggleStatusOfThisFunc_Stored == "ON" || ToggleStatusOfThisFunc == "ON") { // ONNNNNNN
      let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
      Get_thisfunctionElem.setAttribute("ToggleStatus", "ON");
      Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass-half");
      
      window.addEventListener("search", BlurycsSearchField);
      Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Disableit, {once: true});
    } else if (ToggleStatusOfThisFunc_Stored == "OFF" || ToggleStatusOfThisFunc == "OFF") { // OFFFFFFFFF
      let Get_thisfunctionElem = document.getElementById("BlurAfterSearch");
      Get_thisfunctionElem.setAttribute("ToggleStatus", "OFF");
      Get_thisfunctionElem.setAttribute("class", "fas fa-hourglass");
      Get_thisfunctionElem.addEventListener("click", BlurAfterEnterinSearchField_Enableit, {once: true});
    }
  }
//- - - - - - - - - - - - -
	if (!(ToptheBTNToggle) && !(SelectAllOnfocus) && !(PauseOnWhenSearchcmnt) && !(BlurAfterEnterinSearchField)) {
		document.querySelector("div.YCS-optional-function-CONTAINER").remove();
		document.querySelector("style.YCS-optional-function-CONTAINER").remove();
	}
//--------------------
	async function BlurycsSearchField() {
    let msTIME = 10 * 1000; //<-- SPECIFY YOUR DELAY (Number and not string! and also in milisecond.)
    await sleep(msTIME);
    if (document.activeElement.id == "ycs-input-search") {
      await sleep(200)
      document.activeElement.blur();
    }
  }
  
	function PauseYTVid() {
		document.querySelector("video.video-stream").pause();
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
  let Create_TextPreviewElem = document.createElement("label");
  Create_TextPreviewElem.setAttribute("id", 'YCS_SearchTextPreview');
  await document.getElementById("ycs-search").children[0].appendChild(Create_TextPreviewElem);
  
  function PreviewWhatTextSearched() {
    var Get_TextPreviewElem = document.getElementById("YCS_SearchTextPreview");
    var SearchFieldText = document.getElementsByClassName("ycs-searchbox")[0].children[0].value;
    if (SearchFieldText.length == 0) {
      Get_TextPreviewElem.innerHTML = "";
      Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Search Field is empty.");
    } else {
      Get_TextPreviewElem.innerHTML = SearchFieldText;
      Get_TextPreviewElem.setAttribute("ContentBeforeInner", "Searching: ");
    }
  }
  await waitFor(_=> document.getElementById("ycs-input-search"));
  document.getElementById("ycs-input-search").addEventListener("search", PreviewWhatTextSearched);
  return;
}
//*/
//-------------------------------------------------------------------------------
//...
//---------------------------------------------------------------------------------------

//NOTE!! to disable thing, add "//" at every line of the command (before the command to be spesific) you want to disable:D
//******************************************************************************************************************************************
//Edit Log at: https://github.com/NJeyyy/About-Me/edit/Userscripts/YT%20Scripts/YCS%20Addons/Logs.log
