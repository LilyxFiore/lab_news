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
  const section = $('<section></section>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col m12 no-padding pos-relative"></div>');
  const img = $(' <img src="assets/img/news/' + data[0].img + '" alt="" class="img-full-w">');
  const newContent = $('<div class="new-main">' +
      '<p class="new-main__title">' + data[0].title + '</p>' +
      '<p class="new-main__text">' + data[0].brief + '</p></div>');

  section.append(row);
  row.append(col);
  col.append(img);
  col.append(newContent);

  $('#root').append(section);

  addSecundary(data);
}

function addSecundary(data) {
  console.log(data[0].img);
  const section = $('<section></section>');
  const row = $('<div class="row"></div>');
  const col1 = $('<div class="col m6"><img src="assets/img/news/'+ data[1].img +'" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[1].title +'</p>' +
      '<p class="new-main__hoy">HOY</p>');
  const col2 =$('<div class="col m3"><img src="assets/img/news/'+ data[2].img +'" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[2].title +'</p></div>');
  const col3 =$('<div class="col m3 pad-left"><img src="assets/img/news/'+ data[3].img +'" alt="" class="img-full-w">' +
      '<p class="new-main--dark">'+ data[3].title +'</p></div>');

  section.append(row);
  row.append(col1);
  row.append(col2);
  row.append(col3);

  $('#root').append(section);

}
