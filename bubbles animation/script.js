    (() => {
      const BUBBLE_COUNT = 30;
      const BUBBLE_SIZE = 100;
      const OSCILLATION_DISTANCE = 100;

      // Create bubbles
      for (let i = 0; i < BUBBLE_COUNT; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble-box';

        // Random initial position
        const x = Math.random() * (window.innerWidth - BUBBLE_SIZE);
        const y = Math.random() * (window.innerHeight - BUBBLE_SIZE);

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        bubble.style.position = 'absolute';

        // Store movement data
        bubble.dataset.dx = ((Math.random() - 0.5) * 2).toString(); // between -1 and 1
        bubble.dataset.dy = ((Math.random() - 0.5) * 2).toString(); // between -1 and 1
        bubble.dataset.baseX = x.toString();
        bubble.dataset.baseY = y.toString();

        document.body.appendChild(bubble);
      }

      // Animate bubbles using requestAnimationFrame
      function animateBubbles() {
        const bubbles = document.querySelectorAll('.bubble-box');
        const time = Date.now() * 0.001; // seconds

        bubbles.forEach(bubble => {
          const baseX = parseFloat(bubble.dataset.baseX);
          const baseY = parseFloat(bubble.dataset.baseY);
          const dx = parseFloat(bubble.dataset.dx);
          const dy = parseFloat(bubble.dataset.dy);

          // Oscillate position
          const offsetX = Math.sin(time * dx) * OSCILLATION_DISTANCE;
          const offsetY = Math.cos(time * dy) * OSCILLATION_DISTANCE;

          bubble.style.left = `${baseX + offsetX}px`;
          bubble.style.top = `${baseY + offsetY}px`;
        });

        requestAnimationFrame(animateBubbles);
      }

      // Start animation
      animateBubbles();

      // Add loaded class after DOM update
      requestAnimationFrame(() => {
        document.body.classList.add('loaded');
      });
    })();