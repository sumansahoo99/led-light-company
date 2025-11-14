// Custom cursor script
(function () {
  const cursor = document.getElementById('custom-cursor');
  const ring = cursor.querySelector('.cursor-ring');
  const fill = cursor.querySelector('.cursor-fill');
  const dot  = cursor.querySelector('.cursor-dot');

  // smoothing / follow settings
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  const ease = 0.18; // lower = more delay, higher = snappier

  // update target mouse position
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // ensure visible quickly on first move
    cursor.style.opacity = 1;
  });

  // hide cursor when leaving window (nice touch)
  window.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
  });
  window.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
  });

  // change state when clicking
  window.addEventListener('mousedown', () => cursor.classList.add('active'));
  window.addEventListener('mouseup',   () => cursor.classList.remove('active'));

  // add hover listeners for interactive elements (links, buttons, or .cursor-hover)
  function addHoverTargets() {
    const targets = Array.from(document.querySelectorAll('a, button, .cursor-hover, input, textarea, select, label'));
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }
  addHoverTargets();

  // If the page loads new content later, you can call addHoverTargets() again.

  // animation loop: smooth follow
  function loop() {
    // interpolate
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    // set transform (use translate3d for better perf)
    cursor.style.transform = `translate3d(${Math.round(currentX)}px, ${Math.round(currentY)}px, 0)`;

    // small parallax: move inner pieces slightly relative to ring for a subtle depth
    const dx = mouseX - currentX;
    const dy = mouseY - currentY;
    const smallOffsetX = dx * 0.08;
    const smallOffsetY = dy * 0.08;

    ring.style.transform = `translate(calc(-50% + ${smallOffsetX}px), calc(-50% + ${smallOffsetY}px))`;
    fill.style.transform = `translate(calc(-50% + ${smallOffsetX * 0.5}px), calc(-50% + ${smallOffsetY * 0.5}px))`;
    dot.style.transform  = `translate(calc(-50% + ${smallOffsetX * 0.2}px), calc(-50% + ${smallOffsetY * 0.2}px))`;

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Optional: keyboard focus accessibility - show hover when focused by keyboard
  document.addEventListener('focusin', (e) => {
    if (e.target && (e.target.matches('a, button, input, textarea, select, .cursor-hover'))) {
      cursor.classList.add('hover');
    }
  });
  document.addEventListener('focusout', () => {
    cursor.classList.remove('hover');
  });

  // If you want to change cursor color programmatically:
  // fill.style.background = '#...';
})();







var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  speed: 3000,
  loop: true,
});

const swiperEl = document.querySelector(".mySwiper");

swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();   // 🛑 stop sliding
});

swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start();  // ▶️ start sliding again
});


var swiper = new Swiper(".img-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  speed: 3000,
  loop: true,
  
});


window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  if (scrollY > 50) {
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("nav-bg");
  }

})


AOS.init({
  duration: 1000, // 1 second animation
  offset: 100,    // start the animation 100px before element enters view
  once: true,     // only animate once
});