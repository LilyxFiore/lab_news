/**js**/

$('#root').append(header());



$('#root').append(newMain());
/** component carrusel **/

/** component footer js **/

/** component header **/
function header() {

  const header = $('<header></header>');
  const navTop = $('<nav class="nav-top"><ul class="nav-top_list"><li><img src="assets/img/menu.png" alt="">SECTIONS</li><li><img src="assets/img/search.png" alt="">SEARCH</li> ' +
      '<div class="right"><li><img src="assets/img/fb.png" alt=""></li><li><img src="assets/img/tw.png" alt=""></li><li>' +
      '<img src="assets/img/in.png" alt=""></li></div></ul></nav>');
  const headerCenter = $('<div class="header-center center-align"><img src="assets/img/logoicon.png" alt=""><p>' + getDate() + ' | <img src="assets/img/cloud.png" alt=""> 23°</p></div>');
  const navBottom = $('<nav class="nav-bottom"><ul class="nav-bottom__list"><li>Lo último</li><li>Opinión</li><li>Cultura</li><li>Perú</li>' +
      '<li>Tecnología</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li></ul></nav>');

  header.append(navTop);
  header.append(headerCenter);
  header.append(navBottom);

  return header;
}

function getDate(){
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  var f = new Date();
  return (diasSemana[f.getDay()] + " ," +f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}


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



