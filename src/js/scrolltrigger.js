gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

window.onload = function () {
    // -- Class 1
    gsap.from('article', {
        scrollTrigger: {
            trigger: '.cards',  // The trigger element or the element that will be animated (triggered).
            start: 'top top',   // When the top of the trigger hits the top of the viewport.
            end: '+=100',       // When the trigger hits 100 pixels beyond the viewport.
            // markers: true,      // Show the markers on the viewport.
            markers: {                  // Array to modify how to show the markers on the viewport.
                startColor: "#ff771c",
                endColor: "black",
                fontSize: "20px",
                fontWeight: "bold",
                indent: 20
            }
        },
        stagger: { amount: 0.5 },
        scale: 0,
        duration: 1
    })
}