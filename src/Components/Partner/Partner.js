import React from 'react';
import './Partner.scss';


const Partner  =  (props) => { 
	return (
		<div className="company_partners">
			<div className="partner_info">
			  <div className="info">{props.info}</div>
			  <div className="name">{props.name}</div>
			  <div className="partner">{props.jobtitle}</div>
			</div>
			<div className="partner_photo"><img src={props.photo} /></div>
		</div>
	);
}

export default (Partner);
