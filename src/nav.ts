namespace Nav {
    function closeNav() {
        document.querySelector('.navigation__mobile')?.classList.toggle('hideNav')
        document.querySelector('.fa-bars')?.classList.toggle('fa-times')
    }

    function triggerNav() {
        document.querySelector('.fa-bars')?.addEventListener('click', closeNav)
    }

    function changeNavColor() {
        window.addEventListener('scroll', function(){
            const navMain = this.document.querySelector('.navigation');
            if(this.scrollY > 0) {
                navMain?.classList.add('navigation__color')
            } else {
                navMain?.classList.remove('navigation__color')
            }
        })
    }

    export function init() {
        changeNavColor()
        triggerNav()
    }
}

Nav.init()