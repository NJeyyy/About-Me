// ==UserScript==
// @name        FontIcon Script
// @namespace   GlobalFunction_FontIconscript
// @match       *://*/*
// @version     𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚
// @author      NJ1n9
// @description Add FontIcon pack
// @icon        https://cdn.iconscout.com/icon/free/png-256/code-336-830581.png
// @noframes
// ==/UserScript==
// Created on 31/12/2021, 20:23:28

FontIcon_Script()
async function FontIcon_Script() {
  /**/
  // FontAwesome5 <script>
  if (!(document.getElementById("FontAwesome5script"))) {
    let FontAwesomeIcons_FontAwesome5script = document.createElement("script") // <-- Create
    FontAwesomeIcons_FontAwesome5script.src = "https://kit.fontawesome.com/60c72ab777.js" // <-- source Attribute
    FontAwesomeIcons_FontAwesome5script.setAttribute("class", "FontIcons_NJ1n9"); // <-- class Attribute
    FontAwesomeIcons_FontAwesome5script.setAttribute("crossorigin", "anonymous"); // <-- CrossOrigin Attribute
    FontAwesomeIcons_FontAwesome5script.setAttribute("id", "FontAwesome5script"); // <-- Element ID Attribute
    await document.head.appendChild(FontAwesomeIcons_FontAwesome5script) // <-- Append
  }
  //*/

  /**/
  // Google Icon: Material Icons <link>
  if (!(document.getElementById("GoogleIcons_MaterialIcons"))) {
    let GoogleIcons_MaterialIcons = document.createElement("link") // <-- Create
    GoogleIcons_MaterialIcons.setAttribute("id", "GoogleIcons_MaterialIcons"); // <-- Element ID Attribute
    GoogleIcons_MaterialIcons.setAttribute("class", "FontIcons_NJ1n9"); // <-- class Attribute
    GoogleIcons_MaterialIcons.rel = "stylesheet" // <-- relationship Attribute
    GoogleIcons_MaterialIcons.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons"); // <-- URL Path of source
    await document.head.appendChild(GoogleIcons_MaterialIcons) // <-- Append
  }
  //*/
  
  console.log("%cAll Icon link or script is implemented!", 'font-family: Arial;')
}
