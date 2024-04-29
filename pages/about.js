// menu bar ++++++++++++++++++++++++++++






let menu = document.querySelector(".menu_box");
let cross = document.querySelector(".fa-xmark");

check = 0;

menu.addEventListener("click", () => {
  if (check == 0) {
    document.querySelector(".menu_box ul").style.top = "10%";
    check = 1;
  } else {
    document.querySelector(".menu_box ul").style.top = "-70%";

    check = 0;
  }
});

// gsap ++++++++++++++++++++++

var header_tl = gsap.timeline();

// _______________________________________________________
header_tl.from("nav ul li", {
  x: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
});

gsap.from(".user_img", {
  y: -20,
  duration: 5,
  opacity: 0,
  delay: 1.5,
});
gsap.from(".menu_container", {
  x: -20,
  duration: 1,
  opacity: 0,
  delay: 1.5,
});

// --------------------------------------------------

var aboutLeft_tl = gsap.timeline();

aboutLeft_tl.from(".about_1", {
  x: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
});

aboutLeft_tl.from(".about_2", {
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});

// about   me ++++++++++++++++++

var aboutme_tl = gsap.timeline();

aboutme_tl.from(".aboutMe_1", {
  x: -30,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
});

gsap.from(".skill", {
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
});
gsap.from(".heading", {
  y: 30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".heading",
    scroller: "body",

    start: "top 70%",
    end: "bottom 70%",
    scrub: 2,
  },
});

gsap.from(".proj_container .card", {
  y: 50,
  duration: 0.5,
  scale: 0,
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: ".proj_container",
    scroller: "body",

    end: "10%",

    scrub: 2,
  },
});
gsap.from(".contactMe_1", {
  y: 30,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
  scrollTrigger: {
    trigger: ".contactMe_1",
    scroller: "body",
    start: "top 90%",
    end: "bottom 90%",
    
  },
});
