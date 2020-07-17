const scrollArrow = document.querySelector('.scroll_btn');

const displayScrollArrow = () => {
  let y = window.scrollY;
  if (y >= 800) {
    scrollArrow.style.display = "block";
    scrollArrow.addEventListener('click', () => window.scrollTo(0, 0));
    return;
  } else {
    scrollArrow.style.display = "none";
  }
}

window.addEventListener('scroll', displayScrollArrow);
