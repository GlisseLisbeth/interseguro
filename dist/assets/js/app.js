"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(Header());
  switch (state.page) {
    case null:
                wrapper.append(Banner());
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
const validarNumero = (e)=>{
  if(e.which< 47 || e.which>58){
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
 const Banner = ()=> {

   const section = $('<section id="banner"></section>');
   const row = $('<div class="row"></div>');
   const column = $('<div class="col-xs-7 col-xs-offset-5 col-sm-7 col-sm-offset-5"></div>');
   const texto = $('<p class="fucsia omnes-regular">Disfruta más de tu viaje sintiéndote</p><p class="azul omnes-semibold hidden-xs hidden-sm">SEGURO</p><h1 class="azul omnes-semibold visible-xs visible-sm">SEGURO</h1><p class="celeste omnes-regular hidden-xs">No importa el destino que elijas, cuidamos de ti <br>y de tus bienes personales en todo el mundo.</p>');

   column.append(texto);
   row.append(column);

   section.append(row);
   return section;
 }

'use strict';

const Formulario = (updated)=> {
  const parent = $('<section></section>');
  const cotiza = $('<div class="row"></div>');
  const form = $('<div id="cotiza" class="col-sm-8 col-sm-offset-2 omnes-medium"></div>');
  const div1 = $('<div class="col-sm-12"></div>');
  const subDiv1 = $('<div class="col-sm-1"><img src="assets/images/icon_cotizacion.png" class="maletin"></div><div class="col-sm-11"><h3 class="azul hidden-xs">Cotiza el seguro de tu próximo viaje</h3><h4 class="azul visible-xs">Cotiza el seguro de tu próximo viaje</h4></div>');

  const date = $('<div class="col-sm-12"></div>');
  const dateDiv1 = $('<div class="col-sm-5"></div>');
  const divDateOrigin = $('<div class="panel panel-default"></div>');
  const labelOrigin = $('<div class="panel-body"><small class="celeste">Partida</small><br></div>');
  const inputOrigin = $('<input type="text" class="input-coti" id="fecha_partida" placeholder="dd/mm/yy">');

  const arrow = $('<div class="col-sm-2 text-center hidden-xs"><img src="assets/images/icon_arrow_gray.png" alt="flecha"></div>');

  const dateDiv2 = $('<div class="col-sm-5"></div>');
  const divDateReturn = $('<div class="panel panel-default"></div>');
  const labelReturn = $('<div class="panel-body"><small class="celeste">Retorno</small><br></div>');
  const inputReturn = $('<input type="text" class="input-coti" id="fecha_retorno" placeholder="dd/mm/yy">');

  const place = $('<div class="col-sm-12"></div>');
  const placeDiv1 = $('<div class="col-sm-5"></div>');
  const divPlace = $('<div class="panel-default panel"></div>');
  const labelDestination = $('<div class="panel-body"><small class="celeste">Destino</small></div>');
  const inputDestination = $('<input type="text" class="input-coti" id="destino" placeholder="Ingrese destino" autocomplete="off">');

  const blankSpace = $('<div class="col-sm-2"></div>');
  const autocomplete = $('<div class=""></div>');

  const placeDiv2 = $('<div class="col-sm-5"></div>');
  const divEmail = $('<div class="panel-default panel"></div>');
  const labelEmail = $('<div class="panel-body"><small class="celeste">Correo electrónico</small></div>');
  const inputEmail = $('<input type="email" class="input-coti" id="correo" placeholder="Ingrese correo">');

  const pasajeros = $('<div class="col-sm-12"></div>');
  const divPasajeros = $('<div class="col-sm-2 col-sm-offset-1"><h4 class="celeste">Pasajeros  </h4></div>');
  const pasajerosDiv1 = $('<div class="col-sm-3"></div>');
  const divForAdults = $('<div class="panel-default panel"></div>');
  const adultsDiv = $('<div class="panel-body"><small class="celeste">Adultos</small><br></div>');
  const adults = $('<input type="number" class="input-coti" id="cantidad_adultos">');

  const pasajerosDiv2 = $('<div class="col-sm-3"></div>');
  const divForChildren = $('<div class="panel-default panel"></div>');
  const childrenDiv = $('<div class="panel-body"><small class="celeste">Niños</small></div>');
  const children = $('<input type="number" class="input-coti" id="cantidad_niños">');

  const button = $('<div class="col-sm-12 text-center"><button class="btn-cotizar">COTIZAR</button>');

  div1.append(subDiv1);

  labelOrigin.append(inputOrigin);
  divDateOrigin.append(labelOrigin);
  dateDiv1.append(divDateOrigin);

  labelReturn.append(inputReturn);
  divDateReturn.append(labelReturn);
  dateDiv2.append(divDateReturn);

  date.append(dateDiv1);
  date.append(arrow);
  date.append(dateDiv2);


  labelDestination.append(inputDestination);
  divPlace.append(labelDestination);
  placeDiv1.append(divPlace);
  labelEmail.append(inputEmail);
  divEmail.append(labelEmail);
  placeDiv2.append(divEmail);

  place.append(placeDiv1);
  place.append(blankSpace);
  place.append(placeDiv2);

  adultsDiv.append(adults);
  divForAdults.append(adultsDiv);
  pasajerosDiv1.append(divForAdults);
  childrenDiv.append(children);
  divForChildren.append(childrenDiv);
  pasajerosDiv2.append(divForChildren);
  pasajeros.append(divPasajeros);
  pasajeros.append(pasajerosDiv1);
  pasajeros.append(pasajerosDiv2);

  form.append(div1);
  form.append(date);
  form.append(place);
  form.append(pasajeros);
  form.append(button);
  form.append(autocomplete);

  cotiza.append(form);
  parent.append(cotiza);


  inputDestination.on({
    keypress: validarLetra,
    keyup: function(e){
              if($(e.currentTarget).val() != ""){
                postBuscarDestino($(this).val(), autocomplete);

              }else{
                autocomplete.empty();
                autocomplete.hide();
              }
          //   var regex = /^([a-zñáéíóúA-ZÑÁÉÍÓÚ]+[\s]*)+$/;
          //   if(regex.test($(this).val())){
          //      state.userName= $(this).val();
          //    }else{ state.userName = null;}
          //    habilitarBtnCrearCuenta();
          //  }
        }
  });

  return parent;
}

'use strict';
 const Header = ()=> {

   const header = $('<header id="header"></header>');
   const nav = $('<nav class="navbar"></nav>');
   const logo = $('<div class="navbar-left pull-left"><img src="assets/images/logo_interseguro.png" alt="logo interseguro"><span class="omnes-medium hidden-xs">SEGURO DE VIAJES</span></div>');
   const menuDiv = $('<div class="navbar-right omnes-regular hidden-xs"></div>');
   const beneficios = $('<a href="#">Beneficios</a>');
   const ofertas = $('<a href="#">Ofertas por destinos</a>');
   const divHamburger = $('<div class="navbar-right pull-right omnes-regular visible-xs"></div>');
   const boton = $('<button type="button" class="btn menu visible-xs"></button>');
   const botonMenu = $('<small>MENU</small><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>');

   menuDiv.append(beneficios);
   menuDiv.append(ofertas);
   boton.append(botonMenu);
   divHamburger.append(boton)
   nav.append(logo);
   nav.append(menuDiv);
   nav.append(divHamburger);

   header.append(nav);
   return header;
 }
