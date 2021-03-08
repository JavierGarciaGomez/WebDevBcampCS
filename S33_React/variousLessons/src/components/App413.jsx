import React from 'react';
import entries from '../emojipedia';
import Entry from '../components/Entry413';

function App() {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>

			<dl className="dictionary">
				{entries.map((entry) => (
					<Entry key={entry.id} emoji={entry.emoji} name={entry.name} meaning={entry.meaning} />
				))};
			</dl>
		</div>
	);
}

export default App;
