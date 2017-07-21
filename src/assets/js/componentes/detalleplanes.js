"use strict";
const DetallePlanes = () => {
	const div = $('<div class="detalle">Planes</div>');
	const container = $('<div class="container"></div>');
	const row = $('<div class="row"></div>');

	div.append(container);
	container.append(row);




	row.append('<div class="caracteristicas col-xs-6 col-md-6"></div>');
	row.find('.caracteristicas').append('<ul class="beneficios"></ul>');
	jQuery.each(state.planes[0].caracteristicas,(i,val)=>{
		row.find('ul').append(`<li>${val.caracteristica}</li>`);
	})
	jQuery.each(state.planes,(i,val)=>{
		
		
		row.append(`<div class="planes col-xs-3 col-md-3"></div>`);
		row.find('.planes').eq(i).append(`<h1>${val.tipo_plan}</h1>`);
		row.find('h1').eq(i).append(`<span>${val.precio_plan}</span>`);
			jQuery.each(val.caracteristicas,(a,b)=>{
				row.find('.planes').eq(i).append(`<div class="icon-container"><div class="icon-${b.aplica}"></div></div>`);


			})

			



		})




	return div;


}
