/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('nav__show')
        })
    }
}
showMenu('nav-toggle','nav-menu');


gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.home', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})


gsap.from(".about_scroll", {
    scrollTrigger: {
        trigger: '.about_scroll',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".skills_scroll", {
    scrollTrigger: {
        trigger: ".skills_scroll",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});

gsap.from(".work_scroll", {
    scrollTrigger: {
        trigger: ".work_scroll",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});

gsap.from(".contact_scroll", {
    scrollTrigger: {
        trigger: ".contact_scroll",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});