import React from 'react';
import { Link, IndexLink } from 'react-router';

const Skill = props => (
  <div className="panel panel-warning">
	<div className="panel-heading">
    <h3>
		<span className="glyphicon glyphicon-wrench"></span>
		<font>技能</font>
	</h3>
	</div>
	<div className="panel-body">
    <ul>
		{props.skill.map(
			(item, i) =>
				<div className="col-xs-12 col-md-4" key={i}>
				<div className="bs-callout bs-callout-info fix-height-200">
					<b className="panel-title-l1" key={item.name}>{item.name}</b>
					<ol key={item.list}>
						{item.list.map((l,i2) =>
							<li key={i2}>{l}</li>
						)}
					</ol>
					</div>
				</div>
			)
		}
    </ul>
	</div>
  </div>
);

export default Skill;