import { gsap } from 'gsap';
import { formBtn } from '../domElements';

gsap.from('.smooth-scroll', {
  opacity: 0,
  duration: 4,
  ease: 'sine.In',
});

gsap.from('.header', { opacity: 0, duration: 4 });

export const btnSuccess = () => {
  gsap.to('#form_submit', { backgroundColor: 'green', duration: 2 });
  formBtn.innerHTML = '👍';
};

gsap.from('#title1', {
  y: 50,
  duration: 2,
  ease: 'sine.In',
});
gsap.from('#title2', {
  y: 80,
  duration: 2,
  ease: 'sine.In',
  stagger: 1,
});
gsap.from('#title3', {
  y: 100,
  duration: 2,
  ease: 'sine.In',
  stagger: 3,
});
