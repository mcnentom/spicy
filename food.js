let menu  = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a')

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search').classList.toggle('active');
};
document.querySelector('#close').onclick = () => {
    document.querySelector('#search').classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true,
  }); 
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
   loop: true,
   breakpoints: {
    0:{
        slidesPerView: 1,
    },
    640:{
        slidesPerView: 2,
    },
    768:{
        slidesPerView: 3,
    }
   }

  }); 
    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        if(top => offset && offset + height){
            navlinks.forEach(links =>{
             links.classList.remove('active');
             document.querySelectorAll('header .navbar a[href*='+id+']').classList.add('active');
            });
        }
    })


function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeOut(){
    setInterval(loader,3000);
}
window.onload = fadeOut;
