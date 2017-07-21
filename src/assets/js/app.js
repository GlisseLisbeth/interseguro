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