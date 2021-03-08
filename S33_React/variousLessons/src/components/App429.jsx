import React from 'react';

function App() {
	const citrus = [ 'Lime', 'Lemon', 'Orange' ];
	const fruits = [ 'Apple', 'Banana', 'Peach' ];
	const citrusAndFruits = [ ...citrus, ...fruits ];
	console.log(citrusAndFruits);
	return <div className="container" />;
}

export default App;
