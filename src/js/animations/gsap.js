import { gsap } from 'gsap';

gsap.from('.smooth-scroll', {
  opacity: 0,
  duration: 3,
});

gsap.from('.header', { opacity: 0, duration: 4 });
