const body = document.querySelector('.smooth-scroll');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    body.classList.toggle('loaded');
  }
};

console.log('coucou perruche');
