  $('.home-slider__list').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    prevArrow: '<button class="slick-next slick__btn" type="button"></button>',
    nextArrow: '<button class="slick-prev slick__btn" type="button"></button>',
  });

  $('.reviews__list').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    prevArrow: '<button class="slick-next slick__btn" type="button"></button>',
    nextArrow: '<button class="slick-prev slick__btn" type="button"></button>',
  });

  // 1

  document.querySelector('.header__list-link--register').addEventListener('click', register);

  document.querySelector('.modal__register').addEventListener('click', register);

  document.querySelector('.modal__register1').addEventListener('click', register);

  function register() {
    document.querySelector('.modal-reg').classList.add('modal--active');
    document.querySelector('.modal__register').classList.add('blue');
    document.querySelector('.modal-log').classList.remove('modal--active');
    document.querySelector('.modal__login1').classList.remove('blue');
    document.querySelector('.modal-rem').classList.remove('modal--active');
  }

  document.querySelector('.modal__btn').addEventListener('click', registerClose);

  document.querySelector('.modal__close-reg').addEventListener('click', registerClose);

  document.querySelector('.modal__login').addEventListener('click', registerClose);

  function registerClose() {
    document.querySelector('.modal-reg').classList.remove('modal--active');
    document.querySelector('.modal__register').classList.remove('blue');
  }

  // 2

  document.querySelector('.header__list-link--sign-in').addEventListener('click', login);

  document.querySelector('.modal__login').addEventListener('click', login);

  document.querySelector('.modal__link2').addEventListener('click', login);


  function login() {
    document.querySelector('.modal-log').classList.add('modal--active');
    document.querySelector('.modal__login1').classList.add('blue');
    document.querySelector('.modal-reg').classList.remove('modal--active');
    document.querySelector('.modal__register').classList.remove('blue');
    document.querySelector('.modal-rem').classList.remove('modal--active');
  }

  document.querySelector('.modal__btn1').addEventListener('click', loginClose);

  document.querySelector('.modal__close-log').addEventListener('click', loginClose);

  document.querySelector('.modal__close-log').addEventListener('click', loginClose);

  document.querySelector('.modal__register1').addEventListener('click', loginClose);

  document.querySelector('.modal__link').addEventListener('click', loginClose);

  function loginClose() {
    document.querySelector('.modal-log').classList.remove('modal--active');
    document.querySelector('.modal__register1').classList.remove('blue');
  }

  // 3

  document.querySelector('.modal__link').addEventListener('click', rem);


  function rem() {
    document.querySelector('.modal-log').classList.remove('modal--active');
    document.querySelector('.modal__login1').classList.remove('blue');
    document.querySelector('.modal-reg').classList.remove('modal--active');
    document.querySelector('.modal__register').classList.remove('blue');
    document.querySelector('.modal-rem').classList.add('modal--active');
  }

  document.querySelector('.modal__link').addEventListener('click', rem);


  function rem() {
    document.querySelector('.modal-log').classList.remove('modal--active');
    document.querySelector('.modal__login1').classList.remove('blue');
    document.querySelector('.modal-reg').classList.remove('modal--active');
    document.querySelector('.modal__register').classList.remove('blue');
    document.querySelector('.modal-rem').classList.add('modal--active');
  }

  document.querySelector('.modal__link2').addEventListener('click', remClose);

  document.querySelector('.modal__btn2').addEventListener('click', remClose);

  document.querySelector('.modal__close-rem').addEventListener('click', remClose);


  function remClose() {
    document.querySelector('.modal-rem').classList.remove('modal--active');
  }

  // mixitup

  document.querySelector('.researched').addEventListener('click', researched);


  function researched() {
    document.querySelector('.category-researched').classList.remove('disp-none');
    document.querySelector('.category-researched2').classList.remove('disp-none');
    document.querySelector('.category-researched3').classList.remove('disp-none');
    document.querySelector('.category-researched4').classList.remove('disp-none');
    document.querySelector('.category-sale').classList.add('disp-none');
    document.querySelector('.category-sale2').classList.add('disp-none');
    document.querySelector('.category-sale3').classList.add('disp-none');
    document.querySelector('.category-sale4').classList.add('disp-none');
    document.querySelector('.category-sale5').classList.add('disp-none');
    document.querySelector('.researched').classList.add('blue-mix');
    document.querySelector('.sale').classList.remove('blue-mix');
  }

  document.querySelector('.sale').addEventListener('click', sale);


  function sale() {
    document.querySelector('.category-researched').classList.add('disp-none');
    document.querySelector('.category-researched2').classList.add('disp-none');
    document.querySelector('.category-researched3').classList.add('disp-none');
    document.querySelector('.category-researched4').classList.add('disp-none');
    document.querySelector('.category-sale').classList.remove('disp-none');
    document.querySelector('.category-sale2').classList.remove('disp-none');
    document.querySelector('.category-sale3').classList.remove('disp-none');
    document.querySelector('.category-sale4').classList.remove('disp-none');
    document.querySelector('.category-sale5').classList.remove('disp-none');
    document.querySelector('.researched').classList.remove('blue-mix');
    document.querySelector('.sale').classList.add('blue-mix');
  }