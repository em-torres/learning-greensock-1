window.onload = function() {
    // -- Class 1
    gsap.to(".container .box2", {
        duration: 2,
        y: "200%",
        yoyo: true,
        repeat: -1,
    })

    // -- Class 2
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

    // -- Class 3
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

    // -- Class 4
    let tl = gsap.timeline()
    tl.timeScale(2) // Speed up the timeline

    tl.to(".container4 .box1", {
        duration: 1,
        scale: 0,
        opacity: 0,
    })
        .to(".container4 .box2", {
            duration: 1,
            x: "-100%"
        })
        .to(".container4 .box3", {
            duration: 1,
            x: "-100%",
            rotate: 360
        })
        .set(".container4 .box1", {
            x: "225%"
        })
        .to(".container4 .box1", {
            duration: 1,
            scale: 1,
            opacity: 1,
        })
        .repeat(-1)
}