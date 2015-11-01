(function () {
  var element = null;

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
  }

  function hasBackgroundImage(backgroundImage) {
    return backgroundImage.indexOf('url') >= 0;
  }

  function getBackgroundImageUrl(backgroundImage) {
    return backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
  }

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      backgroundImage = $(element).css('background-image');

      if (hasBackgroundImage(backgroundImage)) {
        url = getBackgroundImageUrl(backgroundImage);
      } else {
        url = $(element).parent().find('img').attr('src');
      }

      if (typeof url !== "undefined") {
        downloadFromUrl(url);
      } else {
        alert("Sorry, can't download this image.");
      }
    });
} ());

