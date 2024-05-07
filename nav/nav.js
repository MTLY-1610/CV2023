// const { Bounce } = require("gsap");


// lenis smooth scroll

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

// scrollTrigger init

ScrollTrigger.update() 

let cards = document.querySelector(".card-holder");

function getScrollAmount() {
    let cardWidth = cards.scrollWidth;
    return -(cardWidth - window.innerWidth);

}

let tween = gsap.to(cards, {
    x: getScrollAmount,
    duration: 3,
    ease: "none"
});

ScrollTrigger.create({
    trigger: ".horWrapper",
    start: "top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    // snap: 0.05,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: false
});

// Gsap lander section timelime

// gsap.to(".hero", { opacity: 0 , delay: 0.51, duration: .325, ease: "power0.inout" });
gsap.to(".menu", { opacity: 1, x: 10, duration: .750, ease: Bounce.in, delay: .325 });
gsap.to(".pitch", { opacity: 1, duration: .325, delay: .375 });
// gsap.to(".hero", { opacity: 1, duration: .325, delay: 3 });





 