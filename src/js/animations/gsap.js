import { gsap } from 'gsap';

const frontend = document.querySelector('.frontend');
const backend = document.querySelector('.backend');
const other = document.querySelector('.other');
const languages = document.querySelector('.languages');
const soft = document.querySelector('.soft');
const frontendHidden = document.querySelector('.frontend__hidden');
const backendHidden = document.querySelector('.backend__hidden');
const otherHidden = document.querySelector('.other__hidden');
const languagesHidden = document.querySelector('.languages__hidden');
const softHidden = document.querySelector('.soft__hidden');

const backendLearnmore = document.querySelector('#backend__learnmore');
const frontendLearnmore = document.querySelector('#frontend__learnmore');
const otherLearnmore = document.querySelector('#other__learnmore');
const softLearnmore = document.querySelector('#soft__learnmore');
const languagesLearnmore = document.querySelector('#languages__learnmore');

const skillAnimaton = (section, hiddenDiv) => {
  section.addEventListener('click', () => {
    hiddenDiv.classList.toggle('visible');
  });
};

const learnMoreAnimation = (section, learnMore) => {
  section.addEventListener('click', () => {
    learnMore.classList.toggle('opacity');
  });
};

export const learnMoreAnimationArray = [
  learnMoreAnimation(backend, backendLearnmore),
  learnMoreAnimation(other, otherLearnmore),
  learnMoreAnimation(frontend, frontendLearnmore),
  learnMoreAnimation(soft, softLearnmore),
  learnMoreAnimation(languages, languagesLearnmore),
];

export const hiddenAnimationArray = [
  skillAnimaton(other, otherHidden),
  skillAnimaton(soft, softHidden),
  skillAnimaton(frontend, frontendHidden),
  skillAnimaton(backend, backendHidden),
  skillAnimaton(languages, languagesHidden),
];
