'use strict';
 const Header = ()=> {

   const header = $('<header id="header"></header>');
   const nav = $('<nav class="navbar"></nav>');
   const logo = $('<div class="navbar-left pull-left"><img src="assets/images/logo_interseguro.png" alt="logo interseguro"><span class="omnes-medium hidden-xs">SEGURO DE VIAJES</span></div>');
   const menuDiv = $('<div class="navbar-right omnes-regular hidden-xs"></div>');
   const beneficios = $('<a href="#">Beneficios</a>');
   const ofertas = $('<a href="#">Ofertas por destinos</a>');
   const divHamburger = $('<div class="navbar-right pull-right omnes-regular visible-xs"></div>');
   const boton = $('<button type="button" class="btn menu visible-xs"></button>');
   const botonMenu = $('<small>MENU</small><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>');

   menuDiv.append(beneficios);
   menuDiv.append(ofertas);
   boton.append(botonMenu);
   divHamburger.append(boton)
   nav.append(logo);
   nav.append(menuDiv);
   nav.append(divHamburger);

   header.append(nav);
   return header;
 }
