
// Example Album 1
var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: '/images/album-placeholder.png',

  songs: [
      { name: 'Blue', length: '4:26' },
      { name: 'Green', length: '3:14' },
      { name: 'Red', length: '5:01' },
      { name: 'Pink', length: '3:21'},
      { name: 'Magenta', length: '2:15'}
    ]
};

// Example Album 2
var albumMarconi = {
  name: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: '/images/album-placeholder2.png',

  songs: [
      { name: 'Hello, Operator?', length: '1:01' },
      { name: 'Ring, ring, ring', length: '5:01' },
      { name: 'Fits in your pocket', length: '3:21'},
      { name: 'Can you hear me now?', length: '3:14' },
      { name: 'Wrong phone number', length: '2:15'}
    ]
};

var createSongRow = function(songNumber, songName, songLength) {

  var $newSongRow = $('<tr>');
  $newSongRow.append('<td class="col-md-1">' + songNumber + '</td>');
  $newSongRow.append('<td class="col-md-9">' + songName + '</td>');
  $newSongRow.append('<td class="col-md-2">' + songLength + '</td>');

  return $newSongRow;
};

var changeAlbumView = function(album) {
  var $albumTitle = $('.album-title');
  $albumTitle.text(album.name);

  var $albumArtist = $('.album-artist');
  $albumArtist.text(album.artist);

  var $albumMeta = $('.album-meta-info');
  $albumMeta.text(album.year + " on " + album.label);

  var $albumImage = $('.album-image img');
  $albumImage.attr('src', album.albumArtUrl);

  var $songList = $('.album-song-listing');
  $songList.empty();
  var songs = album.songs;
  for (var i = 0; i < songs.length; i++) {
    var songData = songs[i];
    var $newRow = createSongRow(i+1, songData.name, songData.length)
    $songList.append($newRow);
  };
};


// This 'if' condition is used to preven the jQuery modifications
// from happening on non-Album view pages.
//  - This line checks if the current url has "/album" in its path using a regex.
if (document.URL.match(/\/album/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {
    // Code to switch views goes here.
    var albums = [albumPicasso, albumMarconi];
    changeAlbumView(albumPicasso);

    var albumIndex = 0;
    var $albumImage = $('.album-image img');

    $albumImage.click(function(event) {
      albumIndex = (albumIndex + 1) % albums.length;
      changeAlbumView(albums[albumIndex]);
    });

    var $songRow = $('tr');
    var $songNumberCont = $('td.col-md-1');
    $songRow.hover(
      function() {
        $songNumberCont.text("Play");
      }, function() {
        $songNumberCont.text("1");
      }
    );
  });
}
