// Add JavaScript below
ScrollReveal().reveal('body');

ScrollReveal().reveal('.headline', { duration:2000 })

ScrollReveal().reveal('#photo1', { 
    duration:2000,
    delay:500,
    distance: '100px'
 });

ScrollReveal().reveal('#photo2', { 
    duration:2500,
    delay:750,
    origin:top,
 });

ScrollReveal().reveal('#photo3', { 
    duration:3500, 
    opacity: 0.05,
});

ScrollReveal().reveal('#photo4', { 
    duration:2500,
    rotate: {x:20, z:20},
});
ScrollReveal().reveal('#photo5', { 
    duration:2000,
    rotate: {x:-20, z:-20}
});
