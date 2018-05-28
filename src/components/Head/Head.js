import React from 'react';

const Head = props => (
  <div className="panel panel-info">
    <div className="panel-heading">
		<h3>
			<span className="glyphicon glyphicon-file"></span>
			<font>基本資料</font>
		</h3>
	</div>
	<div className="panel-body">
	<div className="bs-callout bs-callout-info">
    <ul>
		{props.head.map(
			(item, i) =>
				<li key={i}>
					<b key={item.title}>{item.title}:</b>
					<font key={item.val}>{item.val}</font>
				</li>
			)
		}
    </ul>
	</div>
	</div>
  </div>
);

export default Head;