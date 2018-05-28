import React from 'react';
import { Link, IndexLink } from 'react-router';

const Skill = props => (
  <div>
    <h1>技能</h1>
    <ul>
		{props.skill.map(
			(item, i) =>
				<div className="col-xs-12 col-sm-6 col-md-4" key={i}>
					<b key={item.name}>{item.name}</b>
					<ol key={item.list}>
						{item.list.map((l,i2) =>
							<li key={i2}>{l}</li>
						)}
					</ol>
				</div>
			)
		}
    </ul>
  </div>
);

export default Skill;