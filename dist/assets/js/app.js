"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.page) {
    case null:
                wrapper.append(Formulario(updated));
      break;

  }


  root.append(wrapper);

}


const state = {
  page:null,
}
const updated = function(){
  render(root);
}


$( _ => {

  const root = $(".root");
  render(root);




});

'use strict';

const Formulario = (updated)=> {
  const parent = $('<div class=""></div>');
  const form = $('<div class=""></div>');
  const title = $('<div class="row"><div class="col-xs-12"><img src="assets/images/icon_cotizacion.png" class=""><h3 class="">Cotiza el seguro de tu próximo viaje</h3></div></div>');
  const date = $('<div class="row"></div>');
  const divDateOrigin = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelOrigin = $('<div><label for="originDate">Partida</label></div>');
  const inputOrigin = $('<input type="date" class="form-control" id="originDate" placeholder="dd/mm/yy">');
  const iconOrigin = $('<img src="assets/images/icon_calendar.png" class="">');

  const arrow = $('<div class="col-sm-2 hidden-xs"><img src="assets/images/icon_arrow_gray.png" class=""></div>');

  const divDateReturn = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelReturn = $('<div><label for="returnDate">Retorno</label></div>');
  const inputReturn = $('<input type="date" class="form-control" id="returnDate" placeholder="dd/mm/yy">');
  const iconReturn = $('<img src="assets/images/icon_calendar.png" class="">');

  const place = $('<div class="row"></div>');
  const divPlace = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelDestination = $('<div><label for="destination">Destino</label></div>');
  const inputDestination = $('<input type="text" class="form-control" id="destination" placeholder="Ingrese destino">');

  const divEmail = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelEmail = $('<div><label for="email">Correo electrónico</label></div>');
  const inputEmail = $('<input type="email" class="form-control" id="email" placeholder="Ingrese correo">');

  const pasajeros = $('<div class="row"></div>');
  const divPasajeros = $('<div class="col-xs-3">Pasajeros</div>');
  const divForAdults = $('<div class="col-xs-3"></div>');
  const adultsDiv = $('<div class=""><label for="adultsNumber">Adultos</label></div>');
  const adults = $('<input type="number" class="form-control" id="adultsNumber">');
  const divForChildren = $('<div class="col-xs-3"></div>');
  const childrenDiv = $('<div class=""><label for="children">Niños</label></div>');
  const children = $('<input type="number" class="form-control" id="children">');

  const button = $('<div class="col-xs-12"><button type="button">COTIZAR<img src="assets/images/icon_boton_cotizacion.png"></button>')

  divDateOrigin.append(labelOrigin);
  divDateOrigin.append(inputOrigin);
  divDateOrigin.append(iconOrigin);

  divDateReturn.append(labelReturn);
  divDateReturn.append(inputReturn);
  divDateReturn.append(iconReturn);

  date.append(divDateOrigin);
  date.append(arrow);
  date.append(divDateReturn);


  divPlace.append(labelDestination);
  divPlace.append(inputDestination);
  divEmail.append(labelEmail);
  divEmail.append(inputEmail);
  place.append(divPlace);
  place.append(divEmail);

  divForAdults.append(adultsDiv);
  divForAdults.append(adults);
  divForChildren.append(childrenDiv);
  divForChildren.append(children);
  pasajeros.append(divPasajeros);
  pasajeros.append(divForAdults);
  pasajeros.append(divForChildren);

  form.append(title);
  form.append(date);
  form.append(place);
  form.append(pasajeros);
  form.append(button);

  parent.append(form);
  return parent;
}
