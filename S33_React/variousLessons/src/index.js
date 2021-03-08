// 394, 395 (change it to an ul)

// import react
/*const React = require('react');
const ReactDOM = require('react-dom');*/
// 394 the new way is import
import React from 'react';
import ReactDOM from 'react-dom';
// 401 import
import App401 from './components/App401';
// 410
import App410 from './components/App410';
import App413 from './components/App413';
import emojipedia from './emojipedia';
import App417 from './components/App417';
import App418 from './components/App418';
import App420 from './components/App420';
import App421 from './components/App421';
import App422 from './components/App422';
import App424 from './components/App424';
import App427 from './components/App427';
import App428 from './components/App428';
import App429 from './components/App429';
import App430 from './components/App430';
import App431 from './components/App431';
import App432 from './components/App432';

// 394 render function
// 394 ReactDOM.render({what to show}, {where to show}, {optional: callback when})
// 394 it just accept one element, but we can embebed many
// 394, 395
ReactDOM.render(
	<div>
		<h1>Instructions about food</h1>
		<ul>
			<li>Buy food</li>
			<li>Cook food</li>
			<li>Eat food</li>
		</ul>
	</div>,
	document.querySelector('#root')
);

/*// the previous line is the same as
let h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.querySelector('#root').appendChild(h1);*/

// 396 Javascript expressions
const myName = 'Javier';
const myLastName = 'García';
ReactDOM.render(
	<div>
		<h1>My name is {`${myName} ${myLastName}`}</h1>
	</div>,
	document.querySelector('#root396')
);

// 397 Javascript expressions challenge
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

ReactDOM.render(
	<div>
		<p>Lesson 397</p>
		<p>Created by {`${myName} ${myLastName}`}</p>
		<p>Copyright {`${new Date().getFullYear()}`}</p>
	</div>,
	document.querySelector('#root397')
);

// 398 styles. The properway is adding className
ReactDOM.render(
	<div>
		<p className="bg-red">Lesson 398</p>
		<div className="container398">
			<img src="https://www.sustainweb.org/resources/images/fruit_veg/Apple_handover.jpg" alt="img" />
			<img
				src="https://thumbor.thedailymeal.com/JHLjjfAnRXkO_O2W0JoOl_XvXdI=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/story/MAIN-skillsperfect-istock_thinkstock.jpg"
				alt="img"
			/>
			<img
				src="https://cdn.massagemag.com/wordpress/wp-content/uploads/womaneatingsalad-1024x683.jpg"
				alt="img"
			/>
		</div>
	</div>,
	document.querySelector('#root398')
);

// 399 inline styling
let customStyle = {
	color: 'purple',
	backgroundColor: 'yellow',
	fontSize: '24px'
};
ReactDOM.render(
	<div>
		<p style={{ color: 'blue' }}>Lesson 399</p>
		<p style={customStyle}>Lesson 399</p>
	</div>,
	document.querySelector('#root399')
);

// 400 challenge
let salutation = '';
let hourNow = new Date().getHours();
console.log(hourNow);
if (hourNow < 12) {
	salutation = 'Good Morning';
	customStyle = {
		color: 'red'
	};
} else if (hourNow < 18) {
	salutation = 'Good Afternoon';
	customStyle = {
		color: 'green'
	};
} else {
	salutation = 'Good Night';
	customStyle = {
		color: 'blue'
	};
}

ReactDOM.render(
	<div>
		<p style={{ color: 'blue' }}>Lesson 400</p>
		<p style={customStyle}> {salutation}</p>
	</div>,
	document.querySelector('#root400')
);

// 401 moved to Heading.jsx
// function Heading(){
//   return <h1>Lesson 401</h1>
// }

ReactDOM.render(
	<div>
		<App401 />
	</div>,
	document.querySelector('#root401')
);

// 409 and 410

// 410 Practice props
//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

ReactDOM.render(<App410 />, document.querySelector('#root410'));

// 413
ReactDOM.render(<App413 />, document.querySelector('#root413'));

// 414
const numbers = [ 3, 56, 2, 48, 5 ];

//Map -Create a new array by doing something with each item in an array
console.log('**********************413******************');
numbers.map((number) => console.log(number));

//Filter - Create a new array by keeping the items that return true.
const filteredNum = numbers.filter((num) => num > 10);
console.log(filteredNum);

//Reduce - Accumulate a value by doing something to each item in an array.
const reducedNum = numbers.reduce((acc, num) => acc + num);
console.log(reducedNum);

//Find - find the first item that matches from an array.
let foundNum = numbers.find((num) => num > 10);
console.log(foundNum);

//FindIndex - find the index of the first item that matches.
let foundIndex = numbers.findIndex((num) => num > 10);
console.log(foundIndex);

console.log(emojipedia);

let mappedEmojipedia = emojipedia.map((emoji) => emoji.meaning.slice(0, 100));

console.log(mappedEmojipedia);

// 415 arrow functions

ReactDOM.render(<App417 />, document.querySelector('#root417'));
ReactDOM.render(<App418 />, document.querySelector('#root418'));
ReactDOM.render(<App420 />, document.querySelector('#root420'));
ReactDOM.render(<App421 />, document.querySelector('#root421'));
ReactDOM.render(<App422 />, document.querySelector('#root422'));
ReactDOM.render(<App424 />, document.querySelector('#root424'));
ReactDOM.render(<App427 />, document.querySelector('#root427'));
ReactDOM.render(<App428 />, document.querySelector('#root428'));
ReactDOM.render(<App429 />, document.querySelector('#root429'));
ReactDOM.render(<App430 />, document.querySelector('#root430'));
ReactDOM.render(<App431 />, document.querySelector('#root431'));
ReactDOM.render(<App432 />, document.querySelector('#root432'));
