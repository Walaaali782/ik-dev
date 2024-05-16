const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});


//get slider item array 
var sliderimage = Array.from(document.querySelectorAll('.slider-container .box'))

// get number od slides
var sildercounter = sliderimage.length;

// set current
var curentslide = 1;

//slide n e s
var slidenumber = document.getElementById('slide-number');

var prev = document.getElementById('prev');
var next = document.getElementById('next');

next.onclick = nextslide;
prev.onclick = prevslide;


//creat main ul li 

var indicatorselement = document.createElement('ul');
indicatorselement.setAttribute('id','indicator-ul');

for (let index = 1; index <= sildercounter ; index++) {
    var indicatorsitem = document.createElement('li');

    indicatorsitem.setAttribute('data-index', index );

    indicatorsitem.appendChild(document.createTextNode(""));

    indicatorselement.appendChild(indicatorsitem);
}
document.getElementById('indicators').appendChild(indicatorselement);

// creat the new ul 
var  indicatorseul = document.getElementById('indicator-ul');


//get   indicators slider item ul  
var  indicatorspoltes = Array.from(document.querySelectorAll('#indicator-ul li'))

for (let index = 0; index < indicatorspoltes.length ; index++) {
    
    indicatorspoltes[index].onclick = function () {
        curentslide = parseInt(this.getAttribute('data-index'));
        check();
    }
}

check();

function nextslide(){

if(next.classList.contains('diabled')){
    return false

}else{
    curentslide++;

    check();
}
}
function prevslide(){
    if(prev.classList.contains('diabled')){
        return false
    
    }else{
        curentslide--;
    
        check();
    }
    
}
function check() {

    slidenumber.textContent = '0' + (curentslide) + ">>>>>>>>" +'0' + (sildercounter) ;

    removeallactice();

    //SET ACTIVE CLASS of image 
    sliderimage[curentslide - 1].classList.add('active')

     //SET ACTIVE CLASS of number 
     indicatorseul.children[curentslide - 1].classList.add('active');

// check currentslide 
if(curentslide == 1){
    prev.classList.add('diabled');
}else{
    prev.classList.remove('diabled');
}

if(curentslide == sildercounter){
    next.classList.add('diabled');
}else{
    next.classList.remove('diabled');
}
}
indicatorspoltes.forEach((span, index) => {  
    span.addEventListener("click", () => {
      sliderimage[index].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
//remove all actice
function removeallactice(){
    sliderimage.forEach(function (img) {
        img.classList.remove('active');
    })
    indicatorspoltes.forEach(function (polt) {
        polt.classList.remove('active');
    })
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





// start slider of contentrr 

var sliderbox = Array.from(document.querySelectorAll('.contentrr .menu-content .box'));

// get number od slides
var sliderboxlenght = sliderbox.length;

// set current
var sliderboxcount = 1;


var prevfv = document.querySelector('#prevfv i');
var nextfv = document.querySelector('#nextfv i');

nextfv.onclick = nextfvslide;
prevfv.onclick = prevfvslide;



for (let index = 0; index < sliderbox.length ; index++) {
    
    sliderbox[index].onclick = function () {
        sliderboxcount = parseInt(this.getAttribute('data-index'));
        checkcontent();
    }
}

checkcontent();

function nextfvslide(){

    if(nextfv.classList.contains('disslide')){
        return false;
    
    }else{
        sliderboxcount++;
        checkcontent();
    }
    }

function prevfvslide(){
        if(prevfv.classList.contains('disslide')){
            return false;
        
        }else{
            sliderboxcount--;
        
            checkcontent();
        }
        
    }
    function checkcontent() {
    
    
        removeallacticeslider();
    
        //SET ACTIVE CLASS of image 
        sliderbox[sliderboxcount - 1].classList.add('boody');
    
         //SET ACTIVE CLASS of number 

    // check currentslide 
    if(sliderboxcount == 1){
        prevfv.classList.add('disslide');
    }else{
        prevfv.classList.remove('disslide');
    }
    
    if(sliderboxcount == sliderboxlenght){
        nextfv.classList.add('disslide');
    }else{
        nextfv.classList.remove('disslide');
    }
    }
    
    //remove all actice
    function removeallacticeslider(){
        sliderbox.forEach(function (img) {
            img.classList.remove('boody');
        })
    }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const isTure =[33,2,8];

// console.log(isTure.sort()); 


// isTure[6] = 9
// console.log(isTure[5]);

// function say(){
//     console.log(isTure);
//     console.log(bbm);

//     var isTure = 'jjjj';
//     var bbm = 'bbm';
// }

// say();


// for (let index = 0; index < 3; index++) {
//     setTimeout(() => {
//         console.log(index);
//     }, 1);
    
// }

// for (var index = 0; index < 3; index++) {
//     setTimeout(() => {
//         console.log(index);
//     }, 1);
    
// }







//get slider item array 
var slidertech = Array.from(document.querySelectorAll('.tech .imeges .box'));

// get number od slides
var sildertechcounter = slidertech.length;

// set current
var currenttech = 1;


var prevtech = document.getElementById('prevtech');
var nexttech = document.getElementById('nexttech');

nexttech.onclick = nexttechvs;
prevtech.onclick = prevtechvs;



// creat the new ul 
var  skillul = document.getElementById('skillul');


//get   indicators slider item ul  
var  skillulli = Array.from(document.querySelectorAll('#skillul li'))

for (let index = 0; index < skillulli.length ; index++) {
    
    skillulli[index].onclick = function () {
        currenttech = parseInt(this.getAttribute('data-index'));
        checktech();
    }
}

checktech();

function nexttechvs(){

if(nexttech.classList.contains('diabled')){
    return false

}else{
    currenttech++;

    checktech();
}
}
function prevtechvs(){
    if(prevtech.classList.contains('diabled')){
        return false
    
    }else{
        currenttech--;
    
        checktech();
    }
    
}
function checktech() {

   
    removeallacticetech();

    //SET ACTIVE CLASS of image 
    slidertech[currenttech - 1].classList.add('active')

     //SET ACTIVE CLASS of number 
     skillul.children[currenttech - 1].classList.add('active');

// check currentslide 
if(currenttech == 1){
    prevtech.classList.add('diabled');
}else{
    prevtech.classList.remove('diabled');
}

if(currenttech == sildertechcounter){
    nexttech.classList.add('diabled');
}else{
    nexttech.classList.remove('diabled');
}
}

//remove all actice
function removeallacticetech(){
    slidertech.forEach(function (img) {
        img.classList.remove('active');
    })
    skillulli.forEach(function (polt) {
        polt.classList.remove('active');
    })
}

























