
let peces= document.getElementById('peces');
let ballena= document.getElementById('ballena');
let text= document.getElementById('text');
let btn= document.getElementById('btn');
let cueva= document.getElementById('cueva');
let crab= document.getElementById('crab');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    peces.style.left = value * 0.03 + 'px';
    ballena.style.top = value * 0.25 + 'px';
    crab.style.top= value * 0.09 + 'px';
   
})




let calcScrollValue = () => {
    let scrollProgress=document.getElementById('progress');
    let progressValue=document.getElementById('progress-value');

    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100) / calcHeight);

    if(pos>100){
        scrollProgress.style.display="grid";
    } else {
        scrollProgress.style.display="none";
    }
    scrollProgress.addEventListener("click", () => {document.documentElement.scrollTop = 0;});

    scrollProgress.style.background = `conic-gradient (#7950f2 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};


window.onscroll=calcScrollValue;
window.onload=calcScrollValue;




var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter >3){
        counter=1;
    }
},5000);






const dropdown = document.querySelector('.drop-down');
const list = document.querySelector('.list');
const selected = document.querySelector('.selected');
const selectedImg = document.querySelector('.selectedImg');

dropdown.addEventListener('click', () =>{
    list.classList.toggle('show');
})

list.addEventListener('click', (e)=>{
    const img= e.target.querySelector('img');
    const text= e.target.querySelector('.text')

    selectedImg.src=img.src;
    selected.innerHTML=text.innerHTML;

})