// Exercise 51
const image = document.getElementById("unicorn");
const heading = document.getElementById("mainheading");

// 244

// this for change all the images
const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    //img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

// this for change all the images with the class square
const squareImages = document.getElementsByClassName('square');
for (let img of squareImages) {
    // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}


///////////////////////////////////////////////
// L245 Query selector
//////////////////////////////////////////////
const links = document.querySelectorAll('p a');

console.log("245 Printing all of the links")
for (let link of links) {
    console.log(link.href)
}


///////////////////////////////////////////////
// L246 innerHTML, textContent, innerText
//////////////////////////////////////////////

// textContent returns everything without the tags
// innerText doesnt return the html
// innerHTML entirity of the html

console.log("246 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
let innerText = document.querySelector('p').innerText
console.log(innerText)
document.querySelector('p').innerText = "LOL"
document.querySelector('p').innerText = innerText

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// Exercise 53
document.querySelector('span').innerText = 'Disgusting'

///////////////////////////////////////////////
// L247 Attributes
//////////////////////////////////////////////
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX 247 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
document.querySelector('#banner').id = 'whoops'
document.querySelector('#whoops').id = 'banner'

const firstLink = document.querySelector('a')
console.log("Printing the attribute" + firstLink.getAttribute('href'))
firstLink.setAttribute('href', '#Further_reading')

// Exercise 54
const ex54 = document.querySelector('img')
ex54.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg');
ex54.setAttribute('alt', 'chicken')

///////////////////////////////////////////////
// L248 Changis styles
//////////////////////////////////////////////

const h1 = document.querySelector('h1');
h1.style.color = 'green';


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


// Exercise 55
const d = document.getElementById("container")

d.style.textAlign = "center";

d.querySelector("img").style.width = "150px";

d.querySelector("img").style.borderRadius = "50%";

///////////////////////////////////////////////
// L249 ClassList
//////////////////////////////////////////////
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX 249 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")// 
h1.classList.add('purple');
h1.classList.add('border');
h1.classList.remove('border');