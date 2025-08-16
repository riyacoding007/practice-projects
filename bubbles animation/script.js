    (() => {
      const BUBBLE_COUNT = 30;
      const BUBBLE_SIZE = 100;
      const OSCILLATION_DISTANCE = 100;

      // Store bubble objects
      const bubbles = [];

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

        // Store movement data in object
        bubbles.push({
          el: bubble,
          baseX: x,
          baseY: y,
          dx: (Math.random() - 0.5) * 2, // between -1 and 1
          dy: (Math.random() - 0.5) * 2  // between -1 and 1
        });

        document.body.appendChild(bubble);
      }

      // Animate bubbles using requestAnimationFrame
      function animateBubbles() {
        const time = Date.now() * 0.001; // seconds

        bubbles.forEach(bubbleObj => {
          const { el, baseX, baseY, dx, dy } = bubbleObj;

          // Oscillate position
          const offsetX = Math.sin(time * dx) * OSCILLATION_DISTANCE;
          const offsetY = Math.cos(time * dy) * OSCILLATION_DISTANCE;

          el.style.left = `${baseX + offsetX}px`;
          el.style.top = `${baseY + offsetY}px`;
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