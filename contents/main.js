const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

/*  
ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});
*/


document.getElementById('js-hamburger').addEventListener('click',function() {
  document.getElementById('js-nav').classList.toggle('active');
 });

 document.getElementById('rink').addEventListener('click',function() {
  document.getElementById('js-nav').classList.remove('active');
 });

