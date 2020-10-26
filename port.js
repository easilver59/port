// Good scroll logic
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)

});

//toggle menu
function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');

}
//header logic
function toggle() {
  var sec = document.getElementById('sec');
  var nav = document.getElementById('navigation');
  sec.classList.toggle('active')
  nav.classList.toggle('active')
}


//Scroll to Top Button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
});







