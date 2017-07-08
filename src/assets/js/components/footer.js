/** component footer js **/

function addFooter() {
  const footer1 = $('<footer class="container"></footer>');
  const row = $('<div class="row"></div>');
  const col1 = $('<div class="col s12 m4"><img src="assets/img/logo-footer.png" alt="" class="responsive-img">' +
      '<p class="white-text">© Editado por Laboratoria Av. José Pardo #601 Lima 1 Perú Copyright © Laboratoria.la' +
      ' Todos los derechos reservados.</p></div>');
  const col2 = $('<div class="col s12 m4 hide-on-small-only"><p class="white-text">DIRECTOR GENERAL: Francisco Miró Quesada Cantuarias ' +
      'DIRECTOR PERIODÍSTICO: Fernando Berckemeyer Olaechea' +
      'SUSCRIPCIONES: suscriptores@comercio.com.pe' +
      'PUBLICIDAD ONLINE: fonoavisos@comercio.com.pe' +
      'CLUB EL COMERCIO: clubelcomercio@comercio.com.pe' +
      ' Compromiso de Autorregulación Comercial</p></div>');
  const col3 = $('  <div class="col s12 m4  hide-on-small-only"><p class="white-text">' +
      'TÉRMINOS Y CONDICIONES DE USO TRABAJA CON NOSOTROS LIBRO DE RECLAMACIONES SEDES PRINCIPALES POLÍTICAS DE PRIVACIDAD </p><p class="white-text">SIGUENOS</p> ' +
      '</div></div>');

  footer1.append(row);
  row.append(col1);
  row.append(col2);
  row.append(col3);

  return  footer1;
}