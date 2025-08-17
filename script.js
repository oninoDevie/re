const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');
const likeBtn = document.getElementById('likeBtn');
const quoteText = document.getElementById('quoteText');
const themeToggle = document.getElementById('themeToggle');

const tracks = [
  { quote: "Grego acquires a .38 Special and has planned the greatest of all his Neolithic adventures.\nHe’s still clumsy with the .38, but he’s mastered the Desert Eagle and loves the sound of the shell rain.", audio_url: "./audio/audio1.mp3" },
  { quote: "Regarding the unresolved process, the woman has not asked about anyone again, neither her daughter nor any specific person.\nShe said she didn't have a phone number, but —in alternate and metaphysical realities— she was in a dream.", audio_url: "./audio/audio2.mp3" },
  { quote: "Her composition has been the greatest enigma of the people, and there was no return.\nBut… that illness is common in his family!", audio_url: "./audio/audio3.mp3" },
  { quote: "Truly — although many say otherwise — the discomfort was always present.\nIt appeared on the antipodes of the figure, and despite so much effort, always the other side contradicted it.\nNo\nbut\nyes", audio_url: "./audio/audio4.mp3" },
  { quote: "He realized that the sound in which he would meet Rafaela before dying had already described itself.\nYes, it described itself in that sixteen we all know, it has a steady rhythm.\nIt’s the blend of the sound of a sphere that does not exist within time.", audio_url: "./audio/audio5.mp3" },
  { quote: "Time, little time — we hate the time that saw us born and will see us die, yet will never leave us with the same faces.", audio_url: "./audio/audio6.mp3" },
  { quote: "The sound is enough, Grego. Think: the music of the spheres.", audio_url: "./audio/audio7.mp3" }
];

let currentIndex = 0;
let isPlaying = false;

function setTrack(index) {
  currentIndex = index;
  quoteText.textContent = tracks[index].quote;
  audio.src = tracks[index].audio_url;
}

function playCurrent() {
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = '⏸️';
}

function pauseCurrent() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.textContent = '▶️';
}

playPauseBtn.addEventListener('click', () => {
  isPlaying ? pauseCurrent() : playCurrent();
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    setTrack(currentIndex - 1);
    playCurrent();
  }
});
 
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < tracks.length - 1) {
    setTrack(currentIndex + 1);
    playCurrent();
  }
});

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('liked');
});

// Toggle tema
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Init
setTrack(0);
