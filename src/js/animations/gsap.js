import { gsap } from 'gsap';

gsap.from('.smooth-scroll', {
  opacity: 0,
  duration: 4,
  ease: 'sine.In',
});

gsap.from('.header', { opacity: 0, duration: 4 });

export const btnFading = () => {
  gsap.to('#form_submit', {
    opacity: 0,
    duration: 2,
  });
  gsap.to('#form_submit', {
    display: 'none',
  });
  gsap.to('#success', {
    display: 'block',
  });
  gsap.to('#success', {
    opacity: 1,
    duration: 5,
  });
  setTimeout(() => {
    gsap.to('#success', {
      opacity: 0,
      duration: 5,
    });
  }, 5000);
};
