<!-- Section 5 : 2026 목표 -->

<template>
  <section class="goal-section">
    <div v-for="(goal, idx) in goals" :key="idx" :class="`goal goal-${idx}`">
      {{ goal }}
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

const goals = [
  "1. 인터랙티브 웹 정복 🚀",
  "2. 1500만원 달성 💰",
  "3. 블로그 체험단 ✍️",
  "4. 긍정의 마음 ✨",
];

onMounted(() => {
  goals.forEach((_, idx) => {
    gsap.from(`.goal-${idx}`, {
      scrollTrigger: {
        trigger: ".goal-section",
        start: `top+=${idx * 200} center`,
        toggleActions: "play none none reverse",
      },
      y: -500, // 위에서 떨어짐
      opacity: 0,
      scale: 3,
      duration: 0.6,
      ease: "bounce.out", // 뽱! 하고 튕기는 효과
    });
  });
});
</script>

<style scoped>
.goal-section {
  flex-direction: column;
  gap: 30px;
  background: #f2f4f6;
}
.goal {
  font-size: 2rem;
  font-weight: bold;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
