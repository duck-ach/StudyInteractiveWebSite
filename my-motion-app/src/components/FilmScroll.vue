<!-- Section 3 : 2025 돌아보기 이미지 나열 -->

<template>
  <section class="film-container">
    <div class="film-track">
      <div v-for="i in 10" :key="i" class="film-item">
        <img :src="`https://picsum.photos/300/400?random=${i}`" />
        <div class="desc">
          추억의 장면 {{ i }} <br /><span>행복했던 그날의 기록</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const track = document.querySelector(".film-track");
  gsap.to(track, {
    x: () => -(track.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".film-container",
      start: "top top",
      end: "+=2000", // 스크롤 길이를 길게 잡음
      scrub: 1,
      pin: true, // 화면 고정
    },
  });
});
</script>

<style scoped>
.film-container {
  background: #111;
  overflow: hidden;
}
.film-track {
  display: flex;
  gap: 20px;
  padding: 0 50px;
}
.film-item {
  flex-shrink: 0;
  width: 280px;
  background: white;
  padding: 5px;
  border-bottom: 20px solid black;
  border-top: 20px solid black; /* 필름 구멍 느낌 */
}
.film-item img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.desc {
  padding: 10px;
  font-size: 14px;
  color: #333;
}
</style>
