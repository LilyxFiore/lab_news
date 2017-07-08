/** component news main**/
function newMain(){
  $.get('api/news', function (response) {
    if(response != null){
      console.log(response);
      addNew(response);
    }
  });
}

/** Noticia principal **/
function addNew(data) {
  const section = $('<section class="container"></section>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12 m12 pos-relative m-top"></div>');
  const img = $(' <img src="assets/img/news/' + data[0].img + '" alt="" class="responsive-img">');
  const newContent = $('<div class="new-main">' +
      '<p class="new-main__title">' + data[0].title + '</p>' +
      '<p class="new-main__text hide-on-small-only">' + data[0].brief + '</p></div>');

  section.append(row);
  row.append(col);
  col.append(img);
  col.append(newContent);

  $('#root').append(section);

  addSecundary(data);
}

/** Noticias secundarias **/
function addSecundary(data) {
  const section = $('<section class="container"></section>');
  const row = $('<div class="row"></div>');
  const col1 = $('<div class="col s12 m6"><img src="assets/img/news/'+ data[1].img +'" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[1].title +'</p>' +
      '<p class="new-main__hoy">HOY</p>');
  const col2 =$('<div class="col s12 m3"><img src="assets/img/news/'+ data[2].img +'" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[2].title +'</p></div>');
  const col3 =$('<div class="col s12 m3"><img src="assets/img/news/'+ data[3].img +'" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[3].title +'</p></div>');

  section.append(row);
  row.append(col1);
  row.append(col2);
  row.append(col3);

  $('#root').append(section);

  addMundo(data);
}

/** Noticia seccion Mundo **/
function addMundo(data) {
  const section = $('<section class="container"></section>');
  const row = $('<div class="row"></div>');
  const title = $('<div class="col s12"><p class="title">MUNDO</p><p class="line"></p></div>');

  const col1 = $('<div class="col s12 m3"><img src="assets/img/news/news-4.png" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[4].title +'</p>' +
      '<p class="new-main__hoy">HOY</p></div>');


  const col2 =$('<div class="col s12 m6"><div class="col s12 m6"><img src="assets/img/news/news-5.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[5].title +'</p></div>' +
      '<div class="col m6 hide-on-small-only"><img src="assets/img/news/news-6.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[6].title +'</p><p class="new-main__hoy">HOY</p></div>' +
      '<div class="col s12 m12 m-top-new"><div class="new__small bg-dark"><img src="assets/img/news/news-8.png" alt="" class="img-medio">' +
      '<span class="new__small--text white-text">'+ data[8].title +'</span></div></div>' +
      '<div class="col s12 m12 m-top-10"><div class="new__small bg-dark"><img src="assets/img/news/news-9.png" alt="" class="img-medio">' +
      '<span class="new__small--text white-text">'+ data[9].title +'</span></div></div></div>');

  const col3 = $('<div class="col m3 hide-on-small-only"><img src="assets/img/news/news-7.png" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[7].title +'</p>' +
      '<p class="new-main__hoy">HOY</p></div>');

  const col4 = $('<div class="col m3 hide-on-small-only"><img src="assets/img/news/news-10.png" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[10].title +'</p></div>' +
      '<div class="col m3 hide-on-small-only"><img src="assets/img/news/news-11.png" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[11].title +'</p>' +
      '<p class="new-main__hoy">HOY</p></div><div class="col m3 hide-on-small-only"><img src="assets/img/news/news-12.png" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[12].title +'</p>' +
      '<p class="new-main__hoy">HOY</p></div><div class="col m3 hide-on-small-only"><img src="assets/img/news/news-13.png" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[13].title +'</p></div>');

  section.append(row);
  row.append(title);
  row.append(col1);
  row.append(col2);
  row.append(col3);
  row.append(col4);
  $('#root').append(section);

  addTechnology(data);
}

/** seccion tecnologia **/
function addTechnology(data) {

  const section = $('<section class="container"></section>');
  const row = $('<div class="row"></div>');
  const title = $('<div class="col s12"><p class="title">TECNOLOGÍA</p><p class="line"></p></div>');

  const col1 = $('<div class="col s12 m6"><img src="assets/img/news/news-14.png" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[14].title +'</p>' +
      '<p class="new-main__hoy">HOY</p></div>');


  const col2 =$('<div class="col s12 m6"><div class="col s12 m6 hide-on-small-only"><img src="assets/img/news/news-15.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark-xs">'+ data[15].title +'</p></div>' +
      '<div class="col m6 hide-on-small-only"><img src="assets/img/news/news-16.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark-xs">'+ data[16].title +'</p><p class="new-main__hoy xs">HOY</p></div>' +
      '<div class="col s12 m12 m-top-new"><div class="new__small bg-dark"><img src="assets/img/news/news-17.png" alt="" class="img-medio">' +
      '<span class="new__small--text white-text">'+ data[17].title +'</span></div></div>' +
      '<div class="col s12 m12 m-top-10"><div class="new__small bg-dark"><img src="assets/img/news/news-18.png" alt="" class="img-medio">' +
      '<span class="new__small--text white-text">'+ data[18].title +'</span></div></div></div>');

  section.append(row);
  row.append(title);
  row.append(col1);
  row.append(col2);
  $('#root').append(section);

  addEducacion(data);
}


/** seccion educacion **/

function addEducacion(data) {

  const section = $('<section class="container"></section>');
  const row = $('<div class="row"></div>');
  const title = $('<div class="col s12"><p class="title">EDUCACIÓN</p><p class="line"></p></div>');

  const col1 =$('<div class="col s12 m6"><div class="col s12 m6"><img src="assets/img/news/news-19.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark-xs">'+ data[19].title +'</p></div>' +
      '<div class="col s12 m6"><img src="assets/img/news/news-20.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark-xs">'+ data[20].title +'</p><p class="new-main__hoy xs">HOY</p></div>' +
      '<div class="col s12 m12 m-top-new"><div class="new__small bg-dark"><img src="assets/img/news/news-21.png" alt="" class="img-medio">' +
      '<span class="new__small--text white-text">'+ data[21].title +'</span></div></div>' +
      '</div></div>');


  const col2 =$('<div class="col s12 m6"><div class="col s12 m6"><img src="assets/img/news/news-21.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark-xs">'+ data[21].title +'</p></div>' +
      '<div class="col s12 m6"><img src="assets/img/news/news-22.png" alt="" class="img-full-w">' +
      '<p class="new-main--dark-xs">'+ data[22].title +'</p><p class="new-main__hoy xs">HOY</p></div>' +
      '<div class="col s12 m12 m-top-new"><div class="new__small bg-dark"><img src="assets/img/news/news-23.png" alt="" class="img-medio">' +
      '<span class="new__small--text white-text">'+ data[23].title +'</span></div></div>' +
      '</div></div>');

  section.append(row);
  row.append(title);
  row.append(col1);
  row.append(col2);
  $('#root').append(section);

  addOpinion(data);
}

function addOpinion(data) {
  const section = $('<section class="container"></section>');
  const row = $('<div class="row"></div>');
  const title = $('<div class="col s12"><p class="title">Opinión</p><p class="line"></p></div>');

  const col1 = $('<div class="col s12 m3 hide-on-small-only"><img src="assets/img/news/' + data[24].img + '" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[24].title +'</p></div>' +
      '<div class="col s12 m3 hide-on-small-only"><img src="assets/img/news/' + data[25].img + '" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[25].title +'</p>' +
      '<p class="new-main__hoy">HOY</p></div><div class="col s12 m3 hide-on-small-only"><img src="assets/img/news/' + data[26].img + '" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[26].title +'</p>' +
      '<p class="new-main__hoy">HOY</p></div><div class="col s12 m3 hide-on-small-only"><img src="assets/img/news/' + data[27].img + '" alt="" class="img-full-w"><p ' +
      'class="new-main--dark">'+ data[27].title +'</p></div>');

  section.append(row);
  row.append(title);
  row.append(col1);
  $('#root').append(section);

  $('#root').append(addCarrosul());

  $('#root').append(addFooter());
}