"use strict";
const Planes = (update) => {

		var objetoDatos = JSON.parse(localStorage.getItem("cliente"));
		var pag = JSON.parse(localStorage.getItem("pagina"));

    const div = $('<div class="row"></div>');
		const form = $('<form></form>');
    const destinoDiv = $('<div class="col-sm-3"></div>');
    const divDestino = $('<div class="form-group"></div>');
    const labelDestino = $('<label><small class="">Destino</small></label>');
    const inputDestino = $('<input type="text" class="form-control input-consult" id="destino" placeholder="">');
    const correo = $('<input class="input-consult" style="display:none">');

    const dateDiv1 = $('<div class="col-sm-2"></div>');
    const divDateOrigin = $('<div class="form-group"></div>');
    const labelOrigin = $('<label><small class="">Partida</small></label>');
    const inputOrigin = $('<input type="text" class="form-control input-consult" id="fecha_partida" placeholder="dd/mm/yy">');

    const arrow = $(' <div class="col-sm-1 hidden-xs hidden-sm"><div class="form-group"><img src="assets/images/icon_arrow_blue.png" alt=""></div></div>');

    const dateDiv2 = $('<div class="col-sm-2"></div>');
    const divDateRetorno = $('<div class="form-group"></div>');
    const labelRetorno = $('<label><small class="">Retorno</small></label>');
    const inputRetorno = $('<input type="text" class="form-control input-consult" id="fecha_retorno" placeholder="dd/mm/yy">');
    const pasajerosDiv1 = $('<div class="col-sm-1 col-xs-4"></div>');
    const adultsDiv = $('<div class="form-group"><label><small class="">Adultos</small></label></div>');
    const adults = $('<select class="btn input-consult" id="cantidad_adultos"></select>');
    const pasajerosDiv2 = $('<div class="col-sm-1 col-xs-3"></div>');
    const childrenDiv = $('<div class="form-group"><label><small class="">Niños</small></label></div>');
    const children = $('<select class="btn input-consult" id="cantidad_niños"></select>');
    const button = $('<div class="col-sm-2 col-xs-12 text-center"><button class="btn-cotizar">COTIZAR</button></div>');


      divDestino.append(labelDestino);
      divDestino.append(inputDestino);
      destinoDiv.append(divDestino);
      destinoDiv.append(correo);

      divDateOrigin.append(labelOrigin);
      divDateOrigin.append(inputOrigin);
      dateDiv1.append(divDateOrigin);

      divDateRetorno.append(labelRetorno);
      divDateRetorno.append(inputRetorno);
      dateDiv2.append(divDateRetorno);

      adultsDiv.append(adults);
      pasajerosDiv1.append(adultsDiv);
      childrenDiv.append(children);
      pasajerosDiv2.append(childrenDiv);

      Option(adults);
      Option(children);

      form.append(dateDiv1);
      form.append(arrow);
      form.append(dateDiv2);
      form.append(destinoDiv);
      form.append(pasajerosDiv1);
      form.append(pasajerosDiv2);
      form.append(button);
      div.append(form);

			jQuery.each(Object.keys(objetoDatos),(i,val)=>{
          form.find('.input-consult').eq(i).val(objetoDatos[val]);
			})

			form.on("submit",function(e){
 		 		e.preventDefault();
				state.page = pag;
				jQuery.each(form.children(),(i,val)=>{
					let attr = form.find('.input-consult').eq(i).attr('id');
            state.cotizacion[attr] = $('.input-consult').eq(i).val();
				});
        // console.log(state.cotizacion);
				const objSerialized = JSON.stringify(state.cotizacion);
					localStorage.setItem("cliente",objSerialized);
					postPlanes(objSerialized,updated);
			})
			$('body').css({"background":"none"});
			$('body').removeClass("container");
		return div;
	}
