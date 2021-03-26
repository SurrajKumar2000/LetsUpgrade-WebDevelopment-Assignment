//To fetch by Tag Name

var ele = document.getElementByTagName('h1');
console.log(ele[0]);
ele[0].innerText='Good Afternoon';

//To fetch by Class Name

var elem = document.getElementByClassName('op');
console.log(elem[0]);
elem[0].innerText='Good';

//To fetch by Id

var eleme = document.getElementById('dd');
console.log(eleme[0]);
eleme[0].innerText='Hi , How are you?';
