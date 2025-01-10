const accTab = document.querySelectorAll('.acc-tab');

for (let i = 0; i < accTab.length; i++) {
  accTab[i].addEventListener('click', function () {
    this.classList.add('active');
    let accTabContent = this.nextElementSibling;

    const hideContent = () => {
      accTabContent.style.maxHeight = null;
      this.classList.remove('active');
    };

    const showContent = () => {
      accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
      this.classList.add('active');
    };

    if (accTabContent.style.maxHeight) {
      hideContent();
    } else {
      showContent();
    }
  });
}

const swiper = new Swiper('.swiper--1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination--1',
  },

  navigation: {
    nextEl: '.swiper-button-next--1',
    prevEl: '.swiper-button-prev--1',
  },

});

const swiper2 = new Swiper('.swiper--2', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next--2',
  },

});

const swiper3 = new Swiper('.swiper--3', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination--3',
  },

  navigation: {
    nextEl: '.swiper-button-next--3',
    prevEl: '.swiper-button-prev--3',
  },

});