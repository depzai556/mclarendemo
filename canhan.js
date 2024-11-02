gsap.to('.moving-car', {
    scrollTrigger: {
        trigger:'.moving-car',
        scrub:true,
    },
    x:"10vw",
});

gsap.to('.wheel',{
    scrollTrigger:{
     trigger:'.moving-car',
     scrub:true,   
    },
    rotate:"600deg",
});

gsap.to('.text',{
    scrollTrigger:{
        trigger:'.title',
        scrub:true,
    },
    x:0,
    opacity:1,
});


const specs = gsap.utils.toArray('.specs li');

specs.forEach(spec => {
    gsap.to(spec, {
        scrollTrigger: {
            trigger: spec,
        },
        y:0,
        opacity:1,
    });
});