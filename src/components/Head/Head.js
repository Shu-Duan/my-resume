import React from 'react';

const Head = props => (
  <div>
    <h1>基本資料</h1>
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
);

export default Head;