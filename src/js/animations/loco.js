import LocomotiveScroll from 'locomotive-scroll';

export const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});
