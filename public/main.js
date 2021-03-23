let next = document.getElementById('next');
next.addEventListener('click', slideNext);

let prev = document.getElementById('prev');
prev.addEventListener('click', slidePrev);

let slideSrc = ["assets/img/slide/slide1.jpg", "assets/img/slide/slide2.jpg", "assets/img/slide/slide3.jpg", "assets/img/slide/slide4.jpg"];
let slidenum = 0;
function slideNext(){
    let imgCurrent = document.getElementById('imgSlide');
    if (slidenum === slideSrc.length - 1){
        slidenum = 0;
    }else {
        slidenum++;
    }
    imgCurrent.src = slideSrc[slidenum];
}

function slidePrev(){
    let imgCurrent = document.getElementById('imgSlide');
    if (slidenum === 0){
        slidenum = slideSrc.length - 1;
    }else {
        slidenum--;
    }
    imgCurrent.src = slideSrc[slidenum];
}