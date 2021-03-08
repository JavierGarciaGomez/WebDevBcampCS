import React, { useState } from 'react';

function App() {
	// value inside useState is the initial state
	const [ count, setCount ] = useState(0);

	// destructuring
	const [ red, green, blue ] = [ 9, 132, 227 ];
	console.log(red, green, blue);

	function increase() {
		setCount(count + 1);
	}

	function decrease() {
		setCount(count - 1);
	}

	return (
		<div className="container420">
			<h1>{count}</h1>
			<button onClick={increase}>+</button>
			<button onClick={decrease}>-</button>
		</div>
	);
}

export default App;
