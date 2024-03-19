gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

window.onload = function () {
    // Main Starting Point
    gsap.set(".hero_circle, .hero_square, .hero_square-2", {
        autoAlpha: 0,
        transformOrigin: "50% 50%",
        scale: 0
    })

    // Lesson 1 - Timelines and Defaults
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

    // Lesson 2 - ScrollTrigger
    gsap.from(".move", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 50%",
            end: "center 50%",
            scrub: 1,
            markers: true
        },
        scale: 0,
        duration: 1,
    })

    // Lesson 3 - Reusable Functions, Complex Animations and Main Timelines
    function lineAnimation(line) {
        let lineTL = gsap.timeline()
        lineTL.from(line, {
            stagger: {amount: 0.5},
            ease: "back.out(1.7)",
            scaleX: 0,
            duration: 1
        })

        return lineTL
    }

    function paraAnimation(paragraph) {
        let paraTL = gsap.timeline()
        paraTL.from(paragraph, {
            scale: 0,
            x: -200,
            duration: 1
        })

        return paraTL
    }

    // Setting up a Main Timeline.
    let mainTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#thoughts",
            start: "top 50%",
            end: "100 100%",
            markers: true,
            scrub: 1,
        },
    })

    mainTL.add(paraAnimation(".thoughts_paragraph-1"))
        .add(paraAnimation(".thoughts_paragraph-2"))
        .add(lineAnimation(".line_1"))
        .add(lineAnimation(".line_2"))
}
