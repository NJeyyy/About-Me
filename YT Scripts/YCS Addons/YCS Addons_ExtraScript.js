async function FindComment_TimeStamps(e) {
	var SearchInput;
	var TotalProgress = 3 + SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment").length;
	var CurrentProgress = 1;
	if (e && e.type === 'contextmenu' && e.path.includes(ISE('#FindMatchedTimeStamps.Checkbox_SearchAddons'))) {
		e.preventDefault();
		SearchInput = prompt('Insert a timestamp.');
		if (SearchInput.length == 0) {
			alert('THERE\'S NOTHING GOD DAMNIT!!');
			return;
		}
	}
	if ((e && (e.type === 'contextmenu' && e.path.includes(ISE('#FindMatchedTimeStamps.Checkbox_SearchAddons'))) || e && ((e.type === 'keyup' && e.which == 13) || e.type === 'click') || e == null) && !ISE("#YCS_TimestampMatchResult label[Loading]")) {
		while (ISE(".Absolutematch_yttimestamp")) {
			ISE(".Absolutematch_yttimestamp").classList.remove("Absolutematch_yttimestamp");
		}
		while (ISE(".Textmatch_yttimestampEXP")) {
			ISE(".Textmatch_yttimestampEXP").classList.remove("Textmatch_yttimestampEXP");
		}
		ISE("#YCS_TimestampMatchResult label").style.color = "";
		ISE("#YCS_TimestampMatchResult label").style.fontStyle = "";
		if (e && ((e.type === 'keyup' && e.which == 13) || e.type === 'click') || e == null) {
			ISE("#YCS_TimestampMatchResult label").innerHTML = "Loading..";
			SearchInput = document.querySelector("#ycs-input-search").value;
		}
		if (SearchInput) {
			ISE("#YCS_TimestampMatchResult label").setAttribute('Loading', '');
			CurrentProgress++;
			ISE('#YCS_TimestampMatchResult .LoadingBar').style.setProperty('width', (CurrentProgress/TotalProgress)*100 + '%', 'important');
			await sleep(1200); // DELAY----------------------------------------------------------
			if (!SearchInput || SearchInput.length == 0) {
				let CStyle = "font-weight: 900; color: red;";
				console.error("%c01000101501010010501010010501001111501010010500100001500100000501010100501101000501100101501110010501100101500100111501110011500100000501101110501101111500100000501100011501101111501101101501101101501100101501101110501110100500100000501100110501101111501110101501101110501100100500100000501110111501101001501110100501101000500100000501110100501101000501100101500100000501101101501100001501110100501100011501101000501100101501100100500100000501110100501101001501101101501100101501110011501110100501100001501101101501110000500101110", CStyle);
				ISE("#YCS_TimestampMatchResult label").innerHTML = "No input!!";
				ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
				ISE('#YCS_TimestampMatchResult label ~ #LoadingBar').removeAttribute('title');
			} else if (SearchInput && SearchInput.match(/([\|\(\)\-\[\]0-9]+:)?[\|\(\)\-\[\]0-9]+:[\|\(\)\-\[\]0-9]+/g)) {
				if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment:not([SpamCommentDisplay])")) {
					ISE('#YCS_TimestampMatchResult label[Loading] ~ #LoadingBar').setAttribute('title', 'Extracting the comments result..');
					var regexTOyk = new RegExp(".*(?<![0-9])(?<!:)\\b[0]?" + SearchInput + "([0-9])?(\\s+)?.*(\\s+)?(.*)?", "gm");
					var a__data = {
						"Index": {
							"Included": [],
							"Excluded": [],
							"TextMatch": []
						},
						"Matched_Comment": [],
						"Excluded_Comment": [],
						"TextMatch": []
					};
					console.groupCollapsed("comment(s) with the matched timestamp [" + SearchInput + "] founded data:");
					//console.groupCollapsed('Matching comment log of ' + SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment").length + ' comments:');
					console.group('Matching comment log of ' + SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment").length + ' comments:');
					for (var i0 = 0; i0 < SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment:not([SpamCommentDisplay])").length; i0++) {
						CurrentProgress++;
						ISE('#YCS_TimestampMatchResult .LoadingBar').style.setProperty('width', (CurrentProgress/TotalProgress)*100 + '%', 'important');
						if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector(".ycs-comment__main-text").textContent.match(regexTOyk)) {
							if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector("a.ycs-gotochat-video[href]")) {
								if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]").length > 1) {
									for (var i1 = 0; i1 < SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]").length; i1++) {
										let max_check = SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]").length;
										if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]")[i1].textContent.match(regexTOyk)) {
											let iN = i0 + 1;
											a__data["Matched_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
											a__data["Index"]["Included"].push(iN);
											console.log('%c[' + iN + ']' + 'MATCH!', 'background: #90da93;');
											break;
										} else if (i1 == max_check || i1 == (max_check - 1)) {
											if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector(".ycs-comment__main-text").textContent.match(regexTOyk)) {
												let iN = i0 + 1;
												a__data["Index"]["TextMatch"].push(iN);
												a__data["TextMatch"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
												console.error((i0 + 1) + ' Match! But only the text because there is no timestamp defined there, so it\'s probably gonna be placed at the last');
											} else {
												let iN = i0 + 1;
												a__data["Excluded_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
												a__data["Index"]["Excluded"].push(iN);
												console.error(iN + ' were excluded because all timestamp is not match in the comment although the scan already performed.');
											}
											break;
										}
									}
								} else if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]").length == 1) {
									if (SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelectorAll("a.ycs-gotochat-video[href]")[0].textContent.match(regexTOyk)) {
										let iN = i0 + 1;
										a__data["Matched_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
										a__data["Index"]["Included"].push(iN);
										console.log('%c[' + iN + ']' + 'MATCH!', 'background: #90da93;');
									} else {
										let iN = i0 + 1;
										a__data["Excluded_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
										a__data["Index"]["Excluded"].push(iN);
										console.error(iN + ' were excluded because the timestamp in it (which only one) is not a match.');
									}
								}
							} else {
								if (!SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector("a.ycs-gotochat-video[href]")) {
									let iN = i0 + 1;
									a__data["Index"]["TextMatch"].push(iN);
									a__data["TextMatch"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
									console.error((i0 + 1) + ' Match! But only the text because there is no timestamp defined there, so it\'s probably gonna be placed at the last');
								}
							}
						} else {
							let iN = i0 + 1;
							a__data["Excluded_Comment"].push(SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0]);
							a__data["Index"]["Excluded"].push(iN);
							if (!SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment")[i0].querySelector(".ycs-comment__main-text").textContent.match(regexTOyk)) {
								console.error((i0 + 1) + ' exclude, reason: textContent is not match:P');
							} else {
								console.error('[' + i0 + '] welp we have a problem here<:');
							}
						}
					}
					console.groupEnd();
					ISE('#YCS_TimestampMatchResult label[Loading] ~ #LoadingBar').setAttribute('title', 'Highlighting the comments..');
					CurrentProgress++;
					ISE('#YCS_TimestampMatchResult .LoadingBar').style.setProperty('width', (CurrentProgress/TotalProgress)*100 + '%', 'important');
					if (a__data && a__data["Matched_Comment"].length != 0) {
						for (var iElem1 = 0; iElem1 < a__data["Matched_Comment"].length; iElem1++) {
							if (!a__data["Matched_Comment"][iElem1].classList.contains("Absolutematch_yttimestamp")) {
								a__data["Matched_Comment"][iElem1].classList.add("Absolutematch_yttimestamp");
							}
						}
						for (var iElem12 = 0; iElem12 < a__data["TextMatch"].length; iElem12++) {
							if (!a__data["TextMatch"][iElem12].classList.contains("Textmatch_yttimestampEXP")) {
								a__data["TextMatch"][iElem12].classList.add("Textmatch_yttimestampEXP");
							}
						}
						if (a__data["TextMatch"].length != 0 && SE(".Textmatch_yttimestampEXP")) {
							var TextMatchElements = Object.values(SE('.Textmatch_yttimestampEXP'));
							for (let iElem22 = 0; iElem22 < TextMatchElements.length; iElem22++) {
								ISE("#ycs_wrap_comments").prepend(TextMatchElements.slice().reverse()[iElem22]);
							}
						}
						if (a__data["Matched_Comment"].length != 0 && SE(".Absolutematch_yttimestamp")) {
							var TimestampMatchElements = Object.values(SE('.Absolutematch_yttimestamp'));
							for (let iElem2 = 0; iElem2 < TimestampMatchElements.length; iElem2++) {
								ISE("#ycs_wrap_comments").prepend(TimestampMatchElements.slice().reverse()[iElem2]);
							}
						}
						console.log("Index that\'s match the specified timestamp: " + a__data["Index"]["Included"].join(", "));
						if (a__data["Index"]["Excluded"].length != 0) {
							console.log("Index that\'s excluded--doesnt match the specified timestamp: " + a__data["Index"]["Excluded"].join(", "));
						} else if (a__data["Index"]["Excluded"].length == 0) {
							console.log("Index that\'s excluded--doesnt match the specified timestamp: All comment is match the timestamp, nothing excluded");
						}
						console.log(a__data);
						if (a__data["Index"]["Excluded"].length != 0) {
							ISE("#YCS_TimestampMatchResult label").innerHTML = "Comment with timestamp match found: " + a__data["Matched_Comment"].length + "/" + SE("#ycs-search-result #ycs_wrap_comments div.ycs-render-comment:not([SpamCommentDisplay])").length;
							ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
							ISE('#YCS_TimestampMatchResult label ~ #LoadingBar').removeAttribute('title');
						} else if (a__data["Index"]["Excluded"].length == 0) {
							ISE("#YCS_TimestampMatchResult label").innerHTML = "Comment with timestamp match found: All";
							ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
							ISE('#YCS_TimestampMatchResult label ~ #LoadingBar').removeAttribute('title');
						}
						ISE("#YCS_TimestampMatchResult label").setAttribute('title', SearchInput + '\n' + '\nMatch Timestamp: ' + a__data["Matched_Comment"].length + '\nMatch Text: ' + a__data["TextMatch"].length);
						ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
						ISE('#YCS_TimestampMatchResult label ~ #LoadingBar').removeAttribute('title');
					} else if (a__data && a__data["Matched_Comment"].length == 0 || !a__data) {
						console.error("NOT FOUND!");
						console.groupEnd();
						ISE("#YCS_TimestampMatchResult label").style.color = "red";
						ISE("#YCS_TimestampMatchResult label").innerHTML = "There\'s no matched timestamp.";
						if (a__data["TextMatch"].length != 0) {
							for (var iElem12b = 0; iElem12b < a__data["TextMatch"].length; iElem12b++) {
								if (!a__data["TextMatch"][iElem12b].classList.contains("Textmatch_yttimestampEXP")) {
									a__data["TextMatch"][iElem12b].classList.add("Textmatch_yttimestampEXP");
								}
							}
							var TextMatchElementsONLY = Object.values(SE('.Textmatch_yttimestampEXP'));
							for (let iElem22 = 0; iElem22 < TextMatchElementsONLY.length; iElem22++) {
								ISE("#ycs_wrap_comments").prepend(TextMatchElementsONLY.slice().reverse()[iElem22]);
							}
						}
					}
					console.groupEnd();
					ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
					ISE('#YCS_TimestampMatchResult label ~ #LoadingBar').removeAttribute('title');
					CurrentProgress++;
					ISE('#YCS_TimestampMatchResult .LoadingBar').style.setProperty('width', (CurrentProgress/TotalProgress)*100 + '%', 'important');
				} else {
					ISE("#YCS_TimestampMatchResult label").innerHTML = "There\'s no matched timestamp nor comment available";
					ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
					ISE("#YCS_TimestampMatchResult label").removeAttribute('title');
					ISE('#YCS_TimestampMatchResult label ~ #LoadingBar').removeAttribute('title');
				}
			} else {
				console.log("You're not searching a timestamp!");
				ISE("#YCS_TimestampMatchResult label").style.fontStyle = "italic";
				ISE("#YCS_TimestampMatchResult label").style.color = "red";
				ISE("#YCS_TimestampMatchResult label").innerHTML = "[No match—the input is not a timestamp]";
				ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
				ISE("#YCS_TimestampMatchResult label").removeAttribute('title');
				ISE('#YCS_TimestampMatchResult label ~ #LoadingBar').removeAttribute('title');
				console.groupEnd();
			}
			if (ISE("label#YCS_TimestampMatchResult[Loading]")) {
				ISE("#YCS_TimestampMatchResult label").removeAttribute('Loading');
				ISE("#YCS_TimestampMatchResult label").removeAttribute('title');
			}
		}
	} else {
		console.error('BLOCKED!');
	}
	return;
}
