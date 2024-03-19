window.onload = function() {
    // Class 3
    gsap.to(".container .box2", {
        duration: 2,
        y: "200%",
        yoyo: true,
        repeat: -1,
    })

    // Class 2
    gsap.set(".container2 .box2", {
        opacity: 0,
    })
    gsap.to(".container2 .box2", {
        opacity: 1,
        duration: 2,
        y: "200%",
        yoyo: true,
        repeat: -1,
    })

    // Class 3
    gsap.to(".container3 .box", {
        duration: 0.5,
        y: "200%",
        ease: "power1",
        yoyo: true,
        repeat: -1,
        stagger: {
            // amount: 0.5,
            // Takes the total amount of time (in seconds) that gets split up among all the targets (staggers).
            each: 0.5,
            // Takes the amount of time (in seconds) that each target is staggered.
            from: 0,
            // Takes the position from which the staggering should start. It take a number between 0 and the qty of the array or values "end", "center", "edges", etc.... see documentation.
        }
    })
}