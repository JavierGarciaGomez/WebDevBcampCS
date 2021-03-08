import React from 'react';
import Form from './Form418';

var userIsRegistered = false;

function App() {
	return (
		<div className="container">
			<Form buttonText={userIsRegistered ? 'Login' : 'Register'} />
		</div>
	);
}

export default App;
