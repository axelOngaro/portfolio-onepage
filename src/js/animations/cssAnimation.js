import {
  frontend,
  frontendHidden,
  frontendLearnmore,
  backend,
  backendHidden,
  backendLearnmore,
  other,
  otherHidden,
  otherLearnmore,
  soft,
  softHidden,
  softLearnmore,
  languages,
  languagesHidden,
  languagesLearnmore,
} from '../domElements';

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
