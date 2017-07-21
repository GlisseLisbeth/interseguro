'use strict';

const validarLetra = (e)=>{
  if(e.which> 47 && e.which<58){
    e.preventDefault();
  }
}

const reRender = (container) => {
    container.empty();
    state.place.forEach((item) => {

    container.append(placeItem(item, container));
  });
}
const placeItem = (item, container) => {
  const itemDiv = $('<div class=""></div>');
  const img = $('<img src="assets/images/localization.jpg">');
  const p = $('<p class="title">'+ item +'</p>');

  itemDiv.append(img);
  itemDiv.append(p);

  itemDiv.on("click", (e) => {
    e.preventDefault();
    $('#destino').val(item);
    container.empty();
    container.hide();

  });
  container.show();
  return itemDiv;
}
