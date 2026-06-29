import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initAnimations() {
  if (reduceMotion) return;

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.85 });
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 86%"
      }
    });
  });

  gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((el, index) => {
    gsap.fromTo(el, { x: index % 2 ? 28 : -28 }, {
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 82%"
      }
    });
  });

  gsap.to(".hero-float", {
    y: -14,
    duration: 3.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

document.addEventListener("astro:page-load", initAnimations);
