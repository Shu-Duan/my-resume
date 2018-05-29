import React from 'react';
import { Link, IndexLink } from 'react-router';

const Exp = props => (
  <div className="panel panel-warning">
	<div className="panel-heading">
    <h3>
		<span className="glyphicon glyphicon-briefcase"></span>
		<font>經驗</font>
	</h3>
	</div>
	<div className="panel-body">
    <ul>
		{props.exp.map(
			(item, i) =>
				<div key={i}>
					<li>
						<b key={item.company} className="panel-title-l1">{item.company}</b>
						<font className="panel-title-l1" key={item.period}>{item.period}</font>
					</li>
					{item.years.map((year,i2) =>
						<div key={i2} className="bs-callout bs-callout-info">
							<b className="panel-title-l2" key={year.year}>{year.year}</b>
							<font className="panel-title-l2" key={year.achieve}>{year.achieve}</font>
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
  </div>
);

export default Exp;