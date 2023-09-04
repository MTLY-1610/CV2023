

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})




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



// var t = new SplitText("#text", {type:"chars", charsClass:"staggered-text"}); //type = which coponents to split apart - chars, words, and/or lines)

// TweenLite.set("#text", {visibility:"visible"});

// TweenMax.staggerFrom(t.chars, 2, {opacity:0, scale:1.2}, 0.3);  

// // final digit is the stagger parameter ie delay between one character and the next
 
