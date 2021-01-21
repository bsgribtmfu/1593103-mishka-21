var siteNav = document.querySelector('.site-navigation');
var userNav = document.querySelector('.user-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');

window.onload = function () {
  userNav.classList.add('user-navigation--closed');
  siteNav.classList.add('site-navigation--closed');
  navToggle.classList.add('main-navigation__toggle--closed');
}

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-navigation__toggle--closed')) {
    navToggle.classList.remove('main-navigation__toggle--closed');
    navToggle.classList.add('main-navigation__toggle--opened');

    siteNav.classList.remove('site-navigation--closed');
    siteNav.classList.add('site-navigation--opened');

    userNav.classList.remove('user-navigation--closed');
    userNav.classList.add('user-navigation--opened');
  } else {
    navToggle.classList.add('main-navigation__toggle--closed');
    navToggle.classList.remove('main-navigation__toggle--opened');

    siteNav.classList.add('site-navigation--closed');
    siteNav.classList.remove('site-navigation--opened');

    userNav.classList.add('user-navigation--closed');
    userNav.classList.remove('user-navigation--opened');
  }
});
