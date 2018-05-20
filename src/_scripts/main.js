// Main javascript entry point
import WOW from 'wow.js'

'use strict';

window.addEventListener('load', () => {
  let $athletsSlider = $('.athlets__feature-list'),
      $playersSlider = $('.players__feature-list'),
      heroAnimation,
      athletsAnamation,
      playersAnamation,
      bottomAnamation;

  const confToSlick = {
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 580,
        settings: "unslick"
      },
    ]
  };

  $($athletsSlider).slick(confToSlick);
  $($playersSlider).slick(confToSlick);


  heroAnimation = new WOW(
    {
      boxClass:     'hero__title-wrap-decoration',
      animateClass: 'show',
    }
  );

  athletsAnamation = new WOW(
    {
      boxClass:     'athlets__media',
      animateClass: 'show',
      offset:       200,
    }
  );

  playersAnamation = new WOW(
    {
      boxClass:     'players__media',
      animateClass: 'show',
      offset:       200,
    }
  );

  bottomAnamation = new WOW(
    {
      boxClass:     'bottom__media-decorations',
      animateClass: 'show',
      offset:       200,
    }
  );


  heroAnimation.init();
  athletsAnamation.init();
  playersAnamation.init();
  bottomAnamation.init();
});


