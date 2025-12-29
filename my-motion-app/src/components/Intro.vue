<!-- Section 1 : Hello world-->

<template>
  <section class="intro">
    <h1 class="title">Hello World</h1>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".title", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out",
  });

  // 스크롤 내리면 사라지게 함
  gsap.to(".title", {
    scrollTrigger: {
      trigger: ".intro",
      start: "top top",
      end: "bottom center",
      scrub: true,
    },
    opacity: 0,
    scale: 0.8,
  });
});
</script>
