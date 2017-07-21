"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.pagina) {
    case null:
                wrapper.append(Welcome(updated));
				
      break;	

	 case 1:
            wrapper.append(Planes(updated));
			 wrapper.append(DetallePlanes(updated));
      break; 
	

   }

  root.append(wrapper);

}

const updated = function(){
  render(root);
}

const state = {
  pagina: null,
  cotizacion:{},
  planes:null


}



$( _ => {

  const root = $(".root");
  render(root);
 

});
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


	 })



	//div.children().eq(i).append(`<p>${val.caracteristicas}</p>`


/*
		console.log(val.tipo_plan);
		console.log(val.precio_plan);
*/

	})

	
		




	
		
		//$('.planes').eq(i).append('')




	return div;


}

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
				form.children().eq(i).val(objetoDatos[val]);
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
					postPlanes(objSerialized,update);
			})
			
		return form;
	}
"use strict";

const postPlanes = (objecto, updated) => {

	 $.ajax({
            	url: 'https://testsoat.interseguro.com.pe/talentfestapi/cotizacion',
            	method: 'POST',
            	contentType: 'application/json',
            	data: objecto,
            	success: function(response) {
                	//console.log(response);
						state.pagina = 1;
				 	const pag =JSON.stringify(state.pagina);
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
