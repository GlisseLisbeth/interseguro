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
  place: null
}
const updated = function(){
  render(root);
}


$( _ => {

  const root = $(".root");
  render(root);




});

"use strict";

const postBuscarDestino = (destino, container) => {

    $.ajax({
           url: 'https://testsoat.interseguro.com.pe/talentfestapi/destinos',
           method: 'POST',
           contentType: 'application/json',
           crossOrigin: true,
           data: JSON.stringify({destino_input: destino
                                 }),
           success: function(response) {

                   if(response){
                     state.place = response;
                     console.log(state.place);
                    reRender(container);

                   }

               },
            fail: function(request){
             if(request){
               alert(request.message);
             }
            }
       });



}

'use strict';

const validarLetra = (e)=>{
  if(e.which> 47 && e.which<58){
    e.preventDefault();
  }
}

const reRender = (container) => {
    container.empty();
    state.place.forEach((item) => {

    container.append(placeItem(item, container));
  });
}
const placeItem = (item, container) => {
  const itemDiv = $('<div class=""></div>');
  const img = $('<img src="assets/images/localization.jpg">');
  const p = $('<p class="title">'+ item +'</p>');

  itemDiv.append(img);
  itemDiv.append(p);

  itemDiv.on("click", (e) => {
    e.preventDefault();
    $('#destino').val(item);
    container.empty();
    container.hide();

  });
  container.show();
  return itemDiv;
}

'use strict';

const Formulario = (updated)=> {
  const parent = $('<div class=""></div>');
  const form = $('<div class=""></div>');
  const title = $('<div class="row"><div class="col-xs-12"><img src="assets/images/icon_cotizacion.png" class="title__img"><h3 class="title__h3">Cotiza el seguro de tu próximo viaje</h3></div></div>');
  const date = $('<div class="row"></div>');
  const divDateOrigin = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelOrigin = $('<div><label for="fecha_partida">Partida</label></div>');
  const inputOrigin = $('<input type="date" class="form-control" id="fecha_partida" placeholder="dd/mm/yy">');
  const iconOrigin = $('<img src="assets/images/icon_calendar.png" class="">');

  const arrow = $('<div class="col-sm-2 hidden-xs"><img src="assets/images/icon_arrow_gray.png" class=""></div>');

  const divDateReturn = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelReturn = $('<div><label for="fecha_retorno">Retorno</label></div>');
  const inputReturn = $('<input type="date" class="form-control" id="fecha_retorno" placeholder="dd/mm/yy">');
  const iconReturn = $('<img src="assets/images/icon_calendar.png" class="">');

  const place = $('<div class="row"></div>');
  const divPlace = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelDestination = $('<div><label for="destino">Destino</label></div>');
  const inputDestination = $('<input type="text" class="form-control" id="destino" placeholder="Ingrese destino" autocomplete="off">');

  const autocomplete = $('<div class=""></div>');
  const divEmail = $('<div class="col-xs-12 col-sm-5"></div>');
  const labelEmail = $('<div><label for="correo">Correo electrónico</label></div>');
  const inputEmail = $('<input type="email" class="form-control" id="correo" placeholder="Ingrese correo">');

  const pasajeros = $('<div class="row"></div>');
  const divPasajeros = $('<div class="col-xs-3">Pasajeros</div>');
  const divForAdults = $('<div class="col-xs-3"></div>');
  const adultsDiv = $('<div class=""><label for="cantidad_adultos">Adultos</label></div>');
  const adults = $('<input type="number" class="form-control" id="cantidad_adultos">');
  const divForChildren = $('<div class="col-xs-3"></div>');
  const childrenDiv = $('<div class=""><label for="cantidad_niños">Niños</label></div>');
  const children = $('<input type="number" class="form-control" id="cantidad_niños">');

  const button = $('<div class="col-xs-12"><button type="button">COTIZA<img src="assets/images/icon_boton_cotizacion.png"></button>')

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
  form.append(autocomplete);

  parent.append(form);


  inputDestination.on("keyup", function(e){
    if($(e.currentTarget).val() != ""){
      postBuscarDestino($(this).val(), autocomplete);

    }else{
      autocomplete.empty();
      autocomplete.hide();
    }
  });


  return parent;
}
