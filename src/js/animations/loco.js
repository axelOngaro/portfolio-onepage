import LocomotiveScroll from 'locomotive-scroll';
import {
  about,
  aboutLink,
  skills,
  skillsLink,
  work,
  workLink,
  contact,
  contactLink,
  top,
  homeLink,
} from '../domElements';

export const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

const scrollNav = (link, target) => {
  link.addEventListener('click', () => {
    scroll.scrollTo(target);
  });
};

scrollNav(homeLink, top);
scrollNav(skillsLink, skills);
scrollNav(workLink, work);
scrollNav(aboutLink, about);
scrollNav(contactLink, contact);
