//header scroll
let header = document.querySelector('header');
//menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
//header scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);

});
//menu
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');

}
// swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
  
  