let body = document.querySelector('body');
let btn = document.createElement('button');
btn.setAttribute('type', 'button');
btn.classList.add('scrollToTopBtn');
btn.style.display = 'none';
body.appendChild(btn);

let iconBtn = document.createElement('img');
iconBtn.classList.add('top-btn-img');
iconBtn.src = "./assets/img/back-to-top.png";
iconBtn.setAttribute('alt', 'GoTop');
btn.appendChild(iconBtn);

document.addEventListener('scroll', handleScroll);
// get a reference to our predefined button
let scrollToTopBtn = document.querySelector('.scrollToTopBtn');

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.1;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = 'block';
  } else {
    //hide button
    scrollToTopBtn.style.display = 'none';
  }
}

scrollToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
