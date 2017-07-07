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
  const img = $(' <img src="assets/img/news/' + data[0].img + '" alt="" class="responsive-img">');
  const newContent = $('<div class="new-main">' +
      '<p class="new-main__title">' + data[0].title + '</p>' +
      '<p class="new-main__text">' + data[0].brief + '</p></div>');

  section.append(row);
  row.append(col);
  col.append(img);
  col.append(newContent);

  $('#root').append(section);
}



