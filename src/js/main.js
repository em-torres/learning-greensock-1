gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

window.onload = function () {
    gsap.set(".hero_circle, .hero_square, .hero_square-2", {
        autoAlpha: 0,
        transformOrigin: "50% 50%",
        scale: 0
    })

    let hero_tl = gsap.timeline({
        defaults: {
            stagger: {amount: 0.2},
            autoAlpha: 1,
            scale: 1,
            ease: "back.out(1.7)"
        },
    })
    hero_tl.to(".hero_circle", {})
        .to('.hero_square', {})
        .to('.hero_square-2', {})
}