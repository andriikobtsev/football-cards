import React from 'react';

const style = {
	overflowY: 'scroll', 
	height: '500px'
}

const Scroll = (props) => {
	return (
		<div style={style}>
			{props.children}
		</div>
	);
};

export default Scroll;