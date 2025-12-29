/*
    GSAP는 기본적으로 움직임(애니메이션)을 담당하는 엔진이다.
    하지만 스크롤에 반응하는 기능(ScrollTrigger)은 기본엔진에 포함되어 있지 않은 별도의 플러그인
    모든 기능을 한꺼번에 넣으면 파일 용량이 너무 커져, 필요한 기능만 선언해서 등록하는 방식을 사용함
*/
// GSAP 에 ScrollTrigger 플러그인을 등록합니다.
gsap.registerPlugin(ScrollTrigger);

// 모든 섹션 찾아서 하나씩 기능 부여
const panels = gsap.utils.toArray(".panel");

panels.forEach((panel, index) => {
  // 각 섹션 안에 있는 h1 선택
  const title = panel.querySelector("h1");
  // 각 섹션 안에 있는 p 선택
  const text = panel.querySelector("p");

  // --- SECTION 01: 찰랑찰랑 + 색상 변경 ---
  if (index === 0) {
    gsap.to(title, {
      color: "#ffffff",
      y: -20, // 위아래로 찰랑
      repeat: -1, // 무한 반복
      yoyo: true, // 갔다 돌아오기
      duration: 1.5,
      ease: "sine.inOut",
    });

    gsap.to(text, {
      color: "#ffffff",
    });

    // 스크롤 시 투명도 조절만 추가
    gsap.to(panel, {
      scrollTrigger: {
        trigger: panel,
        start: "top top",
        scrub: true,
      },
      opacity: 0.5,
    });
  }

  // --- SECTION 02: 텍스트가 양옆에서 날아오기 (추천!) ---
  if (index === 1) {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });
    tl2
      .from(title, { x: -200, opacity: 0 })
      .from(text, { x: 200, opacity: 0 }, "-=0.5");
  }

  // --- SECTION 03: 줌인(Zoom In) 효과 (추천!) ---
  if (index === 2) {
    gsap.from(title, {
      scale: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: panel,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }
  // --- SECTION 04: PIN 된 채로 배경색 3번 바뀌기 ---
  if (index === 3) {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        start: "top top",
        end: "+=3000", // 스크롤을 3000px만큼 더 내려야 핀이 풀림
        pin: true, // 화면 고정!
        scrub: 1,
      },
    });

    // 배경색이 차례대로 바뀜
    tl4
      .to(panel, { backgroundColor: "#3498db" }) // 파랑
      .to(panel, { backgroundColor: "#e67e22" }) // 주황
      .to(panel, { backgroundColor: "#1abc9c" }) // 민트
      .to(title, { rotation: 360, scale: 1.5 }); // 마지막에 제목 회전
  }

  // --- SECTION 05: 마무리 ---
  if (index === 4) {
    gsap.from(title, {
      y: 100,
      skewY: 10, // 살짝 기울어져서 올라오기
      duration: 1,
      scrollTrigger: {
        trigger: panel,
        start: "top 40%", // 섹션 꼭대기가 화면 제일 아래에 닿자마자
        end: "bottom",
        scrub: 1, // 스크럽
        markers: false,
      },
      // 순서대로: 들어올 때 / 나갈 때 / 다시 들어올 때 / 다시 나갈 때의 동작
      // play, pause, resume, reverse, restart, reset, complete, none 사용 가능
      toggleActions: "play none none reverse",
    });
  }
});

// 타임라인에 동작 추가(제목 나오고, 설명 나오고)
tl.from(title, { y: 50, opacity: 0, duration: 1 }).from(
  text,
  { y: 30, opacity: 0, duration: 1 },
  "-=0.5"
);
