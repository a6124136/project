<script setup>
</script>

<template>
<!-- 輪播範圍 -->
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.10wallpaper.com/wallpaper/1366x768/1111/lighthouse-Landscape_Desktop_Picture_1366x768.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.10wallpaper.com/wallpaper/1366x768/2001/Street_night_After_rain_2019_Cities_HD_Photo_1366x768.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.10wallpaper.com/wallpaper/1366x768/1402/tropical_waterfall-Seasons_HD_Wallpaper_1366x768.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- 輪播範圍 -->
<!-- 底下三個連結方塊 -->
<div id="threeBlock" class="d-flex  justify-content-center">
  <div class="conect">
    <RouterLink class="Routers" to="/search">タッグから探す</RouterLink>
  </div>
  <div class="conect">
    エリアから探す
  </div>
  <div class="conect">
    沿線.駅から探す
  </div>
</div>

</template>

<style scoped>
  #threeBlock{
    widows: 100%;
    height: 500px;
    /* background-color: blue; */
    align-items: center;
    .conect{
      box-sizing: border-box;
      padding: 65px 0;
      width: 300px;
      height: 150px;
      margin: 10px;
      background-color:  rgb(82, 70, 152);
      border-radius: 10px;
      text-align: center;
      align-items: center;
      color: #fff;
      font-weight: 800;
      font-size: 14pt;
      .Routers{
        text-decoration: none;
        color: #fff;
      }
    }
  }
</style>