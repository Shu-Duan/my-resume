import React from 'react';
import { Link, IndexLink } from 'react-router';

const Edu = props => (
  <div>
    <h1>學歷</h1>
    <ul>
		{props.edu.map(
			(item, i) =>
				<div key={i}>
					<li>
						<b key={item.school}>{item.school}</b>
						<font key={item.period}>{item.period}</font>
					</li>
					<font key={item.desc}>{item.desc}</font>
				</div>
			)
		}
    </ul>
  </div>
);

export default Edu;