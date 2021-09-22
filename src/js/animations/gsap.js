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
