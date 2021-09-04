import { gsap } from 'gsap';

gsap.from('.smooth-scroll', {
  opacity: 0,
  duration: 4,
  ease: 'sine.out',
});

gsap.from('.header', { opacity: 0, duration: 4 });
