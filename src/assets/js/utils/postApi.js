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
