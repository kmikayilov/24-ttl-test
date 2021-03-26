import React from 'react';
import './Info.scss';

const Info = (props) => {
    return (
        <div className="company_info">
			<div className="col">{props.text1}</div>
			<div className="col">{props.text2}</div>
			{props.text3 && props.link ? <div className="col">{props.text3} <a href="#">{props.link}</a> </div> : props.text3 ? <div className="col">{props.text3}</div> : null}
		</div>
    );
}

export default (Info);