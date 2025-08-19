---
{"dg-publish":true,"tags":["飞花","note","爱"],"dg-order":"1","character":12,"permalink":"/03-直到世界尽头/summer time/","dgPassFrontmatter":true,"noteIcon":""}
---


正式的写作
零散的笔记
昨日的梦境
yousbdh sjcnbv eee e  e xsdUbcso sfihj 


<div class="photo-album">
  <div class="album-track">
    <div class="album-item">
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068263/dgdocs/CleanShot_2022-11-10_at_09.17.28_2x.png" onclick="openLightbox(this)" />
    </div>
    <div class="album-item">
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068103/dgdocs/CleanShot_2022-11-10_at_09.14.47_2x.png" onclick="openLightbox(this)" />
    </div>
    <!-- 复制更多 album-item 来添加图片 -->
    <!-- 再重复一遍实现循环 -->
    <div class="album-item">
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068263/dgdocs/CleanShot_2022-11-10_at_09.17.28_2x.png" onclick="openLightbox(this)" />
    </div>
    <div class="album-item">
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068103/dgdocs/CleanShot_2022-11-10_at_09.14.47_2x.png" onclick="openLightbox(this)" />
    </div>
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
  animation: scroll-left 20s linear infinite;
}

.photo-album:hover .album-track {
  animation-play-state: paused;
}

.album-item {
  min-width: 200px;
  border: 3px solid;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, border 0.5s;
  border-image: linear-gradient(45deg, #ffb4a3, #fcf4f2, #0a2399) 1;
  animation: fadeInUp 1s forwards;
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

/* 动画 */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>

<script>
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
</script>

