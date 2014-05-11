// var buildAlbumOverlay = function(albumURL) {
//   var template = 
//       '<div class="collection-album-image-overlay">'
//     + '  <div class="collection-overlay-content">'
//     + '    <a class="collection-overlay-button" href="' + albumURL + '">'
//     + '      <i class="fa fa-play"></i>'
//     + '    </a>'
//     + '    &nbsp;'
//     + '    <a class="collection-overlay-button">'
//     + '      <i class="fa fa-plus"></i>'
//     + '    </a>'
//     + '  </div>'
//     + '</div>'
//     ;
//   return $(template);
// };

// var updateCollectionView = function() {
//   var onHover = function(event) {
//     $(this).append(buildAlbumOverlay('/album'))
//   };

//   var offHover = function(event) {
//     $(this).find('.collection-album-image-overlay').remove();
//   };
  
//   var $newThumbnail = $('.album-thumbnail');
//   $newThumbnail.find('.collection-album-image-container').hover(onHover, offHover);
// };

// if (document.URL.match(/\/collection/)) {
//   // Wait until the HTML is fully processed.
//   $(document).ready(function() {
//     updateCollectionView();
//   });
// }
