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
