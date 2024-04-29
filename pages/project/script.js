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






var card = gsap.timeline()

card.from(".about_right > h1",{

  x: 50,
  duration : 2,
  opacity : 0,
  delay : 1,
  
})


card.from(".p1", {
 
  y:80,
  opacity : 0,
  scale: 0,
  duration:2,
  stagger:0.5,    
  
});
var Jscard = gsap.timeline()

gsap.from(".javaScript_pro > h1",{

  x: 50,
  duration : 2,
  opacity : 0,
  delay : 1,
  scrollTrigger:{

    trigger: ".javaScript_pro > h1",
    scroller: "body",
    start: "top 100%",
    end: "bottom 100%",
    scrub: 2,
  
  }
  
})



gsap.from(".p2", {
 
  y:80,
  opacity : 0,
  scale: 0,
  duration:2,
  stagger:0.5, 
  scrollTrigger:{
    trigger: ".javaScript_pro",
    scroller: "body",
    start: "top 90%",
    end: "bottom 90%",
    scrub: 2,
    



  }

  
});







 

  
       

        
