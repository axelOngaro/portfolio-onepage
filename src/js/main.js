import { scroll } from './animations/loco';

// scroll

window.addEventListener('load', () => {
  scroll.update();
});

setTimeout(() => {
  scroll.update();
  console.log('scroll updated');
}, 5000);
