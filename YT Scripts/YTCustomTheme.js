// ==UserScript==
// @name              YTCustomTheme - "kinda" Simple
// @namespace         youtube.com_CustomTheme
// @match             https://www.youtube.com/*
// @version           0.4a
// @author            NJ1n9
// @description       My Custom Simple Theme for YT
// @require           https://github.com/NJeyyy/About-Me/raw/13e26733d8953ed7989cf852d5836357cc47f1d8/ToolScript_Global_min.js
// @grant             none
// @icon              File:///C:\Users\boppy\Documents\Icon\Web Icon(png)\CleanTube 2.png
// @noframes
// ==/UserScript==
//Created on 31/01/2022, 16:56:52

//||~~~~~~~~~~~~USERSCRIPT REQUIREMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~||\\
/*
// >Custom Addition ToolScript
// 
// >Optional EventListener
//[NOTE!! You can insert the code below here since this is from "Custom Addition ToolScript", instead of using @require]
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

(async function(){
  await waitFor(_ => "complete" == document.readyState);
  AddCustomTheme_SimpleTheme();
  SyncTheme_SimpleTheme();
})();

// Start whenever page changed the URL
window.addEventListener('locationchange', SyncTheme_SimpleTheme);



async function AddCustomTheme_SimpleTheme() {
  if (!ISE("#NJ1n9_Simple-Theme")) {
    const ValueCSSElem = "\n"
    /*
     	+ "#button.style-scope.ytd-toggle-button-renderer.style-default-active {\n"
     	+ "  color: rgb(41 199 177);\n"
     	+ "  filter: drop-shadow(2px 2px 2px);\n"
      + "}\n"
    */
    + "/* Like-Dislike Button Custom-Coloured */\n"
    + '#button.style-scope.ytd-toggle-button-renderer.style-default-active #button[aria-label*="like" i] {\n'
    + " /*Like Button*/\n"
    + "  color: rgb(66 235 50);\n"
    + "  filter: drop-shadow(2px 2px 3px);\n"
    + "}\n"
    + '#button.style-scope.ytd-toggle-button-renderer.style-default-active #button[aria-label*="dislike" i] {\n'
    + "  color: rgb(255 36 36);\n"
    + "  filter: drop-shadow(2px 2px 3px);\n"
    + "}\n"
    + "\n\n"
    /*+ "/ Customize the Chapter Section of vid /"
    + "/ WTF YOUTUBE WHY YOU PUT THIS MIRACULOUS FEATURES AT THE BOTTOM OF NOWHERE FUCKING ASSHOLEE!! /"
    + "#info-contents ytd-video-primary-info-renderer ytd-horizontal-card-list-renderer[HideChapters] {\n"
    + "  transform: scaleY(0);\n"
    + "  transform-origin: top;\n"
    + "}\n"*/
    ;
		/* YTR_Theme; that planned to be added:
		>Drew Gooden -- Only have the sketch
		>Kurtis Conner -- Done. Just need to a little bit extra stuff and get the .png file!
		>Bread Boys -- Just planning to add, not yet planning the other thingXD
		>BeaconCream -- Already have a reference and a bit illustration for it
		*/
    var AddCSSElem = document.createElement("style");
    AddCSSElem.setAttribute("id", "NJ1n9_Simple-Theme");
    AddCSSElem.innerHTML = ValueCSSElem;
    await document.head.appendChild(AddCSSElem);
    var Get_CSSElem = ISE("#NJ1n9_Simple-Theme");
		
		let YTR_ThemePlusSTATE = true; /* Custom THEME for several Youtuber! */
		
		if (YTR_ThemePlusSTATE) {
			var YTR_CSSPlus = "\n\n\n/*Youtuber Custom Theme*/\n";
			const YTR_CSSObj = {
				'CSSInfo': [
					{
						'YTRName': 'Danny Gonzalez',
						'defaultCursor': 'https://i.ibb.co/Wv32v9d/Nut-Cracker-Danny-Gonzalez.png',
						'PointerCursor': 'https://i.ibb.co/sthbwsP/GREG-Danny-Gonzalez.png'
					},
					{
						'YTRName': 'Markiplier',
						'defaultCursor': 'https://i.ibb.co/8XxwMHM/MARKIPLIER.png',
						'PointerCursor': 'https://i.ibb.co/smQvRPn/MARKIPLIER2.png'
					},
					{
						'YTRName': 'MiawAug',
						'defaultCursor': 'https://i.ibb.co/FndNSwM/MiawAug.png',
						'PointerCursor': 'https://i.ibb.co/3scr8XZ/MiawAug2.png'
					},
					{
						'YTRName': 'Jacksepticeye',
						'defaultCursor': 'https://i.ibb.co/2Mntsps/Jacksepticeye-SAM-the-mascot.png',
						'PointerCursor': 'https://i.ibb.co/h1QY33S/Jacksepticeye-Bell.png'
					},
					{
						'YTRName': 'Kurtis Conner',
						'defaultCursor': 'https://i.ibb.co/4mMwt3P/KURTISTOWN-Kurtis-Conner.png',
						'PointerCursor': 'https://i.ibb.co/QFYmJL0/FOLKS-Kurtis-Conner.png'
					}
				],
				'CSSHandler': [
					[
						'html[YTR_Theme="YTChannelName"] *',
						' {\n cursor: url(ImageLink), auto;\n}\n'
					],
					[
						'html[YTR_Theme="YTChannelName"] a, html[YTR_Theme="YTChannelName"] a *, html[YTR_Theme="YTChannelName"] button, html[YTR_Theme="YTChannelName"] button *, html[YTR_Theme="YTChannelName"] div.YCS-optional-function-CONTAINER *, html[YTR_Theme="YTChannelName"] #CollapseButton, html[YTR_Theme="YTChannelName"] #button *, html[YTR_Theme="YTChannelName"] #button, html[YTR_Theme="YTChannelName"] tp-yt-paper-tab, html[YTR_Theme="YTChannelName"] tp-yt-paper-tab *, html[YTR_Theme="YTChannelName"] [CPointer]',
						' {\n cursor: url(ImageLink), pointer !important;\n}\n'
					]
				]
			};
			for (var loopI=0; loopI<YTR_CSSObj.CSSInfo.length; loopI++) {
				YTR_CSSPlus += '/* '+ YTR_CSSObj.CSSInfo[loopI].YTRName +' */\n';
				YTR_CSSPlus += YTR_CSSObj.CSSHandler[0][0].replaceAll('YTChannelName', YTR_CSSObj.CSSInfo[loopI].YTRName);
				if (YTR_CSSObj.CSSInfo[loopI].ExtraAttr) {
					YTR_CSSPlus += YTR_CSSObj.CSSInfo[loopI].ExtraAttr;
				}
				YTR_CSSPlus += YTR_CSSObj.CSSHandler[0][1].replaceAll('ImageLink', YTR_CSSObj.CSSInfo[loopI].defaultCursor);
				YTR_CSSPlus += YTR_CSSObj.CSSHandler[1][0].replaceAll('YTChannelName', YTR_CSSObj.CSSInfo[loopI].YTRName);
				if (YTR_CSSObj.CSSInfo[loopI].ExtraAttr) {
					YTR_CSSPlus += YTR_CSSObj.CSSInfo[loopI].ExtraAttr;
				}
				YTR_CSSPlus += YTR_CSSObj.CSSHandler[1][1].replaceAll('ImageLink', YTR_CSSObj.CSSInfo[loopI].PointerCursor);
				YTR_CSSPlus += '\n';
			}
			Get_CSSElem.innerHTML += YTR_CSSPlus;
      
    }
  }
  console.log("the CSS has been added!");
}

async function SyncTheme_SimpleTheme() {
  await waitFor(_ => document.readyState == 'complete');
  await waitFor(_ => ISE("#channel-name .ytd-channel-name .ytd-channel-name .ytd-channel-name a"));
  await waitFor(_ => document.visibilityState == 'visible' || document.webkitVisibilityState == "visible");
  
  
  if (document.location.href.match(/(Danny100|2Danny2Furious|DannyGonzalez)/gi) || document.title.match(/^([()0-9\s]+)?(Danny Gonzalez - YouTube|2 Danny 2 Furious - YouTube)/i) || ISE("#channel-name .ytd-channel-name .ytd-channel-name .ytd-channel-name a").textContent.match(/(2 Danny 2 Furious|Danny Gonzalez)/gi)) {
    ISE("html").setAttribute("YTR_Theme", "Danny Gonzalez");
  } else if (document.location.href.match(/Markiplier/gi) || document.title.match(/^([()0-9\s]+)?Markiplier - YouTube/i) || ISE("#channel-name .ytd-channel-name .ytd-channel-name .ytd-channel-name a").textContent.match(/Markiplier/ig)) {
    ISE("html").setAttribute("YTR_Theme", "Markiplier");
  } else if (document.location.href.match(/(MiawAug|MeotMiawAug|Meot)/gi) || document.title.match(/^([()0-9\s]+)?(MiawAug - YouTube|Meot - YouTube)/i) || ISE("#channel-name .ytd-channel-name .ytd-channel-name .ytd-channel-name a").textContent.match(/(MiawAug|Meot)/ig)) {
    ISE("html").setAttribute("YTR_Theme", "MiawAug");
  } else if (document.location.href.match(/(Jacksepticeye|JacksepticeyeClips)/gi) || document.title.match(/^([()0-9\s]+)?(Jacksepticeye Clips - YouTube|jacksepticeye - YouTube)/i) || ISE("#channel-name .ytd-channel-name .ytd-channel-name .ytd-channel-name a").textContent.match(/(Jacksepticeye|Jacksepticeye Clips)/gi)) {
    ISE("html").setAttribute("YTR_Theme", "Jacksepticeye");
	} else if (document.location.href.match(/(KurtisConner|VeryReallyGood)/gi) || document.title.match(/^([()0-9\s]+)?(Kurtis Conner - YouTube|Very Really Good - YouTube)/i) || ISE("#channel-name .ytd-channel-name .ytd-channel-name .ytd-channel-name a").textContent.match(/(Kurtis Conner|Very Really Good)/gi)) {
		ISE("html").setAttribute("YTR_Theme", "Kurtis Conner");
  } else {
    ISE("html").removeAttribute("YTR_Theme");
  }
  console.log("the CSS cursor type has been set!");
  
  /*if (ISE("#info-contents ytd-video-primary-info-renderer ytd-horizontal-card-list-renderer")) {
    ISE("#info-contents ytd-video-primary-info-renderer ytd-horizontal-card-list-renderer").remove();
    ISE("#info-contents ytd-video-primary-info-renderer div#button")
  } else {
    MoveUPChapterSection(); // <-- About.. the FUCKIN' CHAPTERS SECTION!?
  }*/
}


//-------------------------------Additional code
/*async function MoveUPChapterSection() {
  var a = await getChapterElem();
  if (a && !ISE("#info-contents ytd-video-primary-info-renderer div#button")) {
    var ab = a.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    if (ab.tagName.toLowerCase() == 'ytd-horizontal-card-list-renderer') {
      console.log("Chapters in video has founded.");
      ab.setAttribute("style", "border-color: rgba(200, 200, 200, 30%);margin-top: 20px;transition: all 300ms linear;border-right: inset 5px;");
      ab.setAttribute("HideChapters", "");
      await sleep(250);
      ChaptersElem.style.position = "absolute";
      ISE("#info-contents ytd-video-primary-info-renderer").appendChild(ab);
      
      let b = document.createElement("div");
      b.innerHTML = "Toggle Chapters";
      b.setAttribute("id", "button");
      b.setAttribute("style", "font-size: 15px;background: #ff2f2f;padding: 6px;border-radius: 5px;width: fit-content;box-shadow: #ff0000d9 0px 0px 7px 0, inset #8484841f 0 0 13px 0;cursor: pointer;");
      ISE("#info-contents ytd-video-primary-info-renderer").insertBefore(b, ab);
      b.addEventListener("click", async function() {
        var ChaptersElem = ISE("#info-contents ytd-video-primary-info-renderer ytd-horizontal-card-list-renderer");
        if (ChaptersElem.hasAttribute("HideChapters")) {
          //Showed
          ChaptersElem.removeAttribute("HideChapters");
          ChaptersElem.style.position = "";
        } else if (!ChaptersElem.hasAttribute("HideChapters")) {
          //Hidden
          ChaptersElem.setAttribute("HideChapters", "");
          await sleep(250);
          ChaptersElem.style.position = "absolute";
        }
      });
      console.log("Chapters section has been moved to top, and could be toggled with button.")
    }
  }
}*/
/*function getChapterElem() {
  for (let i = 0; i < SE("#title").length; i++) {
    if (SE("#title")[i].innerHTML == "Chapters") {
      return SE("#title")[i];
    }
  }
  return false;
}*/
