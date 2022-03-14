// ==UserScript==
// @name            Custom Addition ToolScript
// @namespace       GlobalFunction_CustomAdditionTLScript
// @match           *://*/*
// @version         1.6
// @author          NJ1n9
// @description     Some ToolScript that combined.
// @icon            https://cdn.iconscout.com/icon/free/png-256/code-336-830581.png
// @grant           GM_getResourceText
// @resource        GlobalToolscript_External https://github.com/NJeyyy/About-Me/raw/f539b83ff93ee0da307b58d8684ac4b6dc80cff0/ToolScript_Global.min.js
// @noframes
// ==/UserScript==
//Created on 04/01/2022, 22:04:26

/** FAQ
 * > I want to use it on my script too! How can I use it?
      ^ To answer that question:
        You can use it by installing this userscript. Or by copying
        some function listed below depends on your desire on every
        script you use!
        *NOTE. This only can be used in DevTools, if you want to use this in your userscript or take the script file check my github page!
 * 
 */
/*
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
*/



//~~~~~~~~~~~Implement in to the "head" tag so it can be used globally~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\ <-- Added and fixed in v1.5
/**/
AddonsScript();
/*Custom_Addition_ToolScript();
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
  await document.head.appendChild(Create_CustomAdditionToolScriptElem);
  await sleep(5000);
  console.log(consolethng, "color: blue;font-family: monospace;");
}*/
AdditionToolscript_External();
async function AdditionToolscript_External() {
  let ElemInnerJS = GM_getResourceText("GlobalToolscript_External");
  let Create_JSExternal = document.createElement("script");
  Create_JSExternal.setAttribute("id", "Custom-Addition-ToolScript")
  Create_JSExternal.setAttribute("type", "application/javascript")
  Create_JSExternal.innerHTML = ElemInnerJS;
  await document.head.appendChild(Create_JSExternal);
  await sleep(5000);
  let consolethng = "%c" + "Type GlobalToolscript_inf(\"help\") to see the command for the support code,\nand GlobalToolscript_inf(\"Code_list\")!\n*Note! the case doesn\'t really matter!!'"
  console.log(consolethng, "color: blue;font-family: monospace;");
}

async function AddonsScript() {
  var TheScriptElem = document.getElementById("Custom-Addition-ToolScript");
  var CurrentHost = document.location.hostname;
  //Host list, Only add this script on specific domain/host.
  var YT = "www.youtube.com"
  var WA = "web.whatsapp.com"
  
  if (CurrentHost == YT) {
    let YT_AddonS1_varqup1 = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"]*)/i
    let YT_AddonS1 = "function GetYoutubeVid_id(url){\n" + ' var regExp = ' + YT_AddonS1_varqup1 + ';\n' + ' var match = url.match(regExp);\n' + ' return (match && match[1].length==11)? match[1] : false;\n' + '}\n';
    let YT_AddonS2 = "function YouTubePlayer_GotoSpecificTimestamp(ms) {\n" + '  ISE("#movie_player").seekTo(ms, true);\n' + "  return;\n" + "}\n";
    let YT_AddonS3 = "function use_YTv3API(CommentVid_ID, APItype) {\n" + '  if (!CommentVid_ID.match(/(https:\\/\\/www.youtube.com\\/watch\\?v=)/)) {\n' + '    var a;\n' + '    if (APItype == "videos") {\n' + '      a = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=" + CommentVid_ID + "&key=AIzaSyDfI-mocImdy_XWT8Wj4Pxe9hHH9E8rwQc";\n' + '    } else if (APItype == "comments") {\n' + '      a = "https://www.googleapis.com/youtube/v3/comments?part=snippet&id=" + CommentVid_ID + "&textFormat=plainText&key=AIzaSyDfI-mocImdy_XWT8Wj4Pxe9hHH9E8rwQc";\n' + '    } else {\n' + '      console.error("The APItype is invalid! or maybe empty!");\n' + '    }\n' + '    return $.getJSON(a, function(data){\n' + '      var display = `User_ID: ${data.userId}<br>\n' + '      ID: ${data.id}<br>\n' + '      Title: ${data.title}<br>\n' + '      Completion_Status: ${data.completed}`\n' + '      $(".display").html(display);\n' + '    });\n' + '  } else {\n' + '    console.error("Link/URL not allowed! ONLY Comment/Video ID!!");\n' + '  }\n' + '}\n';
    let YT_AddonS4 = "async function CheckVidPublishedTimes(VideosID) {\n" + '  if (!VideosID.match(/(https:\\/\\/www.youtube.com\\/watch\\?v=)/)) {\n' + '    let a = await use_YTv3API(VideosID, "videos");\n' + '    let ab = a.items[0].snippet;\n' + '    let vpublished = ab.publishedAt\n' + '    let vpublishedD = new Date("2021-10-22T17:03:23Z"); /* midnight in China on April 13th */\n' + '    let vpublishedTimes = vpublishedD.toLocaleString(\'en-US\', { timeZone: \'Asia/Jakarta\' });\n' + '    let vtitle = ab.title;\n' + '    let outputz = "%c" + "Title: " + vtitle + "\\nPublished at: " + vpublishedTimes;\n' + '    console.log(outputz, "color: #b50d0d;");\n' + '  } else {\n' + '    console.error("Link/URL not allowed! ONLY Video ID!!");\n' + '  }\n' + '}\n';
    let YT_AddonS5 = "function OpenVideosID_NewTab(VidID) {\n" + "    let a = \"https://www.youtube.com/watch?v=\" + VidID;\n" + "    window.open(a, \"_blank\");\n" + "}\n";
    let ToolScriptSeparator = "\n//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n"
    let YT_Addon = "\n" + YT_AddonS1 + ToolScriptSeparator + YT_AddonS2 + ToolScriptSeparator + YT_AddonS3 + ToolScriptSeparator + YT_AddonS4 + ToolScriptSeparator + YT_AddonS5;
    
    let CreateAddition_CustomAdditionToolScriptElem = document.createElement("script");
    CreateAddition_CustomAdditionToolScriptElem.setAttribute("class", "Custom-Addition-ToolScript_Optional");
    CreateAddition_CustomAdditionToolScriptElem.setAttribute("type", "application/javascript");
    CreateAddition_CustomAdditionToolScriptElem.innerHTML = YT_Addon;
    await document.head.appendChild(CreateAddition_CustomAdditionToolScriptElem);
    let consolethng = "%c" + "Another Command:\n"
    + ">GetYoutubeVid_id(url)\n  Get YouTube Video id!\n"
    + ">YouTubePlayer_GotoSpecificTimestamp(ms)\n  Seek to specific timestamp!, only could be specified in milisecond tho..\n"
    + ">use_YTv3API(CommentVid_ID, APItype)\n Use YT API to fetch some data/information!, Sadly only Video and Comment for now..\nAPItype option:\n- videos\n- comments\n*The ID of comment and vid!\n"
    + ">CheckVidPublishedTimes(VideosID)\n*NOTE! use_YTv3API(CommentVid_ID, APItype) function is required*\n Get when video published (Maybe if available) with Youtubev3 API\n"
    + ">OpenVideosID_NewTab(VidID)\n Open YT Video ID in new tab!\n"
    ;
    await sleep(10000);
    console.log(consolethng, "color: navy;font-family: monospace;");
    
    
  } else if (CurrentHost == WA) {
    let WA_AddonS1 = 'function CompareWAlocalStorage(a, b) {\n' + '   // "a" for the localStorage object\n' + '   // "b" for the stored object\n' + '   var aLr = Object.keys(a).length - 2;\n' + '   var aLc = 0;\n' + '   console.groupCollapsed("Compare WhatsApp localStorage data with yours!");\n' + '   for (let index = 0; index < Object.keys(a).length; index++) {\n' + '     var Ca = Object.keys(a)[index];\n' + '      if (Ca != "whatsapp-mutex" && Ca != "debugCursor") {\n' + '         console.log(Ca);\n' + '         if (a[Ca] == b[Ca]) {\n' + '            console.log(a[Ca] == b[Ca]);\n' + '            aLc++;\n' + '          } else if (a[Ca] != b[Ca]) {\n' + '            console.error(a[Ca] == b[Ca]);\n' + '            console.error("Either the keys different, or not exist.\nOr maybe the value\'s just different.");\n' + '          }\n' + '      } else if (Ca == "debugCursor") {\n' + '         console.warn("\"debugCursor\" keys ignored");\n' + '      } else if (Ca == "whatsapp-mutex") {\n' + '         console.warn("\"whatsapp-mutex\" keys ignored");\n' + '      }\n' + '   }\n' + '   console.groupEnd();\n' + '   if (aLr == aLc) {\n' + '     return true;\n' + '   } else {\n' + '     return false;\n' + '   }\n' + '}\n';
    let ToolScriptSeparator = "\n//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\n\n";
    let WA_Addon = WA_AddonS1;
    
    let CreateAddition_CustomAdditionToolScriptElem = document.createElement("script");
    CreateAddition_CustomAdditionToolScriptElem.setAttribute("class", "Custom-Addition-ToolScript_Optional");
    CreateAddition_CustomAdditionToolScriptElem.setAttribute("type", "application/javascript");
    CreateAddition_CustomAdditionToolScriptElem.innerHTML = WA_Addon;
    await document.head.appendChild(CreateAddition_CustomAdditionToolScriptElem);
    let consolethng = "%c" + "Another Command:\n"
    + ">CompareWAlocalStorage(a, b)\n  Compare localStorage object data!\n"
    await sleep(10000);
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
