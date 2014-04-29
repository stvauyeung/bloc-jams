$(document).ready(function() {
  $('p').css('font-size', '80px');

  var $funImage = $('img.fun-image');
  var $imageContainer = $('.image-container');

  for(var i = 0; i < 3; i++) {
    var $clonedImage = $funImage.clone();
    $clonedImage.appendTo($imageContainer);
  }  
});
