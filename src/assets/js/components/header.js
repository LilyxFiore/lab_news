
/** component header **/
function header() {

  const header = $('<header class="container"></header>');
  const row = $('<div class="row"></div>');
  const navTop = $('<nav class="nav-top col s12"><ul class="nav-top_list"><li><img src="assets/img/menu.png" alt="">SECTIONS</li><li><img src="assets/img/search.png" alt="">SEARCH</li> ' +
      '<div class="right"><li><img src="assets/img/fb.png" alt=""></li><li><img src="assets/img/tw.png" alt=""></li><li>' +
      '<img src="assets/img/in.png" alt=""></li></div></ul></nav>');
  const headerCenter = $('<div class="header-center center-align col s12"><img src="assets/img/logoicon.png" alt=""><p>' + getDate() + ' | <img src="assets/img/cloud.png" alt=""> 23°</p></div>');
  const navBottom = $('<nav class="nav-bottom col s12 m12 hide-on-small-only"><ul class="nav-bottom__list"><li>Lo último</li><li>Opinión</li><li>Cultura</li><li>Perú</li>' +
      '<li>Tecnología</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li></ul></nav>');

  header.append(row);
  row.append(navTop);
  row.append(headerCenter);
  row.append(navBottom);

  return header;
}

function getDate(){
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  var f = new Date();
  return (diasSemana[f.getDay()] + " ," +f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}

