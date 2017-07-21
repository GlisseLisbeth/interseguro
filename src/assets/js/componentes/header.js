"use strict";
const Welcome = (update) => {
	
	const form = $('<form></form>');

	const stDestino = $('<input type="text" id="destino"></input>');
	const lbDestino = $('<label for="destino">Destino:</label>');

	const stFechaPartida = $('<input type="text" id="fecha_partida"></input>');
	const lbFechaPartida = $('<label for="fecha_partida">Fecha Partida:</label>');

	const stFechaRetorno = $('<input type="text" id="fecha_retorno"></input>');
	const lbFechaRetorno = $('<label for="fecha_retorno">Fecha Retorno:</label>');

	const stCorreo = $('<input type="text" id="correo"></input>');
	const lbCorreo = $('<label for="correo">Correo:</label>');

	const numNinos = $('<input type="number" id="cantidad_adultos"></input>');
	const lbNinos = $('<label for="cantidad_adultos">Cant Niños:</label>');

	const numAduls = $('<input type="number" id="cantidad_niños"></input>');
	const lbAduls = $('<label for="cantidad_niños">Cant Adultos:</label>');

	const enviar = $('<button type="submit">Cotizar</button>');



	form.append(lbDestino);
	form.append(stDestino);
	form.append(lbFechaPartida);
	form.append(stFechaPartida);
	form.append(lbFechaRetorno);
	form.append(stFechaRetorno);
	form.append(lbCorreo);
	form.append(stCorreo);
	form.append(lbNinos);
	form.append(numNinos);
	form.append(lbAduls);
	form.append(numAduls);
	form.append(enviar);

	form.on("submit",function(e){
 		 e.preventDefault();
		jQuery.each(form.children(),(i,val)=>{
			//console.log(form.find('label').eq(i).attr('for'));
			let attr = form.find('input').eq(i).attr('id');
			state.cotizacion[attr] = $('input').eq(i).val();
			//console.log($('input').eq(i).val());
		});

		//console.log(state.cotizacion);
		const objSerialized = JSON.stringify(state.cotizacion);
		localStorage.setItem("cliente",objSerialized);
		//console.log(objSerialized);
		
		postPlanes(objSerialized,update);
		 
	}); 
		 
		  


 return form;

	}

