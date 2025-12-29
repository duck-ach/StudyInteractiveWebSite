<!-- Section 4 : 2025 안녕.. 하는 페이지 -->
<template>
  <section class="year-end">
    <div class="text-wrap">
      <h2 class="msg-1">2025년도..</h2>
      <h2 class="msg-2">그렇게...</h2>
      <h2 class="msg-3">가버렸습니다.....</h2>
      <h1 class="msg-4">더 즐거운 2026년이 오고있어요 😆 !!!!!</h1>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".year-end",
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: 2,
    },
  });

  tl.from(".msg-1", { opacity: 0, y: 30 })
    .from(".msg-2", { opacity: 0, y: 30 }, "+=1")
    .from(".msg-3", { opacity: 0, y: 30 }, "+=1")
    .to(".text-wrap", { scale: 0.8, opacity: 0 })
    .from(".msg-4", { opacity: 0, scale: 1.5, duration: 2 });
});
</script>

<style scoped>
.year-end {
  background: #000;
  color: #fff;
  text-align: center;
}
.text-wrap h2 {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 20px;
}
.msg-4 {
  font-size: 4rem;
  word-break: keep-all;
  color: #ffeb3b;
}
</style>
