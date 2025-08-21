<script setup></script>

<template>
  <div
    class="bg-cover bg-center bg-no-repeat relative"
    style="
      background-image: url('/Bg/wallpapersden.com_fantasy-castle-pixel-art_1920x1081.jpg');
      padding-top: 350px;
      padding-bottom: 352px;
      padding-left: 702px;
      padding-right: 710px;
    "
  >
    <div class="text-center" style="width: 500px; height: 250px;">
      <h1 class="press-start-2p-regular text-white text-6xl mb-4" style="width: 500px;">Solo</h1>
      <h1 class="press-start-2p-regular text-white text-6xl">Fantasy</h1>
      <div class="" style="margin-top: 50px;">
        <router-link :to="{ name: 'SelectCharacter' }" class="">
          <button class="cursor-pointer">
            <img
              src="/All Element/playButton-1.2.png"
              style="transform: scale(3)"
            />
          </button>
        </router-link>
        <button class="cursor-pointer" style="margin-left: 200px">
          <img
            src="/All Element/Tutorial-1.2.png"
            style="transform: scale(3)"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
.press-start-2p-regular {
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
}
</style>
