function GlobalToolscript_inf(command) {
  if(command) {
    if(command.match(/help/i)) return void console.log("Command list:\n >help -- Show Command list\n >Code_list -- Show code list of GlobalToolscript\n >Code_source -- Show URL/Link of the code source(blob) cannot be turned into raw, sadly. If you want to that, better just copy permalink from the source first");
    command.match(/Code_list/i) ? console.log('Code List:\n >KodeNuklir(Code, Pages, Site, Command) -- try KodeNuklir(null, null, null, "help") for more information about the parameter\n >pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor)\n >escapeRegex(string)\n >sleep(ms)\n >waitFor(conditionFunction)\n >evil(fn)\n >copyToClipboard(text)\n >^SE(ElementSelector)    ^ISE(ElementSelector)\n') : command.match(/Code_source/i) ? console.log("GlobalToolscript source: https://github.com/NJeyyy/About-Me/blob/3fc986ad01ffe01775bddff1b18d25895f486662/ToolScript_Global.txt") : console.error("ERROR, The command is not available!");
  } else command || console.error('there\'s no command!\n*try GlobalToolscript_inf("help")!');
}

function KodeNuklir(Code, Pages, Site, Command) {
  if(Command) {
    if(Command.match(/help/i)) return void console.log("Available command:\n -Open: Open it in new tab.\n -SiteList: Show list of site that is supported.\n -CodeExplanation: It is what it said\n -ParameterExplanation\n*YEP THAT'S IT FOR NOW..\n**Also, FYI the cases doesn't matter but the text is matter!");
    if(Command.match(/SiteList/i)) return void console.log("Site List:\n >nhentai\n");
    if(Command.match(/CodeExplanation/i)) return void console.log('CODE NUCLEAR EXPLANED\n Soo.. the code Im talking about is not an actual "NUCLEAR". But! A code for anime/comics/porn vid that is encrypted and shared online. There\'s several site for it but I only find few of it.. SADLY. Nuclear code can be found like this "ABs-324" or only 6 number. It depends on the site that is using it.');
    if(Command.match(/ParameterExplanation/i)) return void console.log("^Code(required): The nuclear code, ITS OBVIOUS WDYM. Also THIS must BE DEFINED this was the purpose of this function..\n^Pages(Optional): It is optional, Just describe which page are you in if this was a comic and IF available\n^Site: Not must be defined, but better be but yet not really that important if your default is nhentai.net, but if it't not then it is required, yes it is the site you're using the code for\n^Command: Just some extras for this, enter \"help\" in this parameter for the code list and more information!");
  }
  var o = null,
    a = null;
  if(Site ? Site.match(/nhentai/i) && (a = "https://nhentai.net/g/") : a = "https://nhentai.net/g/", a += Code, Pages && (a += "/" + Pages), Command && Command.match(/Open/i) && (window.open(a, "_blank"), o = !0), Command && null == o && console.error("Looks like you insert a command that's not exist."), Code) return a;
  console.error("Looks like you didn't put the code huh?");
}

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16);
  var g = parseInt(color.substring(2, 4), 16);
  var b = parseInt(color.substring(4, 6), 16);
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ? darkColor : lightColor;
}

function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitFor(conditionFunction) {
  const e = n => {
    conditionFunction() ? n() : setTimeout((conditionFunction => e(n)), 400);
  };
  return new Promise(e);
}

function copyToClipboard(text) {
  const o = document.createElement("textarea");
  o.value = text;
  document.body.appendChild(o); o.select(); document.execCommand("copy"); document.body.removeChild(o);
}

function SE(ElementSelector) {
  if(document.querySelectorAll(ElementSelector).length === 0) {
    return null;
  }
  return document.querySelectorAll(ElementSelector);
}

function ISE(ElementSelector) {return document.querySelector(ElementSelector);}

function isValidUrl(_string) {
  const matchpattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
  return matchpattern.test(_string);
}

function ConvertUnitTIME(ConvertFrom, ConvertTo, SpecifiedNumber, EnableDecimal = !1) {
  if(isNaN(SpecifiedNumber)) return console.error("Specified Number is not a number.\nYour Input: " + SpecifiedNumber), !1;
  var a = 'UNIT INPUT INVALID, ONLY "Second(s)", "Minute(s)", and "Hour(s)" are valid!\EnableDecimal*Cases doesnt matter tho\nNOTE: Also sorry because right now its only support min, hrs, and sec. But later on its gonna support other else like date and day!';
  return ConvertFrom.match(/Seconds?/i) ? ConvertTo.match(/Minutes?/i) ? 0 == EnableDecimal ? Math.floor(SpecifiedNumber / 60) ? Math.floor(SpecifiedNumber / 60) : null : 1 == EnableDecimal ? SpecifiedNumber / 60 : void console.error("EnableDecimal error value: only boolean are valid") : ConvertTo.match(/Hours?/i) ? 0 == EnableDecimal ? Math.floor(SpecifiedNumber / 3600) ? Math.floor(SpecifiedNumber / 3600) : null : 1 == EnableDecimal ? SpecifiedNumber / 3600 : void console.error("EnableDecimal error value: only boolean are valid") : ConvertTo.match(/Seconds?/i) ? SpecifiedNumber : (console.error(a), null) : ConvertFrom.match(/Minutes?/i) ? ConvertTo.match(/Seconds?/i) ? 60 * SpecifiedNumber : ConvertTo.match(/Hours?/i) ? 0 != EnableDecimal ? 1 == EnableDecimal ? SpecifiedNumber / 60 : void console.error("EnableDecimal error value: only boolean are valid") : Math.floor(SpecifiedNumber / 60) ? Math.floor(SpecifiedNumber / 60) : void 0 : ConvertTo.match(/Minutes?/i) ? SpecifiedNumber : (console.error(a), null) : ConvertFrom.match(/Hours?/i) ? ConvertTo.match(/Seconds?/i) ? 3600 * SpecifiedNumber : ConvertTo.match(/Minutes?/i) ? 60 * SpecifiedNumber : ConvertTo.match(/Hours?/i) ? SpecifiedNumber : (console.error(a), null) : (console.error(a), null);
}

function setFavicon(Url) {
  var set_FAVICON;
  document.querySelector("link[rel*='icon']") ? set_FAVICON = document.querySelector("link[rel*='icon']") : ((set_FAVICON = document.createElement("link")).type = "image/png", set_FAVICON.rel = "shortcut icon", document.getElementsByTagName("head")[0].appendChild(set_FAVICON)), set_FAVICON.setAttribute("href", Url);
}

function arrayRemove(arr, value) {
  return arr.filter(function(ele){return ele != value;});
}
