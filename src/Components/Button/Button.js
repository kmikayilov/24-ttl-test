import React from 'react';
import './Button.scss';
import vector from '../../assets/icons/Vector.svg';


const Button  =  (props) => { 
	return (
		<div className="learn-more">
			<div className="text">Узнать больше об {props.company}</div>
			<div className="icon"><img src={vector} alt="vector" /></div>
		</div>
	);
}

export default (Button);
