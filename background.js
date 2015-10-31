var s = document.createElement("script");
s.src = chrome.extension.getURL("script.js");
s.onload = function() {
  this.parentNode.removeChild(this);
};

(document.head || document.documentElement).appendChild(s);

function getClickHandler(info, tab) {
  if(info != undefined){
    chrome.tabs.sendRequest(tab.id, "getClickedEl", function(clickedEl) {
      elt.value = clickedEl.value;
    });
  }
};

chrome.contextMenus.create({
  "title" : "Download image",
  "type" : "normal",
  "contexts" : ["all"],
  "onclick" : getClickHandler()
});