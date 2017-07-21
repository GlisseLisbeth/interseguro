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
  planes: null
}
const updated = function(){
  render(root);
}


$( _ => {

  const root = $(".root");
  render(root);




});
