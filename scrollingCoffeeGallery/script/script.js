
gsap.registerPlugin(ScrollTrigger);

// Animate all right-column sections
gsap.utils.toArray(".right-column").forEach((col) => {
  gsap.from([col.querySelector("h1"), col.querySelector("p")], {
    opacity: 0,
    y: 50, // slide upward
    duration: 1,
    stagger: 0.2, // h1 then p
    scrollTrigger: {
      trigger: col,
      start: "top 80%",   // when top of section hits 80% viewport
      toggleActions: "play reverse play reverse", 
      // onEnter | onLeave | onEnterBack | onLeaveBack
      markers: false // set to true for debugging
    }
  });
});


