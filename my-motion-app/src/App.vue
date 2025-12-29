<template>
  <main>
    <Intro />
    <Profile />
    <FilmScroll />
    <YearEnd />
    <Goal2026 />
    <Fireworks />
  </main>
</template>

<script setup>
import Intro from "./components/Intro.vue";
import Profile from "./components/Profile.vue";
import FilmScroll from "./components/FilmScroll.vue";
import YearEnd from "./components/YearEnd.vue";
import Goal2026 from "./components/Goal2026.vue";
import Fireworks from "./components/Fireworks.vue";
</script>

<style>
/* 전역 스타일: 토스 느낌의 깔끔한 폰트와 배경 */
body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #191f28; /* 토스 다크 그레이 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow-x: hidden;
}

section {
  width: 100%;
  height: 100vh; /* 한 페이지 꽉 채우기 */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
