var mobile_menu = document.querySelector(".page-header__main-menu");
var menu_btn = document.querySelector(".page-header__menu-btn");

var modal_open_link = document.querySelector(".link-btn__modal-open-link");
var modal = document.querySelector(".modal-add");
var modal_overlay = document.querySelector(".modal-add__overlay");
var product_buy = document.querySelectorAll(".catalog__add-link");

if (mobile_menu.classList.contains("page-header__main-menu--nojs")) {
    mobile_menu.classList.remove("page-header__main-menu--nojs");
    menu_btn.classList.remove("page-header__menu-btn--nojs");
    menu_btn.classList.add("page-header__menu-btn--open");
};
menu_btn.addEventListener("click", function(event) {
  event.preventDefault();
      mobile_menu.classList.toggle("page-header__main-menu--open");
      menu_btn.classList.toggle("page-header__menu-btn--close");
      menu_btn.classList.toggle("page-header__menu-btn--open");
});

if (modal_open_link) {
    modal_open_link.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-add--show");
  });
};
modal_overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-add--show");
});

for (var i = 0; i < product_buy.length; i++) {
    product_buy[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (modal) {
            modal.classList.add("modal-add--show");
        }
    });
}
