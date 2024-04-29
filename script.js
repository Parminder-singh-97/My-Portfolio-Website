// typed text-------+++++++++++++++
var typed = new Typed('#element', {
    strings: ['FrontEnd Developer.' , 'Graphics designer.'],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'

    
    

    
  });

// menu bar---------

let menu = document.querySelector(".fa-bars")
let cross = document.querySelector(".fa-xmark");

menu.addEventListener("click", () => {
    
 
        document.querySelector(".menu_box").style.top = "0%";
   


});
cross.addEventListener("click", () =>{

    document.querySelector(".menu_box").style.top = "-70%";

});

// gsap--------++++++++
       


var header_tl = gsap.timeline();

// header_tl
gsap.from("nav img", {
    x:-20,
    duration:1,
    opacity:0,
    delay:1.5
    
})

header_tl.from("nav ul li", {
    
    x:30,
    duration:1,
    opacity:0,
    stagger:0.2,
    delay:1.5
})

header_tl.from(".fa-bars", {
    
    x:30,
    duration:1,
    opacity:0,
    


});


var left_tl = gsap.timeline();

left_tl.from(".left_1" ,{
    
    x:50,
    duration:1,
    opacity:0,
    delay:1,
    stagger:0.4,
})

left_tl.from(".btn" ,{
    
    x:-50,
    duration:0.6,
    opacity:0,
})

var right_tl = gsap.timeline();

right_tl.from(".right_side" ,{
    
    x:-50,
    duration:1,
    opacity:0,
    delay:1,
   
})