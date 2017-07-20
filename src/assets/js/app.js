"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.page) {
    case null:
                wrapper.append(Formulario(updated));
      break;

  }


  root.append(wrapper);

}


const state = {
  page:null,
}
const updated = function(){
  render(root);
}


$( _ => {

  const root = $(".root");
  render(root);




});
