document.documentElement.classList.add("js");

const nav = document.getElementById("nav");
if (nav) {
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 12);
    },
    { passive: true },
  );
}

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReduced) {
  try {
    (document.querySelector(".flow") as SVGSVGElement | null)?.pauseAnimations();
  } catch {
    /* SVG pauseAnimations not supported in this browser */
  }
}

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

if (!prefersReduced) {
  const vals = document.querySelectorAll<HTMLElement>(".snap-row .val");
  setInterval(() => {
    vals.forEach((v) => {
      const base = parseFloat(v.dataset.base ?? "0");
      const prec = parseInt(v.dataset.prec ?? "2", 10);
      const jitter = (Math.random() - 0.5) * base * 0.004;
      v.textContent = (base + jitter).toFixed(prec);
    });
  }, 3200);
}
