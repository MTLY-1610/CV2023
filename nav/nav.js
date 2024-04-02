const { Bounce } = require("gsap");

console.clear();

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


gsap.to(".lander", { opacity: 0,  duration: 1, delay: 5, ease: "power2.in"});
gsap.to(".menu", { opacity: 1, x: -30, duration: .1, ease: Bounce.in, delay: 6});
gsap.to(".horWrapper", { opacity: 0 });

gsap.to(".pitch", { opacity: 0, duration: 0, delay: 0});
// gsap.to("#namewrapper", { y: "-30vh", opacity: 1, fontSize: "2vw", ease: "power1.out", duration: .35, delay: 5 });
// gsap.to("#burger", { opacity: 1, duration: 2, delay: 9 });
// gsap.to("#pitch", { opacity: 1, height: "66vh", duration: 2, delay: 10 });


