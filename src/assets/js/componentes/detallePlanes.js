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
