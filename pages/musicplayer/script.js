const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const progress = document.querySelector('.progress');
const cover = document.querySelector('#cover');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `./music/${song}.mp3`;
  cover.src = `./images/${song}.jpg`;
}

// event listeners

playBtn.addEventListener('click', playAction);

function playAction() {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function shouldPlay() {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    playSong();
  }
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i').classList.remove('fa-pause');
  playBtn.querySelector('i').classList.add('fa-play');
  audio.pause();
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i').classList.remove('fa-play');
  playBtn.querySelector('i').classList.add('fa-pause');
  audio.play();
}

prevBtn.addEventListener('click', preSong);
nextBtn.addEventListener('click', nextSong);

function preSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  shouldPlay();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  shouldPlay();
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  const { currentTime, duration } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = progressPercent + '%';
}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener('ended', nextSong);
