// ==UserScript==
// @name             Simple Tools
// @namespace        GlobalFunction_SimpleTool
// @match            *://*/*
// @exclude-match    https://codepen.io/*
// @grant            none
// @version          𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚
// @author           NJ1n9
// @description      Add overlay-button to the page to disable user selection
// @icon             https://cdn.icon-icons.com/icons2/1859/PNG/512/settings5_117934.png
// @require          https://github.com/NJeyyy/About-Me/raw/dd58f08d979f095a98dfa464d8b0896cbb2528d6/Global%20Tool%20Script/Custom%20Addition%20ToolScript%5BOnly%20the%20script%20list%5D.js
// @resource         SimToolsCSS https://github.com/NJeyyy/About-Me/raw/bf8a6daf8447e169929be623fae80076dee703d4/Global%20Tool%20Script/Simple%20Tools%5BUSERSCRIPT%5D.txt
// @grant            GM.setValue
// @grant            GM.getValue
// @grant            GM_getResourceText
// @noframes
// ==/UserScript==
// Created on 31/12/2021, 19:30:27

//||~~~~~~~~~~~~USERSCRIPT REQUIREMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
// >Custom Addition ToolScript (you can use @require) get the link here: https://github.com/NJeyyy/About-Me/tree/Userscripts/Global%20Tool%20Script
// >FontIcon Script
// 
//[NOTE!! You can insert the code below here too since this is from "Custom Addition ToolScript"]
//=================================================================================================================
RunFUNCTIONTHNG()

async function RunFUNCTIONTHNG() {
  await CreateSimpleToolCont() //SimpleTools Container
  //await UserselectionFUNC() //Disable User Selection on document
  
  await sleep(10*1000);
  CheckSimpleTool_usable();
}

/*
if (document.getElementById("SimTool-Overlay").style.width != "") {
    document.getElementById("SimTool-Overlay").style.width = "";
  }
*/
//******************************************************************************************************************************
//Create the Container
async function CreateSimpleToolCont() {
  let ElemcrtCSSinner = GM_getResourceText("SimToolsCSS");
  let ElemcrtCSS = document.createElement("style");
  ElemcrtCSS.setAttribute("id", "SimTool-CSS");
  ElemcrtCSS.innerHTML = ElemcrtCSSinner;
  document.head.appendChild(ElemcrtCSS);
  let ElemcrtCONT_bottomPX = await GM.getValue("YPosition_bottom", "10px");
  let ElemcrtCONT = document.createElement("div");
  ElemcrtCONT.setAttribute("id", "SimTool-Overlay");
  ElemcrtCONT.setAttribute("SlideOverlay", "false");
  let ElemcrtCONTStyleattr = "width:20px; bottom:" + ElemcrtCONT_bottomPX + ";";
  ElemcrtCONT.setAttribute("style", ElemcrtCONTStyleattr);
  await document.body.appendChild(ElemcrtCONT);
  document.getElementById("SimTool-Overlay").addEventListener("contextmenu", NOCLICKHERE);
  
  let ElementcrtGRIP = document.createElement("div");
  ElementcrtGRIP.setAttribute("id", "SimTool-Overlay-Grip");
  document.getElementById("SimTool-Overlay").appendChild(ElementcrtGRIP);
  ISE("#SimTool-Overlay-Grip").addEventListener("contextmenu", SimToolCollEx);
  async function SimToolCollEx(e) {
    e.preventDefault();
    if (document.getElementById("SimTool-Overlay").getAttribute("SlideOverlay") == "false") {
      document.getElementById("SimTool-Overlay").setAttribute("SlideOverlay", "true");
      document.addEventListener("click", SlideOverlayHide);
      document.getElementById("SimTool-Overlay").addEventListener("click", NOCLICKHERE);
    } else if (document.getElementById("SimTool-Overlay").getAttribute("SlideOverlay") == "true") {
      document.getElementById("SimTool-Overlay").setAttribute("SlideOverlay", "false");
      document.removeEventListener("click", SlideOverlayHide);
      document.getElementById("SimTool-Overlay").removeEventListener("click", NOCLICKHERE);
    }
  }
  
  let SlideSideState = await GM.getValue("SlideSideSTATE", "left");
  if (SlideSideState == "right") {
    document.getElementById("SimTool-Overlay").setAttribute("SlideSide", "right");
  } else if (SlideSideState == "left") {
    document.getElementById("SimTool-Overlay").setAttribute("SlideSide", "left");
  }
  
  function SlideOverlayHide() {
    if (document.getElementById("SimTool-Overlay").getAttribute("SlideOverlay") == "true") {
      document.getElementById("SimTool-Overlay").setAttribute("SlideOverlay", "false");
      document.getElementById("SimTool-Overlay").removeEventListener("click", NOCLICKHERE);
    }
  }
  function NOCLICKHERE(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  
  dragElement(document.getElementById("SimTool-Overlay"), ISE("#SimTool-Overlay-Grip"));
  function dragElement(elmnt, ElementGrip) {
    var rightZone = 200;
    var leftZone = 200;
    
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else if (ElementGrip) {
      //ElementGrip.ontouchstart = dragMouseDown;
      ElementGrip.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      //elmnt.ontouchstart = dragMouseDown;
      elmnt.onmousedown = dragMouseDown;
    }
    
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      
      if (e.which == 1) {
        //document.ontouchend = closeDragElement;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        elmnt.style.position = "fixed";
        elmnt.style.transform = "none";
        //document.ontouchmove = elementDrag;
        document.onmousemove = elementDrag;
      }
    }
    
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault(); 
      // calculate the new cursor position:
      var elmntWidth = elmnt.offsetWidth + 5;
      var elmntHeight = elmnt.offsetHeight - 20;
      var pos4 = window.innerHeight - e.clientY - elmntHeight;
      // set the element's new position:
      if (elmnt.getAttribute("SlideSide") == "right") {
        let pos3r = window.innerWidth - e.clientX - (elmntWidth + 15);
        elmnt.style.right = pos3r + "px";
      } else if (elmnt.getAttribute("SlideSide") == "left") {
        let pos3l = e.clientX - elmntWidth;
        elmnt.style.left = pos3l + "px";
      }
      elmnt.style.bottom = pos4 + "px";
    }
    
    function closeDragElement(e) {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      //document.ontouchend = null;
      //document.ontouchmove = null;
      if (e.clientX >= window.innerWidth - rightZone) {
        elmnt.setAttribute("SlideSide", "right");
        GM.setValue("SlideSideSTATE", "right");
      } else if (e.clientX <= leftZone) {
        elmnt.setAttribute("SlideSide", "left");
        GM.setValue("SlideSideSTATE", "left");
      }
      elmnt.style.left = "";
      elmnt.style.right = "";
      elmnt.style.position = "fixed";
      elmnt.style.transform = "";
      GM.setValue("YPosition_bottom", elmnt.style.bottom);
    }
  }
  console.log("SimpleTool-Container element is created!");
  return;
}

function CheckSimpleTool_usable() {
  if (document.getElementById("SimTool-Overlay").children.length == 0) {
    document.getElementById("SimTool-Overlay").remove();
    document.getElementById("SimTool-CSS").remove();
    console.warn("ToolBox for simple tool is removedm since there's no tools at all in it.");
  }
  return;
}
//------------------------------------------------------------------------------------------------------------------------------
//ToolName    :  Disable User Selection on document
//Description :  Add overlay-button to the page to disable user selection
async function UserselectionFUNC() {
  await waitFor(_ => document.getElementById("SimTool-Overlay"));
  await waitFor(_ => document.getElementById("FontAwesome5script"));
  if (document.getElementById("SimTool-Overlay").hasAttribute("style")) {
    document.getElementById("SimTool-Overlay").style.width = "";
  }
  let createCSS_ElementToggleBTN_DUS = document.createElement("style");
  createCSS_ElementToggleBTN_DUS.setAttribute("id", "CSS_DisableUserSelection");
  createCSS_ElementToggleBTN_DUS.innerHTML = 'div.DisableUserSelection {\n' + ' background: #f1f1f1;\n' + ' font-size: 30px;\n' + ' border-radius: 50%;\n' + ' opacity: 85%;\n' + '}\n' + '\n' + 'div.DisableUserSelection[ToggleStatus="ON"] {\n' + ' color: red;\n' + ' cursor: url(https://cdn.custom-cursor.com/db/cursor/32/Rock_Hand_cursor.png), auto;\n' + '}\n' + 'div.DisableUserSelection[ToggleStatus="ON"]:not(:hover) {\n' + ' opacity: 65%;\n' + '}\n' + '\n' + 'div.DisableUserSelection[ToggleStatus="OFF"] {\n' + ' color: green;\n' + ' cursor: alias;\n' + '}\n' + 'div.DisableUserSelection[ToggleStatus="OFF"]:not(:hover, :active) {\n' + ' opacity: 20%;\n' + '}\n';
  await document.head.appendChild(createCSS_ElementToggleBTN_DUS)
  let create_ElementToggleBTN_DUS = document.createElement("div");
  create_ElementToggleBTN_DUS.setAttribute("class", "DisableUserSelection fas");
  create_ElementToggleBTN_DUS.setAttribute("Team", "SimTool-Overlay");
  await document.getElementById("SimTool-Overlay").appendChild(create_ElementToggleBTN_DUS)




  function Userselection_disabled() {
    document.querySelectorAll("div.DisableUserSelection")[0].classList.replace("fa-check-circle", "fa-times-circle")
    document.querySelectorAll("div.DisableUserSelection")[0].setAttribute("ToggleStatus", "ON");
    
    let DisableUserselection = document.createElement("style")
    DisableUserselection.setAttribute("class", "DisableUserSelection")
    DisableUserselection.innerHTML = "html {\n"
      + "user-select: none;\n"
      + "}\n"
      + "\n"
      + "input, textarea {\n"
      + " user-select: text;\n"
      + "}\n"
    ;
    document.head.appendChild(DisableUserselection)
    
    document.querySelectorAll("div.DisableUserSelection")[0].removeEventListener("click", Userselection_disabled)
    document.querySelectorAll("div.DisableUserSelection")[0].addEventListener("click", Userselection_enabled)
    document.querySelectorAll("div.DisableUserSelection")[0].setAttribute("title", "You cannot selecting things\nSince this turned ON.")
  }
  
  
  function Userselection_enabled() {
    document.querySelectorAll("div.DisableUserSelection")[0].setAttribute("ToggleStatus", "OFF");
    document.querySelectorAll("div.DisableUserSelection")[0].classList.replace("fa-times-circle", "fa-check-circle")
    document.querySelectorAll("style.DisableUserSelection")[0].remove();
    document.querySelectorAll("div.DisableUserSelection")[0].removeEventListener("click", Userselection_enabled)
    document.querySelectorAll("div.DisableUserSelection")[0].addEventListener("click", Userselection_disabled)
    document.querySelectorAll("div.DisableUserSelection")[0].setAttribute("title", "You'll still be able to selecting things\nSince this turned OFF.")
  }
  
  
  //TOGGLE CONDITION
  var TOGGLEONOFF = "OFF"
  // ON means the user selection is disabled on page when this script runs.
  // OFF means the user selection is enabled and disabled manually by button.

  if (TOGGLEONOFF == "ON") {
    let DisableUserselection = document.createElement("style")
    DisableUserselection.setAttribute("class", "DisableUserSelection")
    DisableUserselection.innerHTML = "html {\n" + "user-select: none;\n" + "}\n" + "\n" + "input, textarea {\n" + " user-select: text;\n" + "}\n";
    document.head.appendChild(DisableUserselection)
    
    let divDsbld = document.querySelectorAll("div.DisableUserSelection")[0];
    divDsbld.setAttribute("ToggleStatus", "ON");
    divDsbld.addEventListener("click", Userselection_enabled);
    divDsbld.classList.add("fa-times-circle");
    divDsbld.setAttribute("title", "You cannot selecting things\nSince this turned ON.")
  } else if (TOGGLEONOFF == "OFF") {
    let divDsbld = document.querySelectorAll("div.DisableUserSelection")[0]
    divDsbld.setAttribute("ToggleStatus", "OFF");
    divDsbld.addEventListener("click", Userselection_disabled);
    divDsbld.classList.add("fa-check-circle");
    divDsbld.setAttribute("title", "You'll still be able to selecting things\nSince this turned OFF.")
  }
  console.log("Toggle selection is available!");
  return;
}

//------------------------------------------------------------------------------------------------------------------------------
//ToolName    :  NJ1n9: Custom Alarms
//Description :  Custom Alarms and Timer Originally made by me😀😄
