// 410, 411
import React from 'react';
import Avatar from './Avatar411';
import Detail from './Detail411';

function Card410(props) {
	return (
		<div className="card">
			<div className="top">
				{/* <p>{props.id}</p> */}
				<h2 className="name">{props.name}</h2>
				<Avatar imgSrc={props.imgSrc} />
			</div>
			<div className="bottom">
				<Detail data={props.tel} />
				<Detail data={props.email} />
			</div>
		</div>
	);
}

export default Card410;
