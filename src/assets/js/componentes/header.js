"use strict";
const Header = () => {
	
	const header = $('<header></header>');
	 header.empty();


(()=>{

	header.append($('<div class="container"></div>'));
	header.children().empty();
	header.children().append($('<div class="column"></div>'));
	header.find('.column').append($('<div class="header"></div>'));
	header.children().append(menuMobile());
	header.find('.column').find('.header').append('<img class="header__logo" src="assets/images/logoicon.png">');
	header.find('.column').find('.header').append('<img class="header__menu" src="assets/images/menu.png">');
	header.find('.column').find('.header').find('.header__menu').on('click',()=>{
		$('.menu').slideToggle();
	})
	

	
})();

	
	


 return header;
	
}
