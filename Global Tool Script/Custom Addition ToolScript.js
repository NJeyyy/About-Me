// ==UserScript==
// @name            Custom Addition ToolScript
// @namespace       GlobalFunction_CustomAdditionTLScript
// @match           *://*/*
// @version         1.5
// @author          NJ1n9
// @run-at          document-start
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
//*/



//~~~~~~~~~~~Implement in to the "head" tag so it can be used globally~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\ <-- Added and fixed in v1.5
/**/
Custom_Addition_ToolScript()
function Custom_Addition_ToolScript() {
  // ToolScript1-- SLEEP(miliseconds) Function
  let ToolScript1 = "function sleep(ms) {\n" + "  return new Promise(resolve => setTimeout(resolve, ms));\n" + "};\n";
  // ToolScript2-- WaitFor a conditionFunction
  let ToolScript2 = "function waitFor(conditionFunction) {\n" + "\n" + "  const poll = resolve => {\n" + "    if(conditionFunction()) resolve();\n" + "    else setTimeout(_ => poll(resolve), 400);\n" + "  }\n" + "\n" + "  return new Promise(poll);\n" + "}\n";
  // ToolScript3-- Alternate to Eval()
  let ToolScript3 = "function evil(fn) {\n" + "  return new Function('return ' + fn)();\n" + "}\n";
  
  let ToolScriptSeparator = "\n//----------------------------------\n\n"
  let Scriptof_CustomAdditionToolScript = ToolScript1 + ToolScriptSeparator + ToolScript2 + ToolScriptSeparator + ToolScript3;
  let Create_CustomAdditionToolScriptElem = document.createElement("script");
  Create_CustomAdditionToolScriptElem.setAttribute("id", "Custom-Addition-ToolScript")
  Create_CustomAdditionToolScriptElem.setAttribute("type", "application/javascript")
  Create_CustomAdditionToolScriptElem.innerHTML = Scriptof_CustomAdditionToolScript;
  document.head.appendChild(Create_CustomAdditionToolScriptElem)
}
//*/
//###############################################################################################################\\
