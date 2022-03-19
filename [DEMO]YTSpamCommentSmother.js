// DEMO JS-CODE to find Spam Comment(s) and hide it(+report it)

// Remove element inside array defined by value
function arrayRemove(arr, value) {
  return arr.filter(function(ele){ 
    return ele != value; 
  });
}

while (ISE('.SpamCommentSmother')) {ISE('.SpamCommentSmother').remove();}
let SPAMCommentCSS = document.createElement('style');
SPAMCommentCSS.setAttribute('class', 'SpamCommentSmother');
innerHTML = '\n[SpamCommentDisplay="Hide"] {\n' + '  display: none !important;\n' + '}\n'
	+ '[SpamCommentDisplay="Show"]	{\n' + '  display: block;\n' + '}\n';

//=======================By AttributeValue
//--@grant		GM_getResourceText

function SpamComment_Detector() {
	if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")) {
		var CollectedSpamComments = [];
		var GetAllCommentArray = Object.values(SE('.ycs-render-comment'));
		var ExternalPatternList = JSON.parse(GM_getResourceText('PatternListName'));
		var GMPatternList = await GM.getValue("SpamCommentPatternList", null); // Gonna send null if the JSON Object doesnt exist
		for (let i0 = 0; i0 < GetAllCommentArray.length; i0++) {
			CollectedSpamComments.push(GetAllCommentArray[i0])
			//GetAllCommentArray = arrayRemove(GetAllCommentArray, GetAllCommentArray[i0]);
		}

		for (let iA = 0; iA < a.length; iA++) {
			a[iA].setAttribute('SpamCommentDisplay', 'Hide');
		}
	}
}

function SpamComment_ToggleDisplay() {
	if (SE('.ycs-render-comment[SpamCommentDisplay]')) {
		if (ISE('.ycs-render-comment[SpamCommentDisplay="Show"]')) {
			while (ISE('.ycs-render-comment[SpamCommentDisplay="Show"]')) {
				ISE('.ycs-render-comment[SpamCommentDisplay="Show"]').setAttribute('SpamCommentDisplay', 'Hide');
			}
		} else if (ISE('.ycs-render-comment[SpamCommentDisplay="Hide"]')) {
			while (ISE('.ycs-render-comment[SpamCommentDisplay="Hide"]')) {
				ISE('.ycs-render-comment[SpamCommentDisplay="Hide"]').setAttribute('SpamCommentDisplay', 'Show');
			}
		}
	}
}




//=======================By StyleAttribute
//--@grant		GM_getResourceText

function SpamComment_Detector() {
	if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")) {
		var CollectedSpamComments = [];
		var GetAllCommentArray = Object.values(SE('.ycs-render-comment'));
		var ExternalPatternList = JSON.parse(GM_getResourceText('PatternListName'));
		var GMPatternList = await GM.getValue("SpamCommentPatternList", null); // Gonna send null if the JSON Object doesnt exist
		for (let i0 = 0; i0 < GetAllCommentArray.length; i0++) {
			CollectedSpamComments.push(GetAllCommentArray[i0])
			//GetAllCommentArray = arrayRemove(GetAllCommentArray, GetAllCommentArray[i0]);
		}

		for (let iA = 0; iA < CollectedSpamComments.length; iA++) {
			CollectedSpamComments[iA].style.setProperty('display', 'none', 'important');
		}
	}
}

function SpamComment_ToggleDisplay() {
	if (SE('.ycs-render-comment[SpamCommentDisplay]')) {
		if (ISE('.ycs-render-comment[style="display: none !important;"]')) {
			while (ISE('.ycs-render-comment[style="display: none !important;"]')) {
				ISE('.ycs-render-comment[style="display: none !important;"]').removeAttribute('style');
			}
		} else {
			SpamComment_Detector();
		}
	}
}
