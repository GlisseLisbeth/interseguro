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
    case 1:
                wrapper.append(Planes(updated));
  			        wrapper.append(DetallePlanes(updated));
        break;

  }


  root.append(wrapper);


}


const state = {
  page:null,
  place: null,
  cotizacion: {},
  planes: null,
  ofertas: null,
}
const updated = function(){
  render(root);
}


$( _ => {

  const root = $(".root");
  render(root);




});

'use strict';

// const DataPicker = ()=> {
//
// }
$( function() {
  var dateFormat = "dd/mm/yy",
    from = $( "#fecha_partida" )
      .datepicker({
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        dayNamesMin: ["L", "M", "M", "J", "V", "S", "D"],
        monthNames:
            ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 1,
        minDate: 0
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#fecha_retorno" ).datepicker({
      dateFormat: "dd/mm/yy",
      firstDay: 0,
      dayNamesMin: ["L", "M", "M", "J", "V", "S", "D"],
      monthNames:
          ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
          "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      defaultDate: "+1w",
      changeMonth: false,
      numberOfMonths: 1,
      minDate: 0
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );

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
                    reRender(container);
                   }

               },
            fail: function(request){
             if(request){
               alert(request.message);
             }
            }
       });
};

const postPlanes = (objecto, updated) => {

	 $.ajax({
          	url: 'https://testsoat.interseguro.com.pe/talentfestapi/cotizacion',
          	method: 'POST',
          	contentType: 'application/json',
          	data: objecto,
          	success: function(response) {
                	//console.log(response);
  						state.page = 1;
    				 	const pag =JSON.stringify(state.page);
    					localStorage.setItem("pagina",pag);
    					state.planes = response;
    					console.log(state.planes)
    					updated();
  				  },
				    fail: function(response){
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
  const itemDiv = $('<div class="item-place"></div>');
  const img = $('<img src="assets/images/localization.jpg" class="item-place__img">');
  const span = $('<span class="item-place__title">'+ item +'</span>');

  itemDiv.append(img);
  itemDiv.append(span);

  itemDiv.on("click", (e) => {
    e.preventDefault();
    $('#destino').val(item);
    container.empty();
    container.hide();

  });
  container.show();
  return itemDiv;
}
const Option = (container)=> {
  var number = "";
  for(var i=0; i<=10; i++){
    if(i<10){
      number = "0" + i;
      console.log(number);
    }else { number = "10";}
    container.append('<option value="'+ i +'">'+ number +'</option>');

  }
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

const Beneficios = (update) => {
  const divBeneficios = $('<div class="beneficios"></div>');
  const row = $('<div class="row"></div>');

  const titleDiv = $('<div class="col-xs-12 col-sm-12"></div>');
  const title = $('<h1>Personaliza tu asistencia sumando los siguientes</h1>');
  const titleBig = $('<span class="title-big-beneficios"></span>');

  const divAsistencia = $('<div class="col-xs-3"></div>');
  const imgAsistencia = $('<img src="assets/images/icon_beneficio_asistencia.png"> alt="beneficio_asistencia"');
  const hr1 = $('<hr class="lines">');
  const titleAsistencia = $('<h1>Asistencia Médica</h1>');
  const textAsistencia = $('<p>Amplia tu monto de cobertura de USD60,000 según el viaje que vas a realizar. Amplia tu monto de cobertura de USD60,000 según el viaje que vas a realizar.</p>');

  const divSeguros = $('<div class="col-xs-3"></div>');
  const imgSeguros = $('<img src="assets/images/icon_beneficio_moviles.png"> alt="beneficio_moviles"');
  const hr2 = $('<hr class="lines">');
  const titleSeguros = $('<h1>Seguros para Dispositivo Móviles</h1>');
  const textSeguros = $('<p>Reembolso de gasta USD1,000 para tus dispositivos (Smartphone, Tablet y notebook). Reembolso de gasta USD1,000 para tus dispositivos (Smartphone, Tablet y notebook)</p>');

  const divCobertura = $('<div class="col-xs-3"></div>');
  const imgCobertura = $('<img src="assets/images/icon_beneficio_equipaje.png"> alt="beneficio_equipo"');
  const hr3 = $('<hr class="lines">');
  const titleCobertura = $('<h1>Cobertura ante perdida de equipaje</h1>');
  const textCobertura = $('<p>Ante la posibilidad de pérdida de equipaje, te reembolsamos USD3,000. Ante la posibilidad de pérdida de equipaje, te reembolsamos USD3,000</p>');

  const divConsultas = $('<div class="col-xs-4"></div>');
  const titleConsultas = $('<h4>Si aún tienes dudas o consultas</h4>');

  const buttonCall = $('<button class ="button-red"></button>');
  const iconCall = $('<i class="fa fa-phone-square" aria-hidden="true"></i>');
  const textCallSmall = $('<span class="text-call small">Llámanos al </span>');
  const textCallMedium  = $('<span class="text-call medium">500-00-00</span>');

  const buttonChat = $('<button class="button-red"></button>');
  const iconChat = $('<i class="fa fa-comments" aria-hidden="true"></i>');
  const textChatSmall = $('<span class="text-chat small">Conversa por nuestro </span>');
  const textChatMedium  = $('<span class="text-chat medium">Chat de atencion</span>');

  div.append(row);
  row.append(titleDiv);
  titleDiv.append(title);
  titleDiv.append(titleBig);

  row.append(divAsistencia);
  divAsistencia.append(imgAsistencia);
  divAsistencia.append(hr1);
  divAsistencia.append(titleAsistencia);
  divAsistencia.append(textAsistencia);

  row.append(divSeguros);
  divSeguros.append(imgSeguros);
  divSeguros.append(hr2);
  divSeguros.append(titleSeguros);
  divSeguros.append(textSeguros);

  row.append(divCobertura);
  divCobertura.append(imgCobertura);
  divCobertura.append(hr3);
  divCobertura.append(titleCobertura);
  divCobertura.append(textCobertura);

  row.append(divConsultas);
  divConsultas.append(titleConsultas);

  divConsultas.append(buttoncall);
  buttonCall.append(iconCall);
  buttonCall.append(textCallSmall);
  buttonCall.append(textCallMedium);

  divConsultas.append(buttonChat);
  buttonChat.append(iconChat);
  buttonChat.append(textChatSmall);
  buttonChat.append(textChatMedium);
  
  return divBeneficios;
}

"use strict";
const DetallePlanes = () => {
	const div = $('<div class="detalle">Planes</div>');
	div.append('<div class="caracteristicas"></div>');
	div.find('.caracteristicas').append('<ul></ul>');

	jQuery.each(state.planes,(i,val)=>{
		div.append('<div class="planes"></div>');
		div.find('.planes').eq(i).append(`<h1>${val.tipo_plan}</h1>`);
		div.find('.planes').eq(i).append(`<p>${val.precio_plan}</p>`);

	console.log(val.caracteristicas);

	 jQuery.each(val.caracteristicas,(a,b)=>{
		div.find('.planes').eq(i).append(`<p class="estado">${b.aplica}</p>`);



		console.log(b.caracteristica);


    });


	});


	return div;


}

'use strict';
const Formulario = (updated)=> {
  const section = $('<section></section>');
  const cotiza = $('<div class="row"></div>');
  const form = $('<div id="cotiza" class="col-sm-8 col-sm-offset-2 omnes-medium form"></div>');
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
  const inputReturn = $('<input type="text" class="input-coti" id="fecha_retorno" placeholder="dd/mm/yy" disabled>');

  const place = $('<div class="col-sm-12"></div>');
  const placeDiv1 = $('<div class="col-sm-5"></div>');
  const divPlace = $('<div class="panel-default panel"></div>');
  const labelDestination = $('<div class="panel-body divAutocomplete"><small class="celeste">Destino</small></div>');
  const inputDestination = $('<input type="text" class="input-coti" id="destino" placeholder="Ingrese destino" autocomplete="off">');
  const autocomplete = $('<div class="autocomplete"></div>');

  const blankSpace = $('<div class="col-sm-2"></div>');

  const placeDiv2 = $('<div class="col-sm-5"></div>');
  const divEmail = $('<div class="panel-default panel"></div>');
  const labelEmail = $('<div class="panel-body"><small class="celeste">Correo electrónico</small></div>');
  const inputEmail = $('<input type="email" class="input-coti" id="correo" placeholder="Ingrese correo">');

  const pasajeros = $('<div class="col-sm-12"></div>');
  const divPasajeros = $('<div class="col-sm-2"><h4 class="celeste">Pasajeros  </h4></div>');
  const pasajerosDiv1 = $('<div class="col-sm-3"></div>');
  const divForAdults = $('<div class="panel-default panel"></div>');
  const adultsDiv = $('<div class="panel-body"><small class="celeste">Adultos</small><br></div>');
  const adults = $('<select class="input-coti" id="cantidad_adultos"></select>');

  const pasajerosDiv2 = $('<div class="col-sm-3"></div>');
  const divForChildren = $('<div class="panel-default panel"></div>');
  const childrenDiv = $('<div class="panel-body"><small class="celeste">Niños</small></div>');
  const children = $('<select class="input-coti" id="cantidad_niños"></select>');

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
  labelDestination.append(autocomplete);
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

  cotiza.append(form);
  section.append(cotiza);

  Option(adults);
  Option(children);

  button.on("click",function(e){
 		 e.preventDefault();
     console.log(section.find('.input-coti'));
		jQuery.each(section.find('.input-coti'),(i,val)=>{
			let attr = section.find('.input-coti').eq(i).attr('id');
      console.log(section.find('.input-coti').eq(i).val());
			state.cotizacion[attr] = section.find('.input-coti').eq(i).val();
		});

		const objSerialized = JSON.stringify(state.cotizacion);
		localStorage.setItem("cliente",objSerialized);
    console.log(objSerialized);
		postPlanes(objSerialized,updated);

	});
  inputDestination.on({
    keypress: validarLetra,
    keyup: function(e){
              if($(e.currentTarget).val() != ""){
                postBuscarDestino($(this).val(), autocomplete);
              }else{
                autocomplete.hide();
                autocomplete.empty();
              }
      }

  });

  inputEmail.on("blur", function(e){
     let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
     if (regex.test($(this).val().trim())) {
     } else {
       inputEmail.focus();
       inputEmail.append("<p style='color:red'>Correo no valido</p>")
     }

   });

   inputOrigin.on("blur", function(e){
      let regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
      if (!regex.test($(this).val().trim())) {
        inputOrigin.val("");
        inputOrigin.focus();
      }

    });
    inputOrigin.on("change", function(e){
          inputReturn.prop("disabled",false);
     });

    inputReturn.on("blur", function(e){
       let regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
       if (!regex.test($(this).val().trim())) {
         inputReturn.val("");
         inputReturn.focus();
       }

     });

     adults.on("change", function(e){
       let cant_adults = $("#cantidad_adultos option:selected").val();
       let cant_children = $("#cantidad_niños option:selected").val();
       if(parseInt(cant_adults)+parseInt(cant_children)>=1){
         let suma = parseInt(cant_adults)+parseInt(cant_children);
       }

     });
     children.on("change", function(e){
       let cant_adults = $("#cantidad_adultos option:selected").val();
       let cant_children = $("#cantidad_niños option:selected").val();
       if(parseInt(cant_adults)+parseInt(cant_children)>=1){
         let suma = parseInt(cant_adults)+parseInt(cant_children);
       }

     });

  return section;
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

'use strict';
const destinoItem = (oferta, col, update) => {
  const contDiv = $('<div class="'+col+'"></div>');
  const imgDiv = $('<img src="'+oferta.imagen+'" alt="'+oferta.titulo+'">');
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

  const section  = $('<section class="ofertas"></section>');
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

"use strict";
const Planes = (update) => {

		var objetoDatos = JSON.parse(localStorage.getItem("cliente"));
		var pag = JSON.parse(localStorage.getItem("pagina"));

		const form = $('<form></form>');
		const stDestino = $('<input type="text" id="destino"></input>');
		const stFechaPartida = $('<input type="text" id="fecha_partida"></input>');
		const stFechaRetorno = $('<input type="text" id="fecha_retorno"></input>');
		const stCorreo = $('<input type="text" id="correo"></input>');
		const numNinos = $('<input type="number" id="cantidad_adultos"></input>');
		const numAduls = $('<input type="number" id="cantidad_niños"></input>');
		const enviar = $('<button type="submit">Cotizar</button>');

			form.append(stDestino);
			form.append(stFechaPartida);
			form.append(stFechaRetorno);
			form.append(stCorreo);
			form.append(numNinos);
			form.append(numAduls);
			form.append(enviar);

			//console.log(Object.keys(objetoDatos));

			jQuery.each(Object.keys(objetoDatos),(i,val)=>{
				form.find('input').eq(i).val(objetoDatos[val]);
			})

			form.on("submit",function(e){
 		 		e.preventDefault();
				state.pagina = pag;
				jQuery.each(form.children(),(i,val)=>{
					let attr = form.find('input').eq(i).attr('id');
						state.cotizacion[attr] = $('input').eq(i).val();
					});

				const objSerialized = JSON.stringify(state.cotizacion);
					localStorage.setItem("cliente",objSerialized);
					postPlanes(objSerialized,updated);
			})

		return form;
	}
