const swiper = new Swiper('.swiper', {
    pagination: 'outside',
    navigation: 'outside',

    zoom: {
      maxRatio: 5,
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    loop: true,
    autoplay: {
      delay: 2500,
    },
  });
  