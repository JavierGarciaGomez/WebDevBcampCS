console.log("************************141. Introduction to DOM*****************");
console.log(document)
console.log("first eleement child")
console.log(document.firstElementChild)
console.log("first element child - first element child")
console.log(document.firstElementChild.firstElementChild)
console.log("first element child - last element child - first element child")
console.log(document.firstElementChild.lastElementChild.firstElementChild)
let heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Changed in JavaScript";
heading.style.color = 'green';

// QUERY
var checkboxClick = document.querySelector("input");
checkboxClick.click();

/* Our objects can have properties or methods */

// Challenge change the third element
document.querySelector('ul').lastElementChild.innerHTML = "CHALLENGE DONE";

console.log("************************143. Selecting elements with JavaScript*****************");
let tagNames = document.getElementsByTagName("li");
console.log(tagNames);
let className = document.getElementsByClassName("btn");
console.log(className);
let byId = document.getElementById("title");
console.log(byId);

console.log('Selecting again but with query selector: element, class or id');
tagNames = document.querySelector('li');
className = document.querySelector('.btn')
byId = document.querySelector('#title')

console.log(tagNames);
console.log(className);
console.log(byId);

console.log('Combining selector: li a');
let combinedSelector = document.querySelector("li a");
console.log(combinedSelector);

console.log('QUERYSELECTORALL');
let selectedAll = document.querySelectorAll("ul li");
console.log(selectedAll);

// Challenge
combinedSelector.style.color = 'cyan';
combinedSelector.style.backgroundColor = 'purple';
combinedSelector.style.border = '5px blue solid';

console.log("************************144. Manipulating and changing styles *****************");

// Challenge
className.style.backgroundColor = 'cyan';

console.log("************************145. Separation of concerns *****************");
console.log('class list');
let btnClassList = document.querySelector('button').classList;
console.log(btnClassList);
// adding a class to a class list
btnClassList.add('giant-button')
btnClassList.remove('giant-button')
btnClassList.toggle('giant-button') // if is in remove it, otherwise remove it
btnClassList.toggle('giant-button')

console.log("************************146. Text manipulation *****************");
// inner html vs textContent. First gives the inner html even if it has inside. But text content just the text
// So with innerHtml  you can add tags on the run

console.log("************************147. Attributes *****************");
console.log(document.querySelector('li a').attributes);
document.querySelector('li a').setAttribute('href', 'http://hospitalveterinariopeninsular.com/Mine');
document.querySelector('li a').setAttribute('target', '_blank');
console.log(document.querySelector('li a').attributes);