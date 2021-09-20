

$(document).ready(function() {
	$(window).on("scroll", function() {
        let lock = $(this).scrollTop();
        let positionFactor = lock*0.3<40 ? 0 : lock*0.3;
        let position = positionFactor>=78.4000015258789 ? 78.4000015258789 : positionFactor;
        let fadingFactor = lock> lock/300;

        let lockPos = lock*0.025;


      let scaleFactor = lockPos<1 ? 1 : lockPos>=1.76 ? 1.76 : lockPos;
        $(".car").css("transform", 'scale('+scaleFactor+')');
        $(".car").css("top", position);
        $(".car").css("transform", 'rotate('+lock+'+'+deg+')');

        $(".new-car").css("opacity", fadingFactor);
    })
}
)
















gsap.registerPlugin(ScrollTrigger);

gsap.set(".fullcar", {x:'59%'})


gsap.from('.tyre1', {duration: 1.52, right:'-30%', rotation: 0});

gsap.to('.tyre1', {duration: 1.52, right:'29.3%', rotation: -720});

gsap.from('.tyre2', {duration: 1.5, right:'-9%', rotation: 0});

gsap.to('.tyre2', {duration: 1.5, right:'55.4%', rotation: -720});



gsap.set('.side-car', {duration: 1.5, x:'200%'});
gsap.to('.side-car', {duration: 1.5, x:'59%'});




gsap.to('.new-car', {
    scrollTrigger:{
        trigger: '.side-car',
        start: "bottom 260",
        toggleAction: 'restart pause reverse pause',
        scrub: true,

    

    },
    opacity:1
})

gsap.to('.car3', {
    scrollTrigger:{
        trigger: '.new-car',
        start: "top -300",

        toggleAction: 'restart pause reverse pause',
        scrub: 2,
        
    },
    opacity:1
})

gsap.to('.car4', {
    scrollTrigger:{
        trigger: '.car3',
        start: "top -500",

        toggleAction: 'restart pause reverse pause',
        scrub: 2,
        
    },
    opacity:1
})

gsap.to('.car5', {
    scrollTrigger:{
        trigger: '.car4',
        start: "top -800",

        toggleAction: 'restart pause reverse pause',
        scrub: 2,
        
    },
    opacity:1
})

gsap.to('.car6', {
    scrollTrigger:{
        trigger: '.car5',
        start: "top -1100",

        toggleAction: 'restart pause reverse pause',
        scrub: 2,
        
    },
    opacity:1
})

gsap.to('.car7', {
    scrollTrigger:{
        trigger: '.car6',
        start: "top -1400",

        toggleAction: 'restart pause reverse pause',
        scrub: 2,
        
    },
    opacity:1
})

gsap.to('.car8', {
    scrollTrigger:{
        trigger: '.car7',
        start: "top -1450",

        toggleAction: 'restart pause reverse pause',
        scrub: 3,
        
    },
    opacity:1
})

gsap.to('.car9', {
    scrollTrigger:{
        trigger: '.car8',
        start: "top -1500",

        toggleAction: 'restart pause reverse pause',
        scrub: 1,
        
    },
    opacity:1
})

gsap.to('.car10', {
    scrollTrigger:{
        trigger: '.car9',
        start: "top -1550",

        toggleAction: 'restart pause reverse pause',
        scrub: 1,
        
    },
    opacity:1
})

gsap.to('.car11', {
    scrollTrigger:{
        trigger: '.car10',
        start: "top -1600",

        toggleAction: 'restart pause reverse pause',
        scrub:1,
        
    },
    opacity:1
})

gsap.to('.car12', {
    scrollTrigger:{
        trigger: '.car11',
        start: "top -1650",

        toggleAction: 'restart pause reverse pause',
        scrub: 1,
        
    },
    opacity:1
})

gsap.to('.car13', {
    scrollTrigger:{
        trigger: '.car12',
        start: "top -2000",

        toggleAction: 'restart pause reverse pause',
        scrub: 1,
        
    },
    opacity:1
})

gsap.to('.car14', {
    scrollTrigger:{
        trigger: '.car13',
        start: "top -2100",

        toggleAction: 'restart pause reverse pause',
        scrub: 1,
        
    },
    opacity:1
})

gsap.to('.car15', {
    scrollTrigger:{
        trigger: '.car14',
        start: "top -2200",

        toggleAction: 'restart pause reverse pause',
        scrub:1,
        
    },
    opacity:1
})










var mydiv = new TimelineMax()
mydiv.fromTo(".side-car", 1.5, {y:0}, {y:5})
         .to(".side-car", 1.5, {y:0, ease: "elastic.out( 1, 0.3)",

})
















