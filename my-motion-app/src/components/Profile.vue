<!-- SECTION2 : 이미지 & 내 소개 -->
<template>
  <section class="profile-section">
    <div class="profile-container">
      <img
        src="https://picsum.photos/400/400"
        class="profile-img"
        alt="내 사진"
      />
      <div class="info-list">
        <p class="info-item">이름 : <strong>히룽지</strong></p>
        <p class="info-item">나이 : <strong>28세</strong></p>
        <p class="info-item">
          취미 : <strong>인터랙티브 웹 제작, 게임</strong>
        </p>
        <p class="info-item">요즘 읽는 책 : <strong>저소비 생활</strong></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile-section",
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: 1,
    },
  });

  tl.from(".profile-img", { opacity: 0, scale: 0.5, duration: 1 })
    .from(".info-item", { opacity: 0, x: 50, stagger: 0.5, duration: 1 })
    .to(".profile-container", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
});
</script>

<style scoped>
.profile-section {
  background: #fff;
}
.profile-container {
  display: flex;
  align-items: center;
  gap: 50px;
}
.profile-img {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
.info-list {
  font-size: 1.5rem;
  line-height: 2;
  color: #333;
}
.info-item strong {
  color: #3182f6;
} /* 토스 블루 */
</style>
