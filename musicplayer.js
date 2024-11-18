const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume-control');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

volumeControl.addEventListener('input', () => {
  audioPlayer.volume = volumeControl.value;
});

// Example of setting song information
songTitle.textContent = 'Your Song Title';
artist.textContent = 'Your Artist Name';