chrome.contextMenus.create({
	title: "Read this Text",
	contexts:["selection"],
	onclick: myFunction
});

function myFunction(selectedText){
	//window.speechSynthesis.cancel();
	var textToSpeak = selectedText.selectionText;

	var utterance = new SpeechSynthesisUtterance(textToSpeak);
	window.speechSynthesis.speak(utterance);

}

/*
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  alert(response);
});
*/ 