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
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068263/dgdocs/CleanShot_2022-11-10_at_09.17.28_2x.png" />
      <div class="caption">That Other Dev</div>
    </div>
    <div class="album-item">
      <img src="https://res.cloudinary.com/dix4ngy25/image/upload/v1668068103/dgdocs/CleanShot_2022-11-10_at_09.14.47_2x.png" />
      <div class="caption">Syleria</div>
    </div>
    <!-- 可继续添加更多图片 -->
  </div>
</div>

<style>
.photo-album {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  background: #fcf4f2;
  border-radius: 10px;
}

.album-track {
  display: flex;
  gap: 15px;
  animation: scroll 15s linear infinite;
}

.photo-album:hover .album-track {
  animation-play-state: paused; /* 鼠标悬停暂停滚动 */
}

.album-item {
  min-width: 200px;
  position: relative;
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
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.caption {
  position: absolute;
  bottom: 5px;
  left: 5px;
  right: 5px;
  text-align: center;
  background: rgba(0,0,0,0.5);
  color: #fff;
  padding: 5px 0;
  border-radius: 5px;
  font-size: 0.9rem;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* 可根据图片数量调整 */
}

@keyframes fadeIn {
  to { opacity: 1; }
}
</style>
