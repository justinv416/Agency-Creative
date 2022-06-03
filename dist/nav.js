"use strict";
var Nav;
(function (Nav) {
    function closeNav() {
        var _a, _b;
        (_a = document.querySelector('.navigation__mobile')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hideNav');
        (_b = document.querySelector('.fa-bars')) === null || _b === void 0 ? void 0 : _b.classList.toggle('fa-times');
    }
    function triggerNav() {
        var _a;
        (_a = document.querySelector('.fa-bars')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', closeNav);
    }
    function changeNavColor() {
        window.addEventListener('scroll', function () {
            const navMain = this.document.querySelector('.navigation');
            if (this.scrollY > 0) {
                navMain === null || navMain === void 0 ? void 0 : navMain.classList.add('navigation__color');
            }
            else {
                navMain === null || navMain === void 0 ? void 0 : navMain.classList.remove('navigation__color');
            }
        });
    }
    function init() {
        changeNavColor();
        triggerNav();
    }
    Nav.init = init;
})(Nav || (Nav = {}));
Nav.init();
