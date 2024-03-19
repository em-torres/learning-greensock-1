gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

window.onload = function () {
    // -- Class 1
    gsap.from('article', {
        scrollTrigger: {
            trigger: '.cards',
        },
        stagger: {amount: 0.5},
        scale: 0,
        duration: 1
    })
}