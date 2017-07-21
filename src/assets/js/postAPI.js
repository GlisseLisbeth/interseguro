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
