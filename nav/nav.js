

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})


ScrollTrigger.update() 

const cards = document.querySelector(".card-holder");

function getScrollAmount() {
    let cardWidth = cards.scrollWidth;
    return -(cardWidth - window.innerWidth);

}

const tween = gsap.to(cards, {
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


gsap.to("#first, #last", {opacity:1, duration:5});
gsap.to("#first, #last", {y:"-45vh",fontSize:"2vw", duration:3, delay:5});
gsap.to("#burger", {opacity:1, duration:1, delay:8});
gsap.to("#pitch", {opacity:1, duration:1, zIndex:10, delay:8});



