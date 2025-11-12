var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  speed: 3000,
  loop: true,
  //   loopedSlides: 6,
});





window.addEventListener( "scroll", ()=>{
  let navbar = document.querySelector(".navbar");
  if(scrollY > 50){
    navbar.classList.add("nav-bg");
  }else{
    navbar.classList.remove("nav-bg");
  }

})
