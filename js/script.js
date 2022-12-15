// burger
document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".nav").classList.toggle("active");

  //del active width property
  document.querySelectorAll(".burger__line").forEach(function (e) {
    e.classList.toggle("burger__line_horizontal");
  });
});

// search
const searchOpen = document.querySelector(".search__open");
const searchClose = document.querySelector(".search__close");
  searchOpen.onclick = function () {
    document.querySelector(".search__form").classList.add("search__form_active");
    searchOpen.tabIndex = -1;
    setTimeout(function () {
      document.querySelector(".search__input").focus();
      }, 100);
  };

  searchClose.onclick = function () {
    document.querySelector(".search__form").classList.remove("search__form_active");
    searchOpen.tabIndex = 0;
  };

// slider
const swiper = new Swiper('.header-bottom__swiper', {

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.header-bottom__pagination',
    type: 'bullets',
    clickable: 'true',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
    paginationBulletMessage: 'Переход к слайду {{index}}',
  },

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

});

// tabs

document.querySelectorAll('.how__btn-step').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
   const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.how__btn-step').forEach(function(btn){
      btn.classList.remove('how__btn-step_active')});
    e.currentTarget.classList.add('how__btn-step_active');

    document.querySelectorAll('.how__step').forEach(function(tabsBtn){
      tabsBtn.classList.remove('how__step_active')});

   document.querySelector(`[data-target = "${path}"]`).classList.add('how__step_active')
  });
});




// accordion

let ac = new Accordion('.faq__list', {
  duration: 700,
  elementClass: 'faq__item',
  triggerClass: 'faq__item-top',
  panelClass: 'faq__item-bottom',
  activeClass: 'faq__item_active',
  showMultiple: true,
  collapse: true
});








