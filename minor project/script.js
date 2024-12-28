

function timelineOne(){
    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "+=200%"  // Adjusted end value
        }
    });
    
    t1.to("#circle #btm img",{
        rotate:"-180deg",
        scale:1,
        duration:1,
        stagger:.1,
        ease:Power1
    },"hello")
    .to("#circle #top img",{
        scale:1,
        duration:1,
        stagger:.1,
        ease:Power1
    },"hello")
    .to(" #cimage img",{
        scale:"0",
        duration:1,
        stagger:.1,
        ease:Power1
    },"hello")
    .to("#centerimg h5",{
        opacity:"0",
        stagger:.1,
        ease:Power1
    },"hello")
    .to("#circle",{
        scale:.6,
        circle:0.1,
        ease:Power1
    },"hello")
    .to("#overlay>h1",{
        bottom:"-30%",
        circle:0.1,
        ease:Power1
    },"hello")
    .to("#overlay #gola",{
        top:"50%",
        scale:2,
        ease:Power1
    },"hello")
    .to("#overlay #gola",{
        opacity:0,
        ease:Power1
    },"hello1")
    .to("#smcircle",{
        scale:0,
        duration:2,
        circle:0.1,
        ease:Power1
    },"hello1")
    .to("#circle",{
        scale:0,
        circle:0.1,
        ease:Power1
    },"hello1")
    .to("#overlay>h2#pf",{
        rotate:0,
        bottom:"2%",
        circle:0.1,
        ease:Power1
    },"hello1")
    .to("#card",{
        rotate:0,
        top:0,
         ease:Power1
    },"hello1")
    .to("#card",{
        top:"-100%",
        duration:2,
         ease:Power1
    })
}

function timelineTwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            scrub: 1,
            start: "top top",
            end: "+=300%",  // Adjusted end value
            pin: true,
        }
    });
    tl2.to(".circle",{
        top:"50%",
        stagger:.1,
        ease:Power1,
})
.to(".r",{
    scale:10,
    stagger:.1,
    ease:Power1,
})
.to(".r",{
    background:" linear-gradient(to right, #D5A7B4, #b4aad5)",
    ease:Power1,
})
.to("#stop h1",{
    left:"-150%",
    duration:8,
    ease:Power1,
},"hi")
.to("#sbottom #two",{
    opacity:0,
    duration:6,
    ease:Power1,
},"hi")
.to("#sbottom #one",{
    opacity:1,
    delay:1,
    duration:6,
    ease:Power1,
},"hi")





}
function timelineThree(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home2",
            scrub: 1,
            start: "top top",
            end: "+=200%",  // Adjusted end value
            pin: true,
        }
    });
    tl3.to("#circle2 #btm2 img",{
        rotate: "-180deg",
        scale: 1,
        duration: 1,
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#circle2 #top2 img",{
        scale: 1,
        duration: 1,
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#cimage2 img",{
        scale: "0",
        duration: 1,
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#centerimg2 h5",{
        opacity: "0",
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#circle2",{
        scale: .6,
        ease: Power1
    },"hii")
    .to("#overlay2 > h1",{
        bottom: "-30%",
        ease: Power1
    },"hii")
    .to("#overlay2 #gola2",{
        top: "50%",
        scale: 2,
        ease: Power1
    },"hii")
    .to("#overlay2 #gola2",{
        opacity: 0,
        ease: Power1
    },"hello2")
    .to("#smcircle2",{
        scale: 0,
        duration: 2,
        ease: Power1
    },"hello2")
    .to("#circle2",{
        scale: 0,
        ease: Power1
    },"hello2")
    .to("#overlay2 > h2#pf3",{
        rotate: 0,
        bottom: "2%",
        ease: Power1
    },"hello2")
    .to("#card2",{
        rotate: 0,
        top: 0,
        ease: Power1
    },"hello2")
    .to("#card2",{
        top: "-100%",
        duration: 2,
        ease: Power1
    });
}

function timelinefour(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second3",
            scrub: 1,
            start: "top top",
            end: "+=250%",  // Adjusted end value
            pin: true,
        }
    });
    tl4.to(".circlee",{
        top:"50%",
        stagger:.1,
        ease:Power1,
})
.to(".r2",{
    scale:10,
    stagger:.1,
    ease:Power1,
})
.to(".r2",{
    background:" linear-gradient(to right, #9fa56b,  #9fa56b)",
    ease:Power1,
})
.to("#stop4 h1",{
    left:"-150%",
    duration:8,
    ease:Power1,
},"hi1")
.to("#sbottom4 #two2",{
    opacity:0,
    duration:6,
    ease:Power1,
},"hi1")
.to("#sbottom4 #one2",{
    opacity:1,
    delay:1,
    duration:6,
    ease:Power1,
},"hi1")





}



function timelinefive(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home3",
            scrub: 1,
            start: "top top",
            end: "+=200%",  // Adjusted end value
            pin: true,
        }
    });
    tl3.to("#circle3 #btm3 img",{
        rotate: "-180deg",
        scale: 1,
        duration: 1,
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#circle3 #top3 img",{
        scale: 1,
        duration: 1,
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#cimage3 img",{
        scale: "0",
        duration: 1,
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#centerimg3 h5",{
        opacity: "0",
        stagger: .1,
        ease: Power1
    },"hii")
    .to("#circle3",{
        scale: .6,
        ease: Power1
    },"hii")
    .to("#overlay3 > h1",{
        bottom: "-30%",
        ease: Power1
    },"hii")
    .to("#overlay3 #gola3",{
        top: "50%",
        scale: 2,
        ease: Power1
    },"hii")
    .to("#overlay3 #gola3",{
        opacity: 0,
        ease: Power1
    },"hello2")
    .to("#smcircle3",{
        scale: 0,
        duration: 2,
        ease: Power1
    },"hello2")
    .to("#circle3",{
        scale: 0,
        ease: Power1
    },"hello2")
    .to("#overlay3 > h2#pf4",{
        rotate: 0,
        bottom: "2%",
        ease: Power1
    },"hello2")
    .to("#card3",{
        rotate: 0,
        top: 0,
        ease: Power1
    },"hello2")
    .to("#card3",{
        top: "-100%",
        duration: 2,
        ease: Power1
    });
}

function timelinesix(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second4",
            scrub: 1,
            start: "top top",
            end: "+=250%",  // Adjusted end value
            pin: true,
        }
    });
    tl4.to(".circleee",{
        top:"50%",
        stagger:.1,
        ease:Power1,
})
.to(".r4",{
    scale:10,
    stagger:.1,
    ease:Power1,
})
.to(".r4",{
    background:" linear-gradient(to right, #2a4285,  #bee882)",
    ease:Power1,
})
.to("#stop5 h1",{
    left:"-150%",
    duration:8,
    ease:Power1,
},"hi1")
.to("#sbottom5 #two3",{
    opacity:0,
    duration:6,
    ease:Power1,
},"hi1")
.to("#sbottom5 #one3",{
    opacity:1,
    delay:1,
    duration:6,
    ease:Power1,
},"hi1")





}

timelineOne();
timelineTwo();
timelineThree();
timelinefour();
timelinefive();
timelinesix();












