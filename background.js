// function likeSomething(e) {
  // chrome.tabs.executeScript(null, {code:"alert('hi')"})
// }

// chrome.browserAction.onClicked.addListener(likeSomething);

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: "content.js"});
})