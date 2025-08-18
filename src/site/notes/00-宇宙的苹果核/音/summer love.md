---
{"dg-publish":true,"permalink":"/00-宇宙的苹果核/音/summer love/","dgPassFrontmatter":true,"noteIcon":""}
---

<!-- 悬浮底部音乐播放器 -->
<div id="floating-music-player" style="
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(30,30,47,0.95);
  color: white;
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 9999;
  max-width: 450px;
  width: 90%;
  flex-wrap: wrap;
">

  <!-- 封面图 -->
  <img src="/path/to/cover.jpg" alt="Music Cover" style="
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  ">

  <!-- 音乐信息 & 控件 -->
  <div style="
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 5px;
    min-width: 0;
  ">
    <div id="track-info" style="
      font-weight: bold;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    ">星空之旅</div>

    <div style="display: flex; align-items: center; gap: 8px;">
      <button id="play-btn" style="
        background: #6A5ACD;
        border: none;
        color: white;
        padding: 5px 10px;
        border-radius: 8px;
        cursor: pointer;
      ">▶️</button>

      <input id="progress" type="range" min="0" max="100" value="0" style="
        flex-grow: 1;
        cursor: pointer;
      ">

      <input id="volume" type="range" min="0" max="1" step="0.01" value="0.5" style="width: 60px;">

      <button id="loop-btn" style="
        background: #6A5ACD;
        border: none;
        color: white;
        padding: 5px 8px;
        border-radius: 8px;
        cursor: pointer;
      ">🔁</button>
    </div>
  </div>
</div>

<audio id="audio" src="/img/user/Sufjan Stevens - Mystery of Love.mp3"></audio>

<script>
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const loopBtn = document.getElementById('loop-btn');

let isLoop = false;

// 播放/暂停
playBtn.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
});

// 更新进度条
audio.addEventListener('timeupdate', () => {
  if(audio.duration) progress.value = (audio.currentTime / audio.duration) * 100;
});

// 拖动进度条
progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// 音量控制
volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

// 循环
loopBtn.addEventListener('click', () => {
  isLoop = !isLoop;
  audio.loop = isLoop;
  loopBtn.style.background = isLoop ? '#483D8B' : '#6A5ACD';
});
</script>

