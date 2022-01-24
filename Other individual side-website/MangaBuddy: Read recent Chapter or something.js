// ==UserScript==
// @name             MangaBuddy: Read recent Chapter or somethin'
// @namespace        Violentmonkey Scripts
// @match            https://mangabuddy.com/*
// @grant            none
// @version          3.0
// @author           NJ1n9
// @description      Recent or assign a chapter to read later on
// @icon             https://mangabuddy.com/static/sites/mangabuddy/icons/apple-touch-icon.png
// @require          https://github.com/NJeyyy/About-Me/raw/225e9b3930b628b668943ecc193deb3d5933f2cd/Global%20Tool%20Script/Custom%20Addition%20ToolScript%5BOnly%20the%20script%20list%5D.js
// ==/UserScript==

//||~~~~~~~~~~~~USERSCRIPT REQUIREMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
// >Custom Addition ToolScript
// >FontIcon Script
//[NOTE!! You can insert the code below here too since this is from "Custom Addition ToolScript"]
// Above this line (Or just.. use @require)
//=================================================================================================================



RUNGIRLLRUNTQsz()
async function RUNGIRLLRUNTQsz() {
  let LoadingOverlayCSS = document.createElement("style")
  LoadingOverlayCSS.setAttribute("class", "LoadingOverlayELEMENTS")  
  LoadingOverlayCSS.innerHTML = 'div[name="LoadingOverlay"] {\n'
  + ' background-color: black;\n'
  + ' top: 0px;\n'
  + ' left: 0px;\n'
  + ' width: 100vw;\n'
  + ' height: 100vh;\n'
  + ' z-index: 99999;\n'
  + ' opacity: 80%;\n'
  + ' position: fixed;\n'
  + ' cursor: cell;\n'
  + ' user-select: none;'
  + '}\n'
  + 'img[name="LoadingIcon"] {\n'
  + ' filter: invert(86%) sepia(1%) saturate(1660%) hue-rotate(115deg) brightness(107%) contrast(113%);\n'
  + ' height: auto;\n'
  + ' width: 10vw;\n'
  + ' position: absolute;\n'
  + ' top: 50vh;\n'
  + ' left: 50vw;\n'
  + ' transform: translate(-50%,-50%);\n'
  + '}\n'
  ;
  document.head.appendChild(LoadingOverlayCSS)
  let LoadingOverlayDIV = document.createElement("div")
  LoadingOverlayDIV.setAttribute("class", "LoadingOverlayELEMENTS")
  LoadingOverlayDIV.setAttribute("name", "LoadingOverlay")
  LoadingOverlayDIV.innerHTML = '<img name="LoadingIcon" src="https://i0.wp.com/mdhsociety.com/wp-content/uploads/2017/11/throbber.gif">'
  document.body.appendChild(LoadingOverlayDIV)
  document.getElementsByName('LoadingIcon')[0].setAttribute("draggable", false);
  await sleep(1500)
  await USESAVESOMECHAPTER();
  document.getElementsByClassName("LoadingOverlayELEMENTS")[1].remove();
  document.getElementsByClassName("LoadingOverlayELEMENTS")[0].remove();
}


function USESAVESOMECHAPTER() {
//==================================================================================================================================================\\
var CurrentManga = "AssignedChapt," + document.title.slice(0, -13).slice(5).split(/[\s]+/).join("_");
var MangaBuddyDefaultTheme_Text = "color: purple;  font-family: Lucida Sans;  font-weight: bold;"
//--------------------------------------THE POPUP USER-ACTION
  if (document.getElementsByClassName("book-details").length == "1") {

// Variables \\
var Source_recentChapter = document.getElementById("history-chap");
var Location_readrecentlyChaptBTN = document.getElementById("readchapterbtn");

//``````Modify the "Read" button```````````````````````````````````````````````````````````````````\\

async function GetRecentlyreadChapter() {
  await sleep(1500) // <-- Must wait a moment, to wait the thing loaded
  let Get_recentChapterHREF = Source_recentChapter.getElementsByTagName("a")[0].href;

  Location_readrecentlyChaptBTN.href = Get_recentChapterHREF;
  Location_readrecentlyChaptBTN.title = "Recently read chapter\n" + Location_readrecentlyChaptBTN.href;
  console.log("%cRead you're recently read chapter!", MangaBuddyDefaultTheme_Text)
}


async function GetRecentlyreadChapter_Assigned() {
  await sleep(1500) // <-- Must wait a moment, to wait the thing loaded
  let Get_recentChapterHREF = localStorage.getItem(CurrentManga);

  Location_readrecentlyChaptBTN.href = Get_recentChapterHREF;
  Location_readrecentlyChaptBTN.title = "Last assigned chapter\n" + Get_recentChapterHREF;
  console.log("%cRead chapter you've just assigned!", MangaBuddyDefaultTheme_Text)
}

async function NeverdoBoth() {
  
  Location_readrecentlyChaptBTN.title = "Read the First Chapter!";
  console.log("%cYou've never read this Comic.\nTry to read the first one..!\n\nAND ENJOY!!~", MangaBuddyDefaultTheme_Text)
}

if (Source_recentChapter.childNodes[0].nodeName == "A") {
  GetRecentlyreadChapter();
}
else if (localStorage.getItem(CurrentManga)) {
  GetRecentlyreadChapter_Assigned();
}
else {
  NeverdoBoth();
}
//___________________________________________________________________________________________________________\\
//``````````````````````Popup contextMenu for more option in the "Read" button`````````````````````````````\\
MakePopupContextMenu_Elem();

async function MakePopupContextMenu_Elem() {
 await sleep(1500);
  let CSS_4theBTNPopups = "menu#MangaBuddy-PopupContextmenu_RecentAssignChapter {\n"
  + "  position: absolute;\n"
  + "  z-index: 15;\n"
  + "  top: 281px;\n"
  + "  left: 10px;\n"
  + "  transform: scale(0);\n"
  + "  transform-origin: top;\n"
  + "  transition: transform 170ms linear;\n"
  + "}\n"
  + "\n"
  + "menu#MangaBuddy-PopupContextmenu_RecentAssignChapter[PopupRecentChapt_SHOW] {\n"
  + "  transform: scale(1);\n"
  + "  transition: transform 315ms linear;\n"
  + "}\n"
  + "\n"
  + "menu#MangaBuddy-PopupContextmenu_RecentAssignChapter a.MangaBuddy-PopupContextmenu_RecentAssignChapter {\n"
  + "  border: 1px solid grey;\n"
  + "  text-align: center;\n"
  + "  font-size: 0.9375em;\n"
  + "  font-family: 'Nunito Sans','Segoe UI','Helvetica Neue',Helvetica,Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans',sans-serif;"
  + "  width: 95px;\n"
  + "  height: 57px;\n"
  + "  display: block;\n"
  + "  padding: 7px 10px 13px 10px; /* top right bottom left */\n"
  + "  text-decoration: none;\n"
  + "\n"
  + "  -webkit-user-select: none; /* Safari */\n"
  + "  -khtml-user-select: none; /* Konqueror HTML */\n"
  + "  -moz-user-select: none; /* Old versions of Firefox */\n"
  + "  -ms-user-select: none; /* Internet Explorer/Edge */\n"
  + "  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n"
  + "}\n"
  + "\n"
  + "menu#MangaBuddy-PopupContextmenu_RecentAssignChapter a.MangaBuddy-PopupContextmenu_RecentAssignChapter:not(:hover, [disable], :active) {\n"
  + "  background-color: #ffffff;\n"
  + "  color: black;\n"
  + "}\n"
  + "\n"
  + "menu#MangaBuddy-PopupContextmenu_RecentAssignChapter a.MangaBuddy-PopupContextmenu_RecentAssignChapter:not(:last-child) {\n"
  + "  border-bottom: none; /* Prevent double borders */\n"
  + "}\n"
  + "\n"
  + "menu#MangaBuddy-PopupContextmenu_RecentAssignChapter a.MangaBuddy-PopupContextmenu_RecentAssignChapter:first-child {\n"
  + "  border-top-left-radius: 10%;\n"
  + "  border-top-right-radius: 10%;\n"
  + "}\n"
  + "\n"
  + "menu#MangaBuddy-PopupContextmenu_RecentAssignChapter a.MangaBuddy-PopupContextmenu_RecentAssignChapter:last-child {\n"
  + "  border-bottom-left-radius: 10%;\n"
  + "  border-bottom-right-radius: 10%;\n"
  + "}\n"
  + "\n"
  + "a.MangaBuddy-PopupContextmenu_RecentAssignChapter:hover:not([disable]) {\n"
  + "  background-color: #cdcdcd;\n"
  + "  color: black;\n"
  + "}\n"
  + "\n"
  + ".MangaBuddy-PopupContextmenu_RecentAssignChapter[disable] {\n"
  + "  background-color: white;\n"
  + "  color: rgba(0, 0, 0, 0.45);\n"
  + "  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.15);\n"
  + "  cursor: not-allowed;\n"
  + "}\n"
  ;
  let create_StyleElem = document.createElement("style");
  create_StyleElem.class = "MangaBuddyElem-PopupContextmenu_RecentAssignChapter";
  create_StyleElem.innerHTML = CSS_4theBTNPopups;
  document.head.appendChild(create_StyleElem);

  let Append_PopupContextmenuLocation = document.getElementsByClassName("book-info")[0];
  var create_TheElem = document.createElement("menu");
  create_TheElem.id = "MangaBuddy-PopupContextmenu_RecentAssignChapter";
  create_TheElem.innerHTML = "<a class='MangaBuddy-PopupContextmenu_RecentAssignChapter'>Recently Read</a>\n"
  + "<a class='MangaBuddy-PopupContextmenu_RecentAssignChapter'>Assigned Chapter</a>\n"
  ;
  await Append_PopupContextmenuLocation.appendChild(create_TheElem);
  
  let CONTEXTMENUPOPUP_ELEMNT = document.getElementById("MangaBuddy-PopupContextmenu_RecentAssignChapter");

  if (Source_recentChapter.childNodes[0].nodeName == "A" || localStorage.getItem(CurrentManga)) {
    Location_readrecentlyChaptBTN.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    CONTEXTMENUPOPUP_ELEMNT.setAttribute("PopupRecentChapt_SHOW", "");
  });
  document.getElementsByClassName("book-details")[0].addEventListener("click", function() {
      CONTEXTMENUPOPUP_ELEMNT.removeAttribute("PopupRecentChapt_SHOW");
  });
  }
  else {
    Location_readrecentlyChaptBTN.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert("%cYou've never read this Comic.\nSo there is no Recent or Assigned Chapter!")
  });
  }
  
  //----------------CHECK IF BUTTON HAVE THE SOURCE, IF NOT THEN DISABLED
  var PopupContextMenuELEMnt = document.getElementsByClassName("MangaBuddy-PopupContextmenu_RecentAssignChapter")
  if (!(localStorage.getItem(CurrentManga))) {
    PopupContextMenuELEMnt[1].setAttribute("disable", "");
  }
  else if (localStorage.getItem(CurrentManga)) {
    PopupContextMenuELEMnt[1].setAttribute("href", localStorage.getItem(CurrentManga))
  }
  if (Source_recentChapter.childNodes[0].nodeName == "A") {
    PopupContextMenuELEMnt[0].setAttribute("href", Location_readrecentlyChaptBTN.href);
  }
  else {
    PopupContextMenuELEMnt[0].setAttribute("disable", "");
  }
  
}}
//___________________________________________________________________________________________________________\\
//``````````````````````````````````Assign Chapter Action Section`````````````````````````````````````````````\\
  else if (document.getElementsByClassName("viewer").length == "1") {
    CretMkJSHTMLCSS_AssignButton();
    async function CretMkJSHTMLCSS_AssignButton() {
    //[THE CSS+HTML]
let create_CSSAssignBTNvalue = "@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');"
+ '/* Assign Chapter action */\n'
+ '#AssignChapterElem {\n'
+ '  font-size: 35px;\n'
+ '  position: sticky;\n'
+ '  top: 0;\n'
+ '  padding-top: 10px;\n'
+ '  margin-left: auto;\n'
+ '  margin-right: 10px;\n'
+ '  padding-bottom: 25px;\n'
+ '  user-select: none;\n'
+ '  cursor: url(https://drive.google.com/uc?export=download&id=1EPIw1-d9GcG6tFsr1hv_Pn6cnyYIBuez),auto;\n'
+ '}\n'
+ '#AssignChapterElem:not(:hover) {\n'
+ '  background: radial-gradient(circle, #555555, #AAAAAA, #FFFFFF);\n'
+ '  -webkit-background-clip: text;\n'
+ '  -webkit-text-fill-color: transparent;\n'
+ '}\n'
+ '\n'
+ '#AssignChapterElem[Assigned="true"]:hover {\n'
+ '  background: linear-gradient(to right bottom, #009245, #d0c200, #00A8C5, #D9E021);\n'
+ '  -webkit-background-clip: text;\n'
+ '  -webkit-text-fill-color: transparent;\n'
+ '  background-origin: top left;\n'
+ '}\n'
+ '#AssignChapterElem[Assigned="true"]:active {\n'
+ '  background: linear-gradient(to right bottom,  #d0c200, #00A8C5, #D9E021, #009245);\n'
+ '  -webkit-background-clip: text;\n'
+ '  -webkit-text-fill-color: transparent;\n'
+ '  transition: background 300ms linear;\n'
+ '}\n'
+ '#AssignChapterElem[Assigned="truse"]:hover {\n'
+ '  background: linear-gradient(to right bottom, #4D00FF, #A200FF, #C07AE9, #E97AE9);\n'
+ '  -webkit-background-clip: text;\n'
+ '  -webkit-text-fill-color: transparent;\n'
+ '  background-origin: top left;\n'
+ '}\n'
+ '#AssignChapterElem[Assigned="truse"] {\n'
+ '  font-size: 40px;\n'
+ '}\n'
+ '#AssignChapterElem[Assigned="truse"]:active {\n'
+ '  background: linear-gradient(to right bottom,  #C07AE9, #E97AE9, #4D00FF, #A200FF);\n'
+ '  -webkit-background-clip: text;\n'
+ '  -webkit-text-fill-color: transparent;\n'
+ '  transition: background 300ms linear;\n'
+ '}\n'
+ '#AssignChapterElem[Assigned="false"]:hover {\n'
+ '  background: linear-gradient(to right bottom, #fb0, #e43603, #ff6290, #ff5000);\n'
+ '  -webkit-background-clip: text;\n'
+ '  -webkit-text-fill-color: transparent;\n'
+ '  background-origin: top left;\n'
+ '}\n'
+ '#AssignChapterElem[Assigned="false"]:active {\n'
+ '  background: linear-gradient(to right bottom, #ff6290, #ff5000, #fb0, #e43603);\n'
+ '  -webkit-background-clip: text;\n'
+ '  -webkit-text-fill-color: transparent;\n'
+ '  transition: background 300ms linear;\n'
+ '}\n'
+ '#AssignChapterContainer {\n'
+ '  position: fixed;\n'
+ '  top: 26px;\n'
+ '  margin-left: auto;\n'
+ '  right: 25px;\n'
+ '  padding-bottom: 25px;\n'
+ '}\n'
+ '#AssignChapterMultipleAction {\n'
+ '  background: #D5CFCB;\n'
+ '  width: 120px;\n'
+ '  padding-top: 8px;\n'
+ '  padding-bottom: 8px;\n'
+ '  border-radius: 5%;\n'
+ '  transform: scale(0);\n'
+ '  transform-origin: top right;\n'
+ '  transition: transform 500ms linear;\n'
+ '}\n'
+ '#AssignChapterMultipleAction[Unhide] {\n'
+ '  transform: scale(1);\n'
+ '  transition: transform 500ms linear;\n'
+ '}\n'
+ '.AssignChapterMultipleAction {\n'
+ '  font-size: 13px;\n'
+ '  text-align: center;\n'
+ '  padding: 5px;\n'
+ '  font-family: "Work Sans", sans-serif;\n'
+ '  font-weight: 780;\n'
+ '  text-decoration: none;\n'
+ '  line-height: 1.5;\n'
+ '  user-select: none;\n'
+ '}\n'
+ '.AssignChapterMultipleAction:hover {\n'
+ '  background: rgba(255,255,255, 30%);\n'
+ '}\n'
+ '.AssignChapterMultipleAction:active {\n'
+ '  background: rgba(0,0,0, 15%);\n'
+ '}\n'
;
  let create_CSSAssignBTNElem = document.createElement("style");
  create_CSSAssignBTNElem.class = "AssignChapterCSS";
  create_CSSAssignBTNElem.innerHTML = create_CSSAssignBTNvalue;
  document.head.appendChild(create_CSSAssignBTNElem);
    
  // [Google Icons: Material Icon] is on individual script
  await waitFor(_ => document.getElementById("GoogleIcons_MaterialIcons"))

  let VIEWCHAPTER_elem = document.getElementById("viewer-page")
  var create_AssignBTNElem = document.createElement("div");
  create_AssignBTNElem.id = "AssignChapterElem"
  await VIEWCHAPTER_elem.insertBefore(create_AssignBTNElem, VIEWCHAPTER_elem.childNodes[0])
  document.getElementById("AssignChapterElem").setAttribute("class", "material-icons")
      
  var create_AssignBTNOptionalElem = document.createElement("div");
  create_AssignBTNOptionalElem.id = "AssignChapterContainer"
  create_AssignBTNOptionalElem.innerHTML = '<div id="AssignChapterMultipleAction">\n'
    + '<div class="AssignChapterMultipleAction">Assign this Chapter</div>\n'
    + '<div class="AssignChapterMultipleAction">Remove the saved Chapter</div>\n'
    ;
  await VIEWCHAPTER_elem.insertBefore(create_AssignBTNOptionalElem, VIEWCHAPTER_elem.childNodes[2])
  
    //[THE JS]
    
//======================================Assign Chapter Action Section
var AssignChapterButton = document.getElementById("AssignChapterElem");
//-------------------------------------- BUTTON SCRIPT TO ASSIGN CHAPTER
if (localStorage.getItem(CurrentManga) == window.location.href) {
  AssignChapterButton.setAttribute("Assigned", "true");
  AssignChapterButton.innerHTML = "cloud_done";
  AssignChapterButton.onclick = () => {
    var CONFIRMATION = confirm("Are you sure want to remove this chapter?\n *𝑀𝑎𝑘𝑒 𝑠𝑢𝑟𝑒 𝑦𝑜𝑢 𝑜𝑘𝑎𝑦 𝑡ℎ𝑎𝑡 𝑡ℎ𝑖𝑠 𝑝𝑎𝑔𝑒 𝑔𝑜𝑛𝑛𝑎 𝑔𝑒𝑡 𝑟𝑒𝑙𝑜𝑎𝑑.");
    if (CONFIRMATION == true) {
      localStorage.removeItem(CurrentManga);
      window.location.reload()
    }
  };
}
else if (localStorage.getItem(CurrentManga)) {
  AssignChapterButton.setAttribute("Assigned", "truse");
  AssignChapterButton.innerHTML = "cloud_circle";
  AssignChapterButton.onclick = () => {
    if (document.getElementById("AssignChapterMultipleAction").getAttribute("Unhide")) {
      document.getElementById("AssignChapterMultipleAction").removeAttribute("Unhide");
      clearInterval(AssignBTNPopup_Position)
      }
    else {
      document.getElementById("AssignChapterMultipleAction").setAttribute("Unhide", "");
      var AssignBTNPopup_Position = setInterval(function() {
if (document.body.getBoundingClientRect().top >= -101.11111450195312) {
  let USEELEMNOFTHS = document.getElementById("AssignChapterContainer")
  USEELEMNOFTHS.style.top = (((-101.11111450195312+document.body.getBoundingClientRect().top)+101.11111450195312)+130) + "px"
  //USEELEMNOFTHS.style.top = "130px" //<-- when the scroll position is on top Y=0
}
else {
  let USEELEMNOFTHS = document.getElementById("AssignChapterContainer")
  USEELEMNOFTHS.style.top = "26px"
}}, 100)
    }
  };
}
else {
  AssignChapterButton.setAttribute("Assigned", "false");
  AssignChapterButton.innerHTML = "cloud_upload";
  AssignChapterButton.onclick = () => {
    var CONFIRMATION = confirm("Are you sure want to assign this chapter?\n *𝑀𝑎𝑘𝑒 𝑠𝑢𝑟𝑒 𝑦𝑜𝑢 𝑜𝑘𝑎𝑦 𝑡ℎ𝑎𝑡 𝑡ℎ𝑖𝑠 𝑝𝑎𝑔𝑒 𝑔𝑜𝑛𝑛𝑎 𝑔𝑒𝑡 𝑟𝑒𝑙𝑜𝑎𝑑.");
    if (CONFIRMATION == true) {
      localStorage.setItem(CurrentManga, window.location.href);
      window.location.reload()
    }
  };
}
      
var Action1 = document.getElementsByClassName("AssignChapterMultipleAction")[0];
var Action2 = document.getElementsByClassName("AssignChapterMultipleAction")[1];
Action1.onclick = () => {
  // This Element text: Assign this Chapter
  var CONFIRMATION = confirm("Are you sure want to assign this chapter?\n *𝑀𝑎𝑘𝑒 𝑠𝑢𝑟𝑒 𝑦𝑜𝑢 𝑜𝑘𝑎𝑦 𝑡ℎ𝑎𝑡 𝑡ℎ𝑖𝑠 𝑝𝑎𝑔𝑒 𝑔𝑜𝑛𝑛𝑎 𝑔𝑒𝑡 𝑟𝑒𝑙𝑜𝑎𝑑.");
    if (CONFIRMATION == true) {
        localStorage.setItem(CurrentManga, window.location.href);
        window.location.reload()
    }
};
Action2.onclick = () => {
  // This Element text: Remove the saved Chapter
  var CONFIRMATION = confirm("Are you sure want to remove the saved chapter?\n *𝑀𝑎𝑘𝑒 𝑠𝑢𝑟𝑒 𝑦𝑜𝑢 𝑜𝑘𝑎𝑦 𝑡ℎ𝑎𝑡 𝑡ℎ𝑖𝑠 𝑝𝑎𝑔𝑒 𝑔𝑜𝑛𝑛𝑎 𝑔𝑒𝑡 𝑟𝑒𝑙𝑜𝑎𝑑.");
    if (CONFIRMATION == true) {
      localStorage.removeItem(CurrentManga);
      window.location.reload()
    }
};


  }}
}
//___________________________________________________________________________________________________________\\

/* Note: This was created on an end of 2021 */
