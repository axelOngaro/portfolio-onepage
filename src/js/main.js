import { scroll } from './animations/loco';
import { hiddenAnimationArray, learnMoreAnimationArray } from './animations/cssAnimation';

import { sendMail } from './email';
import './animations/gsap';
// scroll

window.addEventListener('load', () => {
  scroll.update();
});

const formSubmit = document.getElementById('form_submit');

formSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  sendMail();
});
