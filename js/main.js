var Thumbnails = document.getElementsByClassName('thumbnail');

for (let i = 0; i < Thumbnails.length; i++) {
    Thumbnails[i].addEventListener("click", function () {
        document.getElementById('radio' + (i + 1)).checked = true;
        for (let i = 0; i < Thumbnails.length; i++) {
            Thumbnails[i].classList.remove('Thumbnail-active');
        }
        Thumbnails[i].classList.add('Thumbnail-active');
    });
}

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 4000);

// for (let i = 0; i < 6; i++) {   
//     if (document.getElementById('radio' + (i+1)).checked) {
//         counter = i+1;     
//     }   
// }

// toRight and toLeft button listGame

var GameListLeftBtn = document.getElementById('left-btn-gamelist');
var GameListRightBtn = document.getElementById('right-btn-gamelist');
var GameList = document.getElementById('game-list');

GameListRightBtn.addEventListener('click', function(){
    GameList.classList.add('margin-left-100');
});

GameListLeftBtn.addEventListener('click', function(){
    GameList.classList.remove('margin-left-100');
});

var GameListLeftBtn2 = document.getElementById('left-btn-gamelist2');
var GameListRightBtn2 = document.getElementById('right-btn-gamelist2');
var GameList2 = document.getElementById('game-list2');

GameListRightBtn2.addEventListener('click', function(){
    GameList2.classList.add('margin-left-100');
});

GameListLeftBtn2.addEventListener('click', function(){
    GameList2.classList.remove('margin-left-100');
});


//Scroll to top button
let scrollBtn = document.getElementById("totopBtn");

function topFunction() {
    document.documentElement.scrollTop = 0;
  }

