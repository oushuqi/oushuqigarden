---
{"dg-publish":true,"tags":["飞花","note","爱"],"dg-order":"1","character":12,"permalink":"/03-直到世界尽头/summer time/","dgPassFrontmatter":true,"noteIcon":""}
---


正式的写作
零散的笔记
昨日的梦境
yousbdh sjcnbv eee e  e xsdUbcso sfihj 


<div class="photo-album">
  <div class="album-track" id="album-track">
    <div class="album-item">
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068263/dgdocs/CleanShot_2022-11-10_at_09.17.28_2x.png" onclick="openLightbox(this)" />
    </div>
    <div class="album-item">
      <img src="https://res.cloudinary.com/ddirafvdx/image/upload/v1755602497/102193_a4oydx.jpg" onclick="openLightbox(this)" />
    </div>
    <!-- 可以继续复制 album-item 添加更多图片 -->
  </div>
</div>

<div id="lightbox" onclick="closeLightbox()">
  <img id="lightbox-img" />
</div>

<style>
.photo-album {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  background: #fcf4f2;
  border-radius: 15px;
  position: relative;
}

.album-track {
  display: flex;
  gap: 15px;
  will-change: transform;
}

.album-track img {
  opacity: 0;
}

.album-item {
  min-width: 200px;
  border: 3px solid;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, border 0.5s;
  border-image: linear-gradient(45deg, #ffb4a3, #fcf4f2, #0a2399) 1;
  animation: slideIn 1s forwards;
}

.album-item:hover {
  transform: scale(1.08);
  border-image: linear-gradient(45deg, #0a2399, #ffb4a3, #fcf4f2) 1;
}

.album-item img {
  width: 100%;
  display: block;
  border-radius: 10px;
  cursor: pointer;
}

#lightbox {
  display: none;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

#lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
}

@keyframes slideIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>

<script>
// 无限滚动逻辑
const track = document.getElementById('album-track');
let speed = 0.5; // 滚动速度（像素/帧）
let paused = false;

// 克隆图片实现循环
track.innerHTML += track.innerHTML;

function animate() {
  if (!paused) {
    track.scrollLeft += speed;
    if (track.scrollLeft >= track.scrollWidth / 2) {
      track.scrollLeft = 0;
    }
  }
  requestAnimationFrame(animate);
}

track.addEventListener('mouseenter', () => paused = true);
track.addEventListener('mouseleave', () => paused = false);

// 点击放大灯箱
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
</script>

