'use strict';
const destinoItem = (oferta, col, update) => {
  const contDiv = $('<div class="'+col+'"></div>');
  const imgDiv = $('<img src="'+oferta.imagen+'" alt="'++oferta.titulo'">');
  const descriptionDiv = $('<div class="description"></div>');
  const detailTitle =$('<h1>'+oferta.titulo+'</h1>');
  const promotion = $('<div class="promotion"></div>');
  const spanPromotion = $('<span class="promo">'+oferta.descuento+'</span>');
  const paragraphPromo = $('<p>'+oferta.descripcion+'</p>');
  const moreSign = $('<img src="assets/images/icon_more.png">');
  const moreText = $('<span>ver más</span>');

  contDiv.append(imgDiv);
  contDiv.append(descriptionDiv);
  descriptionDiv.append(detailTitle);
  descriptionDiv.append(promotion);
  promotion.append(spanPromotion);
  promotion.append(paragraphPromo);
  promotion.append(moreSign);
  promotion.append(moreText);

  return contDiv;
}
const Destinos = (update) => {

  var pag = JSON.parse(localStorage.getItem("pagina"));

  const section  = $('<section class="destinos"></section>');
  const row = $('<div class="row"></div>');
  const colTitle = $('<div class="col-sm-12"></div>');
  const title = $('<h1>Aprovecha nuestra oferta por</h1>');
  const titleBig = $('<span class="title-bil">DESTINO</span>');

  const rowGallery = $('<div class="row"></div>');
  let divCol = ['col-sm-6', 'col-sm-3','col-sm-3', 'col-sm-3', 'col-sm-3'];
  state.ofertas.forEach((oferta,index) => {
      rowGallery.append(destinoItem(oferta, divCol[index], update));
  });

  section.append(row);
  row.append(colTitle);
  colTitle.append(title);
  colTitle.append(titleBig);
  section.append(rowGallery);

  return section;
}
