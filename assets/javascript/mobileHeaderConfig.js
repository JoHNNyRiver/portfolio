/*
============================ Description ======================================
* Aqui estou removendo a tag video que se encontra na tag head no arquivo index
* e adicionando a tag image quando a tela estiver menor ou igual a 500px
===============================================================================
*/

var header 		= document.querySelector('header');
var video 	    = document.querySelector('video');
var elementHead = document.querySelector('#title-head');
var corpo  		= document.body.offsetWidth;


document.body.onload = resizeble;

var image    = new Image();
image.src    = 'assets/images/wall-mobile.jpg';
image.width  = window.innerWidth;
image.height = 385;


function resizeble(){
	if(corpo <= 500){
		video.remove();
		elementHead.style.marginTop = '90px';
		header.appendChild(image);
	}
};