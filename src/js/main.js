import { scroll } from './animations/loco';
import { hiddenAnimationArray, learnMoreAnimationArray } from './animations/cssAnimation';
import './animations/gsap';
// scroll

window.addEventListener('load', () => {
  scroll.update();
});
