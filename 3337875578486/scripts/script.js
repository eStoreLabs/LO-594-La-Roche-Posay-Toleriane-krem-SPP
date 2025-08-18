(function () {
  const root = document.querySelector('#es-rc-content');
  if (!root) return;

  const accTab = root.querySelectorAll('.es-acc-tab');
  for (let i = 0; i < accTab.length; i++) {
    accTab[i].addEventListener('click', function () {
      this.classList.add('es-active');
      let accTabContent = this.nextElementSibling;

      const hideContent = () => {
        accTabContent.style.maxHeight = null;
        this.classList.remove('es-active');
      };

      const showContent = () => {
        accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
        this.classList.add('es-active');
      };

      if (accTabContent.style.maxHeight) {
        hideContent();
      } else {
        showContent();
      }
    });
  }

  const swiper = new Swiper(root.querySelector('.es-swiper1'), {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: root.querySelector('.es-swiper1-pagination'),
    },
    navigation: {
      nextEl: root.querySelector('.es-swiper1-button-next'),
      prevEl: root.querySelector('.es-swiper1-button-prev'),
    },
  });

  const swiper2 = new Swiper(root.querySelector('.es-swiper2'), {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: root.querySelector('.es-swiper2-pagination'),
    },
    navigation: {
      nextEl: '.es-swiper2-button-next',
      prevEl: '.es-swiper2-button-prev',
    },
  });

  const allNextBtns = root.querySelectorAll('.es-swiper2-button-next');
  allNextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      swiper2.slideNext();
    });
  });
})();
