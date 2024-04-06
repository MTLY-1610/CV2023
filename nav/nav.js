// const { Bounce } = require("gsap");

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})


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

gsap.to(".namewrapper", { opacity: 1, delay: 0.5, duration: 2, ease: "power0.inout" });
gsap.to(".namewrapper", { opacity: 0, duration: 1.35, delay: 2.75, ease: "power2.out" });
gsap.to(".menu", { opacity: 1, duration: 1.35, ease: Bounce.in, delay: 2.75 });
gsap.to(".pitch", { opacity: 1, duration: .5, delay: 5.5 });



