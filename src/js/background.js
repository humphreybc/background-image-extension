function clickHandler(info, tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {});
  });
};

chrome.contextMenus.create({
  'title' : 'Download image',
  'type' : 'normal',
  'contexts' : ['all'],
  'onclick' : clickHandler
});