//The original created on 24/01/2022, 16:57:35
//This was created on 28/01/2022 09:18:25 AM


var AdditionalScript = {
	// ToolScript 1
	//SLEEP(miliseconds) Function
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	},
	// ToolScript 2
	//WaitFor a conditionFunction
	waitFor(conditionFunction) {
		const poll = resolve => {
			if(conditionFunction()) resolve();
			else setTimeout(_ => poll(resolve), 400);
		}
		return new Promise(poll);
	},
	// ToolScript 3
	//Copy To Clipboard
	copyToClipboard(text) {
		const elem = document.createElement('textarea');
		elem.value = text;
		document.body.appendChild(elem);
		elem.select();
		document.execCommand('copy');
	},
	// ToolScript 4
	//Select Element With ElementSelector (Individually / Grouping)
  SE(ElementSelector) { //Grouping Mode
		if (document.querySelectorAll(ElementSelector).length === 0) {
			return null;
		}
		return document.querySelectorAll(ElementSelector);
	},
  ISE(ElementSelector) { //Individually Mode
		return document.querySelector(ElementSelector);
	}
}

if (sessionStorage.getItem("NJ1n9_LocalVariable_json")) {
	var LocalVariable_json = JSON.parse(sessionStorage.getItem("NJ1n9_LocalVariable_json"));
} else {
	var LocalVariable_json = {
		"LastRecentAssign_ChapterOption": true,
		"ToolButton_mangaReadMode_CurrentSTATE": true,
		"Hotkey_NextChapter": 68,
		"Hotkey_PrevChapter": 65
	}
}
//##########################################################################

raw_LoadThisScript();
async function raw_LoadThisScript() {
	await LoadThisScript();
	sessionStorage.setItem("NJ1n9_LocalVariable_json", JSON.stringify(LocalVariable_json));
}
async function LoadThisScript() {
  await AdditionalScript.sleep(500);
  if (document.location.href.match("https://onepunch-manga.com/manga/*")) {
    await ViewMangaChapterSection();
  } else if (document.location.href.match("https://onepunch-manga.com")) {
		await OPM_MangaHomepage();
	}
	return;
}

//===================================================================================================
async function ViewMangaChapterSection() {
  // Add Hotkey to Navigate chapter.
  let UseHotkey = true; // true if you want to add the hotkey, false if you dont wanna
  if (UseHotkey) {		
    await AdditionalScript.waitFor(_ => AdditionalScript.SE(".col-md-6").length == 4);
    document.addEventListener("keyup", AddHotkey_NavigateChapter,false); // To navigate through chapter
		console.log("Hotkey to navigate through chapter has been added.");
		
		await AdditionalScript.sleep(500);
		document.addEventListener("keyup", AddHotkey_GotoHomepage,false); // Go to homepage
		console.log("Hotkey to go to homepage is added.")
  }
  
  // Load Disqus CommentsBox at load.
  let LoadCommentAtStart = true; // true if you want the comments-box to load at start, false if you dont wanna
  if (LoadCommentAtStart) {
		await AdditionalScript.sleep(700);
    await AdditionalScript.waitFor(_ => AdditionalScript.ISE("#show-comments"));
		ShowCommentDisqus();
		async function ShowCommentDisqus() {
			AdditionalScript.ISE("#show-comments").click();
			await AdditionalScript.sleep(1000);
			if (AdditionalScript.ISE("iframe[title='Disqus']")) {
				console.log("Comments-Box is now loaded.");
				return;
			} else {
				await AdditionalScript.sleep(500);
				ShowCommentDisqus()
			}
		}
  }
	
	//Toolbox to make your(my) reading experience more convenient!
	let ToolBoxRead = true;
	if (ToolBoxRead) {
		await AdditionalScript.sleep(1500);
		ADDELEM_ToolBox();
	}
	
	//Save the last read chapter!
	let StoreRecentlyReadChapt = true;
	if (StoreRecentlyReadChapt) {
		Store_ChapterRecentlyRead();
	}
	
	
	console.log("The script is completed.")
	AdditionalScript.ISE(".back-to-top").remove();
}

//-----------------------------------------------------------------------------------==||||||
//Hotkey Function Collection
async function AddHotkey_NavigateChapter(E) {
  var OPM_TextStyleTheme = "font-size: 15px; color: yellow; background: #E18309; font-family: Impact;"
	let ActiveElem = document.activeElement;
  if (!(ActiveElem instanceof HTMLTextAreaElement || ActiveElem instanceof HTMLInputElement || ActiveElem.isContentEditable == true)) {
		let HK_Ctrlkey = E.ctrlKey;
		let HK_Altkey = E.altKey;
		let HK_Shiftkey = E.shiftKey;
		if (!HK_Ctrlkey && !HK_Altkey && !HK_Shiftkey) {
			let HK_PreviousChapt = await LocalVariable_json.Hotkey_PrevChapter;
			let HK_NextChapt = await LocalVariable_json.Hotkey_NextChapter;
			if (E.which == HK_PreviousChapt) { // Go to previous chapter
				if (!AdditionalScript.ISE(".prev-post")) {
					alert("WTF R U DOIN'?? THIS IS THE FIRST CHAPTER GOD DAMNIT.");
					console.info("%c U're an idiot. \n Or maybe I am the idiot and I just didn't realize it. \n\n WHO KNOWS?? ", OPM_TextStyleTheme);
					await AdditionalScript.sleep(600);
					return null;
				} else if (AdditionalScript.ISE(".prev-post")) {
					if (scrollY > (document.body.offsetHeight - 2370)) {
						window.location.href = AdditionalScript.SE(".prev-post a")[1].href;
						await AdditionalScript.sleep(1000);
						console.error("It was clicked.. but something is happening here.. \(Maybe.\)");
					} else {
						window.location.href = AdditionalScript.ISE(".prev-post a").href;
						await AdditionalScript.sleep(1000);
						console.error("It was clicked.. but something is happening here.. \(Maybe.\)");
					}
				}
			} else if (E.which == HK_NextChapt) { // Go to next chapter
				if (!AdditionalScript.ISE(".next-post")) {
					alert("That's the last chapter! Wait for the update please😁\n *btw i know u're suffering, me too..");
					console.warn("%c This is the last Chapter. Please come back after the update. ", OPM_TextStyleTheme);
					await AdditionalScript.sleep(600);
					return null;
				} else if (AdditionalScript.ISE(".next-post")) {
					if (scrollY > (document.body.offsetHeight - 2370)) {
						window.location.href = AdditionalScript.SE(".next-post a")[1].href;
						await AdditionalScript.sleep(1000);
						console.error("It was clicked.. but something is happening here.. \(Maybe.\)");
					} else {
						window.location.href = AdditionalScript.ISE(".next-post a").href;
						await AdditionalScript.sleep(1000);
						console.error("It was clicked.. but something is happening here.. \(Maybe.\)");
					}
				}
			}
		}
	} else {
		return null;
	}
}
//Hotkey to go to homepage
function AddHotkey_GotoHomepage(e) {
	e.preventDefault();
	let ActiveElem = document.activeElement;
	if (!(ActiveElem instanceof HTMLTextAreaElement || ActiveElem instanceof HTMLInputElement || ActiveElem.isContentEditable == true)) {
		let HK_Ctrlkey = e.ctrlKey;
		let HK_Altkey = e.altKey;
		let HK_Shiftkey = e.shiftKey;
		if (!HK_Ctrlkey && (HK_Shiftkey && HK_Altkey && e.which == 36)) { // Shift + Alt + Home
			window.location.pathname = "";
		}
	} else {
		return null;
	}
}
//_________________________________________________________
//Others

//Add Toolbox to make my read-manga experience more convenient!
async function ADDELEM_ToolBox() {
	//Create Element (+ Add the CSS)
	//CSS_ToolBoxThing CSS
	//#region
	CSS_ToolBoxThing = "\n"
		+ '.Toolbutton:hover:not(:active) .CustomToolTips {\n'
		+ '  visibility: visible;\n'
		+ '}\n'
		+ 'b.Tooltips_Title {\n'
		+ '  font-weight: bold;\n'
		+ '  font-size: 16px;\n'
		+ '}\n'
		+ 'span.CustomToolTips {\n'
		+ '  visibility: hidden;\n'
		+ '  display: inline-block;\n'
		+ '  height: auto;\n'
		+ '  width: 150px;\n'
		+ '  word-wrap: break-word;\n'
		+ '  background: black;\n'
		+ '  color: white;\n'
		+ '  font-family: Arial;\n'
		+ '  font-size: 13px;\n'
		+ '  text-align: center;\n'
		+ '  padding: 13px 7px;\n'
		+ '  border-radius: 4px;\n'
		+ '  position: absolute;\n'
		+ '  z-index: 6;\n'
		+ '  top: -25%;\n'
		+ '  right: 80%;\n'
		+ '  opacity: 85%;\n'
		+ '}\n'
		+ 'span.CustomToolTips::after {\n'
		+ '  content: "";\n'
		+ '  position: absolute;\n'
		+ '  top: 30%;\n'
		+ '  left: 100%;\n'
		+ '  margin-left: -10px;\n'
		+ '  border-width: 10px;\n'
		+ '  border-style: solid;\n'
		+ '  border-color: transparent transparent black transparent;\n'
		+ '}\n'
		+ '\n'
		+ '.Toolbutton[ToolButtonStatus="enabled"] {\n'
		+ '  box-shadow: 0 0 6px 5px #A5BF00;\n'
		+ '}\n'
		+ '#Container_IndividualSimpleTools .Toolbutton {\n'
		+ '  margin: 7px;\n'
		+ '  background: lightgray;\n'
		+ '  border-radius: 100%;\n'
		+ '  display: grid;\n'
		+ '  cursor: pointer;\n'
		+ '}\n'
		+ '#Container_IndividualSimpleTools .Toolbutton:hover {\n'
		+ '  box-shadow: 1px 2px 10px 0 black;\n'
		+ '}\n'
		+ '#Container_IndividualSimpleTools .Toolbutton:active {\n'
		+ '  box-shadow: 1px 2px 6px 0 black;\n'
		+ '  filter: brightness(90%);\n'
		+ '}\n'
		+ '\n'
		+ '#Toolbox_ContainerConts {\n'
		+ '  user-select: none;\n'
		+ '  position: fixed;\n'
		+ '  top: 170px;\n'
		+ '  left: auto;\n'
		+ '  right: 5px;\n'
		+ '  z-index: 5;\n'
		+ '}\n'
		+ '#ContainerButtonCollapse {\n'
		+ '  background: blue;\n'
		+ '  width: 45px;\n'
		+ '  height: 60px;\n'
		+ '  position: relative;\n'
		+ '  top: 50%;\n'
		+ '  margin-bottom: 3px;\n'
		+ '  border-radius: 40%;\n'
		+ '  display: inline-block;\n'
		+ '}\n'
		+ '#Container_IndividualSimpleTools {\n'
		+ '  position: relative;\n'
		+ '  padding: 10px;\n'
		+ '  max-height: 200px;\n'
		+ '  max-width: 350px;\n'
		+ '  background: #F5C17D;\n'
		+ '  border-radius: 5px;\n'
		+ '  border: black solid 1px;\n'
		+ '  display: inline-block;\n'
		+ '}\n'
		+ '\n'
		+ '#Toolbox_ContainerConts[CollapseToggle="ON"] {\n'
		+ '  /* Toolbox Collapsed */\n'
		+ '  transform: translateX(var(--ToolsContainerWidth));\n'
		+ '  transition: ease-in-out 500ms all;\n'
		+ '}\n'
		+ '#Toolbox_ContainerConts[CollapseToggle="OFF"] {\n'
		+ '  /* Toolbox Expanded */\n'
		+ '  opacity: 95%;\n'
		+ '  transform: translatex(0);\n'
		+ '  transition: ease-in-out 1s all;\n'
		+ '}\n'
		+ '#Toolbox_ContainerConts[CollapseToggle="OFF"] #ContainerButtonCollapse {\n'
		+ '  left: 30px;\n'
		+ '  animation: ContainerButtonCollapse_ExpandedMode 1s 1;\n'
		+ '}\n'
		+ '@keyframes ContainerButtonCollapse_ExpandedMode {\n'
		+ '  0% {left: 25px;}\n'
		+ '  85% {left: 26px;}\n'
		+ '  100% {left: 30px;}\n'
		+ '}\n'
		+ '#Toolbox_ContainerConts[CollapseToggle="ON"] #ContainerButtonCollapse {\n'
		+ '  left: 25px;\n'
		+ '  animation: ContainerButtonCollapse_CollapsedMode 600ms 1;\n'
		+ '}\n'
		+ '#Toolbox_ContainerConts[CollapseToggle="OFF"] #Container_IndividualSimpleTools {\n'
		+ '  box-shadow: -6px 8px 3px 0 rgba(0,0,0, 0.3);\n'
		+ '}\n'
		+ '@keyframes ContainerButtonCollapse_CollapsedMode {\n'
		+ '  0% {left: 30px;}\n'
		+ '  76% {left: 29px;}\n'
		+ '  100% {left: 25px;}\n'
		+ '}\n'
	;
	//#endregion
	let CSSElem_ToolBoxThing = document.createElement("style");
	CSSElem_ToolBoxThing.setAttribute("id", "Toolbox_CSS");
	CSSElem_ToolBoxThing.innerHTML = CSS_ToolBoxThing;
	await document.head.appendChild(CSSElem_ToolBoxThing);

	var ToolBoxContainerElem = document.createElement("div");
	ToolBoxContainerElem.setAttribute("id", "Toolbox_ContainerConts");
	ToolBoxContainerElem.setAttribute("CollapseToggle", "ON");
	ToolBoxContainerElem.style.visibility = "Hidden";
	await document.body.appendChild(ToolBoxContainerElem);

	let ContainerButtonElem = document.createElement("div");
	ContainerButtonElem.setAttribute("id", "ContainerButtonCollapse");
	ContainerButtonElem.style.animationPlayState = "paused";
	await ToolBoxContainerElem.appendChild(ContainerButtonElem);

	var ToolBoxButtonContainerElem = document.createElement("div");
	ToolBoxButtonContainerElem.setAttribute("id", "Container_IndividualSimpleTools");
	ToolBoxButtonContainerElem.setAttribute("style", "display: inline-flex;");
	await ToolBoxContainerElem.appendChild(ToolBoxButtonContainerElem);


	//Pick at least one; Button you wanted to use/added
	let mangaReadMode_USE = true;
	let LastRecentAssign_Chapter = await LocalVariable_json.LastRecentAssign_ChapterOption;


	//mangaReadMode
	if (mangaReadMode_USE) {
		let ToolButton_mangaReadMode = document.createElement("div");
		ToolButton_mangaReadMode.setAttribute("Name", "ReadmangaMode_Button");
		ToolButton_mangaReadMode.setAttribute("class", "Toolbutton");
		ToolButton_mangaReadMode.innerHTML = '\n<img src="https://cdn2.iconfinder.com/data/icons/user-interface-outline-11/64/1_85-512.png" style="height:auto; width:60px; background:none;">' + '\n  <span class="CustomToolTips"><b class="Tooltips_Title">Read Mode</b><hr>Make you read comfortably without the link be clicked accidentically and bother your activity.</span>' + '\n</img>';
		await ToolBoxButtonContainerElem.appendChild(ToolButton_mangaReadMode);
		let ToolButton_mangaReadModeSTATE = false;
		let ToolButton_mangaReadModeSTATEStored = await LocalVariable_json.ToolButton_mangaReadMode_CurrentSTATE;

		if (ToolButton_mangaReadModeSTATE || ToolButton_mangaReadModeSTATEStored) {
			ToolButton_mangaReadMode.setAttribute("ToolButtonStatus", "enabled");
			let ReadMangaMode_DisableClick = document.createElement("div");
			ReadMangaMode_DisableClick.setAttribute("id", "ReadMangaMode_noclick");
			ReadMangaMode_DisableClick.setAttribute("style", "position: absolute; left: 10%;  background: transparent; user-select: none;");
			AdditionalScript.ISE(".entry-content").appendChild(ReadMangaMode_DisableClick);
			ReadMangaMode_DisableClick.style.width = AdditionalScript.ISE("main#main").offsetWidth + "px";
			ReadMangaMode_DisableClick.style.height = AdditionalScript.ISE("main#main").offsetHeight + "px";
			ReadMangaMode_DisableClick.style.top = (AdditionalScript.ISE(".site-header").offsetHeight + 100) + "px";
			ReadMangaMode_DisableClick_Adjust();
			async function ReadMangaMode_DisableClick_Adjust() {
				await AdditionalScript.sleep(5000);
				let ReadMangaMode_DisableClick = document.getElementById("ReadMangaMode_noclick");
				ReadMangaMode_DisableClick.style.width = AdditionalScript.ISE("main#main").offsetWidth + "px";
				ReadMangaMode_DisableClick.style.height = AdditionalScript.ISE("main#main").offsetHeight + "px";
				ReadMangaMode_DisableClick.style.top = (AdditionalScript.ISE(".site-header").offsetHeight + 100) + "px";
				await AdditionalScript.sleep(7000);
				ReadMangaMode_DisableClick.style.width = AdditionalScript.ISE("main#main").offsetWidth + "px";
				ReadMangaMode_DisableClick.style.height = AdditionalScript.ISE("main#main").offsetHeight + "px";
				ReadMangaMode_DisableClick.style.top = (AdditionalScript.ISE(".site-header").offsetHeight + 100) + "px";
				await AdditionalScript.sleep(3000);
				ReadMangaMode_DisableClick.style.width = AdditionalScript.ISE("main#main").offsetWidth + "px";
				ReadMangaMode_DisableClick.style.height = AdditionalScript.ISE("main#main").offsetHeight + "px";
				ReadMangaMode_DisableClick.style.top = (AdditionalScript.ISE(".site-header").offsetHeight + 100) + "px";
			}
		} else if (!ToolButton_mangaReadModeSTATE) {
			ToolButton_mangaReadMode.setAttribute("ToolButtonStatus", "disabled");
		}
		AdditionalScript.ISE('.Toolbutton[name="ReadmangaMode_Button"]').addEventListener("click", function() {
			if (AdditionalScript.ISE(".Toolbutton[name='ReadmangaMode_Button']").getAttribute("toolbuttonstatus") == "disabled") { // if disabled enabling the function
				let ReadMangaMode_DisableClick = document.createElement("div");
				ReadMangaMode_DisableClick.setAttribute("id", "ReadMangaMode_noclick");
				ReadMangaMode_DisableClick.setAttribute("style", "position: absolute; left: 10%;  background: transparent; user-select: none;");
				AdditionalScript.ISE(".entry-content").appendChild(ReadMangaMode_DisableClick);
				ReadMangaMode_DisableClick.style.width = AdditionalScript.ISE("main#main").offsetWidth + "px";
				ReadMangaMode_DisableClick.style.height = AdditionalScript.ISE("main#main").offsetHeight + "px";
				ReadMangaMode_DisableClick.style.top = (AdditionalScript.ISE(".site-header").offsetHeight + 100) + "px";
				AdditionalScript.ISE(".Toolbutton[name='ReadmangaMode_Button']").setAttribute("toolbuttonstatus", "enabled");
				LocalVariable_json.ToolButton_mangaReadMode_CurrentSTATE = true;
				setTimeout(function(){
					ReadMangaMode_DisableClick.style.width = AdditionalScript.ISE("main#main").offsetWidth + "px";
					ReadMangaMode_DisableClick.style.height = AdditionalScript.ISE("main#main").offsetHeight + "px";
					ReadMangaMode_DisableClick.style.top = (AdditionalScript.ISE(".site-header").offsetHeight + 100) + "px";
				}, 7000);
			} else if (AdditionalScript.ISE(".Toolbutton[name='ReadmangaMode_Button']").getAttribute("toolbuttonstatus") == "enabled") { // if enabled disabling it.
				document.getElementById("ReadMangaMode_noclick").remove();
				AdditionalScript.ISE(".Toolbutton[name='ReadmangaMode_Button']").setAttribute("toolbuttonstatus", "disabled");
				LocalVariable_json.ToolButton_mangaReadMode_CurrentSTATE = false;
			}
		});
		console.log("mangaReadMode_Button has been added.");
	}
	
	//AssignChapterButton
	if (LastRecentAssign_Chapter) {
		let AssignChapterBTN_ContextmenuCSS = "\n"
		+ '#AssignChapterBTN-Contextmenu {\n'
		+ '  transition: all 500ms linear;\n'
		+ '  z-index: 100;'
		+ '}\n'
		+ '.AssignChapterBTN-ContextmenuChild:hover {\n'
		+ '  filter: brightness(90%);\n'
		+ '  cursor: pointer;\n'
		+ '}\n'
		+ '.AssignChapterBTN-ContextmenuChild:active {\n'
		+ '  filter: grayscale(30%) brightness(80%);\n'
		+ '  cursor: default;\n'
		+ '}\n'
		+ '.AssignChapterBTN-ContextmenuChild:first-child {\n'
		+ '  border-top-left-radius: 3px;\n'
		+ '  border-top-right-radius: 3px;\n'
		+ '}\n'
		+ '.AssignChapterBTN-ContextmenuChild:last-child {\n'
		+ '  border-bottom-left-radius: 3px;\n'
		+ '  border-bottom-right-radius: 3px;\n'
		+ '}\n'
		;
		let AssignChapterBTN_ContextmenuCSSElem = document.createElement("style");
		AssignChapterBTN_ContextmenuCSSElem.setAttribute("id", "AssignChapterBTN-ContextmenuCSS");
		AssignChapterBTN_ContextmenuCSSElem.innerHTML = AssignChapterBTN_ContextmenuCSS;
		document.head.appendChild(AssignChapterBTN_ContextmenuCSSElem);
		// [Google Icons: Material Icon] is on individual script
		await AdditionalScript.waitFor(_ => document.getElementById("GoogleIcons_MaterialIcons"));
		
		//Create The button
		var AssignedChapterCompiledInfo = localStorage.getItem("OPMmanga_AssignedChapter") || null;
		var AssignedChapterDisperseInfo = JSON.parse(AssignedChapterCompiledInfo);
		var AssignChapter_Button = document.createElement("div");
		AssignChapter_Button.setAttribute("class", "Toolbutton material-icons");
		AssignChapter_Button.setAttribute("style", "font-size: 60px;");
		AssignChapter_Button.setAttribute("id", "AssignRemoveChapterBTN")
		await document.getElementById("Container_IndividualSimpleTools").appendChild(AssignChapter_Button);
		
		if (AssignedChapterCompiledInfo) {
			// If the AssignedChapter available
			if (AssignedChapterDisperseInfo.URL == document.location.href) {
				// If the Assigned Chapter is the Current Chapter
				AssignChapter_Button.innerHTML = "cloud_done";
				AssignChapter_Button.setAttribute("title", "Click to remove assigned chapter.");
				AssignChapter_Button.addEventListener("click", async function(){
					let CONFIRMATION = confirm("Need to refresh to remove the assigned chapter, continue?")
					if (CONFIRMATION) {
						localStorage.removeItem("OPMmanga_AssignedChapter");
						await AdditionalScript.sleep(600);
						window.location.reload();
					} else {
						return null;
					}
				});
			} else if (AssignedChapterDisperseInfo.URL) {
				// If the Assigned Chapter exist, but not the current Chapter
				AssignChapter_Button.innerHTML = "cloud_circle";
				AssignChapter_Button.setAttribute("title", "Right click to choose an option.\n *No left click option.");
				AssignChapter_Button.addEventListener("click", function(e){e.preventDefault();});
				AssignChapter_Button.addEventListener("contextmenu", async function(e){
					e.preventDefault();
					var CTXMenuCont = document.getElementById("AssignChapterBTN-Contextmenu");
					CTXMenuCont.style.visibility = "visible";
					CTXMenuCont.style.opacity = "100%";
					if (e.pageX >= window.innerWidth - CTXMenuCont.offsetWidth) {
						let ctxElemntWidth = CTXMenuCont.offsetWidth + 15;
						CTXMenuCont.style.left = (e.pageX - ctxElemntWidth) + "px";
					} else {
						CTXMenuCont.style.left = e.pageX + "px";
					}
					if (e.pageY >= window.innerHeight - CTXMenuCont.offsetHeight) {
						let ctxElemntHeight = CTXMenuCont.offsetHeight;
						CTXMenuCont.style.top = (e.pageY - ctxElemntHeight) + "px";
					} else {
						CTXMenuCont.style.top = e.pageY + "px";
					}
				});
				window.addEventListener("click", function(){
					let CTXMenuCont = document.getElementById("AssignChapterBTN-Contextmenu");
					if (CTXMenuCont.style.visibility == "visible") {
						let CTXMenuCont = document.getElementById("AssignChapterBTN-Contextmenu");
						CTXMenuCont.style.opacity = "0%";
						CTXMenuCont.style.visibility = "Hidden";
					}
				});
				window.addEventListener("scroll", function(){
					let CTXMenuCont = document.getElementById("AssignChapterBTN-Contextmenu");
					if (CTXMenuCont.style.visibility == "visible") {
						let CTXMenuCont = document.getElementById("AssignChapterBTN-Contextmenu");
						CTXMenuCont.style.opacity = "0%";
						CTXMenuCont.style.visibility = "Hidden";
					}
				});
			}
		} else {
			// If the AssignedChapter unavailable
			AssignChapter_Button.innerHTML = "cloud_upload";
			AssignChapter_Button.setAttribute("title", "Click to assign this chapter.");
			AssignChapter_Button.addEventListener("click", async function(){
				let CONFIRMATION = confirm("Need to refresh to assign it, continue?")
				if (CONFIRMATION) {
					let Get_LastDate = new Date().constructor();
					let Get_CurrentChapterURL = document.location.href;
					let CompiletheInfo_AssignedChapter = {};
					CompiletheInfo_AssignedChapter["URL"] = Get_CurrentChapterURL;
					CompiletheInfo_AssignedChapter["LastDate"] = Get_LastDate;
					localStorage.setItem("OPMmanga_AssignedChapter", JSON.stringify(CompiletheInfo_AssignedChapter));
					await AdditionalScript.sleep(600);
					window.location.reload();
				} else {
					return null;
				}
			});
		}
		
		//Create the contextmenu Option (Append it after the "THING")
		var AssignChapter_Button_Contextmenu = document.createElement("div");
		AssignChapter_Button_Contextmenu.setAttribute("id", "AssignChapterBTN-Contextmenu");
		AssignChapter_Button_Contextmenu.setAttribute("style", "white-space: normal;visibility: Hidden;opacity:0;position: absolute; background: transparent; font-family: verdana; font-size: 13px; width: 150px;");
		AssignChapter_Button_Contextmenu.style.visibility = "Hidden";
		document.body.appendChild(AssignChapter_Button_Contextmenu);
		let AssignChapter_Button_ContextmenuChild1 = document.createElement("div");
		AssignChapter_Button_ContextmenuChild1.setAttribute("class", "AssignChapterBTN-ContextmenuChild");
		AssignChapter_Button_ContextmenuChild1.setAttribute("style", "width: 100%; height: 100%; background: orange;padding: 0px 7.5px;padding-top: 10px;padding-bottom: 7px;");
		AssignChapter_Button_ContextmenuChild1.innerHTML = "Assign this Chapter";
		let AssignChapter_Button_ContextmenuChild2 = document.createElement("div");
		AssignChapter_Button_ContextmenuChild2.setAttribute("class", "AssignChapterBTN-ContextmenuChild");
		AssignChapter_Button_ContextmenuChild2.setAttribute("style", "width: 100%; height: 100%; background: orange;padding: 0px 7.5px;padding-top: 7px;padding-bottom: 10px;");
		AssignChapter_Button_ContextmenuChild2.innerHTML = "Remove Assigned Chapter";
		AssignChapter_Button_Contextmenu.appendChild(AssignChapter_Button_ContextmenuChild1);
		AssignChapter_Button_Contextmenu.appendChild(AssignChapter_Button_ContextmenuChild2);
		AssignChapter_Button_ContextmenuChild1.addEventListener("click", async function(){
			//Assign Chapter
			let CONFIRMATION = confirm("Need to refresh, continue?")
			if (CONFIRMATION) {
				let Get_LastDate = new Date().constructor();
				let Get_CurrentChapterURL = document.location.href;
				let CompiletheInfo_AssignedChapter = {};
				CompiletheInfo_AssignedChapter["URL"] = Get_CurrentChapterURL;
				CompiletheInfo_AssignedChapter["LastDate"] = Get_LastDate;
				localStorage.setItem("OPMmanga_AssignedChapter", JSON.stringify(CompiletheInfo_AssignedChapter));
				await AdditionalScript.sleep(600);
				window.location.reload();
			} else {
				return null;
			}
		});
		AssignChapter_Button_ContextmenuChild2.addEventListener("click", async function(){
			//Remove Assigned Chapter
			let CONFIRMATION = confirm("Need to refresh, continue?")
			if (CONFIRMATION) {
				localStorage.removeItem("OPMmanga_AssignedChapter");
				await AdditionalScript.sleep(600);
				window.location.reload();
			} else {
				return null;
			}
		});
		console.log("Assign Chapter button has been added.")
	}
	
	//If there's no Button be added, the container and the rest being destructed
	if (!mangaReadMode_USE) {
		ToolBoxContainerElem.remove();
		CSSElem_ToolBoxThing.remove();
		console.warn("No Tool button added, please turn off this function if there's no Toolbutton wanted to be added.\nThe container and the other is removed..");
	}
	console.log("All Tool button added.");


	await AdditionalScript.sleep(1000);
	//Add some common-function to some element and Customize depending of the information obtained.
	//Do it on the last, so it doesn't miss other information about the added buttons:3
	let ContainerContsStyleAttr = document.getElementById("Toolbox_ContainerConts").getAttribute("style");
	if (ContainerContsStyleAttr) {
		let ContainerContsStyleAttr = document.getElementById("Toolbox_ContainerConts").getAttribute("style");
		AdditionalScript.ISE("#Toolbox_ContainerConts").setAttribute("style", ContainerContsStyleAttr + "--ToolsContainerWidth: " + (AdditionalScript.ISE("#Container_IndividualSimpleTools").offsetWidth + 5) + "px");
	} else {
		AdditionalScript.ISE("#Toolbox_ContainerConts").setAttribute("style", "--ToolsContainerWidth: " + (AdditionalScript.ISE("#Container_IndividualSimpleTools").offsetWidth + 5) + "px");
	}

	AdditionalScript.ISE("#ContainerButtonCollapse").addEventListener("click", function () {
		AdditionalScript.ISE("#ContainerButtonCollapse").style.animationPlayState = "";
		if (AdditionalScript.ISE("#Toolbox_ContainerConts").getAttribute("CollapseToggle") == 'ON') {
			AdditionalScript.ISE("#Toolbox_ContainerConts").setAttribute("CollapseToggle", 'OFF');
		} else if (AdditionalScript.ISE("#Toolbox_ContainerConts").getAttribute("CollapseToggle") == 'OFF') {
			AdditionalScript.ISE("#Toolbox_ContainerConts").setAttribute("CollapseToggle", 'ON');
		}
	});
	await AdditionalScript.sleep(700);
	AdditionalScript.ISE("#Toolbox_ContainerConts").style.visibility = "visible";
	console.log("ToolBox in manga page successfully added!");
}

//Store chapter information, recently read chapter
async function Store_ChapterRecentlyRead() {
	await AdditionalScript.sleep(15 * 1000)
	let Get_LastDate = new Date().constructor();
	await AdditionalScript.sleep(300);
	let Get_CurrentreadChapterURL = document.location.href;
	let CompiletheInfo_lastreadChapter = {};
	CompiletheInfo_lastreadChapter["URL"] = Get_CurrentreadChapterURL;
	CompiletheInfo_lastreadChapter["LastDate"] = Get_LastDate;
	localStorage.setItem("OPMmanga_RecentChapter", JSON.stringify(CompiletheInfo_lastreadChapter));
	console.log("This chapter has been stored as recently read chapter!")
}
//===================================================================================================
async function OPM_MangaHomepage() {
	//Get Last/Recent/Assigned Chapter
	let LastRecentAssign_Chapter = LocalVariable_json.LastRecentAssign_ChapterOption = false;
	if (LastRecentAssign_Chapter) {
		//Info about the AssignedChapter and the Recent one.
		var RecentChapterCompiledInfo = localStorage.getItem("OPMmanga_RecentChapter") || null;
		var AssignedChapterCompiledInfo = localStorage.getItem("OPMmanga_AssignedChapter") || null;
		
		//Create Element Container, Title(+Separator)
		var LRAChapterInfo_Container = document.createElement("div");
		LRAChapterInfo_Container.setAttribute("id", "LastRecentAssign_WidgetContainer");
		LRAChapterInfo_Container.setAttribute("style", "user-select: none;");
		AdditionalScript.ISE("div#secondary.col-md-3.sidebar.widget-area aside#custom_html-3").appendChild(LRAChapterInfo_Container);
		let LRAChapterInfo_ContainerTitle = document.createElement("h4");
		LRAChapterInfo_ContainerTitle.setAttribute("style", 'text-transform: uppercase;margin: 0px 10px;margin-top: 5px;font-size: 18px;font-weight: bold;text-align: center;');
		LRAChapterInfo_ContainerTitle.innerHTML = "Saved Chapter";
		LRAChapterInfo_Container.appendChild(LRAChapterInfo_ContainerTitle);
		let LRAChapterInfo_ContainerTitleSeparator = document.createElement("hr");
		LRAChapterInfo_ContainerTitleSeparator.setAttribute("style", "width: 100%;height: 3px;background: #EEE;margin: 10px 0px;");
		LRAChapterInfo_Container.appendChild(LRAChapterInfo_ContainerTitleSeparator);
		
		
		//create/modify stuff for Element for the Recent/Assigned Chapter (if exist)
		if (RecentChapterCompiledInfo || AssignedChapterCompiledInfo) {
			if (RecentChapterCompiledInfo) { //Recently
				let RecentreadChapterELEM = document.createElement("div");
				RecentreadChapterELEM.setAttribute("id", "RecentChapterInfo");
				RecentreadChapterELEM.setAttribute("style", "border-bottom: solid 2px #ccc;margin-bottom: 10px;padding-bottom: 10px;");
				RecentreadChapterELEM.innerHTML = '<h5 style="margin: 0;margin-bottom: -15px;">Recently read Chapter:</h5>\n<br>\n';
				LRAChapterInfo_Container.appendChild(RecentreadChapterELEM);
				
				let RecentChapterDisperseInfo = JSON.parse(RecentChapterCompiledInfo);
				let Get_ChaptertitleElem = 'a[href="' + RecentChapterDisperseInfo.URL + '"]';
				let Get_Chaptertitle = await AdditionalScript.ISE(Get_ChaptertitleElem).textContent;
				
				let ELEM_a1 = document.createElement("a");
				ELEM_a1.setAttribute("href", RecentChapterDisperseInfo.URL);
				ELEM_a1.innerHTML = Get_Chaptertitle;
				ELEM_a1.setAttribute("title", RecentChapterDisperseInfo.LastDate)
				RecentreadChapterELEM.appendChild(ELEM_a1);
			} else {
				let RecentreadChapterELEM = document.createElement("div");
				RecentreadChapterELEM.setAttribute("id", "RecentChapterInfo");
				RecentreadChapterELEM.setAttribute("style", "border-bottom: solid 2px #ccc;margin-bottom: 10px;padding-bottom: 10px;");
				RecentreadChapterELEM.innerHTML = '<h5 style="margin: 0;margin-bottom: -15px;">Recently read Chapter:</h5>\n<br>\n';
				LRAChapterInfo_Container.appendChild(RecentreadChapterELEM);
				let ELEM_text = document.createElement("label");
				ELEM_text.setAttribute("style", "font-weight: 500;font-family: 'Lato';color: red;font-size: 10px;");
				ELEM_text.innerHTML = "It seems you didn't have recently read chapter right now..";
				RecentreadChapterELEM.appendChild(ELEM_text);
			}
			if (AssignedChapterCompiledInfo) { //Assigned
				let AssignedChapterELEM = document.createElement("div");
				AssignedChapterELEM.setAttribute("id", "AssignedChapterInfo");
				AssignedChapterELEM.setAttribute("style", "margin-bottom: 10px;");
				AssignedChapterELEM.innerHTML = '<h5 style="margin: 0;margin-bottom: -15px;">Assigned Chapter:</h5>\n<br>\n'
				LRAChapterInfo_Container.appendChild(AssignedChapterELEM);
				
				let AssignedChapterDisperseInfo = JSON.parse(AssignedChapterCompiledInfo);
				let Get_ChaptertitleElem = 'a[href="' + AssignedChapterDisperseInfo.URL + '"]';
				let Get_Chaptertitle = AdditionalScript.ISE(Get_ChaptertitleElem).textContent;
				
				let ELEM_a1 = document.createElement("a");
				ELEM_a1.setAttribute("href", AssignedChapterDisperseInfo.URL);
				ELEM_a1.innerHTML = Get_Chaptertitle;
				ELEM_a1.setAttribute("title", AssignedChapterDisperseInfo.LastDate)
				AssignedChapterELEM.appendChild(ELEM_a1);
			} else {
				let AssignedChapterELEM = document.createElement("div");
				AssignedChapterELEM.setAttribute("id", "AssignedChapterInfo");
				AssignedChapterELEM.setAttribute("style", "margin-bottom: 10px;");
				AssignedChapterELEM.innerHTML = '<h5 style="margin: 0;margin-bottom: -15px;">Assigned Chapter:</h5>\n<br>\n'
				LRAChapterInfo_Container.appendChild(AssignedChapterELEM);
				
				let ELEM_text = document.createElement("label");
				ELEM_text.setAttribute("style", "font-weight: 500;font-family: 'Lato';color: red;font-size: 10px;");
				ELEM_text.innerHTML = "You not yet assign any chapter.";
				AssignedChapterELEM.appendChild(ELEM_text);
			}
		} else if (!RecentChapterCompiledInfo && !AssignedChapterCompiledInfo) {
			let LastRecentAssignChapterInfo = "You didn't have recent nor last assigned read chapter.";
			let LastRecentAssignChapterInfoELEM = document.createElement("label");
			LastRecentAssignChapterInfoELEM.setAttribute("style", "font-weight: 500;font-family: 'Lato';color: red;font-size: 13px;");
			LastRecentAssignChapterInfoELEM.innerHTML = LastRecentAssignChapterInfo;
			LRAChapterInfo_Container.appendChild(LastRecentAssignChapterInfoELEM);
		}
	}
	
	
	console.log("The script is completed.");
}
