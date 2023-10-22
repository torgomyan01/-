const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();


const menuContainer = document.querySelector('.menu-container');
const menuItemMobile = document.querySelector('.menu-items-mobile');
const mobileMenBoard = document.querySelector('.mobile-menu-board');
const menuFlags = document.querySelector('.menu-flags')

mobileMenBoard.addEventListener('click', function (){
    if(this.classList.contains(active)){
        this.classList.remove(active);
        menuItemMobile.classList.remove(active);
        menuContainer.classList.remove(active);
        menuFlags.classList.remove('active')
        document.body.style.overflow = null;
    } else {
        this.classList.add(active);
        menuItemMobile.classList.add(active);
        menuContainer.classList.add(active);
        menuFlags.classList.add('active')
        document.body.style.overflow = 'hidden';
    }
})

const menu = document.getElementById('menu');


window.addEventListener('scroll', (e)=>{
    if(window.pageYOffset >= 15){
        menu.classList.add(active);
    } else {
        menu.classList.remove(active);
    }
})

const evt = document.createEvent("MouseEvents");
evt.initMouseEvent("scroll", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
