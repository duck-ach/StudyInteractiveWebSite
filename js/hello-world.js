/*
    GSAP는 기본적으로 움직임(애니메이션)을 담당하는 엔진이다.
    하지만 스크롤에 반응하는 기능(ScrollTrigger)은 기본엔진에 포함되어 있지 않은 별도의 플러그인
    모든 기능을 한꺼번에 넣으면 파일 용량이 너무 커져, 필요한 기능만 선언해서 등록하는 방식을 사용함
*/
// GSAP 에 ScrollTrigger 플러그인을 등록합니다.
gsap.registerPlugin(ScrollTrigger);

/*
    COMMON
 */
// 모든 섹션 찾아서 하나씩 기능 부여
const panels = gsap.utils.toArray(".panel");

panels.forEach((panel, index) => {
  /*
        SECTION 1
    */
  if (index === 0) {
  }
});

// 글자 요소 선택
const chars = document.querySelectorAll(".clip");
chars.forEach((char) => {
  // 1. 마우스를 올렸을 때 (개별 동작)
  char.addEventListener("mouseenter", () => {
    gsap.to(char, {
      duration: 0.5,
      y: -20,
      scale: 1.2,
      rotate: "random(-1, 15)",
      // "rgb(R, G, B)" 형태의 랜덤 값 생성
      color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(
        0,
        255
      )}, ${gsap.utils.random(0, 255)})`,
      ease: "back.out(2)",
      overwrite: true,
    });
  });

  // 2. 마우스가 나갔을 때 (제자리로)
  char.addEventListener("mouseleave", () => {
    gsap.to(char, {
      duration: 0.5,
      y: 0,
      scale: 1,
      rotate: 0,
      color: "", // 원래 색상으로
      ease: "elastic.out(1, 0.3)", // 돌아올 때도 찰랑거리며 복귀
    });
  });
});

// 7초마다 글자들이 왼쪽부터 순서대로 통통 튀는 웨이브 효과
const playWave = () => {
  gsap.to(".clip", {
    duration: 0.4,
    y: -30, // 위로 튀어오르는 높이
    stagger: {
      each: 0.08, // 글자 사이의 간격 (물결 속도)
      from: "start", // 왼쪽부터 시작
    },
    ease: "power2.out", // 올라갈 때 느낌
    yoyo: true, // 다시 내려오기
    repeat: 1, // 올라갔다 내려와야 하므로 1번 반복
    // "rgb(R, G, B)" 형태의 랜덤 값 생성
    color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(
      0,
      255
    )}, ${gsap.utils.random(0, 255)})`,
  });
};

// 페이지 로드 후 즉시 한 번 실행하고, 이후 7초마다 반복
playWave();
setInterval(playWave, 7000);

/* 
    SECTION 1 : 이미지 제어
*/
// 1. 이미지 (지렁이들) 띠요오옹 기지개 모션
// w.png: 5초마다 가로로 띠요오옹
gsap.to(".worm-w", {
  scaleX: 1.5,
  scaleY: 0.8,
  duration: 0.8,
  repeat: 1,
  repeatDelay: 4.2, // 0.8 + 4.2 = 5초 주기
  yoyo: true,
  ease: "elastic.out(1, 0.3)", // 띠요오옹 하는 탄성 효과
});

// j.png: 8초마다 세로로 쁴~~용
gsap.to(".worm-j", {
  scaleY: 1.8,
  scaleX: 0.7,
  duration: 1,
  repeat: 1,
  repeatDelay: 7, // 1 + 7 = 8초 주기
  yoyo: true,
  ease: "elastic.out(1, 0.3)",
});

// w 마우스 부드럽게 따라다니기 (뒤늦게 따라오는 효과)
const w = document.querySelectorAll(".worm-w");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  w.forEach((worm, index) => {
    // index에 따라 반응 속도를 다르게 해서 각자 따로 움직이는 느낌 부여
    const delay = (index + 1) * 0.15;

    gsap.to(worm, {
      x: (clientX - window.innerWidth / 2) * 0.1, // 마우스 움직임의 10%만 반영
      y: (clientY - window.innerHeight / 2) * 0.1,
      duration: 1 + delay, // 뒤늦게 따라오는 시간 차이
      ease: "power2.out",
      overwrite: "auto",
    });
  });
});

// j 마우스 부드럽게 따라다니기 (뒤늦게 따라오는 효과)
const j = document.querySelectorAll(".worm-j");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  j.forEach((worm, index) => {
    // index에 따라 반응 속도를 다르게 해서 각자 따로 움직이는 느낌 부여
    const delay = (index + 1) * 0.15;

    gsap.to(worm, {
      x: (clientX - window.innerWidth / 5) * 0.1, // 마우스 움직임의 10%만 반영
      y: (clientY - window.innerHeight / 2) * 0.1,
      duration: 6 + delay, // 뒤늦게 따라오는 시간 차이
      ease: "power2.out",
      overwrite: "auto",
    });
  });
});

// bang (!) 5초마다 180도 뒤집기
gsap.to(".bang", {
  rotation: 180, // 180도 회전
  duration: 1, // 회전하는 데 걸리는 시간 (1초 동안 핑글!)
  repeat: -1, // 무한 반복
  yoyo: true, // 다시 정방향으로 돌아옴
  repeatDelay: 4, // 회전 후 4초 대기 (회전시간 1초 + 대기 4초 = 총 5초 주기)
  ease: "back.inOut(2)", // 시작과 끝에 약간의 탄성을 줘서 역동적으로
});
