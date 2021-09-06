import LocomotiveScroll from 'locomotive-scroll';
import { about, aboutLink, skills, skillsLink } from '../domElements';

export const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

const workLink = document.querySelector('#work__link');
const homeLink = document.querySelector('#home__link');
const contactLink = document.querySelector('#contact__link');
const work = document.querySelector('.selected__work');
const top = document.querySelector('.top');
const contact = document.querySelector('.contact');

// REFACTOR THIS!!!!!

workLink.addEventListener('click', () => {
  scroll.scrollTo(work);
});

homeLink.addEventListener('click', () => {
  scroll.scrollTo(top);
  console.log('homelinik');
});

contactLink.addEventListener('click', () => {
  scroll.scrollTo(contact);
});
aboutLink.addEventListener('click', () => {
  scroll.scrollTo(about);
});
skillsLink.addEventListener('click', () => {
  scroll.scrollTo(skills);
});
