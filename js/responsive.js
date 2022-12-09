var closeSearchButton = document.getElementById('search-close-button');
var searchIcon = document.getElementById('search-icon');
var searchLayout = document.getElementById('search-layout-responsive');
var overLay = document.getElementById('over-lay');
var tabSelectBtn = document.getElementById('tab-select-button');
var tabSelectLayout = document.getElementById('tab-select-layout');

searchIcon.addEventListener('click', function(){
    searchLayout.classList.add('display-flex');
    tabSelectLayout.classList.remove('display-flex');
    overLay.classList.add('display-flex');
});

closeSearchButton.addEventListener('click', function(){
    searchLayout.classList.remove('display-flex');
    overLay.classList.remove('display-flex');
});

overLay.addEventListener('click', function(){
    searchLayout.classList.remove('display-flex');
    tabSelectLayout.classList.remove('display-flex');
    overLay.classList.remove('display-flex');
});

tabSelectBtn.addEventListener('click', function(){
    tabSelectLayout.classList.add('display-flex');
    overLay.classList.add('display-flex');
});

var menuButton = document.getElementById('menu-button');
var menuLayout = document.getElementById('menu-layout');

menuButton.addEventListener('click', function(){
    if(menuLayout.style.transform == 'translateX(100%)')
    {
        menuLayout.style.transform = 'translateX(0px)';
        overLay.classList.add('display-flex');
        overLay.classList.add('topzero');
    }
    else 
    {
        menuLayout.style.transform = 'translateX(100%)';
        overLay.classList.remove('display-flex');
        overLay.classList.remove('topzero');
    }     
});

overLay.addEventListener('click', function(){
    menuLayout.style.transform = 'translateX(100%)';
    overLay.classList.remove('display-flex');
    overLay.classList.remove('topzero');
});