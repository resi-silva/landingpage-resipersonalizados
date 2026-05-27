(function () {
  // Mobile menu toggle
  const toggle = document.querySelector(".header__toggle");
  const nav = document.querySelector(".header__nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("header__nav--open");
      toggle.setAttribute("aria-expanded", open);
    });

    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("header__nav--open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Mobile submenu toggle
  document.querySelectorAll(".has-submenu > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  // Hero slider
  const slider = document.getElementById("heroSlider");
  if (slider) {
    const slides = slider.querySelectorAll(".hero__slide");
    const dotsContainer = document.getElementById("heroDots");
    let current = 0;
    let interval;

    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    function goTo(index) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = index;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
      resetInterval();
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(next, 5000);
    }

    if (slides.length > 1) {
      resetInterval();
    }
  }
})();
