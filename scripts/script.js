//tab for FAQ
const tabBtn = document.querySelectorAll(".faq-left-nav-btn");
const tabsItems = document.querySelectorAll(".tabs-item")

tabBtn.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener("click", function(){
        let = currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        
        if(!currentBtn.classList.contains('active')){
            tabBtn.forEach(function(item){
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }

       
    });
}

document.querySelector(".faq-left-nav-btn").click();


// animation slider
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function openbox(box){
    display = document.getElementById('box').style.display;

    if(display=='none'){
       document.getElementById('box').style.display='block';
    }else{
       document.getElementById('box').style.display='none';
    }
}
function openbox2(box2){
    display = document.getElementById('box2').style.display;

    if(display=='none'){
       document.getElementById('box2').style.display='block';
    }else{
       document.getElementById('box2').style.display='none';
    }
}
function openbox3(box3){
    display = document.getElementById('box3').style.display;

    if(display=='none'){
       document.getElementById('box3').style.display='block';
    }else{
       document.getElementById('box3').style.display='none';
    }
}
function openbox4(box4){
    display = document.getElementById('box4').style.display;

    if(display=='none'){
       document.getElementById('box4').style.display='block';
    }else{
       document.getElementById('box4').style.display='none';
    }
}

function openbox5(box5){
    display = document.getElementById('box5').style.display;

    if(display=='none'){
       document.getElementById('box5').style.display='block';
    }else{
       document.getElementById('box5').style.display='none';
    }
}
function openbox6(box6){
    display = document.getElementById('box6').style.display;

    if(display=='none'){
       document.getElementById('box6').style.display='block';
    }else{
       document.getElementById('box6').style.display='none';
    }
}
function openbox7(box7){
    display = document.getElementById('box7').style.display;

    if(display=='none'){
       document.getElementById('box7').style.display='block';
    }else{
       document.getElementById('box7').style.display='none';
    }
}
function openbox8(box8){
    display = document.getElementById('box8').style.display;

    if(display=='none'){
       document.getElementById('box8').style.display='block';
    }else{
       document.getElementById('box8').style.display='none';
    }
}
function openbox9(box9){
    display = document.getElementById('box9').style.display;

    if(display=='none'){
       document.getElementById('box9').style.display='block';
    }else{
       document.getElementById('box9').style.display='none';
    }
}
function openbox10(box10){
    display = document.getElementById('box10').style.display;

    if(display=='none'){
       document.getElementById('box10').style.display='block';
    }else{
       document.getElementById('box10').style.display='none';
    }
}
function openbox11(box11){
    display = document.getElementById('box11').style.display;

    if(display=='none'){
       document.getElementById('box11').style.display='block';
    }else{
       document.getElementById('box11').style.display='none';
    }
}

function openbox12(box12){
    display = document.getElementById('box12').style.display;

    if(display=='none'){
       document.getElementById('box12').style.display='block';
    }else{
       document.getElementById('box12').style.display='none';
    }
}
function openbox13(box13){
    display = document.getElementById('box13').style.display;

    if(display=='none'){
       document.getElementById('box13').style.display='block';
    }else{
       document.getElementById('box13').style.display='none';
    }
}

function openbox14(box14){
    display = document.getElementById('box14').style.display;

    if(display=='none'){
       document.getElementById('box14').style.display='block';
    }else{
       document.getElementById('box14').style.display='none';
    }
}
function openbox15(box15){
    display = document.getElementById('box15').style.display;

    if(display=='none'){
       document.getElementById('box15').style.display='block';
    }else{
       document.getElementById('box15').style.display='none';
    }
}function openbox16(box16){
    display = document.getElementById('box16').style.display;

    if(display=='none'){
       document.getElementById('box16').style.display='block';
    }else{
       document.getElementById('box16').style.display='none';
    }
}
