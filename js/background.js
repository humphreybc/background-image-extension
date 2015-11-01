// Handle the click on the context menu
function getClickHandler(info, tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {});
  });
};

// Create the context menu
chrome.contextMenus.create({
  'title' : 'Download image',
  'type' : 'normal',
  'contexts' : ['all'],
  'onclick' : getClickHandler
});