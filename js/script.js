(function () {
  console.log('script.js loaded');

  var element = null;

  // Grab the clicked element on mousedown
  document.addEventListener('mousedown', function(event){
    if(event.button == 2) {
      element = event.target;
    }
  }, true);

  function downloadFromUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  function getBackgroundImageUrl(backgroundImage) {
    url = backgroundImage.split('(')[1];
    url = url.split(')')[0];
    return url;
  };

  // Send the value of the clicked element back to background.js
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      backgroundImage = $(element).css('background-image');

      if (backgroundImage === 'none') {
        url = $(element).parent().children().find('img').attr('src');
      } else {
        url = getBackgroundImageUrl(backgroundImage);
      }

      downloadFromUrl(url);
    });
} ());