import React from 'react';
import { Link, IndexLink } from 'react-router';

const Edu = props => (
  <div className="panel panel-info">
	<div className="panel-heading">
    <h3>
		<span className="glyphicon glyphicon-leaf"></span>
		<font>學歷</font>
	</h3>
	</div>
	<div className="panel-body">
	
    <ul>
		{props.edu.map(
			(item, i) =>
				<div className="bs-callout bs-callout-info" key={i}>
					<li>
						<b className="panel-title-l1" key={item.school}>{item.school}</b>
						<font className="panel-title-l1" key={item.period}>{item.period}</font>
					</li>
					<font key={item.desc}>{item.desc}</font>
				</div>
			)
		}
    </ul>
	</div>
  </div>
);

export default Edu;