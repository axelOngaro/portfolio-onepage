import {
  frontend,
  frontendHidden,
  frontendLearnmore,
  frontendCross,
  backend,
  backendHidden,
  backendLearnmore,
  backendCross,
  other,
  otherHidden,
  otherLearnmore,
  otherCross,
  soft,
  softHidden,
  softLearnmore,
  softCross,
  languages,
  languagesHidden,
  languagesLearnmore,
  languagesCross,
} from '../domElements';

const skillAnimaton = (section, hiddenDiv) => {
  section.addEventListener('click', () => {
    hiddenDiv.classList.toggle('visible');
  });
};

const learnMoreAnimation = (section, learnMore, cross) => {
  section.addEventListener('click', () => {
    learnMore.classList.toggle('opacity');
    cross.classList.toggle('activated');
  });
};

export const learnMoreAnimationArray = [
  learnMoreAnimation(frontend, frontendLearnmore, frontendCross),
  learnMoreAnimation(backend, backendLearnmore, backendCross),
  learnMoreAnimation(languages, languagesLearnmore, languagesCross),
  learnMoreAnimation(other, otherLearnmore, otherCross),
  learnMoreAnimation(soft, softLearnmore, softCross),
];

export const hiddenAnimationArray = [
  skillAnimaton(other, otherHidden),
  skillAnimaton(soft, softHidden),
  skillAnimaton(frontend, frontendHidden),
  skillAnimaton(backend, backendHidden),
  skillAnimaton(languages, languagesHidden),
];
