// ==UserScript==
// @name            Custom Addition ToolScript
// @namespace       GlobalFunction_CustomAdditionTLScript
// @match           *://*/*
// @version         1.5a
// @author          NJ1n9
// @description     Some ToolScript that combined.
// @icon            https://cdn.iconscout.com/icon/free/png-256/code-336-830581.png
// @noframes
// @grant           none
// ==/UserScript==
//Created on 04/01/2022, 22:04:26

/** FAQ
 * > I want to use it on my script too! How can I use it?
      ^ To answer that question:
        You can use it by installing this userscript. Or by copying
        some function listed below depends on your desire on every
        script you use!
        Note: If you install this. Script(/userscript) you use only
        be able to use it once it loaded. So make sure on userscript it "@run-at"..
        The one that not "document-start" or before that;D
 * 
 */
/**
// ToolScript 1
//===========SLEEP(miliseconds) Function================================================================\\  <-- Added on V1
// Source: https://stackoverflow.com/a/39914235/15715476
// use "sleep(N)" to use this function, it is useful to wait for certain task.
// btw just FYI "N"mean the time you needed, it is in ms btw so-- 1 sec mean 1000 miliseconds

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````\\
// ToolScript 2
//===========WaitFor a conditionFunction================================================================\\  <-- Added on V1
// Source: https://stackoverflow.com/a/52652681/15715476
// use waitFor(conditionFunction) to wait for a certain condition to met.
//** Example:
//* >Example 1
//  async function demo() {
//    await waitFor(_ => flag === true);
//    console.log('the wait is over!');
//  }
//* Or
//* >Example 2
//  waitFor(_ => flag === true)
//    .then(_ => console.log('the wait is over!'));
//* 
//*
// Note: Yes. It must use "_ => " at the start. Cannot explain it since I don't know too rnXD

function waitFor(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }

  return new Promise(poll);
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````\\
// ToolScript 3
//===========Alternate to Eval()================================================================\\  <-- Added on V1
// Source: https://stackoverflow.com/a/18082175/15715476
// For Counting a string. Similar to Eval() I.. literally don't know what's the difference rn btw..

function evil(fn) {
  return new Function('return ' + fn)();
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````\\
// ToolScript 4
//===========Copy To Clipboard================================================================\\  <-- Added on V1.5
// Source: https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
// Copy Text. or things, to clipboard.

function copyToClipboard(text) {
   const elem = document.createElement('textarea');
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````\\
// ToolScript 5
//===========Select Element With ElementSelector (Individually / Grouping)================================================================\\  <-- Added on V1.5a
// Source: Myself HAHA
// Select Element by ElementSelector just like CSS. It's use "document.querySelector" (Individual Element) or "document.querySelectorAll" (Multiple Element).
// Depends on how you use it!
//Grouping Mode
function SE(ElementSelector) {
  if (document.querySelectorAll(ElementSelector).length === 0) {
    return null;
  }
  return document.querySelectorAll(ElementSelector);
}

//Individually Mode
function ISE(ElementSelector) {
  return document.querySelector(ElementSelector);
}

//```````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//*/



//~~~~~~~~~~~Implement in to the "head" tag so it can be used globally~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\ <-- Added and fixed in v1.5
/**/
Custom_Addition_ToolScript();
AddonsScript();
async function Custom_Addition_ToolScript() {
  // ToolScript1-- SLEEP(miliseconds) Function
  let ToolScript1 = "function sleep(ms) {\n" + "  return new Promise(resolve => setTimeout(resolve, ms));\n" + "};\n";
  // ToolScript2-- WaitFor a conditionFunction
  let ToolScript2 = "function waitFor(conditionFunction) {\n" + "\n" + "  const poll = resolve => {\n" + "    if(conditionFunction()) resolve();\n" + "    else setTimeout(_ => poll(resolve), 400);\n" + "  }\n" + "\n" + "  return new Promise(poll);\n" + "}\n";
  // ToolScript3-- Alternate to Eval()
  let ToolScript3 = "function evil(fn) {\n" + "  return new Function('return ' + fn)();\n" + "}\n";
  // ToolScript4-- Copy To Clipboard
  let ToolScript4 = 'function copyToClipboard(text) {\n' + '   const elem = document.createElement("textarea");\n' + '   elem.value = text;\n' + '   document.body.appendChild(elem);\n' + '   elem.select();\n' + '   document.execCommand("copy");\n' + '   document.body.removeChild(elem);\n' + '}\n';
  // ToolScript5-- Select Element With ElementSelector (Individually / Grouping)
  let ToolScript5 = "//Grouping Mode\n" + "function SE(ElementSelector) {\n" + "  if (document.querySelectorAll(ElementSelector).length === 0) {\n" + "    return null;\n" + "  }\n" + "  return document.querySelectorAll(ElementSelector);\n" + "}\n" + "\n" + "//Individually Mode\n" + "function ISE(ElementSelector) {\n" + "  return document.querySelector(ElementSelector);\n" + "}\n";
  
  let ToolScriptSeparator = "\n//----------------------------------\n\n"
  let Scriptof_CustomAdditionToolScript = ToolScript1 + ToolScriptSeparator + ToolScript2 + ToolScriptSeparator + ToolScript3 + ToolScriptSeparator + ToolScript4 + ToolScriptSeparator + ToolScript5;
  let consolethng = "%c" + "Custom ToolScript is Added."
  + "\n\nHere's the list of added command: "
  + "\n>SLEEP(miliseconds) Function\nThe Command: sleep(ms)\n  It is useful to wait for certain task."
  + "\n>WaitFor a conditionFunction\nThe Command: waitFor(conditionFunction)\n  To wait for a certain condition to met."
  + "\n>Alternate to Eval()\nThe Command: evil(fn)\n  For Counting a string. Similar to Eval() I.. literally don't know what's the difference rn btw.."
  + "\n>Copy To Clipboard\nThe Command: copyToClipboard(text)\n  Copy Text. or things, to clipboard."
  + "\n>Select Element With ElementSelector (Individually / Grouping)\nThe Command(There's multiple):\n *SE(ElementSelector) [To select multiple]\n *ISE(ElementSelector) [Select Individually(Unable to pick tho SADD)]\nSelect Element by ElementSelector just like CSS.\nIt's use \"document.querySelector\" (Individual Element) or \"document.querySelectorAll\" (Multiple Element). Depending on how you use it!"
  + "\n"
  ;
  let Create_CustomAdditionToolScriptElem = document.createElement("script");
  Create_CustomAdditionToolScriptElem.setAttribute("id", "Custom-Addition-ToolScript")
  Create_CustomAdditionToolScriptElem.setAttribute("type", "application/javascript")
  Create_CustomAdditionToolScriptElem.innerHTML = Scriptof_CustomAdditionToolScript;
  await document.head.appendChild(Create_CustomAdditionToolScriptElem)
  console.log(consolethng, "color: blue;font-family: monospace;");
}

async function AddonsScript() {
  var TheScriptElem = document.getElementById("Custom-Addition-ToolScript");
  var CurrentHost = window.location.hostname;
  //Host list, Only add this script on specific domain/host.
  var YT = "www.youtube.com"
  
  if (CurrentHost == YT) {
    let YT_AddonS1_varqup1 = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"]*)/i
    let YT_AddonS1 = "function GetYoutubeVid_id(url){\n" + ' var regExp = ' + YT_AddonS1_varqup1 + ';\n' + ' var match = url.match(regExp);\n' + ' return (match && match[1].length==11)? match[1] : false;\n' + '}\n'
    let YT_Addon = "\n" + YT_AddonS1;
    
    let CreateAddition_CustomAdditionToolScriptElem = document.createElement("script");
    CreateAddition_CustomAdditionToolScriptElem.setAttribute("class", "Custom-Addition-ToolScript_Optional");
    CreateAddition_CustomAdditionToolScriptElem.setAttribute("type", "application/javascript");
    CreateAddition_CustomAdditionToolScriptElem.innerHTML = YT_Addon;
    await document.head.appendChild(CreateAddition_CustomAdditionToolScriptElem);
    let consolethng = "%c" + "Another Command:\n" + ">GetYoutubeVid_id(url)\n  Get YouTube Video id!";
    console.log(consolethng, "color: navy;font-family: monospace;");
  }
}
//*/
//###############################################################################################################\\
/**
function GetYoutubeVid_id(url){
 var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"]*)/i;
 var match = url.match(regExp);
 return (match && match[1].length==11)? match[1] : false;
}
*/






//=======================================================================================
