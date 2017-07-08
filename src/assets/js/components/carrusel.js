/** component carrusel **/

function addCarrosul(){
  const carrousel = $('<section class="container carrousel"></section>');
  const owlCarrousel = $('<section class="owl-carousel owl-theme pos-relative"></section>');
  const item1 = $('<div class="item"><img src="assets/img/news/news-28.png" alt=""></div>');
  const item2 = $('<div class="item"><img src="assets/img/news/news-29.png" alt=""></div>');
  const item3 = $('<div class="item"><img src="assets/img/news/news-30.png" alt=""></div>');
  const item4 = $('<div class="item"><img src="assets/img/news/news-31.png" alt=""></div>');

  carrousel.append(owlCarrousel);
  owlCarrousel.append(item1);
  owlCarrousel.append(item2);
  owlCarrousel.append(item3);
  owlCarrousel.append(item4);

 owlCarrousel.owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:2
    },
    600:{
      items:3
    },
    1000:{
      items:4
    }
  }
});

  return carrousel;
}
