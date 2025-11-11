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



  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "in", // default India
    separateDialCode: true, // shows +91 outside input
  });


