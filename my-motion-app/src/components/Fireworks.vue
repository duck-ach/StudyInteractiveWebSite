<!-- SECTION 6: 불꽃놀이 & 마무리 -->
<template>
  <section class="fireworks-section" @mousedown="createFirework">
    <h1 class="final-text">2026년에도 화이팅 하자!!</h1>
    <p class="hint">화면을 클릭해보세요!</p>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

const createFirework = (e) => {
  const colors = ["#ff4757", "#eccc68", "#ff7f50", "#7bed9f", "#70a1ff"];

  for (let i = 0; i < 15; i++) {
    const firework = document.createElement("div");
    firework.className = "particle";
    document.body.appendChild(firework);

    const size = Math.random() * 10 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    gsap.set(firework, {
      x: e.clientX,
      y: e.clientY,
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: "50%",
      position: "fixed",
      pointerEvents: "none",
      zIndex: 9999,
    });

    gsap.to(firework, {
      x: e.clientX + (Math.random() - 0.5) * 300,
      y: e.clientY + (Math.random() - 0.5) * 300,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => firework.remove(),
    });
  }
};

onMounted(() => {
  gsap.from(".final-text", {
    scrollTrigger: {
      trigger: ".fireworks-section",
      start: "top center",
    },
    scale: 5,
    opacity: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });
});
</script>

<style scoped>
.fireworks-section {
  background: #000;
  color: white;
  flex-direction: column;
  cursor: crosshair;
}
.final-text {
  font-size: 5rem;
  font-weight: 900;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}
.hint {
  margin-top: 20px;
  opacity: 0.5;
}
</style>
