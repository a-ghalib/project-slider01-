
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let perv = document.getElementById('perv');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let couniItem = items.length;
let itemActive = 0;
next.onclick = function(){
    itemActive = itemActive + 1;
    if (itemActive >= couniItem){
        itemActive = 0;
    }
    showSlider();
};
prev.onclick = function(){
    itemActive = itemActive -1;
    if (itemActive < 0) {
        itemActive = couniItem - 1;
    }
    showSlider();
};
let refreshInterval = setInterval(() => {
    next.click();
},3000);
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld =document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
};
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

