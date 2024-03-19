gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

window.onload = function () {
    // -- Class 1
    gsap.from('article', {
        scrollTrigger: {
            trigger: '.cards',  // The trigger element or the element that will be animated (triggered).
            start: 'top top',   // When the top of the trigger hits the top of the viewport.
            end: '+=100',       // When the bottom of the trigger hits the bottom of the viewport.
        },
        stagger: { amount: 0.5 },
        scale: 0,
        duration: 1
    })
}