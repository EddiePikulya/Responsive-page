var nav = document.querySelector('nav');
var navUl = document.querySelector('.navigation')
nav.onclick = function() {
	navUl.classList.toggle('active');
}