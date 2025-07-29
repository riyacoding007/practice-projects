    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble-box';
      
      // random position
      const x = Math.random() * window.innerWidth - 100;
      const y = Math.random() * window.innerHeight - 100;
      
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      
      document.body.appendChild(bubble);
    }