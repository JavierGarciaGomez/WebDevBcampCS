import React, { useState } from 'react';

function App() {
	const [ headingText, setHeadingText ] = useState('Hello');
	const [ isMouseOver, setMouseOver ] = useState(false);

	function handleClick() {
		setHeadingText(name);
	}

	function handleMouseOut() {
		console.log('Mouse out');
		setMouseOver(false);
	}

	function handleMouseOver() {
		console.log('Mouse over');
		setMouseOver(true);
	}

	const [ name, setName ] = useState('');

	function handleChange(event) {
		setName(event.target.value);
	}

	return (
		<div className="container">
			<h1>Hello {headingText}gg</h1>
			<input onChange={handleChange} type="text" placeholder="What's your name?" />
			<button
				style={isMouseOver ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}
				onClick={handleClick}
				onMouseOut={handleMouseOut}
				onMouseOver={handleMouseOver}
			>
				Submit
			</button>
		</div>
	);
}

export default App;
