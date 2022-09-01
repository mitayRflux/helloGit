//alert('Hello Users!');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
//console.log(downBtn);
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount-1)*100}vh`;

upBtn.addEventListener('click',function(){
changeSlide('up');
});

downBtn.addEventListener('click',function(){
  changeSlide('down');
});

function changeSlide(direction){
  if(direction===0){
   activeSlideIndex++;
   if(activeSlideIndex===slidesCount){
     activeSlideIndex=0;
   }
  }else if(direction ==='down'){
    activeSlideIndex--;
    if(activeSlideIndex < 0){
      activeSlideIndex = slidesCount-1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = 
  `translateY(-${activeSlideIndex*height}px)`;

  sidebar.style.transform = 
  `translateY(${activeSlideIndex*height}px)`;

}



