import { Controller } from "stimulus"

let old_songs = {};
let new_songs = [];
export default class extends Controller {
  static values = { url: String }

  initialize() {
    this.songs = this.dataValue;
    this.new_songs = this.dataValue;
  }

  connect() {
    fetch(this.urlValue, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      old_songs = data;
      data.forEach(el => {
        const {artist: artist, cover_image: cover_art_url, created_at: created_at, duration: duration, id: id, name: name, album: album, updated_at: updated_at, url: url } = el;
        el = {artist, cover_art_url, created_at, duration, id, name, album, updated_at, url};
        new_songs.push(el)
      });
      Amplitude.init({
        "songs": new_songs,
        debug: true
      });
    });

    window.onkeydown = function(e) {
      return !(e.keyCode == 32);
      debugger
    };

    /*
      Handles a click on the down button to slide down the playlist.
    */
    document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
      var list = document.getElementById('list');

      list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

      document.getElementById('list-screen').classList.remove('slide-out-top');
      document.getElementById('list-screen').classList.add('slide-in-top');
      document.getElementById('list-screen').style.display = "block";
    });

    /*
      Handles a click on the up arrow to hide the list screen.
    */
    document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
      document.getElementById('list-screen').classList.remove('slide-in-top');
      document.getElementById('list-screen').classList.add('slide-out-top');
      document.getElementById('list-screen').style.display = "none";
    });

    /*
      Handles a click on the song played progress bar.
    */
    document.getElementById('song-played-progress').addEventListener('click', function( e ){
      var offset = this.getBoundingClientRect();
      var x = e.pageX - offset.left;

      Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
    });

    document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';
  }

  disconnect() {
    Amplitude.stop();
  }
}

