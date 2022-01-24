// ==UserScript==
// @name          Optional EventListener
// @namespace     GlobalFunction_EventListenerAddons
// @match         *://*/*
// @grant         none
// @version       𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚
// @author        NJ1n9
// @description   Add custom EventListener
// @icon          https://cdn.iconscout.com/icon/free/png-256/code-336-830581.png
// @require       https://github.com/NJeyyy/About-Me/raw/225e9b3930b628b668943ecc193deb3d5933f2cd/Global%20Tool%20Script/Custom%20Addition%20ToolScript%5BOnly%20the%20script%20list%5D.js
// @noframes
// ==/UserScript==
// Created on 30/12/2021, 16:35:59


//||~~~~~~~~~~~~USERSCRIPT REQUIREMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
// >Custom Addition ToolScript
//[NOTE!! You can insert the code below here too since this is from "Custom Addition ToolScript"]
// Above this line (Or just.. use @require)
//=================================================================================================================



//-----------------------------------------------------------------------------
// Added on 30/12/2021, 16:35:59
// Source on: https://dirask.com/posts/JavaScript-on-location-changed-event-on-url-changed-event-DKeyZj
// Created by: Jacob
/* Thanks Jacob!~ */
/**/
//let locationchangeINNER = *[Just copy the function below:P]*

//let EventListener_Elem = document.createElement("script")
//EventListener_Elem.setAttribute("id", "Optional-EventListener")
//EventListener_Elem.innerHTML = locationchangeINNER
//document.head.appendChild(EventListener_Elem)
/*
;(async function(history) {
 // 31/12/2021
   //||There are 3 option: pushState, replaceState, and popstate.||
   //Idk are they're all working the same or not.
   //But you could pick just one. Otherwise if you pick more than one.
   //They will launch more than one too
   //(01/01/2022 12:30AM) Note: Okay.. now they're not working when 3 of them not being use.......
   //(01/01/2022 02:50PM) Note: now it's working as usual again..
   //(03/01/2022 03:01PM) IYa baru bangun boboque:vv.. btw code ny kuganti aj krna masi bngenngg..
   //(03/01/2022 10:15PM) Alrighty then.. Let's do some CoDEE:DD
  
    var pushState = history.pushState;
    var replaceState = history.replaceState;
    sessionStorage.setItem("locationchange_dispatched", "false")


   //popstate
   window.addEventListener('popstate', function() {
     window.dispatchEvent(new Event('locationchange'))
     //sessionStorage.setItem("locationchange_dispatched", "true")
   });

    //replaceState
    history.replaceState = function() {
      window.dispatchEvent(new Event('replacestate'));
      window.dispatchEvent(new Event('locationchange'));
      sessionStorage.setItem("locationchange_dispatched", "true")
      
      replaceState.apply(history, arguments);
    };

    //pushState
    history.pushState = function() {
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        sessionStorage.setItem("locationchange_dispatched", "true")
      
        return pushState.apply(history, arguments);
    };
  
})(window.history);
//*/

/*
window.addEventListener('locationchange', function(){
  // Put your code here
  console.log("INFO!")
})
//*/
//-----------------------------------------------------------------------------
///*
sessionStorage.removeItem("Current_URL");
GetCheckHREFURL();
function GetCheckHREFURL() {
  let OKEHER = window.location.href;
  sessionStorage.setItem("Current_URL", OKEHER);
  CheckURLHere();
}

async function CheckURLHere() {
  await sleep(10 * 1000);
  if (window.location.href == sessionStorage.Current_URL) {
    await sleep(5000);
    CheckURLHere();
  }
  else if (!(window.location.href == sessionStorage.Current_URL)) {
    await sleep(500);
    window.dispatchEvent(new Event('locationchange'));
    console.clear();
    await sleep(100)
    let consoleMessage = "\n\n" + "%c" + "CurrentURL: " + window.location.href + "\n\n" + "Previous URL: " + sessionStorage.Current_URL + "\n\n";
    let consoleMessage_style = 'font-family: Lucida sans;' + " " + 'Color: #D2302C;' + " " + 'text-width: bold;' + " " + 'font-stretch: ultra-expanded;' + " " + 'font-weight: 800;' + " " + 'font-size: 12px;';
    console.log(consoleMessage, consoleMessage_style);
    GetCheckHREFURL();
  }
}

//*/
//-----------------------------------------------------------------------------
///*
AddContextMenuTo4nElement();



function CreateContextMenuElement() {
  
  let CreateCTX_container = document.createElement("div");
  CreateCTX_container.setAttribute("id", "Optional-EventListener_CTXContainer");
  document.body.appendChild(CreateCTX_container);
  let CTX_container = document.getElementById("Optional-EventListener_CTXContainer");
  
  
  let CreateCTX_CSSVAL = '#Optional-EventListener_CTXContainer * {\n' + '  display: block;\n' + '  padding: 9px 15px;\n' + '  font-size: 13px;\n' + '  color: black;\n' + '  cursor: default;\n' + '  text-align: left;\n' + '}\n' + '#Optional-EventListener_CTXContainer *:hover {\n' + '  background: rgba(0,0,0, 2%);\n' + '  box-shadow: inset 0 0 25px rgba(0,0,0, 25%);\n' + '  /* offset-x | offset-y | blur-radius | spread-radius | color */\n' + '}\n' + '#Optional-EventListener_CTXContainer *:first-child {\n' + '  border-top-left-radius: 5%;\n' + '  border-top-right-radius: 5%;\n' + '}\n' + '#Optional-EventListener_CTXContainer *:last-child {\n' + '  border-bottom-left-radius: 5%;\n' + '  border-bottom-right-radius: 5%;\n' + '}\n' + '#Optional-EventListener_CTXContainer {\n' + '  user-select: none;\n' + '  background: #ECECEC;\n' + '  transform: scale(0);\n' + '  transform-origin: left top;\n' + '  transition: transform 500ms linear;\n' + '  width: 140px;\n' + '  position: fixed;\n' + '  border-radius: 5%;\n' + '  z-index: 99999;\n' + '  font-family: "lucida sans";\n' + '  display: fixed;\n' + '}\n' + '#Optional-EventListener_CTXContainer[Hidext] {\n' + '  transform: scale(1);\n' + '  transform-origin: left top;\n' + '  transition: transform 200ms linear;\n' + '}\n';
  let CreateCTX_CSS = document.createElement("style");
  CreateCTX_CSS.setAttribute("id", "Optional-EventListener_CTXCSS");
  CreateCTX_CSS.innerHTML = CreateCTX_CSSVAL;
  document.head.appendChild(CreateCTX_CSS);
  
  
  let CreateCTX_item1 = document.createElement("a");
  CreateCTX_item1.innerHTML = "Dispatch Event";
  CreateCTX_item1.setAttribute("class", "Optional-EventListener_CTXItem");
  CTX_container.appendChild(CreateCTX_item1);
  document.getElementsByClassName("Optional-EventListener_CTXItem")[0].addEventListener("click", ContextMenuAction1);
  
  let CreateCTX_item2 = document.createElement("a");
  CreateCTX_item2.innerHTML = "Check URL and dispatch";
  CreateCTX_item2.setAttribute("class", "Optional-EventListener_CTXItem");
  CreateCTX_item2.setAttribute("title", "Not Recommended!");
  CTX_container.appendChild(CreateCTX_item2);
  document.getElementsByClassName("Optional-EventListener_CTXItem")[1].addEventListener("click", ContextMenuAction2);
}


//Action 1: Dispatch the Event directly
function ContextMenuAction1() {
    window.dispatchEvent(new Event('locationchange'));
}
//Action 2: Check URL for dispatching the Event
function ContextMenuAction2() {
  let RUSUREqstnmrk2 = confirm("You sure wants to run the function.. AGAIN??");
  if (RUSUREqstnmrk2 == true) {
    let confirmation = confirm("Isn't that decision was a rash?\nAre you sure you're hand not slipped?");
    if (confirmation == true) {
      GetCheckHREFURL();
    }
    else {
      alert("*chuckles AHAH! Knew that..!");
    }
  }
  else {
    alert("Phew.. I am glad to hear that.");
  }
}

// Script-Mode on some website
//--->YouTube<-----
async function OPl_YouTubeMode() {
  
  await waitFor(_ => document.getElementsByClassName("ToggleTHEME_NJ1n9")[1]);
  if (!(document.getElementById("Optional-EventListener_CTXContainer"))) {
    let UsedELEM = document.getElementsByClassName("ToggleTHEME_NJ1n9")[1]; // The used Element in this page to implement the contextmenu
    await CreateContextMenuElement();
    UsedELEM.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      let CTX_container = document.getElementById("Optional-EventListener_CTXContainer");
      CTX_container.style.top = e.clientY + "px";
      CTX_container.style.left = e.clientX + "px";
      if (CTX_container.getAttribute("Hidext") !== "true") {
        document.getElementById("Optional-EventListener_CTXContainer").setAttribute("Hidext", "true");
      }
    });
    window.addEventListener("click", function() {
      if (document.getElementById("Optional-EventListener_CTXContainer").getAttribute("Hidext") == "true") {
        document.getElementById("Optional-EventListener_CTXContainer").removeAttribute("Hidext");
      }
    });
    let CTXElem_Container = document.getElementById("Optional-EventListener_CTXContainer"); // The container of ..
    CTXElem_Container.style.color = "#3D3D3D";
    CTXElem_Container.style.background = "red";
  }
}
//--------



// Runs the script
async function AddContextMenuTo4nElement() {
  await sleep(5000);
  let URLRequirements = window.location.href;
  
  // Youtube page
  if (URLRequirements.match("https://www.youtube.com/*")) {
    await OPl_YouTubeMode();
    window.addEventListener("locationchange", OPl_YouTubeMode);
  }
}
  

//*/
