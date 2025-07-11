document.addEventListener('DOMContentLoaded', () => {
  const timelineEntries = document.querySelectorAll('.card-with-icon');

  function animateIconsOnScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    let triggered = false;

    timelineEntries.forEach((entry) => {
      const card = entry.querySelector('.timeline-card');
      const icon = entry.querySelector('.money-icon');

      const entryTop = entry.offsetTop;
      const entryHeight = entry.offsetHeight;
      const entryBottom = entryTop + entryHeight;
 
      // Default state
      icon.style.opacity = 0;
      card.style.opacity = 1;

      // Activate only the first card in view
      if (!triggered && scrollY + windowHeight > entryTop && scrollY < entryBottom) {
        triggered = true;

        const visiblePart = scrollY + windowHeight - entryTop;
        const progress = Math.min(visiblePart / (entryHeight + windowHeight), 1);

        const moveY = progress * entryHeight;

        icon.style.top = `${moveY}px`;
        card.style.top = `${moveY}px`;
        icon.style.opacity = 1;
      } 
      // If scroll has passed this card, lock it at bottom
      else if (scrollY >= entryBottom) {
        icon.style.top = `${entryHeight}px`;
        card.style.top = `${entryHeight}px`;
        icon.style.opacity = 1;
      } 
      // If scroll is above the card, reset it
      else {
        icon.style.top = `0px`;
        card.style.top = `0px`;
      }
    });
  }

  window.addEventListener('scroll', animateIconsOnScroll);
  animateIconsOnScroll(); // Initial call
});
