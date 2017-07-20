"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.window) {
    case null:
              wrapper.append(Header());
			  wrapper.append(sectionNews());
			  wrapper.append(sectionWorld());
			  wrapper.append(sectionTech());
			  wrapper.append(sectionEdu());
			  wrapper.append(sectionOpinion());
			  wrapper.append(Footer());
      break;
   
}


  root.append(wrapper);

}


const state = {
  window:null,
  noticiasPortada:null
 
}


$( _ => {

  const root = $(".root");
  render(root);
  state.doRender = render.bind(null,root);




});