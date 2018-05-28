import React from 'react';
import { Link, IndexLink } from 'react-router';

const Exp = props => (
  <div>
    <h1>經歷</h1>
    <ul>
		{props.exp.map(
			(item, i) =>
				<div key={i}>
					<li>
						<b key={item.company}>{item.company}</b>
						<font key={item.period}>{item.period}</font>
					</li>
					{item.years.map((year,i2) =>
						<div key={i2}>
							<b key={year.year}>{year.year}</b>
							<font key={year.achieve}>{year.achieve}</font>
							<ol>
								{year.proj.map((proj,i3) =>
									<li key={i3}>
										<font key={proj.name}>{proj.name}</font>
										<font>-</font>
										<font key={proj.resp}>{proj.resp}</font>
									</li>
								)}
							</ol>
						</div>
					)}
				</div>
			)
		}
    </ul>
  </div>
);

export default Exp;