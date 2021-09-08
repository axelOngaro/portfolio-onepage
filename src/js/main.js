import { scroll } from './animations/loco';
import { hiddenAnimationArray, learnMoreAnimationArray } from './animations/cssAnimation';
import { form } from './domElements';
import { frontend } from './domElements';

import { sendMail } from './email';
import './animations/gsap';
// scroll

window.addEventListener('load', () => {
  scroll.update();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMail();
});

const cross = document.querySelector('#frontend__learnmore__cross');
