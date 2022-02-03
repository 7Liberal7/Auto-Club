  $('.home-slider__list').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    prevArrow: '<button class="slick-next slick__btn" type="button"></button>',
    nextArrow: '<button class="slick-prev slick__btn" type="button"></button>',
    responsive: [{
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 795,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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

  document.querySelector('.slick-next1').addEventListener('click', slick);

  document.querySelector('.slick-prev1').addEventListener('click', slick);

  function slick() {
    document.querySelector('.category-researched').classList.toggle('disp-none');
    document.querySelector('.category-researched2').classList.toggle('disp-none');
    document.querySelector('.category-researched3').classList.toggle('disp-none');
    document.querySelector('.category-researched4').classList.toggle('disp-none');
    document.querySelector('.category-sale').classList.toggle('disp-none');
    document.querySelector('.category-sale2').classList.toggle('disp-none');
    document.querySelector('.category-sale3').classList.toggle('disp-none');
    document.querySelector('.category-sale4').classList.toggle('disp-none');
    document.querySelector('.category-sale5').classList.toggle('disp-none');
    document.querySelector('.researched').classList.toggle('blue-mix');
    document.querySelector('.sale').classList.toggle('blue-mix');
  }


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

  // language

  document.querySelector('.header__list-language').addEventListener('click', language);

  document.querySelector('.header__list-language2').addEventListener('click', language);


  function language() {
    document.querySelector('.language').classList.toggle('language--active');
  }

  // якорь

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  document.querySelector('.choice__left-block1').addEventListener('click', list1);


  function list1() {
    document.querySelector('.choice__list1').classList.toggle('choice__list--active');
    document.querySelector('.choice__list2').classList.remove('choice__list--active');
    document.querySelector('.choice__list3').classList.remove('choice__list--active');
    document.querySelector('.choice__list4').classList.remove('choice__list--active');
    document.querySelector('.choice__list5').classList.remove('choice__list--active');
  }

  document.querySelector('.choice__left-block2').addEventListener('click', list2);


  function list2() {
    document.querySelector('.choice__list2').classList.toggle('choice__list--active');
    document.querySelector('.choice__list1').classList.remove('choice__list--active');
    document.querySelector('.choice__list3').classList.remove('choice__list--active');
    document.querySelector('.choice__list4').classList.remove('choice__list--active');
    document.querySelector('.choice__list5').classList.remove('choice__list--active');
  }

  document.querySelector('.choice__left-block3').addEventListener('click', list3);


  function list3() {
    document.querySelector('.choice__list3').classList.toggle('choice__list--active');
    document.querySelector('.choice__list1').classList.remove('choice__list--active');
    document.querySelector('.choice__list2').classList.remove('choice__list--active');
    document.querySelector('.choice__list4').classList.remove('choice__list--active');
    document.querySelector('.choice__list5').classList.remove('choice__list--active');
  }

  document.querySelector('.choice__left-block4').addEventListener('click', list4);


  function list4() {
    document.querySelector('.choice__list4').classList.toggle('choice__list--active');
    document.querySelector('.choice__list1').classList.remove('choice__list--active');
    document.querySelector('.choice__list2').classList.remove('choice__list--active');
    document.querySelector('.choice__list3').classList.remove('choice__list--active');
    document.querySelector('.choice__list5').classList.remove('choice__list--active');
  }

  document.querySelector('.choice__left-block5').addEventListener('click', list5);


  function list5() {
    document.querySelector('.choice__list5').classList.toggle('choice__list--active');
    document.querySelector('.choice__list1').classList.remove('choice__list--active');
    document.querySelector('.choice__list2').classList.remove('choice__list--active');
    document.querySelector('.choice__list3').classList.remove('choice__list--active');
    document.querySelector('.choice__list4').classList.remove('choice__list--active');
  }

  document.querySelector('.menu__open').addEventListener('click', menuOpen);

  function menuOpen() {
    document.querySelector('.menu__list').classList.toggle('menu__list--active');
    document.querySelector('.choice__wrapper').classList.toggle('choice__wrapper--active');
    document.querySelector('.menu__list-wrapper').classList.toggle('menu__list-wrapper--active');
    document.querySelector('.menu__open').classList.toggle('menu__open--active');
  }