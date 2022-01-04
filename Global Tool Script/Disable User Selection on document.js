// ==UserScript==
// @name            Disable User Selection on document
// @namespace       GlobalFunction_DisableUserSelectionoverDocument
// @match           *://*/*
// @grant           none
// @version         𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚
// @author          NJ1n9
// @description     Add overlay-button to the page to disable user selection
// @icon            https://cdn.iconscout.com/icon/free/png-256/code-336-830581.png
// ==/UserScript==
// Created on 31/12/2021, 19:30:27

let createCSS_ElementToggleBTN_DUS = document.createElement("style")
createCSS_ElementToggleBTN_DUS.setAttribute("id", "CSS_DisableUserSelection");
createCSS_ElementToggleBTN_DUS.innerHTML = 'div.DisableUserSelection {\n' + ' position: fixed;\n' + ' width: 30px;\n' + ' display: block;\n' + ' height: 30px;\n' + ' background: #f1f1f1;\n' + ' bottom: 10px;\n' + ' right: 10px;\n' + ' font-size: 30px;\n' + ' border-radius: 50%;\n' + ' user-select: none;' + ' opacity: 85%;' + '}\n' + '\n' + 'div.DisableUserSelection[ToggleStatus="ON"] {\n' + ' color: red;\n' + ' cursor: url(https://cdn.custom-cursor.com/db/cursor/32/Rock_Hand_cursor.png), auto;' + '}\n' + 'div.DisableUserSelection[ToggleStatus="ON"]:not(:hover) {\n' + ' opacity: 65%;\n' + '}\n' + '\n' + 'div.DisableUserSelection[ToggleStatus="OFF"] {\n' + ' color: green;\n' + ' cursor: alias;\n' + '}\n' + 'div.DisableUserSelection[ToggleStatus="OFF"]:not(:hover, :active) {\n' + ' opacity: 20%;\n' + '}\n';
document.head.appendChild(createCSS_ElementToggleBTN_DUS)
let create_ElementToggleBTN_DUS = document.createElement("div")
create_ElementToggleBTN_DUS.setAttribute("class", "DisableUserSelection fas");
create_ElementToggleBTN_DUS.setAttribute("ToggleStatus", "OFF");
document.body.appendChild(create_ElementToggleBTN_DUS)



function Userselection_disabled() {
  document.querySelectorAll("div.DisableUserSelection")[0].classList.replace("fa-check-circle", "fa-times-circle")
  document.querySelectorAll("div.DisableUserSelection")[0].setAttribute("ToggleStatus", "ON");
  
  var DisableUserselection = document.createElement("style")
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
let TOGGLEONOFF = "OFF"
// ON means the user selection is disabled on page when this script runs.
// OFF means the user selection is enabled and disabled manually by button.

if (TOGGLEONOFF = "ON") {
  let divDsbld = document.querySelectorAll("div.DisableUserSelection")[0]
  divDsbld.setAttribute("ToggleStatus", "ON");
  divDsbld.addEventListener("click", Userselection_enabled);
  divDsbld.classList.add("fa-times-circle");
  divDsbld.setAttribute("title", "You cannot selecting things\nSince this turned ON.")
}
else if (TOGGLEONOFF = "OFF") {
  let divDsbld = document.querySelectorAll("div.DisableUserSelection")[0]
  divDsbld.setAttribute("ToggleStatus", "OFF");
  divDsbld.addEventListener("click", Userselection_disabled);
  divDsbld.classList.add("fa-check-circle");
  divDsbld.setAttribute("title", "You'll still be able to selecting things\nSince this turned OFF.")
}
