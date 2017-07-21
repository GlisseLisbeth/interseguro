'use strict';
 const Header = (updated)=> {

   const nav = $('<nav class="navbar"></nav>');
   const logo = $('<div class="navbar-left pull-left"><img src="assets/images/logo_interseguro.png" alt="logo interseguro"><span class="omnes-medium hidden-xs">SEGURO DE VIAJES</span></div>');
   const menuDiv = $('<div class="navbar-right omnes-regular hidden-xs"></div>');
   const beneficios = $('<a href="#" class="link-beneficios">Beneficios</a>');
   const ofertas = $('<a href="#" class="link-ofertas">Ofertas por destinos</a>');
   const divHamburger = $('<div class="navbar-right pull-right omnes-regular visible-xs dropdown"></div>');
   const boton = $('<button type="button" class="btn menu visible-xs dropdown-toggle" data-toggle="dropdown"></button>');
   const botonMenu = $('<small>MENU</small><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>');
   const lista = $('<ul class="dropdown-menu"></ul>');
   const listaBene = $('<li></li>');
   const linkBene = $('<a href="#" class="link-beneficios">Beneficios</a>');
   const listaOferta = $('<li></li>');
   const linkOferta = $('<a href="#" class="link-ofertas">Ofertas por destino</a>');

   menuDiv.append(beneficios);
   menuDiv.append(ofertas);
   boton.append(botonMenu);
   divHamburger.append(boton);
   listaBene.append(linkBene);
   listaOferta.append(linkOferta);
   lista.append(listaBene);
   lista.append(listaOferta);
   divHamburger.append(lista);

   nav.append(logo);
   nav.append(menuDiv);
   nav.append(divHamburger);

   $('.link-ofertas').on("click", function(e){
     e.preventDefault();
     state.page = 2;
     if(state.action==0){

     }
     updated();
   });
   $('.link-beneficios').on("click", function(e){
     e.preventDefault();
     state.page = 3;
     if(state.action==0){

     }
     updated();
   });
   return nav;
 }
