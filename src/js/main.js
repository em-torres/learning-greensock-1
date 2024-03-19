gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

window.onload = function () {
    gsap.set(".hero_circle, .hero_square, .hero_square-2", {
        autoAlpha: 0,
        transformOrigin: "50% 50%",
        scale: 0
    })

}