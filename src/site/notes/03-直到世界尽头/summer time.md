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
      <img src="https://res.cloudinary.com/ddirafvdx/image/upload/v1755602497/Cypresses_xfr14q.jpg" onclick="openLightbox(this)" />
    </div>
    <div class="album-item">
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068103/dgdocs/CleanShot_2022-11-10_at_09.14.47_2x.png" onclick="openLightbox(this)" />
    </div>
    <!-- 复制更多 album-item 来添加图片 -->
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
  border-radius: 10px;
  position: relative;
}

.album-track {
  display: flex;
  gap: 15px;
  will-change: transform;
}

.album-item {
  min-width: 200px;
  border: 3px solid #f9cdc2;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, border-color 0.3s;
}

.album-item:hover {
  transform: scale(1.05);
  border-color: #0a2399;
}

.album-item img {
  width: 100%;
  display: block;
  border-radius: 7px;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 1s forwards;
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
  border-radius: 10px;
}

@keyframes fadeIn {
  to { opacity: 1; }
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
    // 到达一半长度时重置 scrollLeft
    if (track.scrollLeft >= track.scrollWidth / 2) {
      track.scrollLeft = 0;
    }
  }
  requestAnimationFrame(animate);
}

track.addEventListener('mouseenter', () => paused = true);
track.addEventListener('mouseleave', () => paused = false);

animate();

// 点击放大灯箱
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
</script>
