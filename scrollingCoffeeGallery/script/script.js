gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".coffee-section").forEach((section, index) => {
  const img = section.querySelector(".left-column img");
  const title = section.querySelector(".right-column h1");
  const para = section.querySelector(".right-column p");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 65%",        // tweak this if you want earlier/later trigger
      end: "bottom 70%",  // up scroll trigger zone
      toggleActions: "play reverse play reverse",
      // markers: true,       // set true while fine-tuning, then false
      // once: false
    }
  });

  // image enters from left, slightly scaled
  tl.from(img, {
    opacity: 0,
    y: -120,
    scale: 0,
    duration: 0.85,
    ease: "power3.out"
  });

  // title + paragraph slide in from right with overlap
  tl.from(title, {
    opacity: 0,
    y: 80,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.45");

  tl.from(para, {
    opacity: 0,
    y: 80,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.45");
});



