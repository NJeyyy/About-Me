//Created on 05/01/2022, 12:25:25

/** FAQ
 * > I want to use it on my script too! How can I use it?
      ^ To answer that question:
        On this version. By using "@require" on your userscipt.
        And link it to this file.
 * 
 */
// ToolScript 1
//===========SLEEP(miliseconds) Function================================================================\\  <-- Added on V1
// Source: https://stackoverflow.com/a/39914235/15715476
// use "sleep(N)" to use this function, it is useful to wait for certain time.
// btw just FYI "N"mean the time you needed, it is in ms btw so-- 1 sec mean 1000 miliseconds

// use "sleep(N)" to use this function, it is useful to wait for certain time in ms.
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

// use waitFor(conditionFunction) to wait for a certain condition to met.
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

// For Counting a string. Similar to Eval() I.. literally don't know what's the difference rn btw lol
function evil(fn) {
  return new Function('return ' + fn)();
}
//```````````````````````````````````````````````````````````````````````````````````````````````````````````\\
//*/
