
let i = 0;
for(let li of carousel.querySelectorAll('li')) {
  console.log(li)
  console.log(carousel.querySelectorAll('li'));
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0"></span>`);
  i++;
  console.log(li);
}
let liSelector = carousel.querySelectorAll('li');


let width = document.querySelector('.myDiv').offsetWidth

let count = 1; 

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; 
carousel.querySelector('.prev').onclick = function() {
  
  position += width * count;
  
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};


carousel.querySelector('.next').onclick = function() {
  let clickNext =+ 1;
  if(clickNext < liSelector.length){
     position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
 
    list.style.marginLeft = position + 'px';
  }
 
console.log(clickNext);

};