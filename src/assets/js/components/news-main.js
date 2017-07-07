/** component news main**/
function newMain(){
  $.get('api/news', function (response) {
    if(response != null){
      console.log(response);
      addNew(response);
    }
  });
}

function addNew(data) {
  console.log(data[0].img);
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

function addSecundary(data) {
  console.log(data[0].img);
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
  row.append(col1);
  row.append(col2);
  row.append(col3);
  row.append(col4);
  $('#root').append(section);

}
