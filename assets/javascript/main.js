var nav  = document.querySelector('nav');


window.addEventListener('scroll', function(event){
	if (document.body.scrollTop > 568){nav.style.opacity = 1; nav.style.transition = 'all .2s linear';}
	if(document.body.scrollTop < 568)nav.style.opacity = 0;
}, false);

