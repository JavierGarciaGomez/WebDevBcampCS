import React from 'react';
import animals from '../data';
import cars from '../practice';

console.log(animals);
const [ cat, dog ] = animals;
console.log(cat);

// getting properties from the object
const { name, sound } = cat;
// changing the variable name
const { name: catName, sound: catSound } = cat;
console.log(catSound, catName, name, sound, dog);

const [ tesla, honda ] = cars;

const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

const { coloursByPopularity: [ hondaTopColour ] } = honda;
const { coloursByPopularity: [ teslaTopColour ] } = tesla;

function App() {
	return (
		<table>
			<thead>
				<tr>
					<th>Brand</th>
					<th>Top Speed</th>
					<th>Top Color</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{tesla.model}</td>
					<td>{teslaTopSpeed}</td>
					<td>{teslaTopColour}</td>
				</tr>
				<tr>
					<td>{honda.model}</td>
					<td>{hondaTopSpeed}</td>
					<td>{hondaTopColour}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default App;

/* <table>
<tr>
	<th>Brand</th>
	<th>Top Speed</th>
	
</tr>
<tr>
	<td>{tesla.model}</td>
	<td>{teslaTopSpeed}</td>
	<td>{teslaTopColour}</td>
</tr>
<tr>
	<td>{honda.model}</td>
	<td>{hondaTopSpeed}</td>
	<td>{hondaTopColour}</td>
</tr>
</table> */
